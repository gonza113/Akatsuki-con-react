export function Jugador (props){
    return (
    <div className="jugador">
        <div className="jug1">
            <img src={props.imagen} alt={props.alt} />
        </div>
        <div className="jug2">
            <p><strong>{props.nombre}</strong></p>
            <p>- {props.edad} Años</p>
            <p>- Número {props.numero}</p>
        </div>
    </div>);
}