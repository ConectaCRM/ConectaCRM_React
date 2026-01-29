export default interface Cliente {
  id?: number;
  nome: string;
  valor: number;
  ativo: boolean;
  dataCadastro: string; // ISO ou YYYY-MM-DD no form

  usuario: { id: number };
  categoria: { id: number };
}
