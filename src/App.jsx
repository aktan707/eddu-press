import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout.jsx";
import { headerMenu } from "./routes/routes.jsx";
import LoginPage from "./pages/login-page/LoginPage.jsx";
import "./index.css";
import error from './assets/error.png';
import RegisterPage from "./pages/login-page/RegisterPage.jsx";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout />}>
                    {headerMenu.map((item) => (
                        <Route key={item.name} path={item.path} element={item.element} />
                    ))}

                    <Route
                        path="*"
                        element={
                            <div className="container text-[36px] font-bold p-[30px]">
                                Error
                                <a href="/" className="underline text-[blue] ml-[15px]">Home</a>
                                <img src={error} alt="Error" />
                            </div>
                        }
                    />
                </Route>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Routes>
        </div>
    );
};

export default App;
