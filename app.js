const express = require ('express')

aplicativo const  = expresso()

vamos usuarios = [
    {
        id: 1,
        nome: 'Alisson',
        sobrenome: 'Junior Marques',
        idade: 30
    },
    {
        id: 2,
        nome: 'Diógenes',
        sobrenome: 'Pereira',
        idade: 30
    },
    {
        id: 1,
        nome: 'Jonatas',
        sobrenome: 'Pereira',
        idade: 30
    }
]


aplicativo. uso ((expresso). json())
aplicativo.get ('/usuarios', (req, res) => {
    res.status(200). enviar (usuarios)
})

aplicativo. post('/usuarios', (req, res) => {
    usuarios. empurrar (req. corpo)
    res.status(201). enviar (usuarios)
})

aplicativo. put('/usuarios/:id', (req, res) => {
    vamos usuario = usuarios. encontrar (usr => usr. id == req. params. id)

    se (! usuario){
        retorno res.status(400). json({erro: 'Usuario não encontrado.' });
    }

    usuario. nome = req. corpo. nomo
    usuario. sobrenome = req. corpo. sobrenome
    usuario. idade = req. corpo. idade
    res. enviar (usuarios)
})

aplicativo. excluir ('/usuarios/:id', (req, res) => {
    vamos usuario = usuarios. encontrar (usr => usr. id == req. params. id)
    usuarios. splice (usuarios. indexOf(usuario), 1)
    res. status(204). enviar (usuarios)
})

aplicativo. ouvir(8000, () => {
    console. log('Rodando na porta 8000')
})

Rodapé
© 2022 GitHub, Inc.
Navegação de rodapé
Termos
Privacidade
Segurança
Estado
Docs
Entrar em contato com o GitHub
Precificação
API
Formação
Blogue
Sobre
