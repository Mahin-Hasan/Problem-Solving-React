import "./App.css";
import Toggle from "./components/Toggle";

function App() {
  return (
    <>
      <div>
        <Toggle>
          <Toggle.Active>🟢</Toggle.Active>
          <Toggle.ToggleButton />
          <Toggle.Inactive>🔴</Toggle.Inactive>
        </Toggle>
      </div>
    </>
  );
}

export default App;
