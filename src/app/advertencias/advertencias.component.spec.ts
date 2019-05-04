import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertenciasComponent } from './advertencias.component';

describe('AdvertenciasComponent', () => {
  let component: AdvertenciasComponent;
  let fixture: ComponentFixture<AdvertenciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertenciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
