

export default function Btns({ clase, titulo, logo, texto }) {

    return (
        <span className={`${clase}`} title={`${titulo}`}>
            <span className={`${logo}`} >{logo}</span>
            <p>{texto}</p>
        </span >
    );
}