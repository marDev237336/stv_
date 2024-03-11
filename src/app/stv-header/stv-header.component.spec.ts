import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StvHeaderComponent } from './stv-header.component';

describe('StvHeaderComponent', () => {
  let component: StvHeaderComponent;
  let fixture: ComponentFixture<StvHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StvHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StvHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
