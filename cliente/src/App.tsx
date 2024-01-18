import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import TareasPage from "./pages/Tareas"
import TareasCreate from "./pages/TareasFormCreate"
import TareasEdit from "./pages/TareasEditar"
import { Toaster } from "react-hot-toast"

function App() {
 
  return (
    <BrowserRouter>
      <div className="container mx-auto my-2">
      <Routes>
          <Route path="/" element={<Navigate to={'/view'}></Navigate>}></Route>
          <Route path="/view" element={<TareasPage></TareasPage>}></Route>
          <Route path="/create" element= {<TareasCreate></TareasCreate>}></Route>
          <Route path="/editar/:id" element={<TareasEdit></TareasEdit>} />
      </Routes>
      <Toaster></Toaster>
      </div>
      
    </BrowserRouter>
  )
}

export default App
