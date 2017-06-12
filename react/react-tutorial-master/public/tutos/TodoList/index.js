const TodoItem = (props) => {

    const {todo, filters} = props;
    const labelDoneButton = todo.done ? 'A refaire' : 'Faire';

    const showTodos = () => {
      const filterFaire = filters.faire;
      const filterAFaire = filters.aFaire;
      const doFilters = filterFaire || filterAFaire;
      let showTodo = true;
      if (doFilters) {
        showTodo = filterFaire && !todo.done
        showTodo = !showTodo ? (filterAFaire && todo.done ? true : false) : true;
      }
      return showTodo;
    };

    return (
    <div>
      {showTodos() && <div className='line'>
         <span>{todo.label}</span>
        <span>
          <button onClick={props.handleDone}>{labelDoneButton}</button>
        </span>
        <span>
          <button onClick={props.delete}>x</button>
        </span>
      </div>
      }
    </div>
    )
};

const TodoList = React.createClass({
    getInitialState() {
        return {
          todos: [{label: 'todo1', done: false},
                  {label: 'todo2', done: false},
                  {label: 'todo3', done: false}],
          text: '',
          filterFaire: true,
          filterAFaire: true
        };
    },
    componentDidMount() {
    },
    handleChange(e){
      this.setState({
        text: e.target.value
      });
    },
    add(e) {
      let{todos} = this.state;
      todos.push({label: this.state.text, done:false});
      this.setState({todos: todos, text: ''});
    },
    delete(index, e){
      let {todos} = this.state;
      todos.splice(index, 1);
      this.setState({todos: todos});
    },
    handleDone(index, e) {
      let{todos} = this.state;
      todos[index].done = !todos[index].done;
      this.setState({todos: todos});
    },
    keyPress(e) {
       if (e.charCode === 13) {
         this.add();
       }
    },
    filterFaire(e) {
      console.log(e.target.checked);
      this.setState({filterFaire: e.target.checked});
    },
    filterAFaire(e) {
      this.setState({filterAFaire: e.target.checked});
    },
    render() {
        const {todos, text} = this.state;
        const filters = {faire: this.state.filterFaire, aFaire: this.state.filterAFaire};
        const _disabled = text !=='' ? '': 'disabled';
        return (
            <div>
                <h1>My Todo List</h1>
                <div className='container'>
                <div className='filters'>
                    <label>faire</label>
                    <input type='checkbox' onChange={this.filterFaire} checked={this.state.filterFaire} />
                    <label>A faire</label>
                    <input type='checkbox' onChange={this.filterAFaire} checked={this.state.filterAFaire} />
                </div>
                {
                   todos.map((todo, index)=> (
                      <TodoItem key={index} filters={filters} todo={todo} delete={this.delete.bind(this, index)} handleDone={this.handleDone.bind(this, index)} />
                    ) )
                }
                </div>
                <input type="text" value={text} onKeyPress={this.keyPress} onChange={this.handleChange}/>
                <span className='input-group-btn'>
                  <button onClick={this.add} disabled={_disabled}>Ajouter</button>
                </span>
              </div>
        );
    }
});

ReactDOM.render(React.createElement(TodoList), document.getElementById('app'));
