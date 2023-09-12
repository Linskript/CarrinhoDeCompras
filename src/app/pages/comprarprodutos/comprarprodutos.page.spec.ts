import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComprarprodutosPage } from './comprarprodutos.page';

describe('ComprarprodutosPage', () => {
  let component: ComprarprodutosPage;
  let fixture: ComponentFixture<ComprarprodutosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ComprarprodutosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
