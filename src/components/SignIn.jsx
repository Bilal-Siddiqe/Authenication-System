import React from 'react'
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function SignIn() {

    const {setLogin} = useAuth();
    const navigate = useNavigate();

    let email, pwd;
    function handlChange(e) {
        const { name, value } = e.target;
        if (name == "email") {
            email = value;
        }
        else if (name == "password") {
            pwd = value;
        }
    }

    function loginUser(e) {
        let url = "https://jsonplaceholder.typicode.com/users"
        e.preventDefault();

        let userEmail = {
            email : "bilal@gmail.com",
            password : "12345"
        }

        if (email == userEmail.email && pwd == userEmail.password) {
            axios.post(url, { Name: "Bilal" }).then(
                () => {
                    console.log("Login Successfull");
                    navigate("/Home");
                    setLogin(true);
                }
            ).catch(
                () => {
                    alert("Server Not Responding");
                }
            )
        }
        else {
            alert("Invalid Email Or Password");
        }
    }

    return (
        <div className='container'>
            <h1 className='text-center'>Sign In Page</h1>
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" name='email' onChange={handlChange} />
                    <div id="emailHelp" className="form-text" >We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword" name='password' onChange={handlChange} />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button onClick={loginUser} type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
export default SignIn;