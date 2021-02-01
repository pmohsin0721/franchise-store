import React from "react";
import './Signup.css';


const SignUp = () => {
    return(
        <>
        <div class="signup-form">
    <form action="/examples/actions/confirmation.php" method="post">
		<h2>Sign Up</h2>
		<p>Please fill in this form to create an account!</p>
		<hr />
        <div class="form-group">
			
				<input type="text" class="form-two-control" name="name" placeholder="Name" required="required" />
				{/* <div class="col"><input type="text" class="form-control" name="last_name" placeholder="Last Name" required="required" /></div> */}
	     	
        </div>
        <div class="form-group">
        	<input type="email" class="form-two-control" name="email" placeholder="Email" required="required" />
        </div>
		<div class="form-group">
            <input type="password" class="form-two-control" name="password" placeholder="Password" required="required" />
        </div>
		<div class="form-group">
            <input type="password" class="form-two-control" name="confirm_password" placeholder="Confirm Password" required="required" />
        </div>        
        {/* <div class="form-group">
			<label class="form-check-label"><input type="checkbox" required="required" /> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
		</div> */}
		<div class="form-group">
            <button type="submit" class="btn btn-primary btn-lg">Sign Up</button>
        </div>
    </form>
	<div class="hint-text">Already have an account? <a href="/sign-in">Login here</a></div>
</div>
        </>
    );
}

export default SignUp;