import './Grillas.css';
import Btns from './Componentes/Btns';
import Vacio from './Componentes/Vacio';
import ContCentralArriba from './Componentes/ContCentralArriba';
import MiniGrids from './Componentes/MiniGrids';
import ResumenNovedades from './Componentes/ResumenNovedades'
import CuadroAQAF from './Componentes/CuadroAQAF.js';
import Tabls from './Componentes/Tabls.js';

import React, { useState, useEffect } from 'react';

function Grid() {

    // variables para cambiar las novedades
    const [vacio_2, setVacio_2] = useState('');
    const [btnPendiente, setbtnPendiente] = useState('');
    const [btnEnCurso, setbtnEnCurso] = useState('');
    const [btnFinalizadas, setbtnFinalizadas] = useState('');
    const [btnHistorial, setbtnHistorial] = useState('');
    const [vacio_3, setVacio_3] = useState('');


    // variables abrir y cerrar contenedor irquierdo
    const [btnIzquierdo, setBtnIzquierdo] = useState(true);


    //mostrar numero
    const [numeroInternoSelect, setNumeroInternoSelect] = useState('');

    //ABRIR CERRAR contCentralAbajoDerechaGrilla
    const [contCentralAbajoDerechaGrilla, setContCentralAbajoDerechaGrilla] = useState(false);

    // variables filtrar internos y filas de tabla por novedad y trabajos
    const [novedadSeleccionada, setNovedadSeleccionada] = useState('internos');
    const [filtrarInternosProblemas, setFiltrarInternosProblemas] = useState('');
    const [filtrarInternosGrilla, setFiltrarInternosGrilla] = useState('');
    const [filtrarInternosPendientes, setFiltrarInternosPendientes] = useState('');
    const [filtrarInternosEnCurso, setFiltrarInternosEnCurso] = useState('');
    const [filtrarInternosFinalizadas, setFiltrarInternosFinalizadas] = useState('');
    const [filtrarInternosHistorial, setFiltrarInternosHistorial] = useState('');

    // variables filtrar filas de tablas por sector
    const [filtrarFilaTablaSector, setFiltrarFilaTablaSector] = useState('');
    const [filtrarFilaTablaSectorPendientes, setFiltrarFilaTablaSectorPendientes] = useState('');
    const [filtrarFilaTablaSectorEnCurso, setFiltrarFilaTablaSectorEnCurso] = useState('');
    const [filtrarFilaTablaSectorFinalizadas, setFiltrarFilaTablaSectorFinalizadas] = useState('');
    const [filtrarFilaTablaSectorHistorial, setFiltrarFilaTablaSectorHistorial] = useState('');

    // NOVEDAD ASIGNAR QUITAR AGREGAR FINALIZAR
    const [contAQAF, setContAQAF] = useState(false);
    const [movimientoX_AQAF, setMovimientoX_AQAF] = useState(0);
    const [movimientoY_AQAF, setMovimientoY_AQAF] = useState(0);

    // Seleccionar Fila
    const [idTablaSelect, setIdTablaSelect] = useState();

    useEffect(() => {
        // alert(idTablaSelect);
    }, [idTablaSelect])


    // funcion para cambiar las novedades
    function SeleccinarBtnNovedad(novedad) {
        if (numeroInternoSelect != 0) {
            setContCentralAbajoDerechaGrilla(true);
            setNovedadSeleccionada(novedad);
            switch (novedad) {
                case 'pendientes':
                    setVacio_2('btns-novedad-ant');
                    setbtnPendiente('btns-novedad-select');
                    setbtnEnCurso('btns-novedad-post');
                    setbtnFinalizadas('');
                    setbtnHistorial('');
                    setVacio_3('');

                    //Filtrar internos problemas
                    setFiltrarInternosProblemas(filtrarInternosPendientes);
                    break;
                case 'encurso':
                    setVacio_2('');
                    setbtnPendiente('btns-novedad-ant');
                    setbtnEnCurso('btns-novedad-select');
                    setbtnFinalizadas('btns-novedad-post');
                    setbtnHistorial('');
                    setVacio_3('');

                    //Filtrar internos problemas
                    setFiltrarInternosProblemas(filtrarInternosEnCurso);
                    break;
                case 'finalizadas':
                    setVacio_2('');
                    setbtnPendiente('');
                    setbtnEnCurso('btns-novedad-ant');
                    setbtnFinalizadas('btns-novedad-select');
                    setbtnHistorial('btns-novedad-post');
                    setVacio_3('');

                    //Filtrar internos problemas
                    setFiltrarInternosProblemas(filtrarInternosFinalizadas);
                    break;
                case 'historial':
                    setVacio_2('');
                    setbtnPendiente('');
                    setbtnEnCurso('');
                    setbtnFinalizadas('btns-novedad-ant');
                    setbtnHistorial('btns-novedad-select');
                    setVacio_3('btns-novedad-post');

                    //Filtrar internos problemas
                    setFiltrarInternosProblemas(filtrarInternosHistorial);
                    break;
                default:
                    setVacio_2('');
                    setbtnPendiente('');
                    setbtnEnCurso('');
                    setbtnFinalizadas('');
                    setbtnHistorial('');
                    setVacio_3('');

                    //Filtrar internos problemas
                    setFiltrarInternosProblemas(filtrarInternosGrilla);
                    break;

            }
        } else if (novedad != 'internos') {
            alert('Elija un Interno');
        }

        setBtnIzquierdo(true);
    }

    // funcion abrir y cerrar contenedor irquierdo
    function ActivarDesactivarContIzquierdo() {
        setBtnIzquierdo(!btnIzquierdo);
    }

    // funcion seleccionar numero interno
    function MostrarNumero(num) {
        setNumeroInternoSelect(num);
        setContCentralAbajoDerechaGrilla(true);

    }

    // funcion filtrar internos y filas de tabla y conservarlos en el BUSCADOR INPUT
    function FiltrarInternos(e) {
        EsconderrContAQAF();
        setFiltrarInternosProblemas(e.target.value); //valor del input .replace(/\s+/g, '')
        switch (novedadSeleccionada) {
            case 'pendientes':
                setFiltrarInternosPendientes(e.target.value.toString().toLowerCase());
                break;
            case 'encurso':
                setFiltrarInternosEnCurso(e.target.value);
                break;
            case 'finalizadas':
                setFiltrarInternosFinalizadas(e.target.value);
                break;
            case 'historial':
                setFiltrarInternosHistorial(e.target.value);
                break;
            default:
                setFiltrarInternosGrilla(e.target.value);
                break;

        }
    }
    // funcion filtrar filas de tabla y conservarlos en BOTONES de SECTOR
    function FiltrarFilasTablaSector(typoSector) {

        setFiltrarFilaTablaSector(typoSector.toString().toLowerCase()); //valor del btoon de sector .replace(/\s+/g, '')
        switch (novedadSeleccionada) {
            case 'pendientes':
                setFiltrarFilaTablaSectorPendientes(typoSector.toString().toLowerCase());
                break;
            case 'encurso':
                setFiltrarFilaTablaSectorEnCurso(typoSector.toString().toLowerCase());
                break;
            case 'finalizadas':
                setFiltrarFilaTablaSectorFinalizadas(typoSector.toString().toLowerCase());
                break;
            case 'historial':
                setFiltrarFilaTablaSectorHistorial(typoSector.toString().toLowerCase());
                break;

        }

    }


    // NOVEDAD ASIGNAR QUITAR AGREGAR FINALIZAR

    function EsconderrContAQAF() {
        setContAQAF(false);
    }

    function MostrarContAQAF() {
        setContAQAF(true);
    }

    function MoverContAQAF(e) {
        if (e.button == 0) {
            setMovimientoX_AQAF(e.pageX);
            setMovimientoY_AQAF(e.pageY);
        }

    }




    return (
        <>
            <div className='Cont-padre-Grilla'>

                {/* CONTENEDOR IZQUIERDO GRILLA */}
                <div className={`${btnIzquierdo ? 'Cont-izquierdo-Grilla' : 'Cont-izquierdo-Grilla-desactivado'}`} onClick={() => EsconderrContAQAF()}>

                    {/* VACIO 1*/}
                    <Vacio
                        clase={'vacio_1'}
                    />

                    {/* contenedor logo de grilla y nombre */}
                    <div onClick={() => SeleccinarBtnNovedad('internos')}>
                        <Btns
                            clase='material-symbols-outlined btns-grillas'
                            logo='grid_on'
                            texto='INTERNOS'
                            titulo='Internos'
                            identificador='btn-internos'
                        />
                    </div>


                    {/* boton desplegar */}
                    <span onClick={() => ActivarDesactivarContIzquierdo()}>
                        <Btns
                            clase="material-symbols-outlined btn-desplegar-cont-izquierdo"
                            logo='arrow_forward_ios'
                            titulo=''
                            identificador='btn-desplegar-cont-izquierdo'
                        />
                    </span>

                    {/* VACIO 1*/}
                    <Vacio
                        clase={'vacio_1'}
                    />

                    {/* Novedades */}
                    <p className='title-novedades-activado'>Novedades</p>

                    {/* Cont Novedades */}
                    <div className='cont-novedades'>

                        {/* VACIO 2 */}

                        <Vacio
                            clase={`vacio_2 ${vacio_2}`}
                        />

                        {/* Boton de Pendientes */}
                        <div onClick={() => SeleccinarBtnNovedad('pendientes')}>
                            <Btns
                                clase={`Btns-Pendiente-EnCurso-Finalizada-Hisotiral ${btnPendiente}`}
                                logo='P'
                                texto='PENDIENTES'
                                titulo='Pendientes'

                            />
                        </div>

                        {/* Boton de En Curso */}
                        <div onClick={() => SeleccinarBtnNovedad('encurso')}>
                            <Btns
                                clase={`Btns-Pendiente-EnCurso-Finalizada-Hisotiral ${btnEnCurso}`}
                                logo='C'
                                texto='EN CURSO'
                                titulo='En Curso'

                            />
                        </div>

                        {/* Boton de Finalizadas */}
                        <div onClick={() => SeleccinarBtnNovedad('finalizadas')}>
                            <Btns
                                clase={`Btns-Pendiente-EnCurso-Finalizada-Hisotiral ${btnFinalizadas}`}
                                logo='F'
                                texto='FINALIZADAS'
                                titulo='Finalizadas'

                            />
                        </div>

                        {/* Boton de Historial */}
                        <div onClick={() => SeleccinarBtnNovedad('historial')}>
                            <Btns
                                clase={`Btns-Pendiente-EnCurso-Finalizada-Hisotiral ${btnHistorial}`}
                                logo='H'
                                texto='HISTORIAL'
                                titulo='Historial'

                            />
                        </div>


                        {/* VACIO 3 */}
                        <Vacio
                            clase={`vacio_3 ${vacio_3}`}
                        />

                    </div>

                </div>

                {/* CONTENEDOR CENTRAL GRILLA */}
                <div className={`${btnIzquierdo ? 'cont-central-Grilla' : 'cont-central-Grilla-2'}`}>
                    {/* contenedor central arriba grilla */}
                    <ContCentralArriba
                        novedad={novedadSeleccionada}
                        numeroInternoSelect={numeroInternoSelect}
                        filtrarInternos={FiltrarInternos} //funcion al apretar input
                        filtrarInternosProblemas={filtrarInternosProblemas} //valor del input en grillas
                        filtrarFilasTablaSector={FiltrarFilasTablaSector}//funcion para filtrar filas en tabla de acuerdo al sector
                    />

                    {/*//////////////// contenedor central abajo grilla ////////////////*/}
                    <div className={`${novedadSeleccionada == 'internos' ? (btnIzquierdo ? 'cont-central-abajo-grilla' : 'cont-central-abajo-grilla-2') : 'filtro'}`}>

                        {/* cont-central-abajo-izquierda-grilla */}
                        <div className='cont-central-abajo-izquierda-grilla'>
                            <div className={`${btnIzquierdo ? 'cont-internos-grilla-2' : 'cont-internos-grilla'}`}>
                                <MiniGrids
                                    numero={1}
                                    funcion={MostrarNumero}
                                    numeroBuscado={filtrarInternosProblemas}
                                    MostrarContAQAF={MostrarContAQAF}
                                    MoverContAQAF={MoverContAQAF}
                                />
                                <MiniGrids
                                    numero={2}
                                    funcion={MostrarNumero}
                                    numeroBuscado={filtrarInternosProblemas}
                                    MostrarContAQAF={MostrarContAQAF}
                                    MoverContAQAF={MoverContAQAF}
                                />
                                <MiniGrids
                                    numero={3}
                                    funcion={MostrarNumero}
                                    numeroBuscado={filtrarInternosProblemas}
                                    MostrarContAQAF={MostrarContAQAF}
                                    MoverContAQAF={MoverContAQAF}
                                />
                                <MiniGrids
                                    numero={4}
                                    funcion={MostrarNumero}
                                    numeroBuscado={filtrarInternosProblemas}
                                    MostrarContAQAF={MostrarContAQAF}
                                    MoverContAQAF={MoverContAQAF}
                                />
                            </div>

                        </div>

                        {/* cont-central-abajo-derecha-grilla */}
                        <div className={contCentralAbajoDerechaGrilla ? 'cont-central-abajo-derecha-grilla' : 'cont-central-abajo-derecha-grilla-escondido'} onClick={() => EsconderrContAQAF()}>

                            {/* <!-- resumen novedades --> */}
                            <div className='cont-title-resumen-novedades'>
                                <h3 className='title-resumen-novedades'>Resumen de Novedades</h3>
                            </div>


                            {/* <!-- resumen novedades pendientes --> */}
                            <ResumenNovedades
                                title_Novedad='Pendientes'
                            />

                            {/* <!-- resumen novedades en curso --> */}
                            <ResumenNovedades
                                title_Novedad='En Curso'
                            />

                            {/* <!-- resumen novedades finalizadas --> */}
                            <ResumenNovedades
                                title_Novedad='Finalizadas'
                            />

                            {/* <!-- resumen historial de novedades --> */}
                            <ResumenNovedades
                                title_Novedad='Historial'
                            />

                        </div>

                    </div>

                    {/*//////////////// contenedor central abajo Pendientes /////////////////*/}
                    <div className={`${novedadSeleccionada == 'pendientes' ? (btnIzquierdo ? 'cont-central-abajo-grilla' : 'cont-central-abajo-grilla-2') : 'filtro'}`}>

                        {/* cont-central-abajo-izquierda-grilla */}
                        <div className='cont-central-abajo-izquierda-grilla-P-EC-F-H'>
                            <div className='cont-P-EC-F-H-grilla'>
                                <Tabls
                                    setIdTablaSelect={setIdTablaSelect}
                                    filtrarInternosPendientes={filtrarInternosPendientes} //envia lo que contene el buscador
                                    filtrarFilaTablaSectorPendientes={filtrarFilaTablaSectorPendientes} //envia el sector seleccionado
                                />
                            </div>

                        </div>

                    </div>
                    {/*//////////////// contenedor central abajo En Cruso /////////////////*/}
                    <div className={`${novedadSeleccionada == 'encurso' ? (btnIzquierdo ? 'cont-central-abajo-grilla' : 'cont-central-abajo-grilla-2') : 'filtro'}`}>

                        {/* cont-central-abajo-izquierda-grilla */}
                        <div className='cont-central-abajo-izquierda-grilla-P-EC-F-H'>
                            <div className='cont-P-EC-F-H-grilla'>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Fecha Novedad</th>
                                            <th>Interno</th>
                                            <th>Sector</th>
                                            <th>Novedad Motivo</th>
                                            <th>Fecha Hora Inicio</th>
                                            <th>Legajo</th>
                                            <th>Detalle de Trabajos Realizados</th>
                                            <th>Fecha y Hora de Finalizacion</th>
                                            <th>Estado</th>
                                            <th>Pendiente Por</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>2022-01-01</td>
                                            <td>1</td>
                                            <td>Mecanica</td>
                                            <td>Novedad 1</td>
                                            <td>2022-01-01 00:00:00</td>
                                            <td>Legajo 1</td>
                                            <td>Legajo 2</td>
                                            <td>2022-01-01 00:00:00</td>
                                            <td>Pendiente</td>
                                            <td>Por confirmar</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>

                    </div>
                    {/*//////////////// contenedor central abajo finalizadas /////////////////*/}
                    <div className={`${novedadSeleccionada == 'finalizadas' ? (btnIzquierdo ? 'cont-central-abajo-grilla' : 'cont-central-abajo-grilla-2') : 'filtro'}`}>

                        {/* cont-central-abajo-izquierda-grilla */}
                        <div className='cont-central-abajo-izquierda-grilla-P-EC-F-H'>
                            <div className='cont-P-EC-F-H-grilla'>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Fecha Novedad</th>
                                            <th>Interno</th>
                                            <th>Sector</th>
                                            <th>Novedad Motivo</th>
                                            <th>Fecha Hora Inicio</th>
                                            <th>Legajo</th>
                                            <th>Detalle de Trabajos Realizados</th>
                                            <th>Fecha y Hora de Finalizacion</th>
                                            <th>Estado</th>
                                            <th>Pendiente Por</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>2022-01-01</td>
                                            <td>1</td>
                                            <td>Mecanica</td>
                                            <td>Novedad 1</td>
                                            <td>2022-01-01 00:00:00</td>
                                            <td>Legajo 1</td>
                                            <td>Legajo 2</td>
                                            <td>2022-01-01 00:00:00</td>
                                            <td>Pendiente</td>
                                            <td>Por confirmar</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>

                    </div>
                    {/*//////////////// contenedor central abajo historial /////////////////*/}
                    <div className={`${novedadSeleccionada == 'historial' ? (btnIzquierdo ? 'cont-central-abajo-grilla' : 'cont-central-abajo-grilla-2') : 'filtro'}`}>

                        {/* cont-central-abajo-izquierda-grilla */}
                        <div className='cont-central-abajo-izquierda-grilla-P-EC-F-H'>
                            <div className='cont-P-EC-F-H-grilla'>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Fecha Novedad</th>
                                            <th>Interno</th>
                                            <th>Sector</th>
                                            <th>Novedad Motivo</th>
                                            <th>Fecha Hora Inicio</th>
                                            <th>Legajo</th>
                                            <th>Detalle de Trabajos Realizados</th>
                                            <th>Fecha y Hora de Finalizacion</th>
                                            <th>Estado</th>
                                            <th>Pendiente Por</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>2022-01-01</td>
                                            <td>1</td>
                                            <td>Mecanica</td>
                                            <td>Novedad 1</td>
                                            <td>2022-01-01 00:00:00</td>
                                            <td>Legajo 1</td>
                                            <td>Legajo 2</td>
                                            <td>2022-01-01 00:00:00</td>
                                            <td>Pendiente</td>
                                            <td>Por confirmar</td>
                                        </tr>
                                    </tbody>

                                </table>
                            </div>

                        </div>

                    </div>


                </div>

                {/* BOTONES NOVEDAD ASIGNAR QUITAR AGREGAR FINALIZAR */}
                <div style={{ top: `${movimientoY_AQAF}px`, left: `${movimientoX_AQAF}px` }} className={`${contAQAF ? 'opciones_de_grilla' : 'filtro'}`}>{/*filtro*/}
                    <p className="titulo_novedad_opciones">Novedad</p>
                    <div className="cont_btn_novead">
                        <span className="material-symbols-outlined logo_opciones_de_grilla " title="Agregar">add</span>
                        <span className="logo_opciones_de_grilla" title="Asignar">A</span>
                    </div>
                    <div className="cont_btn_novead">
                        <span className="logo_opciones_de_grilla" title="Quitar">Q</span>
                        <span className="logo_opciones_de_grilla" title="Finalizar">F</span>
                    </div>
                </div>

                {/* <!-- contenedor opciones quitar y asignar --> */}
                <div style={{ top: `${movimientoY_AQAF - 50}px`, left: `${movimientoX_AQAF}px` }} className="cont_btn_A_Q_Agregar filtro"> {/* FILTRO */}
                    <span title="Asignar" className="btn_A_Q_Agregar">A</span>
                    <span title="Quitar" className="btn_A_Q_Agregar">Q</span>
                </div>

                {/* CONTENEDOR DE NOVEDADES DE A Q A F */}
                <CuadroAQAF />

            </div>
        </>
    );
}

export default Grid;
