import "./App.css";
import ButtonExample from "./components/Button";

function App() {
  const handleClick = () => alert("Click");

  return (
    <main className="flex flex-col gap-3">
      <h1>Hola</h1>
      <ButtonExample handleClick={handleClick} />
    </main>
  );
}

export default App;
