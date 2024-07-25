import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenRolesComponent } from './open-roles.component';

describe('OpenRolesComponent', () => {
  let component: OpenRolesComponent;
  let fixture: ComponentFixture<OpenRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenRolesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
