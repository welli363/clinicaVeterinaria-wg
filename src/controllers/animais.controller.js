const animaisService = require('../services/animais.service');

const listarAnimais = async ( req,res ) => {
    try{
        const animais = await animaisService.listasTodosAnimais();
        res.status(200).json({total: animais.length, animais})
    }catch(erro) {
        res.status(500).json({erro: 'Erro interno ao listar animais.'})
    }
};

const buscarAnimalPorId = async (req, res) => {
    try{
        const {id} = req.params;
        const animais = await animaisService.buscarAnimalPorId(id);

        if(!animais) {
            return res.status(404).json({erro: `Animal ${id} não encontrado.`})
        }

        res.status(200).json([animais])
    }catch(erro) {
        res.status(500).json({erro: 'Erro interno ao buscar animal'})
    }
};

const criarAnimal = async (req, res) => {
    try {
        // Extrai os dados do corpo da requisição
        const { nome, especie } = req.body;
        const novoAnimal = await animaisService.criarAnimal({ nome, especie });
    
        // 201 = Created — status correto para criação bem-sucedida
        res.status(201).json({
          mensagem: 'Animal cadastrado com sucesso!',
          animal: novoAnimal,
        });
      } catch (erro) {
        // Se o Service lançou um erro de validação, retornamos 400
        res.status(400).json({ erro: erro.message });
      }
}

module.exports = { listarAnimais, buscarAnimalPorId, criarAnimal}