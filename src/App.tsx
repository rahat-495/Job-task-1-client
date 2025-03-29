
import { Outlet } from "react-router-dom"

function App() {
  return (
    <main className="bg-[#D2E1E7] w-full min-h-screen inter py-20 px-16">
      <Outlet />
    </main>
  )
}

export default App
