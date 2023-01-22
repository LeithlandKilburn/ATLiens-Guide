import {useState} from "react"; 
import { useNavigate } from 'react-router-dom';


// add messaging 

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate("/");

    const handleChange = (e) => {
        if (e.target.name == "username")
        {
            setUsername(e.target.value);
        } else {
            setPassword(e.target.value);
        }
    }

    const handleCreate = (e) => {
        e.preventDefault();
        console.log(username, password);
        fetch("http://localhost:8080/atliens/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username, password})
        })
        .then(resp => {
            if (resp.status === 201)
            {
                console.log("success");
                
                //navigate("/");

            } else {
                console.log("Failure");
            }
        });
    }

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(username, password);
        fetch("http://localhost:8080/atliens/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username, password})
        })
        .then(resp => {
            if (resp.status === 201)
            {
                console.log("success");
                
                //navigate("/");

            } else {
                console.log("Failure");
            }
        });
    }

    return (
        <div>
            <h1 className="center"> Login</h1>

            <form onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor='username'>Username</label>
                <input type="text" id='username' name="username" value={username} required="" onChange={(e) => handleChange(e)}/>
                
                <label htmlFor='password'>Password</label>
                <input type="password" id='password' name="password" value={password} required="" onChange={(e) => handleChange(e)}/>
            </form>

            <div>
                <button type="submit" onClick={(e) => handleLogin(e)}>Login</button>
            </div>
            
            <div>
                <button className="container" onClick={(e) => handleCreate(e)}>Create Account</button>
            </div>

        </div>
    )
}

export default Login;