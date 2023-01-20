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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password);
        fetch("http://localhost:8080/atliens", {
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
                <button type="submit" onClick={(e) => handleSubmit(e)}>Login</button>
            </div>
            
            <div>
                <button className="container"  >Create Account</button>
            </div>

        </div>
    )
}

export default Login;