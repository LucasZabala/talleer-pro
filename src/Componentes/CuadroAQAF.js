
import './CuadroAQAF.css';
import CuadroAgregar from './CuadroAgregar';
import CuadroAsignar from './CuadroAsignar';

function CuadroAQAF({ numeroInternoSelect, rowTablaSelect, cuadroAgregarNovedad, cuadroAsignarNovedad, cuadroFinalizarNovedad, cuadroQuitarNovedad, setCuadroAgregarNovedad, setCuadroAsignarNovedad, setCuadroFinalizarNovedad, setCuadroQuitarNovedad, setRowTablaSelectAgregar }) {

    function CerrarCuadrosAAFQ() {
        setCuadroAgregarNovedad(false);
        setCuadroAsignarNovedad(false);
        setCuadroFinalizarNovedad(false);
        setCuadroQuitarNovedad(false);
    }

    return (

        <>
            {/* CONTENEDOR DE NOVEDADES DE A Q A F */}
            <div className={cuadroAgregarNovedad || cuadroAsignarNovedad || cuadroFinalizarNovedad || cuadroQuitarNovedad ? 'cont-padre-cuadro-A-Q-A-F' : 'filtro'}> {/* FILTRO */}

                <CuadroAgregar
                    numeroInternoSelect={numeroInternoSelect}
                    cuadroAgregarNovedad={cuadroAgregarNovedad}
                    CerrarCuadrosAAFQ={CerrarCuadrosAAFQ}
                    setRowTablaSelectAgregar={setRowTablaSelectAgregar}
                />

                <CuadroAsignar
                    numeroInternoSelect={numeroInternoSelect}
                    cuadroAsignarNovedad={cuadroAsignarNovedad}
                    CerrarCuadrosAAFQ={CerrarCuadrosAAFQ}
                    rowTablaSelect = {rowTablaSelect}
                />

            </div>
        </>

    );
}

export default CuadroAQAF;

