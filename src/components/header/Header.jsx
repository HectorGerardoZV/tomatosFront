

//Style
import "./header.css"

//Img
import logoBigWhite from "../../img/logoBigWhite.svg";
const Header = () => {
  return (
    <header className="headerStyle">
        <div className='logoHeader'>
            <img src={logoBigWhite} alt="logo tomatos" />
        </div>
    </header>
  )
}

export default Header