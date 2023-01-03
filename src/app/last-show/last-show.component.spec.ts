import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastShowComponent } from './last-show.component';

describe('LastShowComponent', () => {
  let component: LastShowComponent;
  let fixture: ComponentFixture<LastShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
