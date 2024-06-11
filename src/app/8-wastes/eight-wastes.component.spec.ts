import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EightWaistesComponent } from './eight-wastes.component';

describe('EightWastesComponent', () => {
  let component: EightWaistesComponent;
  let fixture: ComponentFixture<EightWaistesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EightWaistesComponent]
    });
    fixture = TestBed.createComponent(EightWaistesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
