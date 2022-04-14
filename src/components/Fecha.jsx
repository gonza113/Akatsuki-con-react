export function Partido (props){
    return (
        <div className={props.clase}>
            <h2>TORNEO NIVELACIÓN, GRUPO A</h2>
            <h3>FECHA {props.fecha}</h3>
            <p><strong>{props.cuadros}</strong></p>
        </div>);
}