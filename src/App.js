import { BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/accounts/Home';
import LoginForm from './components/accounts/LoginForm';
import NavBar from './components/accounts/Navbar';
import Register from './components/accounts/Register';
import Resource from './components/resources/Resource';
import TodoList from './components/TodoList';
// import TodoList from './components/TodoList';

function App() {
  return (
    <div >
   <BrowserRouter >
           <NavBar />

    <div >
       {/* <TodoList /> */}
      
       <Switch>
      <Route path="/home">
        {/* <Home /> */}
        <Home />
      </Route>
      <Route path="/login">
      <LoginForm />
        {/* <LoginForm /> */}
      </Route>
      <Route path="/register">
        {/* <Register /> */}
        <Register />
      </Route>
      <Route path="/resource">
        {/* <Resource /> */}
        <Resource />
      </Route>
      <Route path="/todos">
        <TodoList />
      </Route>
    </Switch>
    {/* </BrowserRouter> */}
       {/* <Login /> */}
    </div>
    </BrowserRouter >
    </div>
  );
}

export default App;
