// If i need each data of component is different and the design remains same thwn i can use PROPS

// Make a Component


// Make it in the Child Component
const Card = (props) => {
  return (
    <div id="parent">
        <div className="card">
            <h1>My name is {props.username}</h1>  {/* Now Props  */}
            <h2>My age is {props.age}</h2>
        </div>
    </div>
  )
}

export default Card


// call it in the App.jsx folder Which is the parent folder

const App = () => {
  return (
    <div>                 
       {/* Write { } to store numbers,variables */}
       
      <Card username ="Talha" age = {23}/> {/* This is a Prop attribute and Property */}

      <Card username ="Yasir" age= {24}></Card> 
      {/* That is the use of Prop Same component With different Properties */}

    </div>
  )
}


