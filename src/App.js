import React, { useState } from "react";
import "./App.css";
import data from "./sampleData";
import AddNewCard from "./components/addNewCard";
import Header from "./components/header";
import Card from "./components/card";

function getFollowers(users) {
  let followers = 0;
  for (let i = 0; i < users.length; i++)
    followers = followers + users[i].followers;
  return followers;
}

function App() {
  let incrementFollowers = (user) => {
    user.followers++;
    setUsers([...users]);
  };
  let decrementFollowers = (user) => {
    user.followers--;
    setUsers([...users]);
  };

  const [users, setUsers] = useState(data.users);

  console.log(data);
  let followers = getFollowers(users);
  const create = (name, followers, difference) => {
    users.push({ name: name, followers: +followers, difference: +difference });
    setUsers([...users]);
  };
  return (
    <div className="root">
      <Header users={followers} />

      {users.map((user) => (
        <Card
          user={user}
          icon={data.icon}
          incrementFollowers={incrementFollowers}
          decrementFollowers={decrementFollowers}
        />
      ))}

      <AddNewCard addNew={create} />
    </div>
  );
}

export default App;
