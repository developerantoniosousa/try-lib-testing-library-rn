import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import TodoList from '../src/TodoList';

const todos = ['do my homework', 'make the bed'];

describe('TodoList', () => {
  it('should render corretly without pass any prop to element', () => {
    const tree = render(<TodoList />);
    expect(tree).toMatchSnapshot();
  });

  it('should render component with the defaultTodos passed as a prop to element correctly', () => {
    const tree = render(<TodoList defaultTodos={todos} />);
    expect(tree).toMatchSnapshot();
  });

  it('should block the insertion of todo because the todoInputvalue is empty', () => {
    const { getByTestId } = render(<TodoList />);
    fireEvent.press(getByTestId('button-add-todo'));
    expect(getByTestId('todo-list').children).toHaveLength(0);
  });

  it('should render one todo in the list', () => {
    const { getByTestId, getAllByTestId } = render(<TodoList />)
    fireEvent.changeText(getByTestId('input-add-todo'), todos[0]);
    fireEvent.press(getByTestId('button-add-todo'));
    fireEvent.changeText(getByTestId('input-add-todo'), todos[1]);
    fireEvent.press(getByTestId('button-add-todo'));
    expect(getByTestId('todo-list').children).toHaveLength(2);
    const todoItems = getAllByTestId('todo-item')
    expect(todoItems[0].children[0]).toBe(todos[0])
    expect(todoItems[1].children[0]).toBe(todos[1])
  });

  it('should clear the input when add a new todo', () => {
    const { getByTestId } = render(<TodoList />);
    const textInput = getByTestId('input-add-todo');
    fireEvent.changeText(textInput, todos[0]);
    expect(textInput).toHaveProp('value', todos[0]);
    fireEvent.press(getByTestId('button-add-todo'));
    expect(textInput).toHaveProp('value', '');
  });

  it('should render a list of todos passed by defaultTodos prop and in correct order', () => {
    const { getByTestId } = render(<TodoList defaultTodos={todos} />);
    expect(getByTestId('todo-list').children).toHaveLength(2);
    expect(getByTestId('todo-list').children[0]).toHaveProp('children', todos[0]);
    expect(getByTestId('todo-list').children[1]).toHaveProp('children', todos[1]);
  });
});
