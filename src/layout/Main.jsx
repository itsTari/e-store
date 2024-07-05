import { Outlet } from "react-router-dom"
import Navbar from "../component/Navbar"
import Footer from "../component/Footer"
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Main(){
    return(
        <>
        <Navbar/>
        <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition: Bounce
        />
        <Outlet/>
        <Footer/>
        </>
    )
}
export default Main