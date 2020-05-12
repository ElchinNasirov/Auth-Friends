import React from "react";

const FriendCard = props => {
    return (
        <div>
            {props.friends.map(friend => {
                return (
                    <div key={friend.id}>
                        <h2> Name: {friend.name} </h2>
                        <p> Age: {friend.age} </p>
                        <p> Email: {friend.email} </p>
                    </div>
                )
            })}
        </div>
    )
}

export default FriendCard;