import DeleteIcon from '@mui/icons-material/Delete';

const Note = ({ title, content, id, onDeleteNote }) => {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button type="button" onClick={() => onDeleteNote(id)}><DeleteIcon /></button>
    </div>
  );
};

export default Note;
