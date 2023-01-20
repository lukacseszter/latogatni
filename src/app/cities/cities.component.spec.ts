/*
* File: cities.component.scss
* Author: Lukács Eszter
* Copyright: 2023, Lukács Eszter
* Group: Szoft II N
* Date: 2023-01-20
* Github: https://github.com/lukacseszter/
* Licenc: GNU GPL
*/

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesComponent } from './cities.component';

describe('CitiesComponent', () => {
  let component: CitiesComponent;
  let fixture: ComponentFixture<CitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
