const Navbar = () => {
  return (
    <div>
        <div className="card">
            <h1>Hi my name is talha</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Cumque, itaque suscipit dolore aspernatur eum illum assumenda 
            tempora porro veritatis doloribus ullam quis nobis et, error 
            impedit expedita, neque omnis ea.</p>
        </div>
    </div>
  )
}

export default Navbar

// If we export this we can call same component in different places but the content remains same,
// and by using props we can change its content.