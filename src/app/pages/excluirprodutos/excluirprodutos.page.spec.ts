import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExcluirprodutosPage } from './excluirprodutos.page';

describe('ExcluirprodutosPage', () => {
  let component: ExcluirprodutosPage;
  let fixture: ComponentFixture<ExcluirprodutosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ExcluirprodutosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
