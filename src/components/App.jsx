import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [titleValue, setTitleValue] = useState("");
  const [content, setContent] = useState("");
  const [contentArray, setContentArray] = useState([]);
  function settingTitle(event) {
    const titleContent = event.target.value;
    setTitleValue(titleContent);
  }

  function noteContent(event) {
    const noteValue = event.target.value;
    setContent(noteValue);
  }
  function itemsArray(event) {
    event.preventDefault();
    const contents = {
      title: titleValue,
      content: content,
    };
    setContentArray(function (prevValue) {
      return [...prevValue, contents];
    });

    setTitleValue("");
    setContent("");
  }

  function deleteItem(id) {
    setContentArray(function (prevValue) {
      return prevValue.filter(function (content, index) {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea
        settingTitles={settingTitle}
        noteContents={noteContent}
        itemsArrays={itemsArray}
        title={titleValue}
        content={content}
      />

      {contentArray.map(function (content, index) {
        return (
          <Note
            key={index}
            id={index}
            title={content.title}
            content={content.content}
            onDeletion={deleteItem}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
