import Header from "./components/header";
import Footer from "./components/footer";
import CreateArea from "./components/CreateArea";
import Note from "./components/note";
import { notes } from "./constants/notes";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <CreateArea />
      {notes.map((note) => (
        <Note {...note} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
