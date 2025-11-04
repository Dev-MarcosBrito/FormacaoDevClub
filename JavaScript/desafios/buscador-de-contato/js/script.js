let p = document.querySelector('p')
let input = document.querySelector('input')

const contacts = [
    { name: 'Marcos Brito', phone: '12345-6789' },
    { name: 'Ana Silva', phone: '98765-4321' },
    { name: 'João Souza', phone: '45678-1234' },
    { name: 'Maria Oliveira', phone: '65432-1987' },
    { name: 'Pedro Santos', phone: '78912-3456' }
]

function search() {

    for (let i = 0; i < contacts.length; i++) {

        if (input.value.toLowerCase() === contacts[i].name.toLowerCase()) {
            p.innerHTML = `Contato Encontrado: ${contacts[i].name} - Telefone: ${contacts[i].phone}`

            break
        } else {
            p.innerHTML = 'Contato Não Encontrado'
        }
    }



}