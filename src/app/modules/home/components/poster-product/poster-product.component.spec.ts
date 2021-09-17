import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosterProductComponent } from './poster-product.component';

describe('PosterProductComponent', () => {
  let component: PosterProductComponent;
  let fixture: ComponentFixture<PosterProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosterProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PosterProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
