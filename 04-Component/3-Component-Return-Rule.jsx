// In a React component,You must return only ONE parent element.
// Inside that one parent, you can put as many <h1>, <h2>, <div>, <p> as you want.

// Solution with Div Example
function App() {
  return (
    <div>                // This div shows as a parent in Html 
      <h1>Hello</h1>       
      <h2>Welcome</h2>
    </div>
  );
}

function App() {
  return (
    <h1>Hello</h1>
    // <h2>Welcome</h2>   // if i write this second element the error occurs
  ); // because this component return seperate elements which is wrong
}


// If i Dont want to show div as a parent in html Then i use Fragments

// Solution Without <div>


const Val = () => {
  return (
    <>
    <h1>Hello</h1>
    <h2>Hi</h2>
    </>
    )
}

export default Val


// Fragment (<> </>) is a hidden parent — it does not show in HTML.
