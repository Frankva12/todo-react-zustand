import useToDo from "../hooks/useToDo";
import { Card } from "./Card";
import EmptyStore from "./Empthy";

const CardContainer = () => {
  const { todos } = useToDo();
  if (todos.length < 1) {
    return <EmptyStore />;
  }
  const pendingArr = todos
    .filter((todo) => !todo.isCompleted)
    .map((t) => {
      return <Card key={t.id} {...t} />;
    });

  const completedArr = todos
    .filter((todo) => todo.isCompleted)
    .map((t) => {
      return <Card key={t.id} {...t} />;
    });

  return (
    <div className="mx-4 grid-container">
      <div>
        {pendingArr.length >= 1 && (
          <div className="py-4">
            <p className="text-2xl font-bold text-black/80 py-4">
              Pending Tasks
            </p>
            <div className="container-custom">{pendingArr}</div>
          </div>
        )}
        {completedArr.length >= 1 && (
          <div className="py-4">
            <p className="text-2xl font-bold text-black/80 py-4">
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