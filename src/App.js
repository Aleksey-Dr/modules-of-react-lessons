import { Component } from 'react';

// import Users from './components/Users';
// import Section from './components/Section';
// import Counter from './components/counter';
// import Dropdown from './components/dropdown';
// import ColorPicker from './components/colorPicker';
// import TodoList from './components/todoList';
import Form from './components/form/Form';

// import initialTodos from '../src/data/todos.json';
// import users from '../src/data/users.json';
// import colors from '../src/data/colors.json';

export class App extends Component {

  // TODO
  // state = {
  //   todos: initialTodos,
  // };

  // deleteTodo = todoId => {
  //   this.setState(prevState => ({
  //     todos: prevState.todos.filter(todo => todo.id !== todoId),
  //   }));
  // };

  // FORM
  formSubmitHandler = data => {
    console.log(data);
  }

  render() {
    // const { todos } = this.state;

    return (
      <>
        <Form onSubmit={this.formSubmitHandler} />
        {/* <TodoList todos={ todos } onDeleteTodo={this.deleteTodo} /> */}

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