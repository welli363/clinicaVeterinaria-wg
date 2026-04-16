const pool = require("../database/connection")

const listarTodasConsultas = async () => {
      try{
        const resultado = await pool.query('SELECT * FROM consultas ORDER BY id')
        return resultado.rows 
    }catch(error){
        console.log('Erro ao digitar todas as consultas', error.message)
        throw error
    }
};

const buscarConsultaPorId = async (id) => {
  return consultas.find((consulta) => consulta.id === Number(id)) || null;
};

const criarConsulta = async ({ animal_id, tutor_id, data, hora, descricao }) => {
  if (!animal_id || !tutor_id || !data || !hora) {
    throw new Error('animal_id, tutor_id, data e hora são obrigatórios.');
  }

  const novaConsulta = {
    id: consultas.length + 1,
    animal_id,
    tutor_id,
    data,
    hora,
    descricao: descricao || '',
  };

  consultas.push(novaConsulta);
  return novaConsulta;
};

module.exports = { listarTodasConsultas, buscarConsultaPorId, criarConsulta };