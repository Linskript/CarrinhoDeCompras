import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MeucarrinhoPage } from './meucarrinho.page';

describe('MeucarrinhoPage', () => {
  let component: MeucarrinhoPage;
  let fixture: ComponentFixture<MeucarrinhoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MeucarrinhoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
