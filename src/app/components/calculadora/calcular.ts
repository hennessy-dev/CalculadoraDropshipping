export interface Producto{
  nombre: string,
  precio: number,
  valorFlete: number,
  precioProveedor: number,
}

export function calcularUtilidad(producto: Producto) {

  console.log(`|| Informacion de Producto ||\n\n\tNombre: ${producto.nombre} \n\tPrecio: ${producto.precio} \n\tCosto: ${producto.valorFlete + producto.precioProveedor} \n\tUtilidad: ${producto.precio - (producto.precioProveedor + producto.valorFlete)} \n\t`)
  const utilidad = producto.precio - (producto.valorFlete + producto.precioProveedor);
  return utilidad;

}

export function calcularVentasRequeridas(ingresoObjetivo: number, producto: Producto): number | null {
  if (producto.precio <= 0 || producto.valorFlete < 0 || producto.precioProveedor < 0 || ingresoObjetivo <= 0) {
      console.error('Los valores deben ser mayores que cero.');
      return null;
  }

  const utilidadPorVenta = calcularUtilidad(producto);

  if (utilidadPorVenta <= 0) {
      console.error('La utilidad por venta debe ser mayor que cero.');
      return null;
  }

  const ventasRequeridas = ingresoObjetivo / utilidadPorVenta;

  return Math.ceil(ventasRequeridas); // Redondear hacia arriba, ya que no puedes vender una fracción de un producto.
}

// Ejemplo de uso
const productoEjemplo: Producto = {
  nombre: 'Test',
  precio: 80000,
  valorFlete: 10,
  precioProveedor: 60,
};

const ingresosObjetivo = [1000000, 5000000, 20000000, 30000000, 50000000];

ingresosObjetivo.forEach((ingreso) => {
  const ventasNecesarias = calcularVentasRequeridas(ingreso, productoEjemplo);
  if (ventasNecesarias !== null) {
      console.log(``)
      console.log(`Para facturar ${ingreso} necesitas hacer ${ventasNecesarias} ventas.`);
  }
});