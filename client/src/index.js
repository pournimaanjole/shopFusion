
import ReactDOM from 'react-dom/client';
import './index.css';
 import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
 import Login from './views/Login/Login';
 import Signup from './views/Signup/Signup';
 import Order from './views/Order/Order';
 import Home from './views/Home/Home';
 import Buynow from './views/Buynow/Buynow';


const root = ReactDOM.createRoot(document.getElementById('root'));
const router= createBrowserRouter([
  {path:"/",
element:<Home/>
},
{
path:"/login",
element:<Login/>
},
{
path:"/signup" ,
element:<Signup/>
},
{
  path:'/order',
  element:<Order/>
},
{
  path:'/women',
  element:<women/>
},
{
  path:'/men',
  element:<men/>
},{
  path:'/kids',
  element:<kids/>
},
{
  path:'/buynow/:id',
  element:<Buynow/>
}
])
root.render(
 <RouterProvider router={router} />
);

