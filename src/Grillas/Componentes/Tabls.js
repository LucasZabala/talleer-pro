import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import tablaInternos from '../../tablas.json';
import './Tabls.css';

const columns = [
  {
    id: 'id',
    label: 'ID',
    padding: '1vw',
    align: 'center',
  },
  {
    id: 'fechaNovedad',
    label: 'Fecha Novedad',
    align: 'center',
  },
  {
    id: 'sector',
    label: 'Sector',
    align: 'center',
  },
  {
    id: 'novedadMotivo',
    label: 'Novedad Motivo',
    minWidth: 170,
    align: 'center',
  },
  {
    id: 'fechaHoraInicio',
    label: 'Fecha y Hora de Inicio',
    minWidth: 120,
    align: 'center',
  },
  {
    id: 'legajo1',
    label: 'Legajo',
    align: 'center',
  },
  {
    id: 'detalleTrabajosRealizados',
    label: 'Detalle de Trabajos Realizados',
    minWidth: 170,
    align: 'center',
  },
  {
    id: 'fechaHoraFin',
    label: 'Fecha y Hora de Finalizacion',
    minWidth: 120,
    align: 'center',
  },
  {
    id: 'estado',
    label: 'Estado',
    align: 'center',
  },
  {
    id: 'pendientePOR',
    label: 'Pendiente Por',
    align: 'center',
  },
];

function createData(id, fechaNovedad, interno, sector, novedadMotivo, fechaHoraInicio, legajo1, detalleTrabajosRealizados, fechaHoraFin, estado, pendientePOR) {
  return { id, fechaNovedad, interno, sector, novedadMotivo, fechaHoraInicio, legajo1, detalleTrabajosRealizados, fechaHoraFin, estado, pendientePOR };
}

const rows = tablaInternos.map(tbs => createData(tbs.Id, tbs.Fecha_Novedad, tbs.Interno, tbs.Sector, tbs.Novedad_Motivo, tbs.Fecha_Hora_Inicio, tbs.Legajo_1, tbs.Detalle_Trabajos_Realizados, tbs.Fecha_Hora_Fin, tbs.Estado, tbs.Pendiente_POR));

export default function StickyHeadTable({ novedadSeleccionada, typoNovedad, setIdTablaSelect, filtrarInternosDelBuscador, filtrarSectorDelBuscador }) {

  const [filtrarPorNovedad, setFiltrarPorNovedad] = useState();

  useEffect(() => {
    switch (novedadSeleccionada) {

      case 'pendientes':
        setFiltrarPorNovedad('pendiente');
        break;
      case 'encurso':
        setFiltrarPorNovedad('en curso');
        break;
      case 'finalizadas':
        setFiltrarPorNovedad('finalizado');
        break;
      default:
        setFiltrarPorNovedad('historial');
    }
  }, [novedadSeleccionada]);


  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [selectedRowId, setSelectedRowId] = useState(null);
  const handleRowClick = (id) => {
    setIdTablaSelect(id); //obtiene id de fila seleccionada
    setSelectedRowId(id);
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  //filtrado
  const [filteredRows, setFilteredRows] = useState(rows);

  // filtrar por Novedad motivo y Detalle de trabajos
  useEffect(() => {
    const filteredData = rows.filter(row => {
      return (
        row.novedadMotivo.toLowerCase().includes(filtrarInternosDelBuscador.toLowerCase()) ||
        row.detalleTrabajosRealizados.toLowerCase().includes(filtrarInternosDelBuscador.toLowerCase())
      );
    });
    setFilteredRows(filteredData);
    setPage(0); // Al filtrar, siempre vamos a la primera página
  }, [rows, filtrarInternosDelBuscador]);

  // filtrar por sector usando criterios
  useEffect(() => {
    // Función auxiliar para filtrar los datos según el criterio
    const filterData = (rows, filterValue) => {
      if (filterValue === 'todas') {
        return rows; // Retorna todos los datos si se selecciona "todas"
      } else if (filterValue === 'otras') {
        return rows.filter(row => {
          return !['mecanica', 'electricidad', 'gomeria', 'carroceria'].includes(row.sector.toLowerCase());
        });
      } else {
        // Filtrado normal basado en el valor ingresado
        return rows.filter(row => {
          return row.sector.toString().toLowerCase().includes(filterValue.toString().toLowerCase());
        });
      }
    };
    const filteredData = filterData(rows, filtrarSectorDelBuscador);
    setFilteredRows(filteredData);
    setPage(0);
  }, [rows, filtrarSectorDelBuscador]);


  return (
    <>
      {novedadSeleccionada === typoNovedad && (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
          <TableContainer sx={{ maxHeight: '74vh', height: 'fit-content' }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth, padding: column.padding, maxHeight: column.maxHeight, height: '5vh' }}
                      sx={{ background: '#2b2b2b', color: '#fff', padding: ' .2vw 0.5vw', fontSize: '1vw' }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredRows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell
                              onClick={() => handleRowClick(row.id)}
                              key={column.id}
                              align={column.align}
                              className={selectedRowId === row.id ? 'selected-row' : ''}
                              style={{
                                height: '5vh',
                                fontSize: '1vw',
                                padding: '0.2vw 0.5vw'
                              }}>
                              {column.format && typeof value === 'number'
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            style={{ width: '100%', fontSize: '1vw', height: '6.5vh', overflow: 'hidden', background: '#474747', color: '#fff', fontWeight: 600 }}
            rowsPerPageOptions={[5, 10, 25, 50, 100]}
            sx={{

              '.MuiTablePagination-toolbar': {
                minHeight: '1vw', // Ajusta según tus necesidades
                fontSize: '1vw'
              },
              '.MuiTablePagination-input': {
                fontSize: '1vw'
              },
            }}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      )}
    </>

  );
}
/*
aquí te explico el código

1. Importando librerías:

El código comienza importando las librerías necesarias:

React: La librería principal para crear componentes de React.
Componentes de Material-UI para la estructura de la tabla (Table, TableBody, etc.).
react-virtuoso: Una librería para renderizar eficientemente conjuntos de datos grandes en tablas.
Chance: Una librería para generar datos aleatorios.

2. Generación de datos:

Función createData: Esta función genera una única fila de datos para la tabla. Utiliza la librería Chance para crear valores aleatorios para campos como nombre, apellido, edad, número de teléfono y estado.
Arreglo columns: Este arreglo define la estructura de la tabla. Especifica el ancho, la etiqueta y la clave de datos para cada columna.
Arreglo rows: Este arreglo almacena los datos reales que se mostrarán en la tabla. Utiliza Array.from para crear un arreglo de 1000 filas, cada una rellenada con datos generados por la función createData.

3. Componentes de tabla virtualizada:

Objeto VirtuosoTableComponents: Este objeto define componentes personalizados para la tabla virtualizada utilizando componentes de Material-UI. Reemplaza componentes como TableContainer, Table, TableHead, etc., para darles estilo según sea necesario para la tabla virtualizada.

4. Contenido del encabezado fijo:

Función fixedHeaderContent: Esta función define el contenido del encabezado de la tabla. Itera a través del arreglo columns y crea una fila de tabla con celdas de encabezado para cada columna. Las celdas del encabezado muestran la etiqueta de la columna y tienen un estilo con un color de fondo.

5. Contenido de las filas:

Función rowContent: Esta función define el contenido de cada fila de la tabla. Toma el índice de la fila y los datos como argumentos y itera a través del arreglo columns. Para cada columna, crea una celda de tabla y muestra el valor correspondiente de los datos de la fila.

6. Componente principal:

Función Tabls: Este es el componente principal que renderiza la tabla virtualizada. Utiliza un componente Paper de Material-UI como contenedor y establece su altura y ancho.
Dentro del componente Paper, utiliza el componente TableVirtuoso de react-virtuoso. Este componente toma varias propiedades:
data: El arreglo de datos que se mostrarán en la tabla (en este caso, rows).
components: Los componentes personalizados definidos en VirtuosoTableComponents para el estilo.
fixedHeaderContent: La función que define el contenido de la fila del encabezado fijo.
itemContent: La función que define el contenido de cada fila de la tabla.
*/