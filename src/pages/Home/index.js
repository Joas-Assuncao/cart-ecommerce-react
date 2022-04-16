import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Header from "../../components/Header";
import Main from "../../components/Main";

export default function Home() {
    return (
        <>
            <ToastContainer />
            <Header />
            <Main />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </>
    )
}