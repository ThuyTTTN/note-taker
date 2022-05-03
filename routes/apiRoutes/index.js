//apiRoutes

const router = require("express").Router();
const db = require("../../db");

// requesting data from readNotes
router.get("/notes", (req, res) => {
  db.readNotes().then((notes) => {
    return res.json(notes);
  });
});

// submitting data by writing (req.body) onto the front end
router.post("/notes", (req, res) => {
    db.writeNote(req.body).then((notes) => {
      return res.json(notes);
    });
  });

module.exports = router;