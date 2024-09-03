'use strick';

let html = document.getElementById('cabecalho');
console.log(html);


let aulas = [
    {
        "id": 1300,
        "data": "2024-08-29T03:00:00.000Z",
        "data_hora_inicio": "2024-08-29T21:00:00.000Z",
        "data_hora_fim": "2024-08-30T01:00:00.000Z",
        "turma": "EMP-NBM-03",
        "instrutor": "JOEL HERBERT BARBOSA SILVA",
        "unidade_curricular": "NOÇÕES BÁSICAS PARA MAQUINISTAS (CH: 219.0000)",
        "ambiente": "VTRIA-3-SALA-3004",
        "chave": null
    },
    {
        "id": 1280,
        "data": "2024-08-29T03:00:00.000Z",
        "data_hora_inicio": "2024-08-29T21:00:00.000Z",
        "data_hora_fim": "2024-08-30T01:00:00.000Z",
        "turma": "UMO-MBMM-03",
        "instrutor": "THADEU VASCONCELOS DA SILVA GOMES",
        "unidade_curricular": "MECÂNICA BÁSICA DE MOTORES DE MOTOCICLETAS (CH: 100.0000)",
        "ambiente": "VTRIA-EXTER-EXTERNO",
        "chave": null
    },
    {
        "id": 1326,
        "data": "2024-08-29T03:00:00.000Z",
        "data_hora_inicio": "2024-08-29T21:30:00.000Z",
        "data_hora_fim": "2024-08-30T01:00:00.000Z",
        "turma": "HTC-MEC-4-92",
        "instrutor": "AFONSO DE JESUS CORDEIRO",
        "unidade_curricular": "DESENVOLVIMENTO DE SISTEMAS DE AUTOMAÇÃO MECÂNICA (CH: 100.0000)",
        "ambiente": "VTRIA-3-LAB-3003",
        "chave": null
    }
]
let tabela = document.getElementById('tabela');



let exibir = '';
for(let aula of aulas){
    let horaInicio = new Date(aula.data_hora_inicio).toLocaleTimeString('pt-BR', {hour: '2-digit',minute: '2-digit',hour12: false});
    let horaFim = new Date(aula.data_hora_fim).toLocaleTimeString('pt-BR', {hour: '2-digit',minute: '2-digit',hour12: false});
    exibir += '<tr>'
    exibir += '<td>'+horaInicio+'</td>'
    exibir += '<td>'+horaFim+'</td>'
    exibir += '<td>'+aula.turma+'</td>'
    exibir += '<td>'+aula.instrutor+'</td>'
    exibir += '<td>'+aula.unidade_curricular+'</td>'
    exibir += '<td>'+aula.ambiente+'</td>'
    exibir += '</tr>'
}

tabela.innerHTML += exibir;


const imagens = [
    {
        "id": 11,
        "alternativo": "fun",
        "caminho": "1724968856063.jpg",
        "created_at": "2024-08-29T22:00:56.000Z"
    },
    {
        "id": 12,
        "alternativo": "tes",
        "caminho": "1724968882685.jpg",
        "created_at": "2024-08-29T22:01:22.000Z"
    }
]

const anuncios = document.getElementById('anuncios');
let listaAnuncios = '';


for(let imagem of imagens){
    listaAnuncios += `<img src='http://10.145.40.222:8080/public/${imagem.caminho}'alt= '${imagem.alternativo}'/>`
    console.log(imagem.caminho);
}

anuncios.innerHTML = listaAnuncios;