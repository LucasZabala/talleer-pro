export default function MiniGrid({ numero, funcion, numeroBuscado, MostrarContAQAF, MoverContAQAF }) {

    return (
        <div
            tabIndex='0'
            className={numero.toString().includes(numeroBuscado.toString()) ? 'cont-mini-grids' : 'filtro'}
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



