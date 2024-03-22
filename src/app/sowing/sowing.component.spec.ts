import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SowingComponent } from './sowing.component';

describe('SowingComponent', () => {
  let component: SowingComponent;
  let fixture: ComponentFixture<SowingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SowingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
