import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivarUsuarioComponent } from './activar-usuario.component';

describe('ActivarUsuarioComponent', () => {
  let component: ActivarUsuarioComponent;
  let fixture: ComponentFixture<ActivarUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivarUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
