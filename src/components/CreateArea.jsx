import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault(); // Prevents the form from refreshing the page
  }

  return (
    <div className="form-container">
      <form className="form-group">
        <input
          onChange={handleChange}
          name="title"
          value={note.title}
          placeholder="Title"
          className="form-control mb-2"
        />
        <textarea
          onChange={handleChange}
          name="content"
          value={note.content}
          placeholder="Take a note..."
          rows="3"
          className="form-control mb-2"
        />
        <button onClick={submitNote} className="btn btn-warning">
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
