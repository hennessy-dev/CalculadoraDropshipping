import { Component } from '@angular/core';
import { CalculadoraComponent } from '../../components/calculadora/calculadora.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-hub',
  standalone: true,
  imports: [CalculadoraComponent, NavbarComponent, FooterComponent],
  templateUrl: './hub.component.html',
  styleUrl: './hub.component.css'
})
export class HubComponent {

}
