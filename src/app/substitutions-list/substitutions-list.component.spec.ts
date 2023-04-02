import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubstitutionsListComponent } from './substitutions-list.component';

describe('SubstitutionsListComponent', () => {
  let component: SubstitutionsListComponent;
  let fixture: ComponentFixture<SubstitutionsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubstitutionsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubstitutionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
