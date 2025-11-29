// <!-- Why we need export? -->
// Because if a component stays inside 1 file, you cannot use it anywhere else.

// <!-- Types of Export -->

// <!-- 1. Default Export -->

function Btn1(){
    return(
        <button>Ckick Me!</button>
    )
}
function Btn2(){
    return(
    <button>Ckick Me!</button>    )
}
export default Btn1;     // Single default export runs perfectly.
// export default btn2;  => if i need to export this btn using default export 
                          // then eroor occurs so to handle this error we use => named export

// <!-- 2. Named Export -->

export function Data1(){
    return(
        <button>HI!</button>
    )
}

//We can export unlimited named exports but Single Named export

// <!--Using default export=>we can only export single component in a file,
// but using named export=> we do multiple -->
