import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [user, setUser] = useState({ name: "admin", pass: "admin" })
  const [userp, setUserp] = useState("")

  const usern = (e) => {
    setUser({ name: e.target.value, pass: user.pass })

  }

  const userpe = (e) => {
    setUser({ name: user.name, pass: e.target.value })
  }
  



  const regs = () => {
    if (user.pass !== "admin" || user.name !== "admin") {
      setUserp("Wrong username or password")
    }
  }

  return (
    <div className="logful" >
      <div className="log" >
        <p className="colorr">{userp}</p>
        <label>username</label>
        <input type="text" id="text" onChange={usern} placeholder="Enter: admin" value={user.name}/>
        <label>password</label>
        <input type="password" id="text" onChange={userpe} on placeholder="Enter: admin" value={user.pass} />
        <Link to={(user.pass === "admin" && user.name === "admin") ? ("/site") : ("/")} onClick={regs}  id="btn">login</Link>
      </div>
    </div>

  );

}

export default Login;

