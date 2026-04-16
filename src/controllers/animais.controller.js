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
        const { nome, especie, raca, data_nascimento, tutor_id } = req.body;

        if (!nome || !especie) {
            return res.status(400).json({
                erro: 'Os campos nome e especie são obrigatórios.',
            });
        }

        const novoAnimal = await animaisService.criarAnimal({
            nome,
            especie,
            raca,
            data_nascimento,
            tutor_id,
        });

        res.status(201).json({
            mensagem: 'Animal cadastrado com sucesso!',
            animal: novoAnimal,
        });
    } catch (erro) {
        console.log('Erro no controlador ao criar animal:', erro.message);
        res.status(500).json({ erro: 'Erro interno ao cadastrar animal.' });
    }
};

module.exports = { listarAnimais, buscarAnimalPorId, criarAnimal };