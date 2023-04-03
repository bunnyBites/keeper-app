import { useState } from 'react';
import Header from "./components/header";
import Footer from "./components/footer";
import CreateArea from "./components/CreateArea";
import Note from "./components/note";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);

  return (
    <div>
      <Header />
      <CreateArea setNotes={setNotes} />
      {notes.map((note) => (
        <Note {...note} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
