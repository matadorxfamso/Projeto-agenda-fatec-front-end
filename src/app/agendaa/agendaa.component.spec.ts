import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaaComponent } from './agendaa.component';

describe('AgendaaComponent', () => {
  let component: AgendaaComponent;
  let fixture: ComponentFixture<AgendaaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgendaaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgendaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
