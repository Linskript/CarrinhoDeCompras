import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastrarprodutosPage } from './cadastrarprodutos.page';

describe('CadastrarprodutosPage', () => {
  let component: CadastrarprodutosPage;
  let fixture: ComponentFixture<CadastrarprodutosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CadastrarprodutosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
