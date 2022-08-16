import { Link } from "react-router-dom"
import styled from "styled-components"


export const Navbar = () => {
  return(
    <nav className="bg-success py-3 d-flex justify-content-between ps-5 pe-3">
     
     <div>
      <Link style={{textDecoration:"none"}} className="navbar-link me-5" to="/">Home</Link>
      <Link style={{textDecoration:"none"}} className="navbar-link me-5" to="/Popular">Popular</Link>
      <Link style={{textDecoration:"none"}} className="navbar-link me-5" to="/Top">Top</Link>
      <Link style={{textDecoration:"none"}} className="navbar-link me-5" to="/TopMovies">Top Movies</Link>
      <Link style={{textDecoration:"none"}} className="navbar-link" to="/Show">Tv Show</Link>
     </div>
      <form>
        <input className="border border-4" type="text" placeholder="Qidirish"/>
      </form>
    </nav>
  )
}
