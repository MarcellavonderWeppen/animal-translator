import { NavLink } from "react-router-dom";

function No() {
  return (
    <div className="main-container no dark-theme">
      <h1>Really...?</h1>
      <h2>
        It's ok. We can deal with the emotional pain. No big deal. We will get
        over it.
      </h2>
      <img
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia2.giphy.com%2Fmedia%2FsXv0vaA4331Ti%2F200.gif%3Fcid%3D790b7611mp4vmnhdj6so81wo8x59n8rlwcxe53hmgj1uq2ai%26rid%3D200.gif%26ct%3Dg&f=1&nofb=1"
        alt="sad-cat"
      />
      <h2>Ahem... are you sure, you don't wanna try?</h2>

      <button className="intro-button talk-button">
        <NavLink to="../app">Ok, ok, I changed my mind</NavLink>
      </button>
    </div>
  );
}

export default No;
