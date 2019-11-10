import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularHotelItemComponent } from './popular-hotel-item.component';

describe('PopularHotelItemComponent', () => {
  let component: PopularHotelItemComponent;
  let fixture: ComponentFixture<PopularHotelItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularHotelItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularHotelItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
