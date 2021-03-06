const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
require('dotenv').config({path: path.join(__dirname, '.env')});

const pageRouter = require('./routes/page');
const authRouter = require('./routes/auth');
const postRouter = require('./routes/post');
const userRouter = require('./routes/user');
const { sequelize } = require('./models');
const passportConfig = require('./passport');

const app = express();
sequelize.sync();
passportConfig(passport);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.set('port', process.env.PORT || 8001);

if (process.env.NODE_ENV === 'production') {
    app.use(morgan('combined'));
} else {
    app.use(morgan('dev'));
}
app.use(express.static(path.join(__dirname, 'public')));
app.use('/img', express.static(path.join(__dirname, 'uploads')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
const sessionOption = {
    resave: false,  // 요청이 왔을 때 세션에 수정 사항이 생기지 않더라도 세션을 다시 저장할지에 대한 설정
    saveUninitialized: false,  // 세션에 저장할 내역이 없더라도 세션을 저장할지에 대한 설정
    secret: process.env.COOKIE_SECRET,  // 쿠키 전송시 쿠키에 서명을 추가하기 위해 필요한 값
    cookie: {
        httpOnly: true,  // 클라이언트에서 쿠키를 확인하지 못하도록 설정 (true)
        secure: false  // https 가 아닌 환경에서도 사용할 수 있게 설정 (false)
    }
};
if (process.env.NODE_ENV === 'production') {
    sessionOption.proxy = true;  // https 적용을 위해 노드 서버 앞에 다른 서버를 둔 경우 적용
    // sessionOption.cookie.secure = true;  // https 적용이나 로드밸런싱 등을 위해 true 로 적용
}
app.use(session(sessionOption));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use('/', pageRouter);
app.use('/auth', authRouter);
app.use('/post', postRouter);
app.use('/user', userRouter);

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