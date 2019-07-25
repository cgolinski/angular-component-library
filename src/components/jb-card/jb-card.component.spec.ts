/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JbCardComponent } from './jb-card.component';

describe('JbCardComponent', () => {
  let component: JbCardComponent;
  let fixture: ComponentFixture<JbCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JbCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JbCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
