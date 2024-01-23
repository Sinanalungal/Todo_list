import Todo from "./OpeningPage/TodoList";
import TodoMain from "./MainPage/Todo_mainpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" Component={Todo} />
        <Route path="/todo" Component={TodoMain} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
