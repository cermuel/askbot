import { Provider } from "react-redux";
import { store } from "./store";
import Login from "./login";
import ChatGpt from "./ChatGpt";

function App() {
  return (
    <Provider store={store}>
      <ChatGpt />
    </Provider>
  );
}

export default App;
