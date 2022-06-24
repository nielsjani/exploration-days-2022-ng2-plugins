import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfiniscrollComponent } from './infiniscroll.component';

describe('InfiniscrollComponent', () => {
  let component: InfiniscrollComponent;
  let fixture: ComponentFixture<InfiniscrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfiniscrollComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InfiniscrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
