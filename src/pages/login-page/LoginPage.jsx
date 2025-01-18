import { Link } from 'react-router-dom';
import { eyes } from '../../assets/index.js';
import './loginPage.css';

const LoginPage = () => {
    return (
        <div className={'container'}>
            <div className={'login mx-auto '}>
                <div className={'flex justify-between'}>
                    <h2>Login</h2>
                    <h2><Link to="/register">Register</Link></h2>
                </div>
                <input className="login-input" type="text" placeholder="Email or username*" />
                <input className="login-input" type="password" placeholder="Password*" />
                <button className="login-btn2">
                    <img src={eyes} alt="Show Password" />
                </button>
                <div className={'items-center'}>
                    <input className="login-input2" type="checkbox" />
                    <span className="logins">Remember me</span>
                </div>
                <button className="login-btn">Login</button>
                <p>Lost your password?</p>
            </div>
        </div>
    );
};

export default LoginPage;