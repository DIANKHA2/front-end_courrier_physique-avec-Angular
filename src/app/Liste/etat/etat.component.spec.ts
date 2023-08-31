import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ETATComponent } from './etat.component';

describe('ETATComponent', () => {
  let component: ETATComponent;
  let fixture: ComponentFixture<ETATComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ETATComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ETATComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
