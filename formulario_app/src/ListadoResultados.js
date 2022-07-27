import React from 'react';

function ListadoResultados(prop) {
      
    return (
        <table>

        <tr>
            {prop.resultados.map((elemento) =>
                <td> {elemento.codigo} </td>)}
            {prop.resultados.map((elemento) =>
                <td> {elemento.nombre_producto} </td>)}
            {prop.resultados.map((elemento) =>
                <td> {elemento.descripcion} </td>)}
            {prop.resultados.map((elemento) =>
                <td> {elemento.precio} </td>)}
            {prop.resultados.map((elemento) =>
                <td> {elemento.cantidad} </td>)}
            {prop.resultados.map((elemento) =>
                <td> {elemento.total} </td>)}
            {prop.resultados.map((elemento) =>
                <td> {elemento.total_descuento} </td>)}
        </tr> <tr>- </tr>
    </table>

    );


}

export default ListadoResultados;