export default function MiniGrid({ numero, funcion, numeroBuscado, MostrarContAQAF, MoverContAQAF, numeroInternoSelect }) {

    return (
        <div
            className={numero.toString().includes(numeroBuscado.toString()) ? (numeroInternoSelect === numero ? 'cont-mini-grids-select cont-mini-grids' : "cont-mini-grids") : 'filtro'}
            onMouseDown={(e) => (MostrarContAQAF(), MoverContAQAF(e), funcion(numero))}
        >
            <p className='title-mini-grids'>
                Interno
            </p>

            <p className='number-mini-grids'>
                {numero}
            </p>
        </div>
    );
}



