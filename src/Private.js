import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Popular } from "./pages/Popular"
import { Navbar } from "./Header/Navbar"
import { Top } from "./pages/Top"
import { TopMovies } from "./pages/Movies"
import { Show } from "./pages/Show"
import { PopularPosts } from "./pages/PopularPosts/PopularPosts"

export const Private = () => {
  return(
<>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Popular" element={<Popular/>}/>
      <Route path="/Popular/:id" element={<PopularPosts/>}/>
      <Route path="/Top" element={<Top/>}/>
      <Route path="/TopMovies" element={<TopMovies/>}/>
      <Route path="/Show" element={<Show/>}/>
    </Routes>
</>
  )
}      