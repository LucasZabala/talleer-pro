
export default function ResumenNovedades({title_Novedad}) {
    
    return (
        <div className='cont-resumen-novedades-P-C-F-H'>
            <h4 className='resumen-NOV-ACFH'>{title_Novedad}</h4>
            <p className='sub-novedades' id={`carroceria-${title_Novedad}`}>Carroceria: </p>
            <p className='sub-novedades' id={`electrica-${title_Novedad}`}>Electrica: </p>
            <p className='sub-novedades' id={`gomeria-${title_Novedad}`}>Gomeria: </p>
            <p className='sub-novedades' id={`mecanica-${title_Novedad}`}>Mecanica: </p>
            <p className='sub-novedades' id={`otras-${title_Novedad}`}>Otras: </p>
        </div>
    );
}

/*
{conteosInternos.CARROCERIA}
{conteosInternos.ELECTRICIDAD}
{conteosInternos.GOMERIA}
{conteosInternos.MECANICA}
{conteosInternos.OTRA}
*/