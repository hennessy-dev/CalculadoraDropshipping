import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoundUpPipe } from '../../pipes/roundUp.pipe';

interface Producto{
  nombre: string,
  precio: number,
  valorFlete: number,
  precioProveedor: number,
}

// const nombreInput = document.getElementById('nombre') as HTMLInputElement;
// const precioInput = document.getElementById('precio') as HTMLInputElement;
// const valorFleteInput = document.getElementById('valorFlete') as HTMLInputElement;
// const precioProveedorInput = document.getElementById('precioProveedor') as HTMLInputElement;
// const calcularBtn = document.getElementById('calcularBtn') as HTMLButtonElement;
// const resultadoDiv = document.getElementById('resultado') as HTMLDivElement;

// calcularBtn.addEventListener('click', () => {
//   const nombre = nombreInput.value;
//   const precio = parseFloat(precioInput.value);
//   const valorFlete = parseFloat(valorFleteInput.value);
//   const precioProveedor = parseFloat(precioProveedorInput.value);

//   const producto: Producto = { nombre, precio, valorFlete, precioProveedor };
//   const ingresoObjetivo = 1000000;

//   const utilidad = calcularUtilidad(producto);

//   const ventasNecesarias = calcularVentasRequeridas(ingresoObjetivo, producto);
//   if (ventasNecesarias !== null) {
//     resultadoDiv.innerHTML = `El producto ${producto.nombre} tiene una utilidad de ${utilidad} y debes hacer ${ventasNecesarias} ventas para facturar $${ingresoObjetivo} .`;
//   } else {
//     resultadoDiv.innerHTML = 'Operacion Invalida'
//   }
// });

interface Salario{
  salario: string; 
}

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule, RoundUpPipe],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css',
  changeDetection: ChangeDetectionStrategy.Default,
})

export class CalculadoraComponent implements OnInit {

  public nombre: string = '' ;
  public precioProducto:number = 0 ;
  public flete:number = 0 ;
  public precioProveedor:number = 0 ;
  public utilidad:number = 0.0 ;
  public costos:number = 0;

  public salarios: number[] = [
    1000000,
    2000000,
    3000000,
    4000000,
    5000000
  ]

  calcularCostos(): void {
    this.costos =  this.flete + this.precioProveedor;
  }

  calcularUtilidad(): void {
    this.calcularCostos()
    this.utilidad = (( this.precioProducto - this.costos ) / this.precioProducto); 
    console.log( `precio: $${this.precioProducto}` );
    console.log( `proveedor: $${this.precioProveedor}` );
    console.log( `flete: $${this.flete}` );
    console.log( `costos: $${this.costos}` );
    console.log( `utilidad: $${this.utilidad}` );
    
    
  }

  ngOnInit(): void {
    
  }
}
