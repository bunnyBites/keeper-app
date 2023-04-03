import { useState } from 'react';
import Header from "./components/header";
import Footer from "./components/footer";
import CreateArea from "./components/CreateArea";
import Note from "./components/note";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);

  const onDeleteNote = (selectedNoteId) => {
    setNotes(prevValues => prevValues.filter(value => value.id !== selectedNoteId))
  }

  return (
    <div>
      <Header />
      <CreateArea setNotes={setNotes} />
      {notes.map((note) => (
        <Note {...note} key={note.id} onDeleteNote={onDeleteNote} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
