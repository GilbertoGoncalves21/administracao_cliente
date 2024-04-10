import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostumerConsultationComponent } from './costumer-consultation.component';

describe('CostumerConsultationComponent', () => {
  let component: CostumerConsultationComponent;
  let fixture: ComponentFixture<CostumerConsultationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CostumerConsultationComponent]
    });
    fixture = TestBed.createComponent(CostumerConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
