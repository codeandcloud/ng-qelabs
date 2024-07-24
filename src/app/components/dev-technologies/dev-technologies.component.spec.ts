import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevTechnologiesComponent } from './dev-technologies.component';

describe('DevTechnologiesComponent', () => {
  let component: DevTechnologiesComponent;
  let fixture: ComponentFixture<DevTechnologiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevTechnologiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevTechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
