import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCultureWorkComponent } from './about-culture-work.component';

describe('AboutCultureWorkComponent', () => {
  let component: AboutCultureWorkComponent;
  let fixture: ComponentFixture<AboutCultureWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutCultureWorkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutCultureWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
