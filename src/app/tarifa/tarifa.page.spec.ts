import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TarifaPage } from './tarifa.page';

describe('TarifaPage', () => {
  let component: TarifaPage;
  let fixture: ComponentFixture<TarifaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TarifaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
