import { Component } from '@angular/core';
import { TarifaService } from './tarifa-page-service';

@Component({
  selector: 'app-tarifa',
  templateUrl: './tarifa.page.html',
  styleUrls: ['./tarifa.page.scss'],
})
export class TarifaPage {
  distanciaKilometros: number = 0;
  tiempoMinutos: number = 0;
  tarifaTotal: number =0;

  constructor(private tarifaService: TarifaService) {}

  calcularTarifa() {
    this.tarifaTotal = this.tarifaService.calcularTarifa(this.distanciaKilometros, this.tiempoMinutos);
  }
}
