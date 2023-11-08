import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoTaxiPage } from './info-taxi.page';

describe('InfoTaxiPage', () => {
  let component: InfoTaxiPage;
  let fixture: ComponentFixture<InfoTaxiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InfoTaxiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
