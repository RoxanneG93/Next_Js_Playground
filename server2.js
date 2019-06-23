// This file is a custom server with express
const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();


    server.get("/p/:id", (req, res) => {

        // render method passes it off to Next Js
        app.render(req, res, "/post", { id: req.params.id })
    })

    // padding all request to next js
    server.get("*", (req, res) => {
        return handle(req, res);
    })

    server.listen(3000, err => {
        if (err) throw err;
        console.log("Now serving on localhost:3000");
    })
});