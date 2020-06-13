import React, { Component, Fragment } from "react";
import userItem from "./userItem";

const userList = ({ items }) => {
  if (items.length === 0) {
    return (
      <Fragment>
        <h1>Nothing To Display Here!</h1>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <ul>
          {items.map((user) => (
            <userItem
              key={user.id}
              id={user.id}
              name={user.name}
              places={user.places}
              image={user.image}
            />
          ))}
        </ul>
      </Fragment>
    );
  }
};

export default userList;
