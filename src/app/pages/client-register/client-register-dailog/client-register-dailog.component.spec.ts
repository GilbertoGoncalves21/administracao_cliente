import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientRegisterDailogComponent } from './client-register-dailog.component';

describe('ClientRegisterDailogComponent', () => {
  let component: ClientRegisterDailogComponent;
  let fixture: ComponentFixture<ClientRegisterDailogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientRegisterDailogComponent]
    });
    fixture = TestBed.createComponent(ClientRegisterDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
