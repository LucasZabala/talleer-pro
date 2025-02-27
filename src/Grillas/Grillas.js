import './Grillas.css';

//HEADER
import Header from '../Componentes/Headers/Header.js';

import Btns from '../Componentes/Btns.js';
import Vacio from '../Componentes/Vacio.js';
import ContCentralArriba from '../Componentes/ContCentralArriba.js';
import MiniGrids from '../Componentes/MiniGrids.js';
import ResumenNovedades from '../Componentes/ResumenNovedades.js'
import CuadroAQAF from '../Componentes/CuadroAQAF.js';
import Tabls from '../Componentes/Tabls.js';

import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue, push, set, remove } from "firebase/database";
import { getAuth, onAuthStateChanged } from 'firebase/auth';


//BASE DE DATOS FIREBASE
import app from '../ConectedFirebase/Config/FirebaseConfig.js';
import Form from '../ConectedFirebase/Form.js';

//FUNCION PRINCIPAL
function Grid() {

    //Activar Formulario
    const [showForm, setShowForm] = useState(false);

    //separar tabla internos
    const [numerosInternos, setNumerosInternos] = useState([]);
    const [tablaPendiente, setTablaPendiente] = useState([]);
    const [tablaEnCurso, setTablaEnCurso] = useState([]);
    const [tablaFinalizado, setTablaFinalizado] = useState([]);
    const [tablaHistorial, setTablaHistorial] = useState([]);

    ///////////////////////////////
    //Recibir Novedades
    useEffect(() => {
        const db = getDatabase(app);
        const dbRef = ref(db, 'Tabla');

        const unsubscribe = onValue(dbRef, (snapshot) => {
            if (snapshot.exists()) {
                const newData = Object.values(snapshot.val());

                // 1. Obtener los números internos y eliminar duplicados usando un Set
                const numerosInternosSet = new Set(newData.map(item => item.Interno));
                const numerosInternosUnicos = Array.from(numerosInternosSet); // Convertir el Set a un array

                // 2. Actualizar el estado con los números únicos
                const numerosOrdenados = [...numerosInternosUnicos].sort((a, b) => a - b);
                setNumerosInternos(numerosOrdenados);

                // 3. Mantener el resto de la lógica sin cambios
                setTablaPendiente(newData.filter(item => item.Estado === 'Pendiente'));
                setTablaEnCurso(newData.filter(item => item.Estado === 'En Curso'));
                setTablaFinalizado(newData.filter(item => item.Estado === 'Finalizado'));
                setTablaHistorial(newData);
            } else {
                console.log("No data available");
            }
        });

        return () => unsubscribe();
    }, []);

    //Mostrar Autenticacion
    useEffect(() => {
        //verificar ususario autenticado
        const auth = getAuth(app);

        onAuthStateChanged(auth, (user) => {
            if (user) {
                // Usuario autenticado
                console.log('Usuario autenticado:', user);
            } else {
                // No hay usuario autenticado
                console.log('No hay usuario autenticado');
                setShowForm(true);
            }
        });
    }, []);

    //////////////////////////////


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

    //CONTAR CARROCERIA MECANICA ELECTRICA GOMERIA OTRAS
    const [resumenDeNovedades, setResumenDeNovedades] = useState({
        'Pendiente': {
            CARROCERIA: 0,
            ELECTRICIDAD: 0,
            GOMERIA: 0,
            MECANICA: 0,
            OTRAS: 0
        },
        'En Curso': {
            CARROCERIA: 0,
            ELECTRICIDAD: 0,
            GOMERIA: 0,
            MECANICA: 0,
            OTRAS: 0
        },
        'Finalizado': {
            CARROCERIA: 0,
            ELECTRICIDAD: 0,
            GOMERIA: 0,
            MECANICA: 0,
            OTRAS: 0
        },
        'Historial': {
            CARROCERIA: 0,
            ELECTRICIDAD: 0,
            GOMERIA: 0,
            MECANICA: 0,
            OTRAS: 0
        },
    });

    const sectoresValidos = ['MECANICA', 'ELECTRICIDAD', 'GOMERIA', 'CARROCERIA'];


    // variables filtrar internos y filas de tabla por novedad y trabajos
    const [novedadSeleccionada, setNovedadSeleccionada] = useState('internos');
    const [filtrarInternosProblemas, setFiltrarInternosProblemas] = useState('');
    const [filtrarInternosGrilla, setFiltrarInternosGrilla] = useState('');
    const [filtrarInternosPendiente, setFiltrarInternosPendiente] = useState('');
    const [filtrarInternosEnCurso, setFiltrarInternosEnCurso] = useState('');
    const [filtrarInternosFinalizadas, setFiltrarInternosFinalizadas] = useState('');
    const [filtrarInternosHistorial, setFiltrarInternosHistorial] = useState('');

    // variables filtrar filas de tablas por sector
    const [filtrarFilaTablaSector, setFiltrarFilaTablaSector] = useState('todas');
    const [filtrarSectorPendiente, setFiltrarSectorPendiente] = useState('todas');
    const [filtrarFilaTablaSectorEnCurso, setFiltrarFilaTablaSectorEnCurso] = useState('todas');
    const [filtrarFilaTablaSectorFinalizadas, setFiltrarFilaTablaSectorFinalizadas] = useState('todas');
    const [filtrarFilaTablaSectorHistorial, setFiltrarFilaTablaSectorHistorial] = useState('todas');

    // Seleccionar Fila de TABLA
    const [rowTablaSelect, setRowTablaSelect] = useState(null);

    //CUADROS DE NOVEDADES
    //AGREGAR ASIGNAR FINALIZAR QUITAR
    const [cuadroAgregarNovedad, setCuadroAgregarNovedad] = useState(false);
    const [cuadroAsignarNovedad, setCuadroAsignarNovedad] = useState(false);
    const [cuadroFinalizarNovedad, setCuadroFinalizarNovedad] = useState(false);
    const [cuadroQuitarNovedad, setCuadroQuitarNovedad] = useState(false);


    ////////////////////////////////////////////////////////////////////////////////


    //NUMEROS DE INTERNOS


    // funcion para cambiar las novedades
    function SeleccinarBtnNovedad(novedad) {
        if (numeroInternoSelect != 0) {
            setContCentralAbajoDerechaGrilla(true);
            setNovedadSeleccionada(novedad);
            switch (novedad) {
                case 'pendiente':
                    setVacio_2('btns-novedad-ant');
                    setbtnPendiente('btns-novedad-select');
                    setbtnEnCurso('btns-novedad-post');
                    setbtnFinalizadas('');
                    setbtnHistorial('');
                    setVacio_3('');

                    //Filtrar internos problemas
                    setFiltrarInternosProblemas(filtrarInternosPendiente);
                    //Filtrar Sector Select
                    setFiltrarFilaTablaSector(filtrarSectorPendiente);
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
                    //Filtrar Sector Select
                    setFiltrarFilaTablaSector(filtrarFilaTablaSectorEnCurso);
                    break;
                case 'finalizado':
                    setVacio_2('');
                    setbtnPendiente('');
                    setbtnEnCurso('btns-novedad-ant');
                    setbtnFinalizadas('btns-novedad-select');
                    setbtnHistorial('btns-novedad-post');
                    setVacio_3('');

                    //Filtrar internos problemas
                    setFiltrarInternosProblemas(filtrarInternosFinalizadas);
                    //Filtrar Sector Select
                    setFiltrarFilaTablaSector(filtrarFilaTablaSectorFinalizadas);
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
                    //Filtrar Sector Select
                    setFiltrarFilaTablaSector(filtrarFilaTablaSectorHistorial);
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
        setFiltrarInternosProblemas(e.target.value.toString().toLowerCase()); //valor del input .replace(/\s+/g, '')
        switch (novedadSeleccionada) {
            case 'pendiente':
                setFiltrarInternosPendiente(e.target.value.toString().toLowerCase());
                setFiltrarSectorPendiente('todas');
                setFiltrarFilaTablaSector('todas');
                break;
            case 'encurso':
                setFiltrarInternosEnCurso(e.target.value.toString().toLowerCase());
                setFiltrarFilaTablaSectorEnCurso('todas');
                setFiltrarFilaTablaSector('todas');
                break;
            case 'finalizado':
                setFiltrarInternosFinalizadas(e.target.value.toString().toLowerCase());
                setFiltrarFilaTablaSectorFinalizadas('todas');
                setFiltrarFilaTablaSector('todas');
                break;
            case 'historial':
                setFiltrarInternosHistorial(e.target.value.toString().toLowerCase());
                setFiltrarFilaTablaSectorHistorial('todas');
                setFiltrarFilaTablaSector('todas');
                break;
            default:
                setFiltrarInternosGrilla(e.target.value.toString().toLowerCase());
                setFiltrarFilaTablaSector('todas');
                break;

        }

    }

    // funcion filtrar filas de tabla y conservarlos en BOTONES de SECTOR
    function FiltrarFilasTablaSector(typoSector) {
        setFiltrarFilaTablaSector(typoSector.toString().toLowerCase()); //valor del btoon de sector .replace(/\s+/g, '')
        switch (novedadSeleccionada) {
            case 'pendiente':
                setFiltrarSectorPendiente(typoSector.toString().toLowerCase());
                //buscador de sector
                setFiltrarInternosPendiente('');
                //buscador en filas
                setFiltrarInternosProblemas('');
                break;
            case 'encurso':
                setFiltrarFilaTablaSectorEnCurso(typoSector.toString().toLowerCase());
                //buscador de sector
                setFiltrarInternosEnCurso('');
                //buscador en filas
                setFiltrarInternosProblemas('');
                break;
            case 'finalizado':
                setFiltrarFilaTablaSectorFinalizadas(typoSector.toString().toLowerCase());
                //buscador de sector
                setFiltrarInternosFinalizadas('');
                //buscador en filas
                setFiltrarInternosProblemas('');
                break;
            case 'historial':
                setFiltrarFilaTablaSectorHistorial(typoSector.toString().toLowerCase());
                //buscador de sector
                setFiltrarInternosHistorial('');
                //buscador en filas
                setFiltrarInternosProblemas('');
                break;
        }

    }

    //AGREGAR RESUMEN NOVEDADES
    useEffect(() => {
        const initialState = {
            'Pendiente': {
                CARROCERIA: 0,
                ELECTRICIDAD: 0,
                GOMERIA: 0,
                MECANICA: 0,
                OTRAS: 0
            },
            'En Curso': {
                CARROCERIA: 0,
                ELECTRICIDAD: 0,
                GOMERIA: 0,
                MECANICA: 0,
                OTRAS: 0
            },
            'Finalizado': {
                CARROCERIA: 0,
                ELECTRICIDAD: 0,
                GOMERIA: 0,
                MECANICA: 0,
                OTRAS: 0
            },
            'Historial': {
                CARROCERIA: 0,
                ELECTRICIDAD: 0,
                GOMERIA: 0,
                MECANICA: 0,
                OTRAS: 0
            },
        };

        const newConteos = tablaHistorial?.filter((tab) => tab.Interno === numeroInternoSelect).reduce((acc, tbs) => {
            const estado = tbs.Estado.toString();
            const sector = tbs.Sector.toUpperCase() || 'OTRAS';
            const sectorFinal = sectoresValidos.includes(sector) ? sector : 'OTRAS';

            acc[estado][sectorFinal] = (acc[estado][sectorFinal] || 0) + 1;
            acc['Historial'][sectorFinal] = (acc['Historial'][sectorFinal] || 0) + 1;

            return acc;
        }, { ...initialState });

        setResumenDeNovedades(newConteos);
    }, [numeroInternoSelect, tablaHistorial]);


    return (
        <>
            <Header />
            <main>
                <Form
                    showForm={showForm}
                    setShowForm={setShowForm}
                />
                <div className='Cont-padre-Grilla'>

                    {/* CONTENEDOR IZQUIERDO GRILLA */}
                    <div className={`${btnIzquierdo ? 'Cont-izquierdo-Grilla' : 'Cont-izquierdo-Grilla-desactivado'}`}>

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
                                clase='material-symbols-outlined btn-desplegar-cont-izquierdo'
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
                            <div onClick={() => SeleccinarBtnNovedad('pendiente')}>
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
                            <div onClick={() => SeleccinarBtnNovedad('finalizado')}>
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
                            sectorSelect={filtrarFilaTablaSector} //envia el sector seleccionado
                            setCuadroAgregarNovedad={setCuadroAgregarNovedad}
                            setCuadroAsignarNovedad={setCuadroAsignarNovedad}
                            setCuadroFinalizarNovedad={setCuadroFinalizarNovedad}
                            setCuadroQuitarNovedad={setCuadroQuitarNovedad}
                        />

                        {/*//////////////// contenedor central abajo grilla ////////////////*/}
                        <div className={`${novedadSeleccionada == 'internos' ? (btnIzquierdo ? 'cont-central-abajo-grilla' : 'cont-central-abajo-grilla-2') : 'filtro'}`}>

                            {/* cont-central-abajo-izquierda-grilla */}
                            <div className='cont-central-abajo-izquierda-grilla'>
                                <div className={`${btnIzquierdo ? 'cont-internos-grilla-2' : 'cont-internos-grilla'}`}>
                                    {
                                        numerosInternos?.map(num => {
                                            return (
                                                <MiniGrids
                                                    key={num}
                                                    numero={num}
                                                    funcion={MostrarNumero}
                                                    numeroBuscado={filtrarInternosProblemas}
                                                    numeroInternoSelect={numeroInternoSelect}
                                                />
                                            );
                                        })
                                    }

                                </div>

                            </div>

                            {/* cont-central-abajo-derecha-grilla */}
                            <div className={contCentralAbajoDerechaGrilla ? 'cont-central-abajo-derecha-grilla' : 'cont-central-abajo-derecha-grilla-escondido'}>

                                {/* <!-- resumen novedades --> */}
                                <div className='cont-title-resumen-novedades'>
                                    <h3 className='title-resumen-novedades'>Resumen de Novedades</h3>
                                </div>


                                {/* <!-- resumen novedades pendientes --> */}
                                <ResumenNovedades
                                    title_Novedad='Pendientes'
                                    resumenDeNovedades={resumenDeNovedades.Pendiente}
                                />

                                {/* <!-- resumen novedades en curso --> */}
                                <ResumenNovedades
                                    title_Novedad='En Curso'
                                    resumenDeNovedades={resumenDeNovedades['En Curso']}
                                />

                                {/* <!-- resumen novedades finalizadas --> */}
                                <ResumenNovedades
                                    title_Novedad='Finalizadas'
                                    resumenDeNovedades={resumenDeNovedades.Finalizado}
                                />

                                {/* <!-- resumen historial de novedades --> */}
                                <ResumenNovedades
                                    title_Novedad='Historial'
                                    resumenDeNovedades={resumenDeNovedades.Historial}
                                />

                            </div>

                        </div>

                        {/*//////////////// contenedor central abajo Pendientes /////////////////*/}
                        <div className={`${novedadSeleccionada == 'pendiente' ? (btnIzquierdo ? 'cont-central-abajo-grilla' : 'cont-central-abajo-grilla-2') : 'filtro'}`}>

                            {/* cont-central-abajo-izquierda-grilla */}
                            <div className='cont-central-abajo-izquierda-grilla-P-EC-F-H'>
                                <div className='cont-P-EC-F-H-grilla'>
                                    <Tabls
                                        tablaInterno={tablaPendiente}
                                        novedadSeleccionada={novedadSeleccionada}
                                        typoNovedad={'pendiente'}
                                        setRowTablaSelect={setRowTablaSelect}
                                        numeroInternoSelect={numeroInternoSelect}
                                        contenidoInput={filtrarInternosPendiente} //envia lo que contene el buscador
                                        contenidoSector={filtrarSectorPendiente} //envia el sector seleccionado
                                    />
                                </div>

                            </div>

                        </div>
                        {/*//////////////// contenedor central abajo En Cruso /////////////////*/}
                        <div className={`${novedadSeleccionada == 'encurso' ? (btnIzquierdo ? 'cont-central-abajo-grilla' : 'cont-central-abajo-grilla-2') : 'filtro'}`}>

                            {/* cont-central-abajo-izquierda-grilla */}
                            <div className='cont-central-abajo-izquierda-grilla-P-EC-F-H'>
                                <div className='cont-P-EC-F-H-grilla'>
                                    <Tabls
                                        tablaInterno={tablaEnCurso}
                                        novedadSeleccionada={novedadSeleccionada}
                                        typoNovedad={'encurso'}
                                        setRowTablaSelect={setRowTablaSelect}
                                        numeroInternoSelect={numeroInternoSelect}
                                        contenidoInput={filtrarInternosEnCurso} //envia lo que contene el buscador
                                        contenidoSector={filtrarFilaTablaSectorEnCurso} //envia el sector seleccionado
                                    />
                                </div>

                            </div>

                        </div>
                        {/*//////////////// contenedor central abajo finalizadas /////////////////*/}
                        <div className={`${novedadSeleccionada == 'finalizado' ? (btnIzquierdo ? 'cont-central-abajo-grilla' : 'cont-central-abajo-grilla-2') : 'filtro'}`}>

                            {/* cont-central-abajo-izquierda-grilla */}
                            <div className='cont-central-abajo-izquierda-grilla-P-EC-F-H'>
                                <div className='cont-P-EC-F-H-grilla'>
                                    <Tabls
                                        tablaInterno={tablaFinalizado}
                                        novedadSeleccionada={novedadSeleccionada}
                                        typoNovedad={'finalizado'}
                                        setRowTablaSelect={setRowTablaSelect}
                                        numeroInternoSelect={numeroInternoSelect}
                                        contenidoInput={filtrarInternosFinalizadas} //envia lo que contene el buscador
                                        contenidoSector={filtrarFilaTablaSectorFinalizadas} //envia el sector seleccionado
                                    />
                                </div>

                            </div>

                        </div>
                        {/*//////////////// contenedor central abajo historial /////////////////*/}
                        <div className={`${novedadSeleccionada == 'historial' ? (btnIzquierdo ? 'cont-central-abajo-grilla' : 'cont-central-abajo-grilla-2') : 'filtro'}`}>

                            {/* cont-central-abajo-izquierda-grilla */}
                            <div className='cont-central-abajo-izquierda-grilla-P-EC-F-H'>
                                <div className='cont-P-EC-F-H-grilla'>
                                    <Tabls
                                        tablaInterno={tablaHistorial}
                                        novedadSeleccionada={novedadSeleccionada}
                                        typoNovedad={'historial'}
                                        setRowTablaSelect={setRowTablaSelect}
                                        numeroInternoSelect={numeroInternoSelect}
                                        contenidoInput={filtrarInternosHistorial} //envia lo que contene el buscador
                                        contenidoSector={filtrarFilaTablaSectorHistorial} //envia el sector seleccionado
                                    />
                                </div>

                            </div>
                        </div>
                    </div>



                    {/* CONTENEDOR DE NOVEDADES DE A Q A F */}
                    <CuadroAQAF
                        //Novdades Por Correo
                        numeroInternoSelect={numeroInternoSelect}
                        //TABLA SELECCIONADA 
                        rowTablaSelect={rowTablaSelect}
                        //Agregar
                        cuadroAgregarNovedad={cuadroAgregarNovedad}
                        setCuadroAgregarNovedad={setCuadroAgregarNovedad}
                        //Asignar
                        cuadroAsignarNovedad={cuadroAsignarNovedad}
                        setCuadroAsignarNovedad={setCuadroAsignarNovedad}
                        //Finalizar
                        cuadroFinalizarNovedad={cuadroFinalizarNovedad}
                        setCuadroFinalizarNovedad={setCuadroFinalizarNovedad}
                        //Quitar
                        cuadroQuitarNovedad={cuadroQuitarNovedad}
                        setCuadroQuitarNovedad={setCuadroQuitarNovedad}
                    />

                </div>
            </main>
        </>
    );
}

export default Grid;


/*
{
    "Demora": "03:43",
    "Detalle_Trabajos_Realizados": "Se cambian las cuatro ruedas traseras",
    "Diagnostico": "Deterioro (pupo)",
    "Empresa": "Xibi-Xibi",
    "Estado": "Finalizado",
    "Fecha_Hora_Fin": "15/04/2015 03:41",
    "Fecha_Hora_Inicio": "15/04/2015 00:01",
    "Fecha_Novedad": "15/04/2015 00:01",
    "Id": 0,
    "Interno": 155,
    "Legajo_1": "127 - LAZO, Mario Isidoro",
    "Legajo_2": "",
    "Novedad_Motivo": "revisar rueda trasera interna derecha",
    "Operativo_Para_Fecha": "15/04/2015 00:00",
    "Pendiente_POR": "Finalizado",
    "Sector": "Gomeria",
    "Tiempo_Tarea": "00:30"
  },
*/





/*
const [conteosInternos, setConteosInternos] = useState([
        {
            Interno: 1,
            Pendiente: {
                CARROCERIA: 0,
                GOMERIA: 0,
                ELECTRICIDAD: 0,
                MECANICA: 0,
                OTRA: 0,
            },
            'En Curso': {
                CARROCERIA: 0,
                GOMERIA: 0,
                ELECTRICIDAD: 0,
                MECANICA: 0,
                OTRA: 0,
            },
            Finalizado: {
                CARROCERIA: 0,
                GOMERIA: 0,
                ELECTRICIDAD: 0,
                MECANICA: 0,
                OTRA: 0,
            },
            Historial: {
                CARROCERIA: 0,
                GOMERIA: 0,
                ELECTRICIDAD: 0,
                MECANICA: 0,
                OTRA: 0,
            },
        },
        {
            Interno: 2,
            Pendiente: {
                CARROCERIA: 0,
                GOMERIA: 0,
                ELECTRICIDAD: 0,
                MECANICA: 0,
                OTRA: 0,
            },
            'En Curso': {
                CARROCERIA: 0,
                GOMERIA: 0,
                ELECTRICIDAD: 0,
                MECANICA: 0,
                OTRA: 0,
            },
            Finalizado: {
                CARROCERIA: 0,
                GOMERIA: 0,
                ELECTRICIDAD: 0,
                MECANICA: 0,
                OTRA: 0,
            },
            Historial: {
                CARROCERIA: 0,
                GOMERIA: 0,
                ELECTRICIDAD: 0,
                MECANICA: 0,
                OTRA: 0,
            },
        },

    ]);

    const sectoresValidos = ['MECANICA', 'ELECTRICIDAD', 'GOMERIA', 'CARROCERIA'];

    useEffect(() => {
        try {

            const newConteos = tablaInternos.reduce((acc, tbs) => {
                const estado = tbs.Estado.toString();
                const sector = tbs.Sector?.toUpperCase() || 'OTRA';

                // Verificamos si el sector está en la lista de sectores válidos
                const sectorFinal = sectoresValidos.includes(sector) ? sector : 'OTRA';

                acc[estado] = acc[estado] || {};
                acc[estado][sectorFinal] = (acc[estado][sectorFinal] || 0) + 1;
                acc['Historial'][sectorFinal] = (acc['Historial'][sectorFinal] || 0) + 1;

                return acc;
            }, { ...conteosInternos });

            setConteosInternos(newConteos);

        } catch (error) {
            console.error('Error al cargar o clasificar los datos:', error);
            // Puedes mostrar un mensaje de error al usuario aquí
        }
    }, [numeroInternoSelect]);
*/


/*
//INTERNOS CON SUS NOVEDADES
    const [conteosInternos, setConteosInternos] = useState({
        Pendiente: {
            CARROCERIA: 0,
            GOMERIA: 0,
            ELECTRICIDAD: 0,
            MECANICA: 0,
            OTRA: 0,
        },
        'En Curso': {
            CARROCERIA: 0,
            GOMERIA: 0,
            ELECTRICIDAD: 0,
            MECANICA: 0,
            OTRA: 0,
        },
        Finalizado: {
            CARROCERIA: 0,
            GOMERIA: 0,
            ELECTRICIDAD: 0,
            MECANICA: 0,
            OTRA: 0,
        },
        Historial: {
            CARROCERIA: 0,
            GOMERIA: 0,
            ELECTRICIDAD: 0,
            MECANICA: 0,
            OTRA: 0,
        },
    });

    const sectoresValidos = ['MECANICA', 'ELECTRICIDAD', 'GOMERIA', 'CARROCERIA'];
    useEffect(() => {
        try {
            
            const newConteos = tablaInternos.reduce((acc, tbs) => {
                const estado = tbs.Estado.toString();
                const sector = tbs.Sector?.toUpperCase() || 'OTRA';

                // Verificamos si el sector está en la lista de sectores válidos
                const sectorFinal = sectoresValidos.includes(sector) ? sector : 'OTRA';

                acc[estado] = acc[estado] || {};
                acc[estado][sectorFinal] = (acc[estado][sectorFinal] || 0) + 1;
                acc['Historial'][sectorFinal] = (acc['Historial'][sectorFinal] || 0) + 1;

                return acc;
            }, { ...conteosInternos });

            setConteosInternos(newConteos);

        } catch (error) {
            console.error('Error al cargar o clasificar los datos:', error);
            // Puedes mostrar un mensaje de error al usuario aquí
        }
    }, [numeroInternoSelect]);



    {/* BOTONES NOVEDAD ASIGNAR QUITAR AGREGAR FINALIZAR 
                {/* <div style={{ top: `${movimientoY_AQAF}px`, left: `${movimientoX_AQAF}px` }} className={`${contAQAF ? 'opciones_de_grilla' : 'filtro'}`}>
                    <p className='titulo_novedad_opciones'>Novedad</p>
                    <div className='cont_btn_novead'>
                        <span onClick={() => setCuadroAgregarNovedad(true)} className='material-symbols-outlined logo_opciones_de_grilla ' title='Agregar'>add</span>
                        <span onClick={() => setCuadroAsignarNovedad(true)} className='logo_opciones_de_grilla' title='Asignar'>A</span>
                    </div>
                    <div className='cont_btn_novead'>
                        <span onClick={() => setCuadroQuitarNovedad(true)} className='logo_opciones_de_grilla' title='Quitar'>Q</span>
                        <span onClick={() => setCuadroFinalizarNovedad(true)} className='logo_opciones_de_grilla' title='Finalizar'>F</span>
                    </div>
                </div> 

{/* <!-- botones opciones quitar y asignar --> 
{/* <div style={{ top: `${movimientoY_AQAF - 50}px`, left: `${movimientoX_AQAF}px` }} className={`${contQA ? 'cont_btn_A_Q_Agregar' : 'filtro'}`}> 
                    <span onClick={() => setCuadroAsignarNovedad(true)} title='Asignar' className='btn_A_Q_Agregar'>A</span>
                    <span onClick={() => setCuadroQuitarNovedad(true)} title='Quitar' className='btn_A_Q_Agregar'>Q</span>
                </div>

{/* <!-- botones opciones quitar y Finalizar --> 
{/* <div style={{ top: `${movimientoY_AQAF - 50}px`, left: `${movimientoX_AQAF}px` }} className={`${contQF ? 'cont_btn_A_Q_Agregar' : 'filtro'}`}> 
                    <span onClick={() => setCuadroFinalizarNovedad(true)} title='Finalizar' className='btn_A_Q_Agregar'>F</span>
                    <span onClick={() => setCuadroQuitarNovedad(true)} title='Quitar' className='btn_A_Q_Agregar'>Q</span>
                </div>



*/