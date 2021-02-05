import React from "react";
import './Signup.css';


const SignUp = () => {
    return(
        <>
        <div className="signup-form">
    <form action="/examples/actions/confirmation.php" method="post">
		<h2>Sign Up</h2>
		<p>Please fill in this form to create an account!</p>
		<hr />
        <div className="form-group">
			
				<input type="text" className="form-two-control" name="name" placeholder="Name" required="required" />
				{/* <div className="col"><input type="text" className="form-control" name="last_name" placeholder="Last Name" required="required" /></div> */}
	     	
        </div>
        <div className="form-group">
        	<input type="email" className="form-two-control" name="email" placeholder="Email" required="required" />
        </div>
		<div className="form-group">
            <input type="password" className="form-two-control" name="password" placeholder="Password" required="required" />
        </div>
		<div className="form-group">
            <input type="password" className="form-two-control" name="confirm_password" placeholder="Confirm Password" required="required" />
        </div>        
        {/* <div className="form-group">
			<label className="form-check-label"><input type="checkbox" required="required" /> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
		</div> */}
		<div className="form-group">
            <button type="submit" className="btn btn-primary btn-lg">Sign Up</button>
        </div>
    </form>
	<div className="hint-text">Already have an account? <a href="/sign-in">Login here</a></div>
</div>
        </>
    );
}

export default SignUp;