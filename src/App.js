import { BrowserRouter, Switch, Route} from 'react-router-dom';

import './App.css';

import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import TodoList from './components/TodoList';
import Home from './components/accounts/Home';
import LoginForm from './components/accounts/LoginForm';
import NavBar from './components/accounts/Navbar';
import Register from './components/accounts/Register';
import Resource from './components/resources/Resource';
import Users from './components/User/users';
// import TodoList from './components/TodoList';

function App() {
  return (
    <div >
   <BrowserRouter >
           <NavBar />

    <div >
       {/* <TodoList /> */}
      
       <Switch>
      
      <PrivateRoute path="/home">
        {/* <Home /> */}
        <Home />
      </PrivateRoute>
      <PublicRoute path="/login">
      <LoginForm />
        {/* <LoginForm /> */}
      </PublicRoute>
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
      <Route path="/users">
        <Users />
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
