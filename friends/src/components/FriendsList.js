import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import FriendCard from "./FriendCard";
import AddNewFriend from "./AddNewFriend";

const FriendList = () => {

    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get("/api/friends")

            .then(res => {
                setFriends(res.data)
            })

            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <div>
            <AddNewFriend />
            <FriendCard key={friends.id} friends={friends} />
        </div>
    )
}

export default FriendList;