import Header from "./components/header";
import Footer from "./components/footer";
import Note from "./components/note";
import { notes } from "./constants/notes";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      {notes.map((note) => (
        <Note {...note} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
