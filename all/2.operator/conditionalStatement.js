// Switch문
let day = 4;

switch(day){
    case 1:
        day = '월요일';
        break;
    case 2:
        day = '화요일';
        break;
    case 3:
        day = '수요일';
        break;
    case 4:
        day = '목요일';
        break;
    case 5:
        day = '금요일';
        break;
    case 6:
        day = '토요일';
        break;
    default:
        day = '그런 요일 없어요';
}
// console.log(day);


let condition = 'soso';
let text;

switch(condition){
    case 'good':
    case 'soso':
        text = '좋음';
        break;
    case 'bad':
        text = '나쁨';
        break;
}
console.log(text);