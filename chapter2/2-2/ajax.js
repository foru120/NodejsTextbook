var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() { // 요청에 대한 콜백
    if (xhr.readyState === xhr.DONE) { // 요청이 완료되면
        if (xhr.status === 200 || xhr.status === 201) { // 응답 코드가 200이나 201이면
            console.log(xhr.responseText); // 서버에서 보내주는 값
        } else {
            console.log(xhr.responseText);
        }
    }
};
xhr.open('GET', 'https://www.zerocho.com/api/get'); // 메서드와 주소 설정
xhr.send();

// onreadystatechange 대신 onload 와 onerror 로 성공과 실패를 구별해도 된다.
var xhr = new XMLHttpRequest();
xhr.onload = function() {
    if (xhr.status === 200 || xhr.status === 201) {
        console.log(xhr.responseText);
    }
};
xhr.onerror = function() {
    console.log(xhr.responseText);
};
xhr.open('GET', 'https://https://www.zerocho.com/api/get');
xhr.send();

// 서버로 데이터를 같이 보내는 POST 요청의 경우
var xhr = new XMLHttpRequest();
var data = {
    name: 'zerocho',
    birth: 1994
};
xhr.onreadystatechange = function() {
    if (xhr.readyState === xhr.DONE) {
        if (xhr.status === 200 || xhr.status === 201) {
            console.log(xhr.responseText);
        } else {
            console.log(xhr.responseText);
        }
    }
};
xhr.open('POST', 'https://www.zerocho.com/api/post/json');
xhr.setRequestHeader('Content-Type', 'application/json'); // 콘텐츠 타입을 json 으로
xhr.send(JSON.stringify(data)); // 데이터를 추가해 전송
