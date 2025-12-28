import { Route, Routes } from "react-router"
import AppFooter from "./components/AppFooter"
import AppLogin from "./components/AppLogin"
import AppNav from "./components/AppNav"

function App() {

  return (
    <>
      <AppNav />

      <main>
        <Routes>
          <Route path="/login" element={<AppLogin />} />
        </Routes>
      </main>

      <AppFooter />
    </>
  )
}

export default App
