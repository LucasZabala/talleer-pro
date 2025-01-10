
export default function ResumenNovedades({title_Novedad}) {
    return (
        <div className='cont-resumen-novedades-P-C-F-H'>
            <h4 className='resumen-NOV-ACFH'>{title_Novedad}</h4>
            <p className='sub-novedades' id={`carroceria-${title_Novedad}`}>Carroceria: 100</p>
            <p className='sub-novedades' id={`electrica-${title_Novedad}`}>Electrica: 100</p>
            <p className='sub-novedades' id={`gomeria-${title_Novedad}`}>Gomeria: 100</p>
            <p className='sub-novedades' id={`mecanica-${title_Novedad}`}>Mecanica: 100</p>
            <p className='sub-novedades' id={`otras-${title_Novedad}`}>Otras: 100</p>
        </div>
    );
}