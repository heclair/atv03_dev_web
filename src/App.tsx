import { Provider } from "./contexts";
//import Principal from "./pages/Principal";
import Rotas from "./routes";

function App() {
  return (
    <Provider>
      <Rotas />
    </Provider>
  );
}

export default App;
