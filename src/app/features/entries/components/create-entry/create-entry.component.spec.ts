import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEntryComponent } from './create-entry.component';

describe('CreatePostComponent', () => {
  let component: CreateEntryComponent;
  let fixture: ComponentFixture<CreateEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateEntryComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
