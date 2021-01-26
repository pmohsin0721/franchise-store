import React from 'react';
import './EnquiryForm.css';

const EnquiryForm = () => {
    return(
        <>
       <div class="enquiry-form">
    <form action="/examples/actions/confirmation.php" method="post">
		<h2 class="text-center">Want an Enquiry ?</h2>
		<p class="text-center">Please fill in this form to enquire about franchise.</p>
		<hr />
        <div class="form-group">
			<div class="row">
				<div class="col"><input type="text" class="form-control" name="first_name" placeholder="First Name" required="required" /></div>
				<div class="col"><input type="text" class="form-control" name="last_name" placeholder="Last Name" required="required" /></div>
			</div>        	
        </div>
        <div class="form-group">
        	<input type="email" class="form-control" name="email" placeholder="Email" required="required" />
        </div>
		<div class="form-group">
            <input type="number" class="form-control" name="Phone Number" placeholder="Contact Number" required="required" />
        </div>
		<div class="form-group">
            <input type="text" class="form-control" name="franchise_name" placeholder="Franchise name" required="required" />
        </div>  
        <div class="form-group">
            <input type="text" class="form-control" name="Location" placeholder="Location" required="required" />
        </div>   
        <div class="form-group">
            <input type="text" class="form-control" name="TIme" placeholder="Preferred Time for a call" required="required" />
        </div>     
		<div class="form-group">
            <button type="submit" class="btn btn-primary btn-lg btn-block">Submit</button>
        </div>
    </form>
</div>
        </>
    );
}


export default EnquiryForm;