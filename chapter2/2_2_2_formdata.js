var formData = new FormData();
formData.append('name', 'zerocho');
formData.append('item', 'orange');
formData.append('item', 'melon');
formData.has('item'); // true
formData.has('money'); // false
formData.get('item'); // orange
formData.getAll('item'); // ['orange', 'melon']
formData.append('test', ['hi', 'zero']);
formData.get('test'); // hi, zero
formData.delete('test');
formData.get('test'); // null
formData.set('item', 'apple');
formData.getAll('item'); // ['apple']

// AJAX 로 폼데이터 보내기
var formData = new FormData();
formData.append('name', 'zerocho');
formData.append('birth', 1994);
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState === xhr.DONE) {
        if (xhr.status === 200 || xhr.status === 201) {
            console.log(xhr.responseText);
        } else {
            console.error(xhr.responseText);
        }
    }
};
xhr.open('POST', 'https://www.zerocho.com/api/post/formdata');
xhr.send(formData);