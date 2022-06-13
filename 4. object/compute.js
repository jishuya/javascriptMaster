const student = {
    name: 'jisu',
    age: 24
}


// 조회하기
function getValue (obj, key) {
    return obj[key]
}

console.log(getValue(student, 'name'));


// 추가하기 
function addValue(obj, key, val){
    return obj[key] = val;
}

addValue(student, 'greade', 20);

console.log(student)


// 삭제하기  
function delValue(obj, key){
    return delete obj[key]
}

delValue(student, 'age');
console.log(student)