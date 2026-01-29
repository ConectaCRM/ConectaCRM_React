import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { buscar, deletar } from "../services/Service";

// Endpoint do recurso no backend
const endpoint = "/clientes";

/**
 * O backend do seu /clientes (Render) retorna algo tipo:
 * {
 *   id, nome, dataCadastro, valor, ativo,
 *   usuario: { id, nome, email, ... },
 *   categoria: { id, nome, descricao, ... }
 * }
 *
 * Então tipamos aqui para bater com a realidade.
 */
type ClienteApi = {
  id: number;
  nome: string;
  dataCadastro?: string;
  valor?: number;
  ativo?: boolean;
  usuario?: {
    id: number;
    nome?: string;
    email?: string;
  };
  categoria?: {
    id: number;
    nome?: string;
    descricao?: string;
  };
};

function formatarData(iso?: string) {
  if (!iso) return "-";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleString("pt-BR");
}

export default function Client() {
  // Lista de clientes
  const [clientes, setClientes] = useState<ClienteApi[]>([]);

  // Controle simples de loading
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  // Header usado pelo Service.ts
  const header = {};

  // Busca a lista de clientes no backend
  async function carregarClientes() {
    try {
      setLoading(true);
      await buscar(endpoint, setClientes, header);
    } catch (error) {
      console.log("Erro ao carregar clientes:", error);
      alert("Não foi possível carregar os clientes.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    carregarClientes();
  }, []);

  // Deleta cliente por id
  async function removerCliente(id: number) {
    const ok = confirm("Tem certeza que deseja excluir este cliente?");
    if (!ok) return;

    try {
      await deletar(`${endpoint}/${id}`, header);
      await carregarClientes();
    } catch (error) {
      console.log("Erro ao deletar cliente:", error);
      alert("Não foi possível deletar o cliente.");
    }
  }

  return (
    <div className="container mx-auto p-6">
      {/* Título e botão de cadastrar */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Clientes</h1>

        <button
          onClick={() => navigate("/cadastrarcliente")}
          className="px-4 py-2 rounded bg-blue-700 text-white hover:opacity-90"
        >
          Novo Cliente
        </button>
      </div>

      {/* Loading */}
      {loading && <p>Carregando...</p>}

      {/* Lista vazia */}
      {!loading && clientes.length === 0 && (
        <p>Nenhum cliente cadastrado ainda.</p>
      )}

      {/* Lista */}
      {!loading && clientes.length > 0 && (
        <div className="grid gap-4">
          {clientes.map((cliente) => (
            <div
              key={cliente.id}
              className="border rounded p-4 flex flex-col gap-2"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-1">
                  <h2 className="text-lg font-semibold">{cliente.nome}</h2>

                  <p className="text-sm text-gray-600">
                    <b>Valor:</b> {cliente.valor ?? "-"}
                  </p>

                  <p className="text-sm text-gray-600">
                    <b>Ativo:</b> {cliente.ativo ? "Sim" : "Não"}
                  </p>

                  <p className="text-sm text-gray-600">
                    <b>Data Cadastro:</b> {formatarData(cliente.dataCadastro)}
                  </p>

                  <p className="text-sm text-gray-600">
                    <b>Usuário:</b> {cliente.usuario?.nome ?? `ID ${cliente.usuario?.id ?? "-"}`}
                  </p>

                  <p className="text-sm text-gray-600">
                    <b>Categoria:</b> {cliente.categoria?.nome ?? `ID ${cliente.categoria?.id ?? "-"}`}
                  </p>
                </div>

                <span className="text-sm text-gray-500">ID: {cliente.id}</span>
              </div>

              {/* Ações */}
              <div className="flex gap-2 mt-2">
                <Link
                  to={`/editarcliente/${cliente.id}`}
                  className="px-3 py-2 rounded border hover:bg-gray-50"
                >
                  Editar
                </Link>

                <button
                  onClick={() => removerCliente(cliente.id)}
                  className="px-3 py-2 rounded bg-red-600 text-white hover:opacity-90"
                >
                  Excluir
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
