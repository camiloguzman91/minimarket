import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import Navbar from '../../Components/Navbar'
import CheckOutSideMenu from '../../Components/CheckOutSideMenu'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/minimarket/', element: <Home /> },
    { path: '/minimarket/electronics', element: <Home /> },
    { path: '/minimarket/jewelery', element: <Home /> },
    { path: "/minimarket/men's clothing", element: <Home /> },
    { path: "/minimarket/women's clothing", element: <Home /> },
    { path: '/minimarket/my-account', element: <MyAccount /> },
    { path: '/minimarket/my-order', element: <MyOrder /> },
    { path: '/minimarket/my-orders', element: <MyOrders /> },
    { path: '/minimarket/my-orders/last', element: <MyOrder /> },
    { path: '/minimarket/my-orders/:id', element: <MyOrder /> },
    { path: '/minimarket/sign-in', element: <SignIn /> },
    { path: '/minimarket/*', element: <NotFound /> },
  ])

  return routes
}

const App = () => {

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckOutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
