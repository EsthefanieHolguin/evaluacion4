import dulces1 from './img/chocolate.png';
import dulces2 from './img/caramelos.png';
import './App.css';
import { useState } from 'react';
import ListadoResultados from './ListadoResultados';


function App() {
  const [operaciones, setOperacion] = useState([])

  function ingreso(event) {
    //Toma el evento de onSubmit y evita el envío de datos 
    event.preventDefault();
    //recibimos los datos del formulario
    const in_codigo = event.target.txt_codigo.value
    const in_nombre_producto = event.target.txt_nombre_producto.value
    const in_descripcion = event.target.txt_descripcion.value
    const in_precio = parseFloat(event.target.txt_precio.value)
    const in_cantidad = parseFloat(event.target.txt_cantidad.value)
    const in_total = in_precio * in_cantidad
    const in_total_descuento = (in_total * 0.9)

    // Crea un objeto nuevo con los datos y resultado
    const nuevo = {
      codigo: in_codigo,
      nombre_producto: in_nombre_producto,
      descripcion: in_descripcion,
      precio: in_precio,
      cantidad: in_cantidad,
      total: in_total,
      total_descuento: in_total_descuento,
    }
    //Modifica el estado con un nuevo objeto obtenido.
    setOperacion([...operaciones, nuevo])

    //Limpia las cajas del formulario
    event.target.txt_codigo.value = ''
    event.target.txt_nombre_producto.value = ''
    event.target.txt_descripcion.value = ''
    event.target.txt_precio.value = ''
    event.target.txt_cantidad.value = ''
  }


  return (
    <div>
      <div className='container'><br /><hr />
        <h2 > CARAMELOS CANDY</h2>
        <hr />
        <div className="row col-xs-10 col-sm-6">
          <img src={dulces1} className="col-xs-10 col-sm-6" alt='...' />
          <img src={dulces2} className="col-xs-10 col-sm-6" alt='...' />
        </div>
        <br />
        <div className="row">
          <div className="col-md-2 col-sm-2"></div>
          <hr />

          <h5 className='tituloformulario' >*Módulo de Ingreso de Productos*</h5><br /><br />

          <div className="col-md-12 col-sm-12">
            <form clasName='text-align:center' action="#" method="post" name="formulario" id="formulario" onSubmit={ingreso}>
              <div className='row col-xs-12 col-sm-6'>
                <label>Código</label>
                <input className='form-control' type="text" placeholder='Ingrese código de producto' name="txt_codigo" required /><br />

                <label>Nombre de Producto</label>
                <input className='form-control' type="text" placeholder='Ingrese nombre de producto' name="txt_nombre_producto" required /><br />

                <label>Descripción</label>
                <input className='form-control' type="text" placeholder='Ingrese descripción de producto' name="txt_descripcion" required /><br />

                <label>Precio</label>
                <input className='form-control' type="text" placeholder='Ingrese precio de producto' name="txt_precio" required /><br />

                <label>Cantidad</label>
                <input className='form-control' type="text" placeholder='Ingrese cantidad de producto' name="txt_cantidad" required /><br /><br />
              </div>
              <br />
              <input className='btn btn-primary botones' type="submit" value="Calcular Total" />
            </form>
            <div />
            <div className="col-md-2 col-sm-2"></div>
            <br /><hr /><br />

            <tr>
              <th scope='col'>CODIGO</th>
              <th scope='col'>ARTICULO</th>
              <th scope='col'>DESCRIPCION</th>
              <th scope='col'>PRECIO</th>
              <th scope='col'>CANTIDAD</th>
              <th scope='col'>TOTAL</th>
              <th scope='col'>TOTAL CON DESCUENTO</th>
            </tr>
            <ListadoResultados resultados={operaciones} />
            <br /><hr /><br />
            <table>
              <thead dark>
                <tr>
                  <th scope='col'>CODIGO</th>
                  <th scope='col'>ARTICULO</th>
                  <th scope='col'>DESCRIPCION</th>
                  <th scope='col'>PRECIO</th>
                  <th scope='col'>CANTIDAD</th>
                  <th scope='col'>TOTAL</th>
                  <th scope='col'>TOTAL CON DESCUENTO</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope='row'>1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope='row'>2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope='row'>3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
