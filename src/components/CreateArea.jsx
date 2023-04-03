import { useState } from "react";

const CreateArea = ({ setNotes }) => {
  const [noteInfo, setNoteInfo] = useState({
    title: "",
    content: "",
  });

  const handleSubmit = () => {
    setNotes(prevValue => [...prevValue, { ...noteInfo, id: prevValue.length }]);
    setNoteInfo({ title: "", content: "" });
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setNoteInfo(prevValue => ({ ...prevValue, [name]: value }))
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={noteInfo.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={noteInfo.content}
        />
        <button type="button" onClick={handleSubmit}>
          Add
        </button>
      </form>
    </div>
  );
};

export default CreateArea;
