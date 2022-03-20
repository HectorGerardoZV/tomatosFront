
import { useNavigate } from "react-router-dom";


// style
import "./login.css";

// images
import password from "../../img/password.svg";
import key from "../../img/key.svg";
import logoBig from "../../img/logoBig.svg";
import pizza from "../../img/pizza.svg";

const Login = () => {

  let navigate = useNavigate();

  function handleSubmit(e){
    e.preventDefault();
    navigate("/cajero")    
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
          <input className="loginInput" type="text" />
        </div>

        {/* input contraseña  */}
        <div className="inputStyle">
          <div className="inputInfo">
            <label >Password</label>
            <img src={password} alt="logo password" />
          </div>
          <input className="loginInput" type="password" />
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
