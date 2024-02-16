import { LoginForm } from './LoginForm';

import '../../css/Login.css';

export const Login =  () => {
  
    return (
        <div className="parent-login">
            <div className="login-box">
                <div className="img-login">
                    <div className="col-md-12">
                        <h1>Welcome Back to PMS </h1>
                    </div>
                </div>
                <div className="login-field">
                    <div className="col-md-12">
                        <h1 className='section-title'>Login</h1>
                        <p className='mt-3'>Please Fill up this form to Procced ahead ... </p>
                        <div className="login-form pt-3">
                            <LoginForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}