import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OurPage } from './our.page';

describe('OurPage', () => {
  let component: OurPage;
  let fixture: ComponentFixture<OurPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
