const fs = require('fs');

console.log('[Lista de Clientes] AvaBeauty');

const clientes = 
[
    { id: 1, nome: 'Cássia', idade: 25, email: 'asdfg@gmail.com' },
    { id: 2, nome: 'Maria', idade: 30, email: 'acvbg@gmail.com' },
    { id: 3, nome: 'Carvalho', idade: 35, email: 'aaaag@gmail.com'}
];

const clientesJSON = JSON.stringify(clientes);

//especificar o nome do arquivo
const nomeDoArquivo = 'clientes.json';

fs.writeFile(nomeDoArquivo,clientesJSON,(err)=> {
    if(err) { console.error('Ocorreu um erro ao escrever o arquivo:', err);
return;
};
console.log("O arquivo JSON foi criado com sucesso!");
});
