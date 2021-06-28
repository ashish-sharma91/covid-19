import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatesDataComponent } from './states-data.component';

describe('StatesDataComponent', () => {
  let component: StatesDataComponent;
  let fixture: ComponentFixture<StatesDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatesDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatesDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
