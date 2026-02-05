import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseActions } from './case-actions';

describe('CaseActions', () => {
  let component: CaseActions;
  let fixture: ComponentFixture<CaseActions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaseActions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseActions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
