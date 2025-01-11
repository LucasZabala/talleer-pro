import { useRef } from "react";

export default function ContCentralArriba({ novedad, numeroInternoSelect, filtrarInternos, filtrarInternosProblemas, filtrarFilasTablaSector }) {

    const input_interno_problemas = useRef(null);

    return (
        <div className={`cont-central-arriba`}>

            {/* numero del interno seleccionado */}
            <div className='num-interno-select'>
                <p>INTERNO</p>
                <p>{numeroInternoSelect}</p>
            </div>

            {/* Buscador numero de internos */}
            <div className='serch-num-interno'>
                <input type='text'
                    placeholder='Buscar'
                    id='buscador-interno-problemas'
                    ref={input_interno_problemas} //ref se utiliza para etraer el input del DOM y poder modificarlo
                    value={filtrarInternosProblemas}
                    onChange={filtrarInternos}
                    autoComplete="off"
                />
            </div>

            {/* <!-- contnedor problemas --> */}
            <div className={`btns-filtrar-problemas ${novedad === 'internos' ? 'filtro' : ''}`}>

                {/* <!-- TODAS --> */}
                <button onClick={() => filtrarFilasTablaSector('Todas')} className="problemas problema_SELECCIONADO">Todas</button>
                {/* <!-- mecanica --> */}
                <button onClick={() => filtrarFilasTablaSector('Mecanica')} className="problemas">Mecanica</button>
                {/* <!-- electrica --> */}
                <button onClick={() => filtrarFilasTablaSector('Electricidad')} className="problemas">Electricidad</button>
                {/* <!-- carroceria --> */}
                <button onClick={() => filtrarFilasTablaSector('Carroceria')} className="problemas">Carroceria</button>
                {/* <!-- gomerias --> */}
                <button onClick={() => filtrarFilasTablaSector('Gomeria')} className="problemas">Gomeria</button>
                {/* <!-- otras --> */}
                <button onClick={() => filtrarFilasTablaSector('Otras')} className="problemas">Otras</button>


            </div>

        </div>
    );
}