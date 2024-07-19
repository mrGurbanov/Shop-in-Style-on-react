import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {RootLayout, Home, Products} from './pages/import';
import ProductDetail from './pages/ProductDetail';

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<RootLayout/>}>
                <Route index element={<Home/>}/>
                <Route path="products" element={<Products/>}/>
                <Route path="/product/:id" element={<ProductDetail />}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
