
import ReactDOM from 'react-dom/client';
import './index.css';
 import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
 import Login from './views/Login/Login';
 import Signup from './views/Signup/Signup';


const root = ReactDOM.createRoot(document.getElementById('root'));
const router= createBrowserRouter([
  {path:"/",
element:<h1>home</h1>},
{
path:"/login",
element:<Login/>
},
{
path:"/signup" ,
element:<Signup/>
}
])
root.render(
 <RouterProvider router={router} />
);

