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

if (usuario.isAdmin) {
    console.log(`${usuario.nome} tem permissões de administrador.`);
} else {
    console.log(`${usuario.nome} não é um administrador.`);
}

