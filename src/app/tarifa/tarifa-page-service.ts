export class TarifaService {

  private tarifaBase: number = 5000;

  private tarifaPorKilometro: number = 1000;

  private tarifaPorMinuto: number = 300;

  private carreraMinima: number = 8000;


  calcularTarifa(distanciaKilometros: number, tiempoMinutos: number): number {

    let tarifaTotal = this.tarifaBase;

    const costoDistancia = distanciaKilometros * this.tarifaPorKilometro;
    tarifaTotal += costoDistancia;


    const costoTiempo = tiempoMinutos * this.tarifaPorMinuto;
    tarifaTotal += costoTiempo;

    // Aplicar la carrera mínima si corresponde
    if (tarifaTotal < this.carreraMinima) {
      tarifaTotal = this.carreraMinima;
    }

    return tarifaTotal;
  }
}
