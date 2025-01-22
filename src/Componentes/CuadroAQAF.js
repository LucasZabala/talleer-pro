
import './CuadroAQAF.css';
import CuadroAgregar from './CuadroAgregar';
import CuadroAsignar from './CuadroAsignar';

function CuadroAQAF({ numeroInternoSelect, cuadroAgregarNovedad, cuadroAsignarNovedad, cuadroFinalizarNovedad, uadroQuitarNovedad, setCuadroAgregarNovedad, setCuadroAsignarNovedad, setCuadroFinalizarNovedad, setCuadroQuitarNovedad }) {


    return (

        <>
            {/* CONTENEDOR DE NOVEDADES DE A Q A F */}
            <div className={cuadroAgregarNovedad || cuadroAsignarNovedad || cuadroFinalizarNovedad || uadroQuitarNovedad ? 'cont-padre-cuadro-A-Q-A-F' : 'filtro'}> {/* FILTRO */}

                <CuadroAgregar
                    numeroInternoSelect={numeroInternoSelect}
                    cuadroAgregarNovedad={cuadroAgregarNovedad}
                    setCuadroAgregarNovedad={setCuadroAgregarNovedad}
                />

                <CuadroAsignar
                    numeroInternoSelect={numeroInternoSelect}
                    cuadroAsignarNovedad={cuadroAsignarNovedad}
                />

            </div>
        </>

    );
}

export default CuadroAQAF;

