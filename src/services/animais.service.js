const pool = require("../database/connection")

const listasTodosAnimais = async () => {
      try{
        const resultado = await pool.query('SELECT * FROM animais ORDER BY id')
        return resultado.rows 
    }catch(error){
        console.log('Erro ao digitar todos os animais', error.message)
        throw error
    }
};

const buscarAnimalPorId = async (id) => {
  return animais.find((animal) => animal.id === Number(id)) || null;
};

const criarAnimal = async ({ nome, especie, raca, data_nascimento, tutor_id }) => {
  if (!nome || !especie) {
    throw new Error('Nome e espécie são obrigatórios.');
  }

  const novoAnimal = {
    id: animais.length + 1,
    nome,
    especie,
    raca: raca || '',
    data_nascimento: data_nascimento || null,
    tutor_id: tutor_id || null,
  };

  animais.push(novoAnimal);
  return novoAnimal;
};

module.exports = { listasTodosAnimais, buscarAnimalPorId, criarAnimal };