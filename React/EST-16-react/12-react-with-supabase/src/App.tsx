
import Footer from "./components/Layout/Footer"
import Header from "./components/Layout/Header"
import { routes } from "./router/router"
import RouterProvider from "./router/RouterProvider"

function App() {

  return (
    <div>
      <RouterProvider navigation={<Header/>} routes={routes} />
      <Footer></Footer>
    </div>
  )
}

export default App
