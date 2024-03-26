import express from "express"
import notesManager from "./data/fs/NotesManager.js";

//server
const server = express()
const port = 8080
const ready = () => console.log("server ready on port " + port);
server.listen(port, ready)

//middlewares
server.use(express.urlencoded({ extended: true }))
server.use(express.json())

//router
server.get("/", async(req, res) => {
    try {
        return res.json({
            statusCode: 200,
            message: "CODER API OK"
        })
    } catch (error) {
        return res.json({
            statusCode: 500,
            message: "CODER API ERROR "
        })
    }
});

const create = async(req, res) => {
    try {
        const data = req.body
        const one = await notesManager.create(data)
        return res.json({
            statusCode: 201,
            message: "USER CREATED: " + one.id
        })
    } catch (error) {
        return res.json({
            statusCode: error.statusCode || 500,
            message: error.message || "CODER API ERROR "
        })
    }
};

const update = async(req, res) => {
    try {
        const { nid } = req.params
        const data = req.body
        const one = await notesManager.update(nid, data)
        return res.json({
            statusCode: 200,
            message: "Succesfull update "+ one.id
        })
    } catch (error) {
        return res.json({
            statusCode: error.statusCode || 500,
            message: error.message || "CODER API ERROR "
        })
    }
};

const destroy = async(req, res) => {
    try {
        const { nid } =  req.params
        const one = await notesManager.destroy(nid)
        return res.json({
            statusCode: 200,
            response: one
        })
    } catch (error) {
        return res.json({
            statusCode: error.statusCode || 500,
            message: error.message || "CODER API ERROR "
        })
    }
}

server.post("/api/notes", create )
server.put("/api/notes/:nid", update)
server.delete("/api/notes/:nid", destroy)