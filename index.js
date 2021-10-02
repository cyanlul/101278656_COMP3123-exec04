let express = require('express')
let app = express()

//http://localhost:8080/hello
app.get("/hello", (req, res) => {
    res.send("Hello Express JS")
})

//http://localhost:8080/user?fnm=Pritesh&lnm=Patel
app.get("/user", (req, res) => {
    let first_name = req.query.fnm
    let last_name = req.query.lnm

    let response = {
        first_name,
        last_name
    }

    res.send(response)
})

//http://localhost:8080/user/Pritesh/Patel
app.post("/user/:fname/:lname", (req, res) => {
    let first_name = req.params.fname
    let last_name = req.params.lname

    let response = {
        first_name,
        last_name
    }

    res.send(response)
})

let server = app.listen(8080, () => {
    let host = server.address().address
    let port = server.address().port
    console.log("Server running at http://%s:%s", host, port)
})