// 인자로 오브젝트의 컬러를 받아서 컬러 출력해보기. 
// 구조분해할당을 이용하여 어떻게 출력해야할까요?

const prop = {
    name: 'Button',
    styles: {
        size: 20,
        color : 'black',
    },
};



function changeColor( { styles : { color } } ){
    console.log(color);
}
changeColor(prop)