/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JbButtonComponent } from './jb-button.component';

describe('JbButtonComponent', () => {
  let component: JbButtonComponent;
  let fixture: ComponentFixture<JbButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JbButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JbButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
