import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechstackSectionComponent } from './techstack-section.component';

describe('TechstackSectionComponent', () => {
  let component: TechstackSectionComponent;
  let fixture: ComponentFixture<TechstackSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechstackSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechstackSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
