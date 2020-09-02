const express = require("express");
const cors = require("cors");
// const bodyParser = require("body-parser");
const server = express();
const port = process.env.PORT || 3000;
const db = require('../db/config')
const { index, show } = require('../db/queries')


server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
    res.send("Blog Server Running");
});

server.listen(port, () =>
    console.log(`Express server running at http://localhost:${port}`)
);


server.get('/posts', (req, res) => {
    db.run(index).then(resp => {
        const posts = resp.rows
        res.send({posts})
        
        })
        .catch(err => res.status(500).end())   
})

server.get('/posts/:id', (req, res) => {
    db.run(show, [req.params.id])
    .then(resp => {
        const post = resp.rows
        res.json({post})
    })
    .catch(err => res.status(500).end())
})