import React from 'react';
import { View, TextInput, Text, Button } from 'react-native';

const TodoList = ({ defaultTodos }) => {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [todoInputvalue, setTodoInputValue] = React.useState('');

  function handleAddTodo() {
    if (!todoInputvalue) {
      return;
    }

    setTodos([...todos, todoInputvalue]);
    setTodoInputValue('');
  }

  return (
    <View>
      <TextInput
        testID="input-add-todo"
        value={todoInputvalue}
        onChangeText={setTodoInputValue}
      />
      <Button testID="button-add-todo" title="Add" onPress={handleAddTodo} />
      <View testID="todo-list">
        {todos.map((todo) => (
          <Text testID="todo-item" key={todo}>
            {todo}
          </Text>
        ))}
      </View>
    </View>
  );
};

TodoList.defaultProps = {
  defaultTodos: [],
};

export default TodoList;
