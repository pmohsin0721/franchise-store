import React from 'react';
import './SignIn.css';

const SignIn = () => {
    return(
        <>
        <div className="login-form">
    <form action="/examples/actions/confirmation.php" method="post" >
        <h2 className="text-center">Login</h2>   
        <div className="form-group has-error">
        	<input type="text" className="form-control" name="username" placeholder="Username" required="required" />
        </div>
		<div className="form-group">
            <input type="password" className="form-control" name="password" placeholder="Password" required="required" />
        </div>        
        <div className="form-group">
            <button type="submit" className="btn btn-primary btn-lg btn-block">Sign in</button>
        </div>
    </form>
    <p className="text-center small">Don't have an account? <a href="/sign-up">Sign up here!</a></p>
</div>
</>
    );
}


export default SignIn;
