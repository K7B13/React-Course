import { createRoot }  from "react-dom/client";
import Pet from "./Pet";


const App = () => {
  return(
  <div>
    <h1>Adopt Me!</h1>
    <Pet name="Astor" animal="Dog" breed="Staffordshare" />
    <Pet name="Sparky" animal="Parrot" breed="Pevajuci" />
    
  </div>
    )
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

