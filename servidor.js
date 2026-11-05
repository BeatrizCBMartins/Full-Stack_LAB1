let http = require("http");
let express = require("express");

let app = express();
app.use(express.static("./Public"));


let server = http.createServer(app);
server.listen(80);

console.log("Servidor rodando...");

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