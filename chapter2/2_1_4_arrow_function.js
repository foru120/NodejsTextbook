function add1(x, y) {
    return x + y;
}

const add2 = (x, y) => {
    return x + y
};

const add3 = (x, y) => x + y;
const add4 = (x, y) => (x + y);

function not1(x) {
    return !x;
}

const not2 = x => !x;

// this 바인드 방식 (기존)
var relationship1 = {
    name: 'zero', 
    friends: ['nero', 'hero', 'xero'],
    logFriends: function() {
        var that = this;
        this.friends.forEach(function(friend) {
            console.log(that.name, friend);
        });
    }
};
relationship1.logFriends();

// this 바인드 방식 (ES6)
var relationship2 = {
    name: 'zero',
    friends: ['nero', 'hero', 'xero'],
    logFriends() {
        this.friends.forEach(friend => {
            console.log(this.name, friend);
        });
    }
};
relationship2.logFriends();