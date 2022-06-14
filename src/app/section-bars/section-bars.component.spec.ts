import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBarsComponent } from './section-bars.component';

describe('SectionBarsComponent', () => {
  let component: SectionBarsComponent;
  let fixture: ComponentFixture<SectionBarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionBarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionBarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
