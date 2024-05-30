import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientResourcesPage } from './client-resources.page';

describe('ClientResourcesPage', () => {
  let component: ClientResourcesPage;
  let fixture: ComponentFixture<ClientResourcesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClientResourcesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
