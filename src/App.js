import { Component } from "react";
import shortid from "shortid";

// import Users from './components/users/Users';
// import Section from './components/Section';
// import Counter from './components/counter';
// import Dropdown from './components/dropdown';
// import ColorPicker from './components/colorPicker';
// TODO
import TodoList from './components/todoList';
import TodoEditor from './components/todoEditor';
import Filter from './components/filter';
// todo
// import Draft from './components/draft';
// import Form from './components/form/Form';
import Modal from './components/modal';
// import Clock from './components/clock';
import IconBtn from './components/iconBtn';

import initialTodos from "../src/data/todos.json";
// import Tabs from "./components/tabs";
// import users from '../src/data/users.json';
// import colors from '../src/data/colors.json';
// import tabs from '../src/data/tabs.json';

import { ReactComponent as OpenModal } from './icons/open-modal.svg';
import { ReactComponent as CloseModal } from './icons/close-modal.svg';

export class App extends Component {
  // TODO
  state = {
    todos: initialTodos,
    filter: "",
    // MODAL
    showModal: false,
    showClock: false,
  };

  // MODULE 3
  componentDidUpdate(prevProps, prevState) {
    // console.log("componentDidUpdate");

    if (this.state.todos !== prevState.todos) {
      // console.log("Updated field todos");

      localStorage.setItem("todos", JSON.stringify(this.state.todos));
    }
  };

  componentDidMount() {
    const todos = localStorage.getItem("todos");
    const parsedTodos = JSON.parse(todos);

    parsedTodos &&
      this.setState({
        todos: parsedTodos,
      });
  };

  toggleClock = () => {
    this.setState({
      showClock: !this.state.showClock,
    });
  }

  // MODAL
  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  addTodo = (text) => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));

    this.toggleModal();
  };

  deleteTodo = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoId),
    }));
  };

  toggleCompleted = (todoId) => {
    this.setState(({ todos }) => ({
      todos: todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  changeFilter = (event) => {
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
    const { todos, filter, showModal, showClock } = this.state;

    const normalizedFilter = this.state.filter.toLowerCase();

    const filterTodos = this.state.todos.filter((todo) =>
      todo.text.toLowerCase().includes(normalizedFilter)
    );

    return (
      <>
        {/* <Tabs items={tabs} /> */}

        {/* <button type="button" onClick={this.toggleClock}>Show clock</button>
        {showClock && <Clock />} */}

        {/* <Draft /> */}

        {/* <Form onSubmit={this.formSubmitHandler} /> */}

        <IconBtn onClick={this.toggleModal} aria-label="Open modal">
          <OpenModal width="40px" height="40px" fill="white" />
        </IconBtn>

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <TodoEditor onSubmit={this.addTodo} />
            <IconBtn onClick={this.toggleModal} aria-label="Close modal">
              <CloseModal width="40px" height="40px"/>
            </IconBtn>
          </Modal>
        )}

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
      </>
    );
  }
}

// export default App;
