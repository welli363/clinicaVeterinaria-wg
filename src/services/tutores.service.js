const pool = require("../database/connection")

const listarTodosTutores = async () =>{
    try{
        const resultado = await pool.query('SELECT * FROM tutores ORDER BY id')
        return resultado.rows 
    }catch(error){
        console.log('Erro ao digitar todos os tutores', error.message)
        throw error
    }

};

const buscarTutorPorId = async (id) => {
    const tutor = tutores.find((item) => item.id === Number(id))
    return tutor || null;
}

const criarTutor = async ({nome, telefone, email }) => {
    if (!nome || !telefone || !email) {
        throw new Error('Nome, telefone e email são obrigatórios.')
        
     }
     const novoTutor = {
         id: tutores.length +1,
         nome,
         telefone,
         email
     };
     tutores.push(novoTutor)
     return novoTutor
};




module.exports = { listarTodosTutores, buscarTutorPorId, criarTutor};