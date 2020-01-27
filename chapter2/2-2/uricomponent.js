// AJAX 요청을 보낼 때, 'http://localhost:8003/search/노드' 처럼 주소에 한글이 들어가는 경우가 있다.
// 서버 종류에 따라 다르지만, 서버가 한글 주소를 이해하지 못하는 경우가 있는데 이럴 때 window 객체의 메서드인 encodeURIComponent 메서드를 사용한다.

var xhr = XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState === xhr.DONE) {
        if (xhr.status === 200 || xhr.status === 201) {
            console.log(xhr.responseText);
        } else {
            console.error(xhr.responseText);
        }
    }
};
xhr.open('GET', 'https://www.zerocho.com/api/search/' + encodeURIComponent('노드')); // 한글 주소 인코딩 후 전송
xhr.send();