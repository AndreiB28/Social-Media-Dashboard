import React, { useState } from "react";

const AddNewCard = ({addNew}) => {
  const [name, setName] = useState("");
  const [followers, setFollowers] = useState("");
  const [difference, setDifference] = useState("");
  const handleAction = () =>{
    if (name === "" || followers === "" || difference === ""){return};
      addNew(name, followers, difference);
      
      setName('');
      setFollowers('');
      setDifference('');

  }

  return (
    <div className="add-card">
      <input
        type="text"
        value={name}
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      ></input>
      <input
        type="text"
        value={followers}
        placeholder="followers"
        onChange={(e) => setFollowers(e.target.value)}
      ></input>
      <input
        type="text"
        value={difference}
        placeholder="difference"
        onChange={(e) => setDifference(e.target.value)}
      ></input>
      <button onClick={handleAction}>Create A New Card</button>
    </div>
  );
};

export default AddNewCard;
