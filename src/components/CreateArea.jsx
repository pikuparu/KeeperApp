import React, { useState } from "react";

function CreateArea(props) {
  return (
    <div>
      <form onSubmit={props.itemsArrays}>
        <input
          onChange={props.settingTitles}
          name="title"
          placeholder="Title"
          value={props.title}
        />
        <textarea
          onChange={props.noteContents}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={props.content}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
