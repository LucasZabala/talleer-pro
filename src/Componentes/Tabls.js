import React, { useEffect, useState } from 'react';

import './Tabls.css';

function Tabls({
  tablaInterno,
  novedadSeleccionada,
  typoNovedad,
  setRowTablaSelect,
  numeroInternoSelect,
  contenidoInput,
  contenidoSector,
}) {
  const [rows, setRows] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [filteredRows, setFilteredRows] = useState([]);
  const [selectedRowId, setSelectedRowId] = useState(null);

  useEffect(() => {
    let filteredData = tablaInterno;

    if (typoNovedad.toLowerCase().includes('historial')) {
      filteredData = tablaInterno.filter(
        (tab) => tab.Interno === numeroInternoSelect
      );
    } else {
      filteredData = tablaInterno.filter(
        (tab) =>
          tab.Estado.toString().toLowerCase().replace(/\s+/g, '') ===
          typoNovedad.toLowerCase() && tab.Interno === numeroInternoSelect
      );
    }

    setRows(filteredData);
  }, [numeroInternoSelect, tablaInterno, typoNovedad]);

  useEffect(() => {
    let filteredData = rows;

    if (contenidoInput) {
      filteredData = rows.filter(
        (row) =>
          row.Novedad_Motivo.toString()
            .toLowerCase()
            .includes(contenidoInput.toString().toLowerCase()) ||
          row.Detalle_Trabajos_Realizados.toString()
            .toLowerCase()
            .includes(contenidoInput.toString().toLowerCase())
      );
    }

    if (contenidoSector) {
      if (contenidoSector === 'todas') {
        // No filtrar
      } else if (contenidoSector === 'otras') {
        filteredData = filteredData.filter(
          (row) =>
            !['mecanica', 'electricidad', 'gomeria', 'carroceria'].includes(
              row.Sector.toLowerCase()
            )
        );
      } else {
        filteredData = filteredData.filter((row) =>
          row.Sector.toString()
            .toLowerCase()
            .includes(contenidoSector.toString().toLowerCase())
        );
      }
    }

    setFilteredRows(filteredData);
    setPage(0);
  }, [rows, contenidoInput, contenidoSector]);

  const handleRowClick = (id, row) => {
    setRowTablaSelect(row);
    setSelectedRowId(id);
  };

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const columns = [
    'Fecha Novedad',
    'Sector',
    'Novedad Motivo',
    'Fecha y Hora de Inicio',
    'Legajo',
    'Detalle de Trabajos Realizados',
    'Fecha y Hora de Finalizacion',
    'Estado',
    'Pendiente Por',
  ];

  return (
    <>
      {novedadSeleccionada === typoNovedad && (
        <div className='cont-fther'>
          <div className='conteinerTabl'>
            <table>
              <thead>
                <tr>
                  {columns.map((column) => (
                    <th key={column}>{column}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredRows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <tr
                      key={row.Id}
                      onClick={() => handleRowClick(row.Id, row)}
                      className={
                        selectedRowId === row.Id ? 'rowSelect' : 'rows'
                      }
                    >
                      <td>{row.Fecha_Novedad}</td>
                      <td>{row.Sector}</td>
                      <td>{row.Novedad_Motivo}</td>
                      <td>{row.Fecha_Hora_Inicio}</td>
                      <td>{row.Legajo_1}</td>
                      <td>{row.Detalle_Trabajos_Realizados}</td>
                      <td>{row.Fecha_Hora_Fin}</td>
                      <td>{row.Estado}</td>
                      <td>{row.Pendiente_POR}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          {/* PAGINCION */}
          <div className='cont-pagination'>
            <div className='pagination'>
              <button
                disabled={page === 0}
                onClick={() => handleChangePage(page - 1)}
              >
                {'<'}
              </button>
              <span className='contador-pag'>
                Página {page + 1} de {Math.ceil(filteredRows.length / rowsPerPage)}
              </span>
              <button
                disabled={page >= Math.ceil(filteredRows.length / rowsPerPage) - 1}
                onClick={() => handleChangePage(page + 1)}
              >
                {'>'}
              </button>
              <select value={rowsPerPage} onChange={handleChangeRowsPerPage} className='select-pag'>
                {[10, 25, 50, 100].map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Tabls;