import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QeButtonComponent } from './qe-button.component';

describe('QeButtonComponent', () => {
  let component: QeButtonComponent;
  let fixture: ComponentFixture<QeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QeButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
