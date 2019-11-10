import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestorantItemComponent } from './restorant-item.component';

describe('RestorantItemComponent', () => {
  let component: RestorantItemComponent;
  let fixture: ComponentFixture<RestorantItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestorantItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestorantItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
