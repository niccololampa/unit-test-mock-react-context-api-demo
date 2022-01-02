import { CompanyProvider } from "./contexts/CompanyContext";
import ParentDisplay from "./components/ParentDisplay"
import './App.css';

function App() {
  return (
    <div className="App">
      <CompanyProvider>
        <ParentDisplay />
      </CompanyProvider>
    </div>
  );
}

export default App;
