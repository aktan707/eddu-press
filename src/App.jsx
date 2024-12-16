import {Routes, Route} from "react-router-dom";
import Layout from "./layout/Layout.jsx";
import {headerMenu} from "./routes/routes.jsx";
import LoginPage from "./pages/login-page/LoginPage.jsx";
import "./index.css"
import error from './assets/error.png'

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={"/"} element={ <><Layout/></>}>
                    {headerMenu.map(item => {
                        return <Route key = {item.name} path = {item.path} element = {item.element} />
                    })}
                    <Route path={"*"} element={
                        <h1 className={'container text-[36px] font-bold p-[30px]'}> Error
                            <a href="/" className={"underline text-[blue] ml-[15px]"}>Home</a>
                            <img src={error} alt=""/>
                        </h1>}/>
                    <Route path={"/login"} element={<LoginPage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;
