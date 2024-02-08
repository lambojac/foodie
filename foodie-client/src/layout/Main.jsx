import { Outlet } from "react-router-dom"

const Main = () => {
  return (
    <div>
      <nav>nav bar</nav>
      <Outlet/>
      <footer>Footer</footer>
    </div>
  )
}

export default Main
