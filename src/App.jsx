import './App.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Main from './layout/Main'
import HomePage from './Pages/HomePage'
import AllProduct from './Pages/AllProduct'
import ProductDetail from './Pages/ProductDetail'
import NotFound from './Pages/NotFound'
import CartPage from './Pages/CartPage'
import SearchPage from './component/SearchPage'


function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/'element={<Main/>}>
      <Route index element={<HomePage/>}/>
      <Route path='/products' element={<AllProduct/>}/>
      <Route path='/detail/:id' element={<ProductDetail/>}/>
      <Route path='*' element={<NotFound/>}/>
      <Route path='/cart' element={<CartPage/>}/>
      {/* <Route path='/search' element={<SearchPage/>}/> */}
    </Route>
    
  ));


  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
