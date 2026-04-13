const tutoresService = require('../services/tutores.service');

// GET /usuarios
const listarTutores = async (req, res) => {
  try {
    const tutores = await tutoresService.listarTodosTutores;
    res.status(200).json({ total: tutores.length, tutores });
  } catch (erro) {
    res.status(500).json({ erro: 'Erro interno ao listar tutores.' });
  }
};

// GET /usuarios/:id — Busca usuario por ID
const buscarTutorPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const tutor = await tutoresService.buscarTutorPorId();

    if (!tutor) {
      return res.status(404).json({ erro: `Tutor ${id} não encontrado.` });
    }

    res.status(200).json({ tutor });
  } catch (erro) {
    res.status(500).json({ erro: 'Erro interno ao buscar tutor.' });
  }
};

// POST /usuarios — Cadastra novo usuario
const criarTutor = async (req, res) => {
  try {
    const { nome, email, telefone } = req.body;
    const novoTutor = await tutoresService.criarTutor({ nome, email, telefone });

    // 201 = Created — status correto para criação bem-sucedida
    res.status(201).json({
      mensagem: 'Tutor cadastrado com sucesso!',
      tutor: novoTutor,
    });
  } catch (erro) {
    // Se o Service lançou um erro de validação, retornamos 400
    res.status(400).json({ erro: erro.message });
  }
};



module.exports = { listarTutores, buscarTutorPorId, criarTutor};