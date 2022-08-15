require('dotenv').config();
//Protegendo dados pessoais com .env
const senha = process.env.senha;
const usuario = process.env.usuario;

const mongoose = require('mongoose');

//Importando a classe de endereços
const Personagem = require('./src/js/Personagem')

//Para poder ler dados usando req.body
const bodyParser = require('body-parser')

const express = require('express')
let app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(express.static("."));

//Conectando ao MongoDB
mongoose.connect('mongodb://root:root@mongodb:27017/')
    .then(() => {
    //Se tiver sucesso em conectar ao banco irá liberar a porta!
        app.listen(8080, () => {
            console.log("testando a porta 8080")
        })
    //console.log("Conectado a Database");
    })
    .catch((err) => console.log(err))


//Criando rota para adicionar novos personagens no banco de dados
app.post('/', async (req, res) => {
    console.log(req.body)
    //pegando dados do body do HTML
    const {nome,especie,acompanhante} = req.body

    const personagem = {
        nome,
        especie,
        acompanhante
    }
    try {
        await Personagem.create(personagem)

        //Se o dado foi criado com sucesso, retorma uma mensagem de sucesso ao usuário
        //res.status(201).json({message: 'Novo personagem inserido com sucesso!'})
        res.sendFile(__dirname+'/index.html');

    } catch (error) {
            //Se acontecer algum erro na aplicação, será mandada uma mensagem de erro no servidor
            res.status(500).json({error : error})
    }
})

//Ler os dados dos personagens já cadastrados no banco
app.get('/lista',async (req,res) => {
    try {
        const personagens = await Personagem.find()
        //res.status(201).json(personagens)
        res.send(JSON.stringify(personagens,null, '\t'))
    } catch (error) {
            //Se acontecer algum erro na aplicação, será mandada uma mensagem de erro no servidor
            res.status(500).json({error : error})
    }
})

//Rota para apagar um personagem do banco
app.get('/excluir/:id', async (req,res) => {
    const id = req.params.id;
    try {
        //Se der certo ele apagará o personagem e mandará para tela inicial
        await Personagem.deleteOne({_id : id})
        res.redirect('/')
    } catch (error) {
            //Se acontecer algum erro na aplicação, será mandada uma mensagem de erro no servidor
            res.status(500).json({error : error})
    }
   
})


