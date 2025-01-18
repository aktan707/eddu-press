import {Link} from 'react-router-dom';
import {eyes} from '../../assets/index.js';
import './loginPage.css';

const RegisterPage = () => {
    return (
        <div className={'container'}>
            <div className={'register mx-auto '}>
                <div className={'flex justify-between'}>
                    <h2>Register</h2>
                    <h2><Link to="/login">Login</Link></h2>
                </div>
                <input className="register-input" type="text" placeholder="Email*"/>
                <input className="register-input" type="text" placeholder="Username*"/>
                <input className="register-input" type="password" placeholder="Password*"/>
                <button className="register-btn2">
                    <img src={eyes} alt="Show Password"/>
                </button>
                <input className="register-input" type="password" placeholder="Confirm Password*"/>
                <button className="register-btn2">
                    <img src={eyes} alt="Show Password"/>
                </button>
                <button className="register-btn">Register</button>
            </div>
        </div>
    );
};

export default RegisterPage;