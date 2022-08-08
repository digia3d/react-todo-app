import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MdAddCircleOutline } from 'react-icons/md';

function InputTodo(props) {
  const [inputField, setInputField] = useState({
    title: '',
  });

  const { addTodoItem } = props;

  const onChange = (e) => {
    setInputField({
      title: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputField.title.trim()) {
      addTodoItem(inputField.title);
      setInputField({
        title: '',
      });
    } else {
      throw new Error('ToDo Title cannot be empty');
    }
  };

  return (
    <form
      className="form-container"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Add to do...."
        value={inputField.title}
        onChange={onChange}
        className="input-text"
      />
      <button type="button" className="input-submit">
        <MdAddCircleOutline style={{
          color: '#0f8a0f',
          fontSize: '1.25rem',
          fontWeight: '600',
        }}
        />
      </button>
    </form>
  );
}

InputTodo.propTypes = {
  addTodoItem: PropTypes.func.isRequired,
};

export default InputTodo;
