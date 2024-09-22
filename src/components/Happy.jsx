import React, { useState } from "react";

function Happy() {
    const [msg, setMsg] = useState("Are you feeling sad?")
    const [mood, setMood] = useState("😭");

    function handleMood() {
        setMsg("You are Happy now!");
        setMood("😊");
    }
  return (
    <>
      <h1>{mood}</h1>
      <h3>{msg}</h3>
      {mood==="😭" ? <button onClick={handleMood}>Click here to be Happy</button> : <h5>visit again if you feel sad</h5>}
      
    </>
  );
}

export default Happy;
