import React from "react";
import Avatar from "./Avatar";
import users from "../users";
// import container from "@material-ui/core/container";

// function showImage(user) {
//     return <Avatar key={user.id} username={user.username} />;
// }

function Card(props) {
    return (
      <div className="container">
        <div className="ec-card styling">
            <div className="row">
                <div className="col-md-2.5 image">
                  <Avatar username={props.name} />
                </div>
                <div className="col-md-6">
                    <h1>{props.name}</h1>
                    <p><strong>Email: </strong>{props.email}</p>
                    <p><strong>Phone: </strong>{props.phone}</p>
                    <p><strong>Company: </strong>{props.company}</p>
                    <p><strong>Website: </strong>{props.website}</p>
                    <p><strong>Address: </strong>{props.address.street}, {props.address.suite}, {props.address.city}, {props.address.zipcode}</p>
                </div>
            </div>
        </div>
      </div>
    );
  }

export default Card;