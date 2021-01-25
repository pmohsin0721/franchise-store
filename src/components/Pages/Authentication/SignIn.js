import React from 'react';
import './SignIn.css';

const SignIn = () => {
    return(
        <>
        <div class="login-form">
    <form action="/examples/actions/confirmation.php" method="post" >
        <h2 class="text-center">Login</h2>   
        <div class="form-group has-error">
        	<input type="text" class="form-control" name="username" placeholder="Username" required="required" />
        </div>
		<div class="form-group">
            <input type="password" class="form-control" name="password" placeholder="Password" required="required" />
        </div>        
        <div class="form-group">
            <button type="submit" class="btn btn-primary btn-lg btn-block">Sign in</button>
        </div>
    </form>
    <p class="text-center small">Don't have an account? <a href="/sign-up">Sign up here!</a></p>
</div>
</>
    );
}


export default SignIn;
