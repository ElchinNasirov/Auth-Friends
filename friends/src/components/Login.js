import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

const Login = () => {

    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    });

    const { push } = useHistory()

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post("/api/login", credentials)
            .then((res) => {
                localStorage.setItem("token", res.data.payload)
                push("/protected");
            })
            .catch(err => {
                console.log(err.message)
            })
        setCredentials({
            username: "",
            password: ""
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <label> Username: </label>
                <input
                    required
                    type="text"
                    name="username"
                    placeholder="usearname"
                    value={credentials.username}
                    onChange={handleChange}
                />

                <label> Password: </label>
                <input
                    required
                    type="password"
                    name="password"
                    placeholder="password"
                    value={credentials.password}
                    onChange={handleChange}
                />
                <button> LOGIN </button>
            </form>
        </div>
    )
}

export default Login;