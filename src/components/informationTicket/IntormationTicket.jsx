import "./informationTicket.css"

const IntormationTicket = () => {
  return (
      
        <div className="informationTicketContainer">
            <p>Cliente:Diana Medina</p>
            <div className="separator">
                <div className="columnaIzquierda">
                    <p>Total: </p>
                    <p>Pago Con: </p>
                    <p>Cambio: </p>
                </div>

                <div>
                    <p>$645</p>
                    <p>$700</p>
                    <p>$35</p>
                </div>
                
            </div>

            <div className="separator">
                <div className="columnaIzquierda">
                    <p>Fecha: </p>
                    <p>Hora: </p>
                </div>
                <div>
                    <p>29/01/2022</p>
                    <p>20:30 pm</p>
                </div>
                
            </div>
            <div className=" separator">
                <div className="columnaIzquierda">
                    <p>Estado: </p>
                </div>
                <div>
                    <p>Pendiente</p>
                </div>
            </div>
        </div>
     
    
  )
}

export default IntormationTicket