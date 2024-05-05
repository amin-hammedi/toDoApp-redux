import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { handleEdit } from "../redux/action";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
const EditTask = ({ task }) => {
  const [editedTodoTask, setEditedTodoTask] = useState(task.todoTask);
  Modal.setAppElement("#root");
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const editedTask = {
      id: task.id,
      todoTask: editedTodoTask,
      isDone: task.isDone,
    };
    dispatch(handleEdit(editedTask));
    closeModal();
  };
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Edit</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={editedTodoTask}
            onChange={(e) => setEditedTodoTask(e.target.value)}
          />
          <div>
            <button onClick={closeModal}>Cancel</button>
            <button type="submit">Confirme</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default EditTask;
