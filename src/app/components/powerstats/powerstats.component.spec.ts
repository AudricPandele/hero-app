import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerstatsComponent } from './powerstats.component';

describe('PowerstatsComponent', () => {
  let component: PowerstatsComponent;
  let fixture: ComponentFixture<PowerstatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerstatsComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerstatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
