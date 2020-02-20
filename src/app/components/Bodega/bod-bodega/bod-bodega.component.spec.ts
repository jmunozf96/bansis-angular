import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodBodegaComponent } from './bod-bodega.component';

describe('BodBodegaComponent', () => {
  let component: BodBodegaComponent;
  let fixture: ComponentFixture<BodBodegaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodBodegaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodBodegaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
