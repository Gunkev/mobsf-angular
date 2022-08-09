import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewComponentNameComponent } from './new-component-name.component';

describe('NewComponentNameComponent', () => {
  let component: NewComponentNameComponent;
  let fixture: ComponentFixture<NewComponentNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewComponentNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewComponentNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
