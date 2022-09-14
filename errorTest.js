function readFile(path){
    throw new Error('파일의 경로 찾을 수 없음');
    return path;
}

function processFile(path){
    let content;
    try {
        console.log(1111)
        content = readFile(path);
    } catch (error) {
        console.log(2222)
        console.log(error);
        constent = '기본내용';
    } finally {
        console.log(333)
        console.log('성공이든 실패이든 보여줘')
    }
    return content;
}

const result = processFile('/Downloads/update');
console.log(result)