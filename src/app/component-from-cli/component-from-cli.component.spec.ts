import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentFromCliComponent } from './component-from-cli.component';

describe('ComponentFromCliComponent', () => {
  let component: ComponentFromCliComponent;
  let fixture: ComponentFixture<ComponentFromCliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentFromCliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentFromCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
