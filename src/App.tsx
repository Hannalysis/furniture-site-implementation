
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../src/Layout/Layout"
import { Home } from "./pages/Home/Home"
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
