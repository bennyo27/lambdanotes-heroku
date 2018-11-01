// imports
const bcrypt = require("bcryptjs");
const db = require("../data/dataConfig");

// exports
module.exports = server => {
  server.get("/notes", getNotes);
  server.post("/notes", createNote);
  server.get("/notes/:id", viewNote);
  server.put("/notes/edit/:id", editNote);
  server.delete("/notes/delete/:id", deleteNote);
};

function getNotes(req, res) {
  db("notes")
    .then(notes => res.status(200).json({ notes }))
    .catch(err => res.status(500).json(err));
}

function createNote(req, res) {
  const newNote = req.body;
  db("notes")
    .insert(newNote)
    .then(ids => res.status(201).json(ids[0]))
    .catch(err =>
      res.status(500).json({ error: "Could not add note properly" })
    );
}

function viewNote(req, res) {
  const { id } = req.params;
  db("notes")
    .where({ id })
    .then(note => res.status(200).json(note))
    .catch(err =>
      res
        .status(404)
        .json({ error: `Note with id of ${id} could not be found` })
    );
}

function editNote(req, res) {
  const { id } = req.params;
  const changes = req.body;
  db("notes")
    .where({ id })
    .update(changes)
    .then(note => res.status(200).json(note))
    .catch(err =>
      res
        .status(404)
        .json({ error: `Note with id of ${id} could not be found` })
    );
}

function deleteNote(req, res) {
  const { id } = req.params;
  db("notes")
    .where({ id })
    .del()
    .then(note => res.status(200).json(note))
    .catch(err =>
      res
        .status(404)
        .json({ error: `Note with id of ${id} could not be found` })
    );
}
