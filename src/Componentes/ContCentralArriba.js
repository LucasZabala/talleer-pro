import { useRef } from 'react';

export default function ContCentralArriba({ novedad, numeroInternoSelect, filtrarInternos, filtrarInternosProblemas, filtrarFilasTablaSector, sectorSelect, setCuadroAgregarNovedad, setCuadroAsignarNovedad, setCuadroFinalizarNovedad, setCuadroQuitarNovedad }) {

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
                    autoComplete='off'
                />
            </div>

            {/* BOTONES NOVEDAD ASIGNAR QUITAR AGREGAR FINALIZAR */}
            <div className={`${novedad === 'internos' ? 'opciones_btn_A_Q_Agregar' : 'filtro'}`}>{/*filtro*/}
                <span onClick={() => setCuadroAgregarNovedad(true)} className='material-symbols-outlined logo_A_Q_Agregar ' title='Agregar'>add</span>
                <span onClick={() => setCuadroAsignarNovedad(true)} className='logo_A_Q_Agregar' title='Asignar'>A</span>
            </div>

            {/* <!-- botones opciones quitar y asignar --> */}
            <div className={`${novedad==='pendiente' ? 'opciones_btn_A_Q_Agregar' : 'filtro'}`}> {/* FILTRO */}
                <span onClick={() => setCuadroAsignarNovedad(true)} title='Asignar' className='logo_A_Q_Agregar'>A</span>
                <span onClick={() => setCuadroQuitarNovedad(true)} title='Quitar' className='logo_A_Q_Agregar'>Q</span>
            </div>

            {/* <!-- botones opciones quitar y Finalizar --> */}
            <div className={`${novedad==='encurso' ? 'opciones_btn_A_Q_Agregar' : 'filtro'}`}> {/* FILTRO */}
                <span title='Volver a Pendiente' className='logo_A_Q_Agregar'>P</span> {/* volver a pendiente */}
                <span onClick={() => setCuadroFinalizarNovedad(true)} title='Finalizar' className='logo_A_Q_Agregar'>F</span>
                <span onClick={() => setCuadroQuitarNovedad(true)} title='Quitar' className='logo_A_Q_Agregar'>Q</span>
            </div>

            {/* <!-- contnedor problemas --> */}
            <div className={`btns-filtrar-problemas ${novedad === 'internos' ? 'filtro' : ''}`}>

                {/* <!-- TODAS --> */}
                <button onClick={() => filtrarFilasTablaSector('Todas')} className={sectorSelect == 'todas' ? 'problema_SELECCIONADO' : 'problemas'}>Todas</button> {/* problema_SELECCIONADO */}
                {/* <!-- mecanica --> */}
                <button onClick={() => filtrarFilasTablaSector('Mecanica')} className={sectorSelect == 'mecanica' ? 'problema_SELECCIONADO' : 'problemas'}>Mecanica</button>
                {/* <!-- electrica --> */}
                <button onClick={() => filtrarFilasTablaSector('Electricidad')} className={sectorSelect == 'electricidad' ? 'problema_SELECCIONADO' : 'problemas'}>Electricidad</button>
                {/* <!-- carroceria --> */}
                <button onClick={() => filtrarFilasTablaSector('Carroceria')} className={sectorSelect == 'carroceria' ? 'problema_SELECCIONADO' : 'problemas'}>Carroceria</button>
                {/* <!-- gomerias --> */}
                <button onClick={() => filtrarFilasTablaSector('Gomeria')} className={sectorSelect == 'gomeria' ? 'problema_SELECCIONADO' : 'problemas'}>Gomeria</button>
                {/* <!-- otras --> */}
                <button onClick={() => filtrarFilasTablaSector('Otras')} className={sectorSelect == 'otras' ? 'problema_SELECCIONADO' : 'problemas'}>Otras</button>

            </div>

        </div>
    );
}