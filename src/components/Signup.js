import React from "react";

function Signup() {
    return (
        <div>
            <h1>Sign up for the site!</h1>
            <form>
                <div>
                    <input type="text" name="firstName" placeholder="First name" />
                </div>
                <div>
                    <input type="text" name="lastName" placeholder="Last name" />
                </div>
                <div>
                    <input type="text" name="email" placeholder="e-mail address" />
                </div>
                <input type="submit" value="Submit" />
            </form>
            
        </div>
       
    )
}

export default Signup;