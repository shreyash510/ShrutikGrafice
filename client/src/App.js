import './App.css';
import Admin from './components/Pages/AdminSide/Admin';
import Navbar from './components/Pages/Navbar';
import RouterMenu from './components/RouterMenu/RouterMenu';
import Footer from './components/Pages/Footer';
import { useLocation } from 'react-router-dom';
import DesignCategoriesTag from './components/Pages/DesignCategoriesTag';

function App() {
  const location = useLocation();
  const AdminPath =location.pathname
  return (
    <>
      
      {
        (AdminPath === '/admin'|| AdminPath === '/admin/create-items'  || 
          AdminPath === '/admin/orders') ? <Admin/>  :<Navbar />
      }   
      {
        (AdminPath === '/templates'|| AdminPath === '/templates/birthday' || AdminPath === "/templates/festivel"
         || AdminPath === "/templates/logo"
         || AdminPath === "/templates/invitation"
         || AdminPath === "/templates/marrage"
         || AdminPath === "/templates/menu"
         || AdminPath === "/templates/business"
         || AdminPath === "/templates/election"
        )? <DesignCategoriesTag/>: null
      }
      <RouterMenu/>
      {
        (AdminPath === '/admin'|| AdminPath === '/admin/create-items'  ||
         AdminPath === '/admin/orders'|| AdminPath === '/register'||
          AdminPath === '/login'|| AdminPath === '/forgot') ? null  :< Footer/>
      } 
      {/* < Footer/> */}
    </>
  );
}

export default App;
