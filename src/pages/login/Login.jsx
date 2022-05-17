import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth"

// style
import "./login.css";

// images
import password from "../../img/password.svg";
import key from "../../img/key.svg";
import logoBig from "../../img/logoBig.svg";
import pizza from "../../img/pizza.svg";

const Login = () => {
  let navigate = useNavigate();
  const {handleDoLogin,userAuth} = useAuth()
  const [user, setUser] = useState({ accessKey: "", password: "" })

  const handleOnChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const valid = await handleDoLogin(user)
    if(valid.access){
      const {user} = valid;
      if(user.position==1){
        navigate("/admin")
      }else if(user.position==2){
        navigate("/cajero")
      }
    }
  }
  return (
    <section className="layoutLogin">
      <div className="loginContainer">
        <div className="logo">
          <img className="logo" src={logoBig} alt="logoTomatos" />
        </div>

        <form onSubmit={handleSubmit}>

          {/* input Llave  */}
          <div className="inputStyle">
            <div className="inputInfo">
              <label >Llave</label>
              <img src={key} alt="logo password" />
            </div>
            <input name="accessKey" className="loginInput" type="text"
              onChange={handleOnChange}
            />
          </div>

          {/* input contraseña  */}
          <div className="inputStyle">
            <div className="inputInfo">
              <label >Password</label>
              <img src={password} alt="logo password" />
            </div>
            <input name="password" className="loginInput" type="password"
              onChange={handleOnChange}
            />
          </div>

          {/* input button   */}
          <div className="inputButton">
            <button className="logginButton" type="submit">
              <p>Acceder</p>
              <img src={pizza} alt="logo pizza" />
            </button>
          </div>

        </form>
      </div>
    </section>
  );
};

export default Login;
