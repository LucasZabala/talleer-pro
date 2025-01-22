import React, { useEffect, useState, useMemo, useRef } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

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

export default function StickyHeadTable({ tablaInterno, novedadSeleccionada, typoNovedad, setIdTablaSelect, numeroInternoSelect, contenidoInput, contenidoSector, MostrarContQF, MoverContAQAF, EsconderrContAQAF }) {
  const [rows, setRows] = useState();
  useEffect(() => {
    if (typoNovedad.toLowerCase().includes('historial')) {
      setRows(tablaInterno.filter((tab) => tab.Interno == numeroInternoSelect).map(tbs => createData(tbs.Id, tbs.Fecha_Novedad, tbs.Interno, tbs.Sector, tbs.Novedad_Motivo, tbs.Fecha_Hora_Inicio, tbs.Legajo_1, tbs.Detalle_Trabajos_Realizados, tbs.Fecha_Hora_Fin, tbs.Estado, tbs.Pendiente_POR)));
    } else {
      setRows((tablaInterno.filter((tab) => (tab.Estado.toString().toLowerCase().replace(/\s+/g, '').includes(typoNovedad.toLowerCase())) && (numeroInternoSelect === tab.Interno)).map(tbs => createData(tbs.Id, tbs.Fecha_Novedad, tbs.Interno, tbs.Sector, tbs.Novedad_Motivo, tbs.Fecha_Hora_Inicio, tbs.Legajo_1, tbs.Detalle_Trabajos_Realizados, tbs.Fecha_Hora_Fin, tbs.Estado, tbs.Pendiente_POR))));
    }
  }, [numeroInternoSelect])



  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [selectedRowId, setSelectedRowId] = useState(null);
  const handleRowClick = (id) => {
    setIdTablaSelect(id); //obtiene id de fila seleccionada
    setSelectedRowId(id);
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    EsconderrContAQAF();
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  //filtrado
  const [filteredRows, setFilteredRows] = useState(rows);

  // filtrar por Novedad motivo y Detalle de trabajos
  useEffect(() => {
    // Función auxiliar para filtrar los datos según el criterio
    const filterData = (rows) => {
      if (!contenidoInput) {
        return rows; // Retorna todos los datos si se selecciona "todas"
      } else {
        // Filtrado normal basado en el valor ingresado
        return rows.filter(row => {
          return row.novedadMotivo.toString().toLowerCase().includes(contenidoInput.toString().toLowerCase()) ||
            row.detalleTrabajosRealizados.toString().toLowerCase().includes(contenidoInput.toString().toLowerCase())
        });
      }
    };
    const filteredData = filterData(rows);
    setFilteredRows(filteredData);
    setPage(0);
  }, [rows, contenidoInput]);

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
    const filteredData = filterData(rows, contenidoSector);
    setFilteredRows(filteredData);
    setPage(0);
  }, [rows, contenidoSector]);


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
                              onClick={(e) => (handleRowClick(row.id), MostrarContQF(), MoverContAQAF(e))}
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
