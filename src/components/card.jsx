import React from "react";

function Card(props) {
  let { user, icon, incrementFollowers, decrementFollowers } = props;
  //or
  //   let user = props.user;
  //   let icon = props.icon;
  return (
    <section className="platform">
      <div className="icon">
        <img src={icon} alt="users.logo"></img>
        <p>{user.name}</p>
      </div>
      <div className="followers">
        <button
          className="update-followers-button"
          onClick={() => decrementFollowers(user)}
        >
          -
        </button>
        {user.followers > 9999
          ? Math.floor(user.followers / 1000) +"k"
          : user.followers}
        <button
          className="update-followers-button"
          onClick={() => incrementFollowers(user)}
        >
          +
        </button>
      </div>
      <div className="subscribers">F O L O W E R S</div>
      <div className={user.difference > 0 ? "trend-ascend" : "trend-descend"}>
        {user.difference > 0 ? "▲" : "▼"} {Math.abs(user.difference)}
      </div>
    </section>
  );
}

export default Card;
