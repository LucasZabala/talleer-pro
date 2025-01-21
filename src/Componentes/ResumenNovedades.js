
export default function ResumenNovedades({title_Novedad, resumenDeNovedades}) {
    
    return (
        <div className='cont-resumen-novedades-P-C-F-H'>
            <h4 className='resumen-NOV-ACFH'>{title_Novedad}: {resumenDeNovedades.CARROCERIA + resumenDeNovedades.ELECTRICIDAD + resumenDeNovedades.GOMERIA + resumenDeNovedades.MECANICA + resumenDeNovedades.OTRAS}</h4>
            <p className='sub-novedades'>Carroceria: {resumenDeNovedades.CARROCERIA} </p>
            <p className='sub-novedades'>Electrica: {resumenDeNovedades.ELECTRICIDAD}</p>
            <p className='sub-novedades'>Gomeria: {resumenDeNovedades.GOMERIA}</p>
            <p className='sub-novedades'>Mecanica: {resumenDeNovedades.MECANICA}</p>
            <p className='sub-novedades'>Otras: {resumenDeNovedades.OTRAS}</p>
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