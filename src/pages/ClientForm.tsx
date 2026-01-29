import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { buscar, cadastrar, atualizar } from "../services/Service";

// Endpoint do recurso no backend
const endpoint = "/clientes";

// Tipos do backend (pelo JSON do Render)
type ClienteApi = {
  id: number;
  nome: string;
  dataCadastro: string; // ISO
  valor: string; // backend retorna como string, ex: "5000.00"
  ativo: boolean;
  usuario: { id: number };
  categoria: { id: number };
};

// Estado do formulário na UI
type ClienteFormState = {
  nome: string;
  valor: string;
  ativo: boolean;
  dataCadastro: string; // pode vir vazio e a gente gera
  usuarioId: string; // guardamos como string para input
  categoriaId: string; // guardamos como string para input
};

const estadoInicial: ClienteFormState = {
  nome: "",
  valor: "0.00",
  ativo: true,
  dataCadastro: "",
  usuarioId: "1",
  categoriaId: "1",
};

export default function ClientForm() {
  const navigate = useNavigate();
  const params = useParams();

  // Se existe id na URL, estamos no modo editar
  const id = params.id ? Number(params.id) : null;

  const [form, setForm] = useState<ClienteFormState>(estadoInicial);
  const [loading, setLoading] = useState(false);

  // Quando tiver token, vira algo assim:
  // const header = { headers: { Authorization: token } }
  const header = {};

  function agoraIso() {
    return new Date().toISOString();
  }

  function onChangeInput(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function onChangeCheckbox(e: ChangeEvent<HTMLInputElement>) {
    const { name, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: checked }));
  }

  // Monta o payload no formato que o backend espera
  function montarPayload(): Omit<ClienteApi, "id"> | ClienteApi {
    const dataCadastroFinal = form.dataCadastro?.trim()
      ? form.dataCadastro.trim()
      : agoraIso();

    const usuarioIdNum = Number(form.usuarioId);
    const categoriaIdNum = Number(form.categoriaId);

    const base = {
      nome: form.nome.trim(),
      dataCadastro: dataCadastroFinal,
      valor: form.valor.trim(), // mantenha "5000.00"
      ativo: Boolean(form.ativo),
      usuario: { id: usuarioIdNum },
      categoria: { id: categoriaIdNum },
    };

    if (id !== null) return { id, ...base };
    return base;
  }

  async function carregarCliente(clienteId: number) {
    try {
      setLoading(true);

      const setCliente = (data: ClienteApi) => {
        setForm({
          nome: data.nome ?? "",
          valor: data.valor ?? "0.00",
          ativo: Boolean(data.ativo),
          dataCadastro: data.dataCadastro ?? "",
          usuarioId: String(data.usuario?.id ?? 1),
          categoriaId: String(data.categoria?.id ?? 1),
        });
      };

      await buscar(`${endpoint}/${clienteId}`, setCliente, header);
    } catch (error) {
      console.log("Erro ao buscar cliente:", error);
      alert("Não foi possível carregar os dados do cliente.");
      navigate("/clientes");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (id === null) return;
    carregarCliente(id);
  }, [id]);

  async function salvar(e: FormEvent) {
    e.preventDefault();

    if (!form.nome.trim()) {
      alert("Preencha o nome.");
      return;
    }

    // Validação básica dos IDs
    if (!form.usuarioId.trim() || Number.isNaN(Number(form.usuarioId))) {
      alert("Usuário ID inválido.");
      return;
    }
    if (!form.categoriaId.trim() || Number.isNaN(Number(form.categoriaId))) {
      alert("Categoria ID inválida.");
      return;
    }

    try {
      setLoading(true);

      const payload = montarPayload();
      const setResposta = () => {};

      if (id !== null) {
        await atualizar(`${endpoint}/${id}`, payload, setResposta, header);
      } else {
        await cadastrar(endpoint, payload, setResposta, header);
      }

      navigate("/clientes");
    } catch (error: any) {
      console.log("Erro ao salvar cliente:", error?.response?.data ?? error);
      alert("Erro ao salvar cliente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">
          {id !== null ? "Editar Cliente" : "Cadastrar Cliente"}
        </h1>

        <button
          type="button"
          onClick={() => navigate("/clientes")}
          className="px-3 py-2 rounded border hover:bg-gray-50"
        >
          Voltar
        </button>
      </div>

      <form
        onSubmit={salvar}
        className="max-w-xl border rounded p-6 flex flex-col gap-4"
      >
        <div>
          <label className="block text-sm font-medium mb-1">Nome</label>
          <input
            name="nome"
            value={form.nome}
            onChange={onChangeInput}
            className="w-full border rounded px-3 py-2"
            placeholder="Nome do cliente"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Valor</label>
          <input
            name="valor"
            value={form.valor}
            onChange={onChangeInput}
            className="w-full border rounded px-3 py-2"
            placeholder="5000.00"
            inputMode="decimal"
          />
          <p className="text-xs text-gray-500 mt-1">
            Dica: mantenha no formato 5000.00
          </p>
        </div>

        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            name="ativo"
            checked={form.ativo}
            onChange={onChangeCheckbox}
          />
          Ativo
        </label>

        <div>
          <label className="block text-sm font-medium mb-1">
            Data Cadastro (ISO)
          </label>
          <input
            name="dataCadastro"
            value={form.dataCadastro}
            onChange={onChangeInput}
            className="w-full border rounded px-3 py-2"
            placeholder="Se vazio, eu gero automático"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Usuário ID</label>
            <input
              type="number"
              name="usuarioId"
              value={form.usuarioId}
              onChange={onChangeInput}
              className="w-full border rounded px-3 py-2"
              placeholder="1"
              min={1}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Categoria ID
            </label>
            <input
              type="number"
              name="categoriaId"
              value={form.categoriaId}
              onChange={onChangeInput}
              className="w-full border rounded px-3 py-2"
              placeholder="1"
              min={1}
            />
          </div>
        </div>

        <button
          disabled={loading}
          className="mt-2 px-4 py-2 rounded bg-blue-700 text-white hover:opacity-90 disabled:opacity-60"
        >
          {loading ? "Salvando..." : "Salvar"}
        </button>
      </form>
    </div>
  );
}
