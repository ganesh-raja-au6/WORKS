import React from "react";

const Like = ({onToggleLike, liked}) => {
  const arr = [
    <i style={{cursor : 'pointer'}} onClick={onToggleLike} className="fa fa-heart-o" aria-hidden="true"></i>,
    <i  style={{cursor : 'pointer'}} onClick={onToggleLike} className="fa fa-heart" aria-hidden="true"></i>,
  ];
  return !liked ? arr[0] : arr[1]
};

export default Like;
