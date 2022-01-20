import './App.css';
import Admin from './components/Pages/AdminSide/Admin';
import Navbar from './components/Pages/Navbar';
import RouterMenu from './components/RouterMenu/RouterMenu';
import Footer from './components/Pages/Footer';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const AdminPath =location.pathname
  return (
    <>
      
      {
        (AdminPath === '/admin'|| AdminPath === '/admin/create-items'  || AdminPath === '/admin/orders') ? <Admin/>  :<Navbar />
      }   
      <RouterMenu/>
      {
        (AdminPath === '/admin'|| AdminPath === '/admin/create-items'  || AdminPath === '/admin/orders') ? null  :< Footer/>
      } 
      {/* < Footer/> */}
    </>
  );
}

export default App;
