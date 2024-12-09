import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaaTabelaComponent } from './agendaa-tabela.component';

describe('AgendaaTabelaComponent', () => {
  let component: AgendaaTabelaComponent;
  let fixture: ComponentFixture<AgendaaTabelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgendaaTabelaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgendaaTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
