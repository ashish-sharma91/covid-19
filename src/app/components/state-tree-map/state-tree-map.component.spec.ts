import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateTreeMapComponent } from './state-tree-map.component';

describe('StateTreeMapComponent', () => {
  let component: StateTreeMapComponent;
  let fixture: ComponentFixture<StateTreeMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateTreeMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateTreeMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
