import "./headerGeneric.css"

import logoBigWhite from "../../img/logoBigWhite.svg"; 

const HeaderGeneric = () => {
    return (
        <header className="headerGenericStyle">
            <div className='logoHeader'>
                <img src={logoBigWhite} alt="logo tomatos" />
            </div>
        </header>
    )
}

export default HeaderGeneric