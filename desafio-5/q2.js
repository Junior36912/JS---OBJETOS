const catalogoFilmes = [
    { id: 1, titulo: "Matrix", diretor: "Lana Wachowski", anoLancamento: 1999 },
    { id: 2, titulo: "Jurassic Park", diretor: "Steven Spielberg", anoLancamento: 1993 },
    { id: 3, titulo: "Inception", diretor: "Christopher Nolan", anoLancamento: 2010 },
    { id: 4, titulo: "O Senhor dos Anéis: A Sociedade do Anel", diretor: "Peter Jackson", anoLancamento: 2001 },
    { id: 5, titulo: "O Cavaleiro das Trevas", diretor: "Christopher Nolan", anoLancamento: 2008 },
    { id: 6, titulo: "Pulp Fiction", diretor: "Quentin Tarantino", anoLancamento: 1994 },
    { id: 7, titulo: "Star Wars: Episódio IV - Uma Nova Esperança", diretor: "George Lucas", anoLancamento: 1977 },
    { id: 8, titulo: "Forrest Gump", diretor: "Robert Zemeckis", anoLancamento: 1994 },
    { id: 9, titulo: "Os Vingadores", diretor: "Joss Whedon", anoLancamento: 2012 },
    { id: 10, titulo: "Interestelar", diretor: "Christopher Nolan", anoLancamento: 2014 },
    { id: 11, titulo: "O Exterminador do Futuro 2: O Julgamento Final", diretor: "James Cameron", anoLancamento: 1991 },
    { id: 12, titulo: "Clube da Luta", diretor: "David Fincher", anoLancamento: 1999 },
    { id: 13, titulo: "Gladiador", diretor: "Ridley Scott", anoLancamento: 2000 },
    { id: 14, titulo: "De Volta para o Futuro", diretor: "Robert Zemeckis", anoLancamento: 1985 },
    { id: 15, titulo: "O Poderoso Chefão", diretor: "Francis Ford Coppola", anoLancamento: 1972 },
    { id: 16, titulo: "O Iluminado", diretor: "Stanley Kubrick", anoLancamento: 1980 },
    { id: 17, titulo: "Titanic", diretor: "James Cameron", anoLancamento: 1997 },
    { id: 18, titulo: "Cidadão Kane", diretor: "Orson Welles", anoLancamento: 1941 },
    { id: 19, titulo: "O Resgate do Soldado Ryan", diretor: "Steven Spielberg", anoLancamento: 1998 },
    { id: 20, titulo: "A Origem", diretor: "Christopher Nolan", anoLancamento: 2010 },
    { id: 21, titulo: "Os Suspeitos", diretor: "Bryan Singer", anoLancamento: 1995 },
    { id: 22, titulo: "A Lista de Schindler", diretor: "Steven Spielberg", anoLancamento: 1993 },
    { id: 23, titulo: "Indiana Jones e os Caçadores da Arca Perdida", diretor: "Steven Spielberg", anoLancamento: 1981 },
    { id: 24, titulo: "O Grande Lebowski", diretor: "Joel Coen", anoLancamento: 1998 },
    { id: 25, titulo: "Django Livre", diretor: "Quentin Tarantino", anoLancamento: 2012 },
    { id: 26, titulo: "Mad Max: Estrada da Fúria", diretor: "George Miller", anoLancamento: 2015 },
    { id: 27, titulo: "Scarface", diretor: "Brian De Palma", anoLancamento: 1983 },
    { id: 28, titulo: "A Vida é Bela", diretor: "Roberto Benigni", anoLancamento: 1997 },
    { id: 29, titulo: "O Silêncio dos Inocentes", diretor: "Jonathan Demme", anoLancamento: 1991 },
    { id: 30, titulo: "Coringa", diretor: "Todd Phillips", anoLancamento: 2019 },
    { id: 31, titulo: "Blade Runner: O Caçador de Andróides", diretor: "Ridley Scott", anoLancamento: 1982 },
    { id: 32, titulo: "Parasita", diretor: "Bong Joon-ho", anoLancamento: 2019 },
    { id: 33, titulo: "Her", diretor: "Spike Jonze", anoLancamento: 2013 },
    { id: 34, titulo: "La La Land: Cantando Estações", diretor: "Damien Chazelle", anoLancamento: 2016 },
    { id: 35, titulo: "Alien: O Oitavo Passageiro", diretor: "Ridley Scott", anoLancamento: 1979 },
    { id: 36, titulo: "Batman Begins", diretor: "Christopher Nolan", anoLancamento: 2005 },
    { id: 37, titulo: "O Show de Truman", diretor: "Peter Weir", anoLancamento: 1998 },
    { id: 38, titulo: "Duna", diretor: "Denis Villeneuve", anoLancamento: 2021 },
    { id: 39, titulo: "Corra!", diretor: "Jordan Peele", anoLancamento: 2017 },
    { id: 40, titulo: "Avatar", diretor: "James Cameron", anoLancamento: 2009 }
];

function filtrarCatalogoPorAno(lista, ano){
    const listaFiltrada = lista.filter((filme) => filme.anoLancamento === ano);
    return listaFiltrada;
}

console.log("----------------------FILTRAR FILMES DE DETERMINADO ANO----------------------")

const listaCatalogoFiltrado = filtrarCatalogoPorAno(catalogoFilmes, 1998)

console.log(listaCatalogoFiltrado)