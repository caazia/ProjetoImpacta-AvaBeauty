const fs = require('fs');

console.log('[Lista de Usuários] AvaBeauty');

const usuario =
    [
        { id: 1, usuario: 'Cássia', email: 'asdfg@gmail.com', senha: 21312325 },
        { id: 2, usuario: 'Maria', email: 'acvbg@gmail.com', senha: 12331230 },
        { id: 3, usuario: 'Carvalho', email: 'aaaag@gmail.com', senha: 21312335 }
    ];

const produtos = [
    
    { produto: "Modelo 1", valor: 550 },
    { produto: "Modelo 2", valor: 720},
    { produto: "Modelo 3", valor: 890 },
    { produto: "Modelo 4", valor: 940 },
];

const usuarioJSON = JSON.stringify(usuario);

//especificando o nome do arquivo
const nomeDoArquivo = 'usuario.json';

fs.writeFile(nomeDoArquivo, usuarioJSON, (err) => {
    if (err) {
        console.error('Ocorreu um erro ao escrever o arquivo:', err);
        return;
    };
    console.log("O arquivo JSON foi criado com sucesso!");
});
