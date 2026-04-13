const tutores = [
    {
        id: 1,
        nome: 'Anderson Dutra',
        email: 'anderson@gmail.com',
      },
      {
        id: 2,
        nome: 'Ralph Dutra',
        email: 'ralph@gmail.com',
      },
      {
        id: 3,
        nome: 'Teddy Dutra',
        email: 'teddy@gmail.com',
      },
];

const listarTodosTutores = async () =>{
    return tutores;
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