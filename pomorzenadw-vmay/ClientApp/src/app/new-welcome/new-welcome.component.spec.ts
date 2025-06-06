import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWelcomeComponent } from './new-welcome.component';

describe('NewWelcomeComponent', () => {
  let component: NewWelcomeComponent;
  let fixture: ComponentFixture<NewWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewWelcomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
