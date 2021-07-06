import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DzongkhagComponent } from './dzongkhag.component';

describe('DzongkhagComponent', () => {
  let component: DzongkhagComponent;
  let fixture: ComponentFixture<DzongkhagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DzongkhagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DzongkhagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
