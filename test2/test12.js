// 한줄짜리 주석을 작성
// WHY HOW

/**
 * 
 * @param {*} a 숫자1 
 * @param {*} b 숫자2
 * @returns a, b를 더한 값
 */
function add(a, b){
    return a + b; 
};


function printMembers(members){
    try {
        for (const member of members){
            console.log(member);
        }
    } catch(err){
        console.error(err);
        alert(`${err.name}이 발생했습니다.`)
    }
}

function readFile(path) {
    throw new Error('경로 모르겠어요');
    return '파일의 내용';
};

function processFile(path){
    // const content = readFile(path);
    // const result = 'hi' + content;
    // return result;
    let content;
    try {
        content = readFile(path);
    } catch (err) {
        console.log(err.name);
        console.log(err.message);
        console.log(err.stack);
        content = '기본내용'
    } finally {
        console.log('22333')
    }
    return content;
};

// const result = processFile('경로');
console.log(result);




