

import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue, push, set, remove } from "firebase/database";
import app from '../ConectedFirebase/Config/FirebaseConfig.js';

import './CuadroAQAF.css';
import CuadroAgregar from './CuadroAgregar';
import CuadroAsignar from './CuadroAsignar';

function CuadroAQAF({ numeroInternoSelect, rowTablaSelect, cuadroAgregarNovedad, cuadroAsignarNovedad, cuadroFinalizarNovedad, cuadroQuitarNovedad, setCuadroAgregarNovedad, setCuadroAsignarNovedad, setCuadroFinalizarNovedad, setCuadroQuitarNovedad, }) {

    function CerrarCuadrosAAFQ() {
        setCuadroAgregarNovedad(false);
        setCuadroAsignarNovedad(false);
        setCuadroFinalizarNovedad(false);
        setCuadroQuitarNovedad(false);
    }

    /////////////////////////////////////////////////////////AGREGAR/////////////////////////////////////////////////////////

    //NOVEDAD POR CORREO
    //Recibir Novedades Por Correo
    const [novedadCorreo, setNovedadCorreo] = useState([]);
    useEffect(() => {
        const db = getDatabase(app);
        const dbRef = ref(db, 'NovedadCorreo');

        const unsubscribe = onValue(dbRef, (snapshot) => {
            if (snapshot.exists()) {
                const newData = Object.values(snapshot.val());

                setNovedadCorreo(newData);
            } else {
                console.log("No data available");
            }
        });

        return () => unsubscribe();
    }, []);

    //Enviar Novedad Correo a Pendiente
    function EnviarDatos() {
        const db = getDatabase(app);
        const dbRef = ref(db, 'Tabla'); //Referencia a la tabla Users
        const newPostRef = push(dbRef);
        const newUserId = newPostRef.key; //la llave y el id son iguales


        const newUser = {
            Id: newUserId, //la llave y el id son iguales
            Demora: '',
            Detalles_Trabajos_Realizados: '',
            Diagnostico: '',
            Empresa: '',
            Estado: '',
            Fecha_Hora_Fin: '',
            Fecha_Hora_Inicio: '',
            Fecha_Novedad: '',
            Interno: '',
            Legajo_1: '',
            Legajo_2: '',
            Novedad_Motivo: '',
            Operativo_Para_Fecha: '',
            Pendiente_POR: '',
            Sector: '',
            Tiempo_Tarea: ''
        };


        try {
            set(newPostRef, newUser)
                .then(() => {
                    console.log("Nuevo usuario agregado con el ID:", newUserId);
                });
        } catch (error) {
            console.error("Error al agregar el usuario:", error);
            // Handle the error here, for instance, by showing an error message to the user
        }
    }


    //Quitar Novedad Correo

    /////////////////////////////////////////////////////////ASIGNAR/////////////////////////////////////////////////////////
    return (

        <>
            {/* CONTENEDOR DE NOVEDADES DE A Q A F */}
            <div className={cuadroAgregarNovedad || cuadroAsignarNovedad || cuadroFinalizarNovedad || cuadroQuitarNovedad ? 'cont-padre-cuadro-A-Q-A-F' : 'filtro'}> {/* FILTRO */}

                <CuadroAgregar
                    novedadCorreo={novedadCorreo}
                    numeroInternoSelect={numeroInternoSelect}
                    cuadroAgregarNovedad={cuadroAgregarNovedad}
                    CerrarCuadrosAAFQ={CerrarCuadrosAAFQ}
                />

                <CuadroAsignar
                    numeroInternoSelect={numeroInternoSelect}
                    cuadroAsignarNovedad={cuadroAsignarNovedad}
                    CerrarCuadrosAAFQ={CerrarCuadrosAAFQ}
                    rowTablaSelect={rowTablaSelect}
                />

            </div>
        </>

    );
}

export default CuadroAQAF;

