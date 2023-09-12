import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarprodutosPage } from './editarprodutos.page';

describe('EditarprodutosPage', () => {
  let component: EditarprodutosPage;
  let fixture: ComponentFixture<EditarprodutosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditarprodutosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
