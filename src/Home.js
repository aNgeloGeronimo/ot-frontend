import { Link } from "react-router-dom"

const Home = () => {
  return (
    <header className="header flex">
      <div className="container">
        <div>
          <div className="head-text">
            <h1>A <span className="text-highlight">classic</span> never goes out of style</h1>
            <Link className="btn link" to='/store'>Shop</Link>
          </div>
        </div>
        <div>
          <img src="images\model.png" alt="iamge" />
        </div>
         
         
      </div>
    </header>
  )
}

export default Home