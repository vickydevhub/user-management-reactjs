import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function Register(props){
  //  useState();
    
     const[inputs, setInput] = useState({});
     const navigate = useNavigate();
     const saveUser = (event) => {
        event.preventDefault();
        //alert(event.target.username.value);
        const data={
            username:event.target.username.value,
            email:event.target.email.value,
            password:event.target.password.value,
        }
        fetch(
            'http://localhost:4000/user/add',
            {
                method:'POST',
                body:JSON.stringify(data),
                headers:{
                    'Content-Type': 'application/json',
                }
            }
        ) .then((response) => {
            if(!response.ok) throw new Error(response.status);
            else return response.json();
          })
          .then((data) => {
            
            if(data.message == 'Saved Succcessfully') event.target.reset();
            console.log(data,"DATA STORED");
            navigate('/login');
          })
          .catch((error) => {
            console.log('error: ' + error);
            
          });
      }
    return (<main className="form-signin">
        <form onSubmit={saveUser}>
                    <h1 className="h3 mb-3 fw-normal">Please register</h1>

                <div className="form-floating">
                   
                    <input type="text" name="username" className="form-control" placeholder="First name" />
                    <label>User name</label>
                </div>

                
                <div className="form-floating">
                    <label>Email</label>
                    <input type="email" name="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-floating">
                    <label>Password</label>
                    <input type="password" name="password" className="form-control" placeholder="Enter password" />
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