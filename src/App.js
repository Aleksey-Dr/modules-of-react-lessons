import { Component } from 'react';
import shortid from 'shortid';

// import Users from './components/Users';
// import Section from './components/Section';
// import Counter from './components/counter';
// import Dropdown from './components/dropdown';
// import ColorPicker from './components/colorPicker';
import TodoList from './components/todoList';
import TodoEditor from './components/todoEditor';
import Filter from './components/filter';
// import Form from './components/form/Form';

import initialTodos from '../src/data/todos.json';
// import users from '../src/data/users.json';
// import colors from '../src/data/colors.json';

export class App extends Component {

  // TODO
  state = {
    todos: initialTodos,
    filter: '',
  };

  addTodo = text => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }))
  };



  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    this.setState(({todos}) => ({
      todos: todos.map(todo =>
        todo.id === todoId
          ? { ...todo, completed: !todo.completed, }
          : todo
      ),
    }));
  };

  changeFilter = event => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };
  // todo

  // FORM
  // formSubmitHandler = data => {
  //   console.log(data);
  // }
  // form

  render() {
    const { todos, filter } = this.state;

    const normalizedFilter = this.state.filter.toLowerCase();

    const filterTodos = this.state.todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter));

    return (
      <>
        {/* <Form onSubmit={this.formSubmitHandler} /> */}
        <TodoEditor onSubmit={this.addTodo} />

        <Filter
          value={filter}
          onChange={this.changeFilter}
        />

        <TodoList
          todos={filterTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />

    {/* <ul>
      {users.map(user => 
        <li key={user.id}>
          <Users
            avatar={user.avatar}
            name={user.username}
            tag={user.tag}
            location={user.location}
            stats={user.stats}
          />
        </li>
      )}
    </ul> */}
    {/* <Section title="Top of the week">
      <ul>
      {users.map(user => 
        <li key={user.id}>
          <Users
            avatar={user.avatar}
            name={user.username}
            tag={user.tag}
            location={user.location}
            stats={user.stats}
          />
        </li>
      )}
      </ul>
      
      <ul>
      {users.map(user => 
        <li key={user.id}>
          <Users
            avatar={user.avatar}
            name={user.username}
            tag={user.tag}
            location={user.location}
            stats={user.stats}
          />
        </li>
      )}
      </ul>
      
      <ul>
      {users.map(user => 
        <li key={user.id}>
          <Users
            avatar={user.avatar}
            name={user.username}
            tag={user.tag}
            location={user.location}
            stats={user.stats}
          />
        </li>
      )}
    </ul>
    </Section>
    <Section /> */}
    {/* Module 2 */}
    
    {/* <Counter initialValue={0} /> */}

    {/* <Dropdown /> */}

    {/* <ColorPicker options={ colors } /> */}
  </>);
  }
}

// export default App;