const text  = 'hello';
function fun(){
    console.log(text)
}

fun();

function outer() {
    const x = 0;
    function inner() {
        console.log(`inside inner: ${x}`);
    }
    inner();
}
outer();



function outer2() {
    const x = 0;
    function inner() {
        console.log(`inside inner: ${x}`);
    }
    return inner;
}

const func1 = outer2()
func1();