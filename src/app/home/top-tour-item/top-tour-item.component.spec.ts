import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTourItemComponent } from './top-tour-item.component';

describe('TopTourItemComponent', () => {
  let component: TopTourItemComponent;
  let fixture: ComponentFixture<TopTourItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopTourItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTourItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
