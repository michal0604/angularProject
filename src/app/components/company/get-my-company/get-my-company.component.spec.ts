import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetMyCompanyComponent } from './get-my-company.component';

describe('GetMyCompanyComponent', () => {
  let component: GetMyCompanyComponent;
  let fixture: ComponentFixture<GetMyCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetMyCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetMyCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
