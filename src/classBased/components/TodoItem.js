import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MdDeleteForever } from 'react-icons/md';
import styles from './TodoItem.module.css';

function TodoItem(props) {
  const {
    todo, updateCheckbox, deleteItem, updateTitle,
  } = props;
  const { id, title, completed } = todo;

  function handleCheckbox() {
    updateCheckbox(id);
  }

  function handleDeleteItem() {
    deleteItem(id);
  }

  const [editing, setEditing] = useState(false);

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };

  const handleUpdateTitle = (e) => {
    updateTitle(e.target.value, id);
  };

  const viewMode = {};
  const editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          type="checkbox"
          checked={completed}
          onChange={handleCheckbox}
          className={styles.checkbox}
        />
        <span style={completed ? completedStyle : null}>
          {title}
        </span>
        <button type="button" onClick={handleDeleteItem}>
          <MdDeleteForever style={{
            color: '#eb4747',
            fontSize: '1.25rem',
            fontWeight: '600',
          }}
          />
        </button>
      </div>
      <input
        type="text"
        style={editMode}
        className={styles.textinput}
        value={title}
        onChange={handleUpdateTitle}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
}

TodoItem.propTypes = {
  updateTitle: PropTypes.func.isRequired,
  updateCheckbox: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  todo: PropTypes.shape(PropTypes.string).isRequired,
};

export default TodoItem;
