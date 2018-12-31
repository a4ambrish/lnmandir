import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoojariJiPage } from './poojari-ji.page';

describe('PoojariJiPage', () => {
  let component: PoojariJiPage;
  let fixture: ComponentFixture<PoojariJiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoojariJiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoojariJiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
