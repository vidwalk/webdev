import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherPostComponent } from './weather-post.component';

describe('WeatherPostComponent', () => {
  let component: WeatherPostComponent;
  let fixture: ComponentFixture<WeatherPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
