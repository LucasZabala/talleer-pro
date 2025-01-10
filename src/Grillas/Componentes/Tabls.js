
import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableVirtuoso } from 'react-virtuoso';

import tablaInternos from '../../tablas.json';
import { Alert } from '@mui/material';


function createData(id, fechaNovedad, interno, sector, novedadMotivo, fechayHoradeInicio, legajo, detalledeTrabajosRealizados, fechayHoradeFinalizacion, estado, pendientePor) {
  return {
    id,
    fechaNovedad,
    interno,
    sector,
    novedadMotivo,
    fechayHoradeInicio,
    legajo,
    detalledeTrabajosRealizados,
    fechayHoradeFinalizacion,
    estado,
    pendientePor,
  };
}

const columns = [
  {
    width: 10,
    label: 'Id',
    dataKey: 'id',
  },
  {
    label: 'Fecha Novedad',
    dataKey: 'fechaNovedad',
  },
  {
    width: 50,
    label: 'Interno',
    dataKey: 'interno',
  },
  {
    // width: 10,
    label: 'Sector',
    dataKey: 'sector',
  },
  {
    // width: 10,
    label: 'Novedad Motivo',
    dataKey: 'novedadMotivo',
  },
  {
    // width: 10,
    label: 'Fecha y Hora de Inicio',
    dataKey: 'fechayHoradeInicio',
  },
  {
    // width: 10,
    label: 'Legajo',
    dataKey: 'legajo',
  },
  {
    // width: 10,
    label: 'Detalle de Trabajos Realizados',
    dataKey: 'detalledeTrabajosRealizados',
  },
  {
    // width: 10,
    label: 'Fecha y Hora de Finalizacion',
    dataKey: 'fechayHoradeFinalizacion',
  },
  {
    // width: 10,
    label: 'Estado',
    dataKey: 'estado',
  },
  {
    // width: 10,
    label: 'Pendiente Por',
    dataKey: 'pendientePor',
  },
];

// const rows = Array.from({ length: 10 }, (_, index) => createData(index));
const rows = tablaInternos.map(tbs => createData(tbs.Id, tbs.Fecha_Novedad, tbs.Interno, tbs.Sector, tbs.Novedad_Motivo, tbs.Fecha_Hora_Inicio, tbs.Legajo_1, tbs.Detalle_Trabajos_Realizados, tbs.Fecha_Hora_Fin, tbs.Estado, tbs.Pendiente_POR));

const VirtuosoTableComponents = {
  Scroller: React.forwardRef((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'flex' }} />
  ),
  TableHead: React.forwardRef((props, ref) => <TableHead {...props} ref={ref} />),
  TableRow,
  TableBody: React.forwardRef((props, ref) => <TableBody {...props} ref={ref} />),
};

function fixedHeaderContent() {
  return (
    <TableRow>
      {columns.map((column) => (
        <TableCell
          //estilos del encabezado
          key={column.dataKey}
          variant="head"
          align={'center'}
          style={{ width: column.width }}
          sx={{ backgroundColor: '#2b2b2b', color: '#e5e5e5', fontSize: '1vw' }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  );
}


export default function Tabls({ setIdTablaSelect }) {

  const handleRowClick = (id) => {
    setIdTablaSelect(id);
  }

  return (
    <Paper style={{ height: 500, width: '100%' }}>
      <TableVirtuoso
        data={rows}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={
          function rowContent(_index, row) {

            return (
              <React.Fragment>
                {columns.map((column) => (
                  <TableCell
                    key={column.dataKey}
                    align={'center'}
                    onClick={() => handleRowClick(row.id)}
                    sx={{ fontSize: '1vw' }}
                  >
                    {row[column.dataKey]}
                  </TableCell>
                ))}
              </React.Fragment>
            );
          }}
      />
    </Paper>
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