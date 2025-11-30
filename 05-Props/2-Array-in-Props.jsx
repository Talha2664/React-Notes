// create Component

const Card = (props) => {
  return (
    <div >
        <div className="card">
            <h1>My name is {props.username}</h1>
        </div>
    </div>
  )
}

export default Card