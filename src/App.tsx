import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Product from './pages/Product';
import FreeTrial from './pages/FreeTrial';
import Login from './pages/Login';
import ListaCategorias from './components/categoria/listacategorias/ListaCategorias';
import FormCategoria from './components/categoria/formcategoria/FormCategoria';
import DeletarCategoria from './components/categoria/deletarcategoria/DeletarCategoria';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 transition-colors">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produto" element={<Product />} />
            <Route path="/teste-gratis" element={<FreeTrial />} />
            <Route path="/login" element={<Login />} />
            <Route path="/categorias" element={<ListaCategorias />} />
            <Route path="/cadastrarcategoria" element={<FormCategoria />} />
            <Route path="/editarcategoria/:id" element={<FormCategoria />} />
            <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;