let http = require("http");
let express = require("express");
let colors = require("colors");
let bodyParser = require("body-parser");
let mongodb = require("mongodb");
const console = require ("console");

let app = express();
app.use(express.static("./Public"));


let server = http.createServer(app);
server.listen(80);

console.log("Servidor rodando...".rainbow);

const MongoClient = mongodb.MongoClient;
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri, {useNewUrlParser: true});

let dbo = client.db("LAB9");
let usuarios = dbo.collection("posts");

///////////////////////////////

app.get("/cadastrar", function(req, res){
    let nome = req.query.nome;
    let email = req.query.email;
    let senha = req.query.senha;

    console.log(nome, email, senha);
});

app.get("/login", function(req, res){
    let nome = req.query.nome;
    let email = req.query.email;
    let senha = req.query.senha;
    let status_ok = "Login correto!";
    let status_erro = "Login incorreto!";

    if (nome == cadastrar(nome) && email == cadastrar(email) && senha == cadastrar(senha)) {
        res.render("resposta.ejs", {status: status_ok});
    } else {
        res.render("resposta.ejs", {status: status_erro});
    }
});

//////////////////////////////

app.get("/blog", function(req, res){
    let itens = [];
    let data = {};
    let posts = dbo.collection("posts");
    posts.find(data).toArray(function(err, itens) {
    res.render("blog.ejs", {itens});
    });
});

app.get("/criar", function(req, res){
    res.redirect("/LAB 9/criar_post.html");
});

app.get("/cadastrar_post", function(req, res){
    let titulo = req.query.titulo;
    let resumo = req.query.resumo;
    let conteudo = req.query.conteudo;

    let data = {db_titulo: titulo, db_resumo: resumo, db_conteudo: conteudo};
    let posts = dbo.collection("posts");

    posts.insertOne(data, function(err) {
      if (err) {
        console.log(err);
        res.render('resposta_usuario.ejs', {resposta: "Erro ao cadastrar post!"})
      } else {
            let data = {}
            posts.find(data).toArray(function(err, itens) {
            res.render('blog.ejs', {itens});        
        });
      };
    });
  });