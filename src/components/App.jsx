import React from "react";
import Card from "./Card";
import users from "../users";
import Avatar from "./Avatar";

function createCard(user) {
    return <Card 
        key={user.id}
        name={user.name}
        email={user.email}
        phone={user.phone}
    />
}

// function showImage(user) {
//     return <Avatar key={user.id} username={user.username} />;
// }

function App() {
    return <div>
        {/* {users.map(showImage)}; */}
        {/* {users.map(createCard)}; */}
        {
            users.map( item => {
                return (<Card 
                    key={item.id}
                    name={item.name}
                    email={item.email}
                    phone={item.phone}
                    company={item.company.name}
                    website={item.website}
                    address={item.address}
                />)
            })
        }
    </div>;
}

export default App;

