import {useState} from 'react';

function Register(props){
    useState();

    function saveUser(){
          console.log('form submit');  
    }
    return (<main className="form-signin">
        <form>
                    <h1 className="h3 mb-3 fw-normal">Please register</h1>

                <div className="form-floating">
                   
                    <input type="text" className="form-control" placeholder="First name" />
                    <label>First name</label>
                </div>

                <div className="form-floating">
                    
                    <input type="text" className="form-control" placeholder="Last name" />
                    <label>Last name</label>
                </div>

                <div className="form-floating">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-floating">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="w-100 btn btn-lg btn-primary">Register</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/login">log in?</a>
                </p>
            </form>
            </main>
    );
}

export default Register;