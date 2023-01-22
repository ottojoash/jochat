import React from "react";

const Register = () => {
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <form>
                <input type={text} placeholder="display name"/>
                <input type={email} placeholder="email"/>
                <input type={password} placeholder="password"/>
                <input type={file}/>
            </form>
        </div>
        hello world
    </div>
  );
}

export default Register;
