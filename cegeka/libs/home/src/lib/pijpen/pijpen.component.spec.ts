import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PijpenComponent } from './pijpen.component';

describe('PijpenComponent', () => {
  let component: PijpenComponent;
  let fixture: ComponentFixture<PijpenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PijpenComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PijpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
