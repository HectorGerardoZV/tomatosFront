import "./informationTicket.css"

const IntormationTicket = () => {
    return (

        <div className="informationTicketContainer ">
            <div className="ticketInfoCont">
                <div className="infoTicketColumnas">

                    <div className="single-column">
                        <div className="columnaIzquierda">
                            <p>Cliente: Diana Medina</p>
                        </div>
                    </div>
                    <div className="separator-ticket"></div>

                    <div className="columnas-internas">
                        <div className="columnaIzquierda">
                            <p>Total:</p>
                            <p>Pago Con:</p>
                            <p>Cambio:</p>
                        </div>

                        <div className="columnaDerecha greenP">
                            <p>$645</p>
                            <p>$700</p>
                            <p>$35</p>
                        </div>

                    </div>
                    <div className="separator-ticket"></div>

                    <div className="columnas-internas">
                        <div className="columnaIzquierda">
                            <p>Fecha:</p>
                            <p>Hora:</p>
                        </div>
                        <div className="columnaDerecha ">
                            <p>29/01/2022</p>
                            <p>20:30 pm</p>
                        </div>

                    </div>
                    <div className="separator-ticket"></div>

                    <div className="columnas-internas">
                        <div className="columnaIzquierda">
                            <p>Estado:</p>
                        </div>
                        <div className="columnaDerecha yellowP">
                            <p>Pendiente</p>
                        </div>
                    </div>
                    
                </div>


            </div>


        </div>


    )
}

export default IntormationTicket