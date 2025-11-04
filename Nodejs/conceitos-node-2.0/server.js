import express from "express";

const app = express()
app.use(express.json())

const users = []

app.get('/usuarios', (req, res) => {

    
    res.status(200).json(users)

})

app.post ('/usuarios', (req, res) => {

    users.push(req.body)
    res.status(201).json({message: "Usuário criado com sucesso!"})

})

app.listen(3000)

/*

Dados MongoDB
USER - engmarcosbrito21
PASSWORD - OHE5YSLueXQaJYrv
URL BD - mongodb+srv://engmarcosbrito21:OHE5YSLueXQaJYrv@users.ziyx4eb.mongodb.net/?retryWrites=true&w=majority&appName=Users

*/