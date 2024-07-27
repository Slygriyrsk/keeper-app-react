import React, { useState } from "react";

function Note(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(props.title);
  const [editedContent, setEditedContent] = useState(props.content);

  function handleDelete() {
    props.onDelete(props.id);
  }

  function handleEditSave() {
    props.onEdit(props.id, { title: editedTitle, content: editedContent });
    setIsEditing(false);
  }

  function handleEditCancel() {
    setEditedTitle(props.title);
    setEditedContent(props.content);
    setIsEditing(false);
  }

  function handleEdit() {
    setIsEditing(true);
  }

  function handleTitleChange(event) {
    setEditedTitle(event.target.value);
  }

  function handleContentChange(event) {
    setEditedContent(event.target.value);
  }

  function NoteContainer(props) {
    return (
      <div className="note-container">
        {props.notes.map((note) => (
          <Note
            key={note.id}
            id={note.id}
            title={note.title}
            content={note.content}
            onDelete={props.onDelete}
            onEdit={props.onEdit}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="note">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTitle}
            onChange={handleTitleChange}
            placeholder="Edit title"
          />
          <textarea
            onChange={handleContentChange}
            value={editedContent}
            rows="3"
            placeholder="Edit content"
          />
        </>
      ) : (
        <>
          <h1>{props.title}</h1>
          <p>{props.content}</p>
        </>
      )}
      <div>
        {isEditing ? (
          <>
            <button onClick={handleEditSave} className="btn btn-success">
              Save
            </button>
            <button onClick={handleEditCancel} className="btn btn-secondary">
              Cancel
            </button>
          </>
        ) : (
          <>
            <button onClick={handleEdit} className="btn btn-primary">
              Edit
            </button>
            <button onClick={handleDelete} className="btn btn-danger">
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Note;
