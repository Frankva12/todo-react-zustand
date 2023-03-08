import useToDo from "../hooks/useToDo";
import Card  from "./Card";
import EmptyStore from "./Empthy";

const CardContainer = () => {
  const { todos } = useToDo();
  if (todos.length < 1) {
    return <EmptyStore />;
  }
  const pendingArr = todos
    .filter((todo) => !todo.isCompleted)
    .map((todo) => {
      return <Card key={todo.id} {...todo} />;
    });

  const completedArr = todos
    .filter((todo) => todo.isCompleted)
    .map((todo) => {
      return <Card key={todo.id} {...todo} />;
    });

  return (
    <div className="mx-3 grid-container ">
      <div>
        {pendingArr.length >= 1 && (
          <div className="py-4">
            <p className="text-2xl font-bold text-yellow-500 py-4 flex items-center justify-center ">
              Tasks
            </p>
            <div className="container-custom">{pendingArr}</div>
          </div>
        )}
        {completedArr.length >= 1 && (
          <div className="py-4">
            <p className="text-2xl font-bold text-grey-600 py-4 flex items-center justify-center">
              Completed Tasks
            </p>
            <div className="container-custom">{completedArr}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardContainer;
