import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreativeStudioComponent } from './creative-studio.component';

describe('CreativeStudioComponent', () => {
  let component: CreativeStudioComponent;
  let fixture: ComponentFixture<CreativeStudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreativeStudioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreativeStudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
