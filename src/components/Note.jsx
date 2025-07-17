import React from "react";
function Note(props) {
  return (
    <div
      className="note"
      onClick={function () {
        props.onDeletion(props.id);
      }}
    >
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button>Delete</button>
    </div>
  );
}

export default Note;
