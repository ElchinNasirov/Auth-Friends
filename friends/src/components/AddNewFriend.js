import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";


const AddNewFriend = () => {
    const [newFriend, setNewFriend] = useState({
        name: "",
        age: "",
        email: ""
    });

    const handleChange = e => {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post("/api/friends", newFriend)
            .then((res) => {
                // setNewFriend({ name: '', age: "", email: '' })
                console.log(res);
            })
            .catch((err) => {
                console.log(err)
            });

            setNewFriend({
            name: '',
            age: '',
            email: ''
        });
    };

    return (
        <form onSubmit={handleSubmit}>

            <label> Name: </label>
            <input
                required
                type="text"
                name="name"
                value={newFriend.name}
                onChange={handleChange}
            />

            <label> Age: </label>
            <input
                required
                type="text"
                name="age"
                value={newFriend.age}
                onChange={handleChange}
            />

            <label> Email: </label>
            <input
                required
                type="text"
                name="email"
                value={newFriend.email}
                onChange={handleChange}
            />
            <button type="submit"> ADD A FRIEND </button>
        </form>
    )
}

export default AddNewFriend;