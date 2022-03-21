import "./informationTicket.css"

const IntormationTicket = (props) => {
    const { order } = props;
    const { client, date, total, state } = order
    const dateOrder = new Date(date)
    const dateStringOrder = dateOrder.getDate() + "/" + (dateOrder.getMonth() + 1) + "/" + dateOrder.getFullYear()
    let stateSpanish = "";
    let classState = "";
    if (state == "Pending") {
        stateSpanish = "Pendiente"
        classState = "statePendingClass"
    } else if (state == "Completed") {
        stateSpanish = "Completada"
        classState = "stateCompletedClass"
    } else if (state == "Canceled") {
        stateSpanish = "Cancelada"
        classState = "stateCanceledClass"
    }

    return (

        <div className="informationTicketContainer ">
            <div className="ticketInfoCont">
                <div className="infoTicketColumnas">

                    <div className="single-column">
                        <div className="columnaIzquierda">
                            <p>Cliente: {client}</p>
                        </div>
                    </div>
                    <div className="separator-ticket"></div>

                    <div className="columnas-internas">
                        <div className="columnaIzquierda">
                            <p>Total:</p>

                        </div>

                        <div className="columnaDerecha greenP">
                            <p>${total}</p>

                        </div>

                    </div>

                    <div className="columnas-internas">
                        <div className="columnaIzquierda">
                            <p>Fecha:</p>
                        </div>
                        <div className="columnaDerecha ">
                            <p>{dateStringOrder}</p>
                        </div>

                    </div>
                    <div className="separator-ticket"></div>

                    <div className="columnas-internas">
                        <div className="columnaIzquierda">
                            <p>Estado:</p>
                        </div>
                        <div className={`columnaDerecha ${classState}`}>
                            <p>{stateSpanish}</p>
                        </div>
                    </div>

                </div>


            </div>


        </div>


    )
}

export default IntormationTicket