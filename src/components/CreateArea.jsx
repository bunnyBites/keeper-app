import { useState } from "react";
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import AddIcon from '@mui/icons-material/Add';

const CreateArea = ({ setNotes }) => {
  const [isExpanded, setExpanded] = useState(false);
  const [noteInfo, setNoteInfo] = useState({
    title: "",
    content: "",
  });

  const handleSubmit = () => {
    if (!noteInfo.content) return;

    setNotes(prevValue => [...prevValue, { ...noteInfo, id: prevValue.length }]);
    setNoteInfo({ title: "", content: "" });
    setExpanded(false);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setNoteInfo(prevValue => ({ ...prevValue, [name]: value }))
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={noteInfo.title}
          />
        )}
        <textarea
          onChange={handleChange}
          name="content"
          onClick={() => setExpanded(true)}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1 }
          value={noteInfo.content}
        />
        <Zoom in={isExpanded}>
          <Fab type="button" onClick={handleSubmit}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
};

export default CreateArea;
