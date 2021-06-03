/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ApolloTestComponent } from './apolloTest.component';

describe('ApolloTestComponent', () => {
  let component: ApolloTestComponent;
  let fixture: ComponentFixture<ApolloTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApolloTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApolloTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
