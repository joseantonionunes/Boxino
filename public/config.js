// Função para cadastrar usuário
function cadastrar(nome, pontos) {
   
    fetch('http://localhost:3000/add-user', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome, pontos})
    })
    .then(response => response.json())
    .then(data => {
        console.log('Usuário cadastrado com ID:', data.id);
        // Atualiza a lista de usuários após cadastro
        listarUsuarios();
    })
    .catch(error => {
        console.error('Erro ao cadastrar usuário:', error);
    });
}

// Função para listar usuários
function listarUsuarios() {
    fetch('http://localhost:3000/get-users')
        .then(response => response.json())
        .then(users => {
            const userTableBody = document.querySelector('#users tbody');
            userTableBody.innerHTML = ''; // Limpa a tabela existente

            users.forEach(user => {
                const tr = document.createElement('tr');

                const tdNome = document.createElement('td');
                tdNome.textContent = user.nome;
                tr.appendChild(tdNome);

                const tdPontos = document.createElement('td');
                tdPontos.textContent = user.pontos;
                tr.appendChild(tdPontos);

                userTableBody.appendChild(tr);
            });
        })
        .catch(error => {
            console.error('Erro ao listar usuários:', error);
        });
}


// function listarUsuarios() {
//     fetch('http://localhost:3000/get-users')
//         .then(response => response.json())
//         .then(users => {
//             const userList = document.getElementById('users');
//             userList.innerHTML = ''; // Limpa a lista existente
//             users.forEach(user => {
//                 const li = document.createElement('li');
//                 li.textContent = `${user.nome} - ${user.pontos} pontos`;
//                 userList.appendChild(li);
//             });
//         })
//         .catch(error => {
//             console.error('Erro ao listar usuários:', error);
//         });
// }

// Adiciona um listener para o formulário
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // const nome = document.getElementById('nome').value;
    // const pontos = document.getElementById('pontos').value; 
    cadastrar(nome, pontos);
});


// Lista usuários ao carregar a página
document.addEventListener('DOMContentLoaded', listarUsuarios);
