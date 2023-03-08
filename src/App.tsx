import CardContainer from "./components/CardContainer";
import NewTodoForm from "./components/ToDoForm";
import Button from "./components/Button";
import Modal from "react-modal";

import { useState } from "react";
function App() {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="relative h-full ">
      <h1 className="text-xl font-semibold py-2 text-center md:text-3xl">
        TODO APP
      </h1>
      <Modal
        appElement={document.getElementById("root") as HTMLElement}
        isOpen={modalIsOpen}
        closeTimeoutMS={500}
        onRequestClose={closeModal}
        contentLabel="New To Do Form"
        className={
          "mx-auto my-6 w-4/5 h-[100hv] bg-white p-4 md:p-10 bg-primary rounded-xl drop-shadow-2xl"
        }
      >
        <NewTodoForm handleCloseModal={closeModal} />
      </Modal>
      <div className="flex flex-col md:flex-col justify-center items-center p-4 rounded-lg">
        <Button
          onClick={openModal}
          text={"Create Note"}
          color={"rgb(75 136 229)"}
          hoverColor={"rgb(0 0 255)"} 
        />
      </div>

      <CardContainer />
    </div>
  );
}

export default App;
