import { Route, Routes } from "react-router"
import Root from "./Layout.jsx/Root"
import Home from "./pages/Home"


function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Root></Root>}>
          <Route index element={<Home></Home>}></Route>
         
        
        </Route>
        {/* <Route path="*" element={<ErrorPage></ErrorPage>}></Route> */}
      </Routes>
    </>
  )
}

export default App
