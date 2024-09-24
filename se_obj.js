const usuario = {
    nome: 'Júnior',
    idade: 19,
    isAdmin: true
};
  
const usuario2 = {
    nome: 'João',
    idade: 22,
    isAdmin: false
};

if (usuario2.isAdmin) {
    console.log(`${usuario2.nome} tem permissões de administrador.`);
} else {
    console.log(`${usuario2.nome} não é um administrador.`);
}

