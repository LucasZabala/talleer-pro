import './CuadroAQAF.css';

function CuadroAQAF() {
    
    return (

        <>
            {/* CONTENEDOR DE NOVEDADES DE A Q A F */}
            <div className='cont-padre-cuadro-A-Q-A-F filtro'> {/* FILTRO */}
                {/* CONTENEDOR Agregar */}
                {/* <!-- AGREGAR /////////--> */}
                <div className='A_A_Q_F agregar_novedad'> {/* FILTRO */}
                    {/* <!-- ariba --> */}
                    <div className='cont-arriba'>
                        <h3 className='title_novedad'>AGREGAR NOVEDAD AL INTERNO: </h3>
                        <span className='material-symbols-outlined cancel_novedad'>
                            cancel
                        </span>
                    </div>
                    {/* <!-- tab form 1 y 2 --> */}
                    <div className='contenedor_tab_form1_form2'>
                        <span className='tab_form select_tab_form'>Novedad por correo</span>
                        <span className='tab_form'>Novedad Manual</span>
                    </div>
                    {/* <!-- abajo --> */}
                    <form className='cont-abajo'> {/* FILTRO */}

                        <div className='contTABLA_AGREGAR'>
                            <table>
                                <tr className='encabezadoTabla_AGREGAR'>
                                    <th>Fecha</th>
                                    <th>Conductor</th>
                                    <th>Sector</th>
                                    <th>Novedad</th>
                                </tr>
                                <tr className='filasTablaAgregar'>
                                    <td>11/04/2001</td>
                                    <td>Tina</td>
                                    <td>Gomeria</td>
                                    <td>Operario 1</td>
                                </tr>
                                <tr className='filasTablaAgregar'>
                                    <td>22/10/2001</td>
                                    <td>Fran</td>
                                    <td>Mecanica</td>
                                    <td>Operario 2</td>
                                </tr>
                                <tr className='filasTablaAgregar'>
                                    <td>30/10/2002</td>
                                    <td>Bau</td>
                                    <td>Electricidad</td>
                                    <td>Operario 3</td>
                                </tr>
                                <tr className='filasTablaAgregar'>
                                    <td>31/10/02</td>
                                    <td>Lucas</td>
                                    <td>Carroceria</td>
                                    <td>Operario 3</td>
                                </tr>
                                <tr className='filasTablaAgregar'>
                                    <td>02/11/2004</td>
                                    <td>Tati</td>
                                    <td>Neumatica</td>
                                    <td>Operario 3</td>
                                </tr>
                                <tr className='filasTablaAgregar'>
                                    <td>03/11/2004</td>
                                    <td>Diego</td>
                                    <td>Aire Acondicionado</td>
                                    <td>Operario 3</td>
                                </tr>
                                <tr className='filasTablaAgregar'>
                                    <td>04/11/2005</td>
                                    <td>Pepa</td>
                                    <td>Chapa y Pintura</td>
                                    <td>Operario 3</td>
                                </tr>

                            </table>
                        </div>

                        <label className='titulo_Espacio' for='fechaAgregar_1'>Fecha</label><br />
                        <input type='date' className='opciones_Sector' readonly required /><br />
                        <label className='titulo_Espacio' for='conductorAgregar_1'>Conductor</label><br />
                        <input type='text' className='opciones_Sector' readonly required /><br />
                        <label className='titulo_Espacio' for='opcionesSector_Agregar_1'>Sector</label><br />
                        <select className='opciones_Sector'>
                            <option value='Mecanica' selected>Mecanica</option>
                            <option value='Electricidad'>Electricidad</option>
                            <option value='Carroceria'>Carroceria</option>
                            <option value='Gomeria'>Gomeria</option>
                            <option value='Aire Acondicionado'>Aire Acondicionado</option>
                            <option value='Chapa y Pintura'>Chapa y Pintura</option>
                            <option value='Neumatica'>Neumatica</option>
                        </select>
                        <br />
                        <div className='contenedor_Novedad'>
                            <span>

                                <label className='titulo_Espacio' for='buscadorNovedad_Agregar_1'>Novedades</label><br />
                                <div>
                                    <input type='search' className='opciones_Sector'
                                        autocomplete='off' required readonly />
                                    <hr />
                                </div>
                            </span>

                            <span>
                                <label className='titulo_Espacio' for='demora_Novedad_Agregar_1'>Tiempo de Tarea</label><br />
                                <span className='cont_Tiempo_Tarea_Form'>
                                    <input type='time' className='demora_Novedad' required />
                                    <span className='material-symbols-outlined aceptarTiempoTarea'>
                                        done
                                    </span>
                                </span>
                            </span>
                        </div>
                        <span>
                            <label className='titulo_Espacio' for='comentario_Novedad_Agregar_1'>Comentario</label><br />
                            <textarea className='comentarioNovedad'></textarea>
                        </span>
                        <br /><br /><br />
                        <samp className='contenedor_BTN'>
                            <button type='reset'>Cancelar</button>
                            <button>Guardar</button>
                        </samp>

                        {/* <!-- CONTENEDOR DE ADVERTENCIA --> */}
                        <div className='cont-advertencia_Form_1 filtro'> {/* FILTRO */}
                            <span className='contenedor-titulo'><h5 className='titulos-Adeverrtencia'>ATENCION!!</h5></span>

                            <span className='contenedor-parrafo'><p className='texto-Advertencia'>La novedad que esta quitando se almacena en una tabla que sera analizada por el administrador</p></span>
                            <samp className='contenedor_BTN_Advertencia_form_1'>
                                <div className='btn_Advertencia_Form_1'>Cancelar</div>
                                <div className='btn_Advertencia_Form_1'>Aceptar</div>
                            </samp>
                        </div>
                    </form>

                    {/* <!-- formulario 2 --> */}
                    <form className='cont-abajo filtro'> {/* FILTRO */}
                        <label className='titulo_Espacio' for='opcionesSector_Agregar_2'>Sector</label><br />
                        <select className='opciones_Sector'>
                            <option value='Mecanica' selected>Mecanica</option>
                            <option value='Electricidad'>Electricidad</option>
                            <option value='Carroceria'>Carroceria</option>
                            <option value='Gomeria'>Gomeria</option>
                            <option value='Aire Acondicionado'>Aire Acondicionado</option>
                            <option value='Chapa y Pintura'>Chapa y Pintura</option>
                            <option value='Neumatica'>Neumatica</option>
                        </select>
                        <br />
                        <div className='contenedor_Novedad'>
                            <span>

                                <label className='titulo_Espacio' for='buscadorNovedad_Agregar_2'>Novedades</label><br />
                                <div>
                                    <span className='contenedorBuscadorNovedades_Flecha'>
                                        <input type='search' className='buscadorNovedad'
                                            placeholder='Buscar' autocomplete='off' required />
                                        <span className='material-symbols-outlined'>
                                            arrow_drop_down
                                        </span>
                                    </span>
                                    <hr />
                                    <ul className='opciones_Novedad opciones_Novedad_Agregar'> {/* FILTRO */}

                                        {/* <!-- mecanicas --> */}
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>BARRA ESTABILIZADORA DELANTERA</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>BARRA ESTABILIZADORA TRASERA</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>BARRA CORTA DE DIRECCION</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>CAMBIAR CRUCETA DE CARDAN</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>CAMBIAR KIT DE EMBRAGUE</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>CAMBIAR REGISTRO DE FRENO (1)</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>CAMBIAR SOPORTE DE MOTOR (1)</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>CAMBIO AMORTIGUADORES (2) DELANTEROS</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>CAMBIO AMORTIGUADORES (2) TRASEROS</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>CAMBIO BOMBA DE AGUA</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>CAMBIO BUJE BARRA ESTABILIZADORA DELANTERA</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>CAMBIO BUJE BARRA ESTABILIZADORA TRASERA</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>CAMBIO BUJE Y PERNO ENGEMELO</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>CAMBIO CENTRO DE CARDAN</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>CAMBIO CINTA DE FRENO (1 RUEDA)</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>CAMBIO DE BIELETAS (1)</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>CAMBIO DE CORREA CIGÜEÑAL</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>CAMBIO DE CORREA DE ALTERNADOR</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>CAMBIO DE TERMOSTATOS</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>CAMBIO EXTREMO BARRA LARGA</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>CAMBIO FILTRO DIRECCION</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>CAMBIO FUELLE DE ESCAPE</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>CAMBIO GRAMPA ELASTICO (1)</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>CAMBIO HOJA DE ELASTICO DELANTERA DERECHA</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>CAMBIO HOJA DE ELASTICO DELANTERA IZQUIERDA</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>CAMBIO HOJA DE ELASTICO TRASERA DERECHA</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>CAMBIO HOJA DE ELASTICO TRASERA IZQUIERDA</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>CAMBIO MANGUERAS DE REFRIGERACION</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>CAMBIO PEDAL ACELERADOR</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>CAMBIO SOPORTE CAÑO ESCAPE</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>COLOCACION RULEMAN MASA DEL</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>COLOCACION/EXTRACCION BARRA ESTABILIZADORA</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>COLOCACION/EXTRACCION CAJA DE VELOCIDAD</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>COLOCACION/EXTRACCION DE TURBO</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>COLOCACION/EXTRACCION INTERCOOLER</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>COLOCACION/EXTRACCION MULTIPLE ESCAPE</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>COLOCACION/EXTRACCION RADIADOR</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>COLOCACION/EXTRACCION VENTILADOR RADIADOR</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>CONTROLAR ELASTICOS</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>CONTROLAR PUNTOS FIJOS DELANTERO DERECHO</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>CONTROLAR PUNTOS FIJOS DELANTERO IZQUIERDO</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>CONTROLAR PUNTOS FIJOS TRASERO DERECHO</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>CONTROLAR PUNTOS FIJOS TRASERO IZQUIERDO</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>CURVAR ELASTICO DELANTERO DERECHO</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>CURVAR ELASTICO DELANTERO IZQUIERDO</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>CURVAR ELASTICO TRASERO DERECHO</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>CURVAR ELASTICO TRASERO IZQUIERDO</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>CURVATURA Y ALTURA</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>ENGRASE Y ALEMITES</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>ESTADO DE HOJAS</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>EXTRACCION RULEMAN MASA DEL.</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>LIMPIEZA DE RADIADOR/INTERCOOLER</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>MASA DELANTERA DERECHA</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>MASA DELANTERA IZQUIERDA</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>MASA TRASERA DERECHA</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>MASA TRASERA IZQUIERDA</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>MASAS DELANTERAS</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>MASAS TRASERAS</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>PERNO Y BUJES</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>PREPARAR PARA RTV</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>QUITAR PERDIDA DE ACEITE</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>QUITAR PERDIDA DE AGUA MOTOR</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>QUITAR PERDIDA DE COMB.</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>REGULAR EMBRAGUE</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>REGULAR FRENOS EN GENERAL</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>REGULAR VARILLAJE CAMBIOS</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>REGULAR VALVULA DE MOTOR</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>REPARAR MOTOR</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>REPARAR POLEA TENSORA MB</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>REPARAR REGISTRO DE FRENO</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>REVISAR/REPARAR POTENCIA MOTOR</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>SERVICIO # 1 - FOSA RAPIDA</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>SERVICIO # 2 - FOSA RAPIDA</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>SERVICIO 15.000 KM.</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>SOPORTE DE ELASTICOS</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Mecanica_Agregar'>OTRA</li>
                                        {/* <!-- electricidad --> */}
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Electricidad_Agregar'>CAMBIAR BORNES DE BATERIA</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Electricidad_Agregar'>CAMBIAR MODULO PLD</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Electricidad_Agregar'>CAMBIAR Y/O REPARAR TIMBRE</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Electricidad_Agregar'>CAMBIO ALTERNADOR MOTOR</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Electricidad_Agregar'>CAMBIO DE ARRANQUE</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Electricidad_Agregar'>CAMBIO DE BATERIAS (2)</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Electricidad_Agregar'>CAMBIO DE BRAZO L/PARABRISAS</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Electricidad_Agregar'>CAMBIO DE BULBO LUZ DE STOP</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Electricidad_Agregar'>CAMBIO DE ESCOBILLA L/PARABRISA</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Electricidad_Agregar'>CAMBIO DE FAROS LATERALES</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Electricidad_Agregar'>CAMBIO DE FAROS TRASEROS</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Electricidad_Agregar'>CAMBIO DE FUSIBLES Y RELAY DESTELLADOR</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Electricidad_Agregar'>CAMBIO DE IMPRESORA BOLETOS</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Electricidad_Agregar'>CAMBIO DE LLAVE L/PARABRISAS</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Electricidad_Agregar'>CAMBIO DE OPTICAS</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Electricidad_Agregar'>CAMBIO DE TECLA BALIZA</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Electricidad_Agregar'>CAMBIO MOTOR L/PARABRISAS</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Electricidad_Agregar'>CAMBIO PANTALLA/TECLADO</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Electricidad_Agregar'>CAMBIO SENSOR DE MARCHA ATRÁS/1RA/NEUTRO</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Electricidad_Agregar'>CABLEADO DE MOTOR</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Electricidad_Agregar'>COMPLETAR LUCES</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Electricidad_Agregar'>LIMPIEZA DE TIKETERA</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Electricidad_Agregar'>QUITAR ERRORES DE CAJA DE CAMBIO</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Electricidad_Agregar'>REALIZAR BAJADA FORZADA EQUIPO SUBE</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Electricidad_Agregar'>REPARACION DE ARRANQUE</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Electricidad_Agregar'>REPARAR BOCINA (SOLDAR PLAQUETA)</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Electricidad_Agregar'>REPARAR CARTEL DE RUTA</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Electricidad_Agregar'>REPARAR DESEMPAÑADOR</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Electricidad_Agregar'>REPARAR FRENO MOTOR</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Electricidad_Agregar'>REPARAR INSTALACION DE ACELERADOR</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Electricidad_Agregar'>REPARAR INSTALACION DE LUCES</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Electricidad_Agregar'>REPARAR INSTALACION DE SENSOR DE ACEITE</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Electricidad_Agregar'>REPARAR INSTALACION ELECT. DE ARRANQUE</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Electricidad_Agregar'>REPARAR INSTALACION L/PARABRISA</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Electricidad_Agregar'>REPARAR MARCADOR DE TEMPERATURA</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Electricidad_Agregar'>REPARAR MOTOR DE LIMPIA PARABRISAS</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Electricidad_Agregar'>PREPARAR PARA RTV</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Electricidad_Agregar'>SOLDAR PLAQUETA CARTEL DE RUTA</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Electricidad_Agregar'>SOLDAR SOPORTE ALTERNADOR</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Electricidad_Agregar'>OTRA</li>
                                        {/* <!-- carroceria --> */}
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Carroceria_Agregar'>ARMAR BANDEJA MONEDERO</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Carroceria_Agregar'>ASEGURAR ASIENTO CONDUCTOR</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Carroceria_Agregar'>ASEGURAR CUBRE OPTICAS</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Carroceria_Agregar'>ASEGURAR ESPEJOS VARIOS</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Carroceria_Agregar'>ASEGURAR PARASOL</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Carroceria_Agregar'>ASEGURAR PASARRUEDA GOMA</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Carroceria_Agregar'>ASEGURAR PERFILES ALUMINIO</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Carroceria_Agregar'>ASEGURAR PROTECTOR TURBO</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Carroceria_Agregar'>ASEGURAR TABLERO LUCES</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Carroceria_Agregar'>ASEGURAR TAPA DE MOTOR</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Carroceria_Agregar'>ASEGURAR/REGULAR MOVIMIENTO L/PARAB</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Carroceria_Agregar'>CAMBIO DE CARTEL DE RUTA</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Carroceria_Agregar'>CAMBIO DE CINTURON SEGURIDAD</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Carroceria_Agregar'>CAMBIO DE ESPEJO RETROVISOR SOLO</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Carroceria_Agregar'>CAMBIO DE MARQUESINA</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Carroceria_Agregar'>CAMBIO DE PARAGOLPE</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Carroceria_Agregar'>CAMBIO DE PASAMANOS</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Carroceria_Agregar'>CAMBIO DE TANQUE DE COMB.</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Carroceria_Agregar'>CAMBIO ESPEJO RETROVISOR C/SOPORTE</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Carroceria_Agregar'>CAMBIO FUELLE DE PALANCA CAMBIOS</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Carroceria_Agregar'>CAMBIO MANGUERA DE ZORRINO</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Carroceria_Agregar'>COLOCACCION CHAPON ALTERNADOR A/AC</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Carroceria_Agregar'>COLOCACION BANDEJA MONEDERO</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Carroceria_Agregar'>COLOCACION CADENA A TAPA DE TANQUE</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Carroceria_Agregar'>COLOCACION DE CORTINAS</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Carroceria_Agregar'>COLOCACION PARABRISAS IZ/DER</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Carroceria_Agregar'>COLOCACION PISO DE GOMA EN ESTRIBO</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Carroceria_Agregar'>COLOCAR CADENA A PURGADOR DE TACHO</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Carroceria_Agregar'>COLOCAR MARTILLO EMERGENCIA</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Carroceria_Agregar'>CONTROLAR PALANCA DE CAMBIO</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Carroceria_Agregar'>ESTRIBO TRASERO</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Carroceria_Agregar'>LUBRICAR DEPRESORES/PULMON DE PUERTA</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Carroceria_Agregar'>PARAGOLPE DELANTERO</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Carroceria_Agregar'>PARAGOLPE TRASERO</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Carroceria_Agregar'>PINTAR LLANTA</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Carroceria_Agregar'>PEGAR CINTA REFLECTARIA</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Carroceria_Agregar'>QUITAR BUTACA SIMPLE</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Carroceria_Agregar'>QUITAR BUTSCAS DOBLE</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Carroceria_Agregar'>REPARACION TAPIZADO DE ASIENTO</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Carroceria_Agregar'>REPARAR ASIENTO DE CONDUCTOR</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Carroceria_Agregar'>REPARAR ASIENTO DE PASAJEROS</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Carroceria_Agregar'>REPARAR ESPEJO RETROVISOR</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Carroceria_Agregar'>PREPARAR PARA RTV</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Carroceria_Agregar'>REPARAR PUERTA DEL/TRAS</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Carroceria_Agregar'>REPARAR SOPORTE PALANCA CAMBIO</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Carroceria_Agregar'>REPARAR TAPA DE BATERIAS</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Carroceria_Agregar'>SELLAR TECHO/VENTANILLAS</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Carroceria_Agregar'>SOLDAR CAÑO DE ESCAPE</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Carroceria_Agregar'>SOLDAR CAÑO DE PASAMANOS</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Carroceria_Agregar'>SOLDAR SOPORTE CAÑO DE ESCAPE</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Carroceria_Agregar'>SOLDAR SOPORTE DE CALEFACTOR</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Carroceria_Agregar'>SOLDAR SOPORTE PARAGOLPE DEL/TRAS</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Carroceria_Agregar'>SOLDAR SUNCHO DE TANQUE COMB.</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Carroceria_Agregar'>SOLDAR/REMACHAR PEDAL ACELERADOR</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Carroceria_Agregar'>OTRA</li>
                                        {/* <!-- gomeria --> */}
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Gomeria_Agregar'>CALIBRADO COMPLETO</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Gomeria_Agregar'>CAMBIAR BULON DE RUEDA</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Gomeria_Agregar'>CAMBIAR LLANTA</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Gomeria_Agregar'>COLOCACION CAMPANA</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Gomeria_Agregar'>COLOCACION CUBIERTA</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Gomeria_Agregar'>DESARME DE RUEDAS</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Gomeria_Agregar'>EXTRACCION CAMPANA</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Gomeria_Agregar'>EXTRACCION CUBIERTA</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Gomeria_Agregar'>PARCHAR RUEDA</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Gomeria_Agregar'>REAPRETAR TUERCAS DE RUEDA</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Gomeria_Agregar'>OTRA</li>
                                        {/* <!-- aire acondicionado --> */}
                                        <li className='li_Agregar_Novedad_Form_2 novedad_AA_Agregar'>ARMAR EQUIPO A/AC</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_AA_Agregar'>CAMBIAR CORREA CORTA</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_AA_Agregar'>CAMBIAR CORREA LARGA</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_AA_Agregar'>CAMBIAR MANGUERA DE CALEFACCION</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_AA_Agregar'>CAMBIO MOTOR BITURBO</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_AA_Agregar'>COLOCACION COMPRESOR</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_AA_Agregar'>LIMPIEZA EQUIPO DE A/AC</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_AA_Agregar'>QUITAR PERDIDA AGUA CALEFACTOR</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_AA_Agregar'>QUITAR PERDIDA DE GAS A/AC</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_AA_Agregar'>REPARAR INSTALACION A/AC</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_AA_Agregar'>OTRA</li>
                                        {/* <!-- chapa y pintura --> */}

                                        {/* <!-- neumatica --> */}
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Neumatica_Agregar'>CAMBIO CILINDRO DE PUERTA</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Neumatica_Agregar'>CAMBIO COMPRESOR (MOTOR)</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Neumatica_Agregar'>CAMBIO DE CAÑO DE COMPRESOR</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Neumatica_Agregar'>CAMBIO DE LLAVE DEPRESORA PUERTA</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Neumatica_Agregar'>CAMBIO DE TAPA DE COMPRESOR</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Neumatica_Agregar'>CAMBIO PULMON DE FRENO</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Neumatica_Agregar'>CAMBIO PULMON DE SUSPENSION</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Neumatica_Agregar'>CAMBIO SERVO EMBRAGUE</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Neumatica_Agregar'>CAMBIO VALV. 4 VIAS</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Neumatica_Agregar'>CAMBIO VALV. GOBERNADORA DE AIRE</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Neumatica_Agregar'>CAMBIO VALV. PEDALERA DE FRENO</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Neumatica_Agregar'>CAMBIO VALV. RELE</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Neumatica_Agregar'>INSTALAR PISTOLA DE AIRE</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Neumatica_Agregar'>QUITAR PERDIDAS DE AIRE</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Neumatica_Agregar'>REPARACION BOMBIN DE EMBRAGUE</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Neumatica_Agregar'>PREPARAR PARA RTV</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Neumatica_Agregar'>REPARAR PULMON DE PUERTA</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Neumatica_Agregar'>REPARAR SERVO EMBRAGUE</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Neumatica_Agregar'>REPARAR TAPA DE COMPRESOR</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Neumatica_Agregar'>REPARAR VALV. DE 4 VIAS</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Neumatica_Agregar'>REPARAR VALV. GOBERNADORA</li>
                                        <li className='li_Agregar_Novedad_Form_2 novedad_Neumatica_Agregar'> OTRA</li>
                                        {/* <!-- otra --> */}
                                        <li className='li_Agregar_Novedad_Form_2 nonvedad_Otra_Agregar'> DE GRASERA TALLER</li>
                                        <li className='li_Agregar_Novedad_Form_2 nonvedad_Otra_Agregar'>MANTENIMIENTO UNIDAD DE AUXILIO</li>
                                        <li className='li_Agregar_Novedad_Form_2 nonvedad_Otra_Agregar'>TRASLADO DE UNIDADES A REPARAR</li>
                                        <li className='li_Agregar_Novedad_Form_2 nonvedad_Otra_Agregar'>TRASLADO DE UNIDADES A RTV</li>
                                        <li className='li_Agregar_Novedad_Form_2 nonvedad_Otra_Agregar'>OTRA</li>

                                    </ul>

                                </div>
                            </span>

                            <span>
                                <label className='titulo_Espacio' for='demora_Novedad_Agregar_2'>Tiempo de Tarea</label><br />
                                <span className='cont_Tiempo_Tarea_Form'>
                                    <input type='time' className='demora_Novedad' required />
                                    <span className='material-symbols-outlined aceptarTiempoTarea'>
                                        done
                                    </span>
                                </span>
                            </span>
                        </div>
                        <span>
                            <label className='titulo_Espacio' for='comentario_Novedad'>Comentario</label><br />
                            <textarea className='comentarioNovedad'></textarea>
                        </span>
                        <br />
                        <samp className='contenedor_BTN'>
                            <button type='reset' form='formulario_Agregar_2'>Cancelar</button>
                            <button form='formulario_Agregar_2'>Guardar</button>
                        </samp>
                    </form>
                </div>

                {/* <!-- ASIGNAR//////// --> */}
                <div className="A_A_Q_F asignar_novedad filtro"> {/* FILTRO */}
                    {/* <!-- ariba --> */}
                    <div className="cont-arriba">
                        <h3 className="title_novedad">ASIGNAR NOVEDAD</h3>
                        <span className="material-symbols-outlined cancel_novedad">
                            cancel
                        </span>
                    </div>
                    {/* <!-- abajo --> */}
                    <form className="cont-abajo">
                        <label className="titulo_Espacio" for="ID_Novedad_Asignar">ID Novedad</label><br/>
                        <input type="text" className="opciones_Sector" required/>
                        <br/>

                        <label className="titulo_Espacio" for="Sector_Asignar">Sector</label><br/>
                        <input type="search" className="opciones_Sector" autocomplete="off" required readonly/>
                        <br/>
                        <div className="contenedor_LEG_Operario">
                            <span>
                                <label className="titulo_Espacio" for="Novedad_Asignar">Novedad</label><br/>
                                <input type="search" className="opciones_Sector" autocomplete="off" required readonly/>
                            </span>
                            <span>
                                <label className="titulo_Espacio" for="Tiempo_Espera_Asignar">Tiempo de Espera</label><br/>
                                <input type="time" className="demora_Novedad" required readonly/>

                            </span>
                        </div>

                        <div className="contenedor_LEG_Operario">
                            <span>
                                <label className="titulo_Espacio" for="Legajo_Asignar">Legajo</label><br/>
                                <input type="text" className="opciones_Sector" required/>
                            </span>
                            <span>
                                <label className="titulo_Espacio" for="Operario_Asignar">Operario</label><br/>
                                <input type="text" className="opciones_Sector" required readonly/>

                            </span>
                        </div>

                        <button className="btn_imprimir" type="button">Imprimir</button>
                        <samp className="contenedor_BTN">
                            <button type="reset">Cancelar</button>
                            <button >Guardar</button>
                        </samp>

                    </form>

                </div>
            </div>
        </>

    );
}

export default CuadroAQAF;

