const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
require('dotenv').config({path: path.join(__dirname, '.env')});

const pageRouter = require('./routes/page');
const { sequelize } = require('./models');
const passportConfig = require('./passport');

const app = express();
sequelize.sync();
passportConfig(passport);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.set('port', process.env.PORT || 8001);

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
console.log(process.env.COOKIE_SECRET);
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    resave: false,  // 요청이 왔을 때 세션에 수정 사항이 생기지 않더라도 세션을 다시 저장할지에 대한 설정
    saveUninitialized: false,  // 세션에 저장할 내역이 없더라도 세션을 저장할지에 대한 설정
    secret: process.env.COOKIE_SECRET,  // 쿠키 전송시 쿠키에 서명을 추가하기 위해 필요한 값
    cookie: {  
        httpOnly: true,  // 클라이언트에서 쿠키를 확인하지 못하도록 설정 (true)
        secure: false  // https 가 아닌 환경에서도 사용할 수 있게 설정 (false)
    }
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use('/', pageRouter);

app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});