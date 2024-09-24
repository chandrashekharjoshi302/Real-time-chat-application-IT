import { Route } from "react-router-dom";
import Homepage from "./Pages/Homepage.jsx";
import Chatpage from "./Pages/Chatpage.jsx";

function App() {
  return (
    <>
      <Route path="/" component={Homepage} exact />
      <Route path="/chatpage" component={Chatpage} />
    </>
  );
}

export default App;
