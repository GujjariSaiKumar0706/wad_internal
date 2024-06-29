import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Layout from '../src/components/Layout';
import Home from '../src/components/home/Home';
import Login from '../src/components/login/Login'
import Register from '../src/components/register/Register';
import Kart from '../src/components/kart/Kart';
import Catalog from '../src/components/catalog/Catalog';
import Contact from '../src/components/contact/Contact'
import About from '../src/components/about/About';
import './App.css';

function App() {  
  let router = createBrowserRouter([
  {
    path:'',
    element:<Layout/>,
    children:[
      {
        path:'',
        element:<Home/>
      },
      {
        path:'login',
        element:<Login/>
      },
      {
        path:'register',
        element:<Register/>
      },
      {
        path:'contact',
        element:<Contact/>
      },
      {
        path:'kart',
        element:<Kart/>
      },
      {
        path:'catalog',
        element:<Catalog/>
      },
      {
        path:'about',
        element:<About/>
      }
      
        
      
    ]
  }
])
return (
  <div className="App">
     <RouterProvider router={router} />
  </div>
);
}

export default App;
