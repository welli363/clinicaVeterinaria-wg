const pool = require('../database/connection')

const listasTodosAnimais = async () => {
    try {
        const resultado = await pool.query('SELECT * FROM animais ORDER BY id')
        return resultado.rows
    
    }catch(error) {
        console.log('Erro ao digitar todos os animais', error.message)
        throw error
    }
};

const buscarAnimalPorId = async (id) => {
    const resultado = await pool.query('SELECT * FROM animais WHERE id = $1', [
        id,
    ])

    return resultado.rows[0]
};

const criarAnimal = async ({nome, especie, raca, data_nascimento, tutor_id}) => {
    try{
        const query = `INSERT INTO tutores (nome, especie, raca, data_de_nascimento ) VALUES ($1, $2, $3, $4, $5) RETURNING *`
        const res = await pool.query([
            nome, 
            especie,
            raca,
            data_nascimento,
            tutor_id,
        ])
    }catch(error) {
        console.log('Erro ao criar animal', error.message)
        throw error
    }

    return res.rows[0]
};

module.exports = {listasTodosAnimais, buscarAnimalPorId, criarAnimal};