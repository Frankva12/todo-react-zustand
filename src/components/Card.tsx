import { StoredToDo } from "../interfaces/Todo";
import useToDo from "../hooks/useToDo";
import Button from "./Button";
import { getDays } from "../helpers/getDate";
import { MdDoneOutline } from "react-icons/md";
import { IoMdRemoveCircleOutline } from "react-icons/io";
  
const Card = ({
  id,
  title,
  description,
  personAssigned,
  dateOfFinish,
  isCompleted,
}: StoredToDo) => {
  const { removeTodo, markAsCompleted } = useToDo();
  const handleRemoveFromState = (id: string) => {
    removeTodo(id);
  };

  const handleMarkCompleted = (id: string) => {
    markAsCompleted(id);
  };

  const { days, isOnTime } = getDays(dateOfFinish);  
  return (
    <div
      className={`${
        isCompleted ? "bg-gray-300" : "bg-yellow-400"
      } w-[18rem] h-[31rem]  flex flex-col justify-between py-3 px-6  rounded-lg drop-shadow  md:w-[20rem] md:h-[24rem]`}
    >
      <div>
        <h1 className="text-2xl font-medium text-center">{title}</h1>
        <h2 className="text-lg text-center italic text-black/60 mt-4">{personAssigned}</h2>
        {!isCompleted && (
          <h3 className={`text-md text-center mt-4 ${isOnTime ? "text-red-800" : "text-red-800"}`}>{`${days} days ${
            isOnTime ? "Remaing" : "Past"
          }`}</h3>
        )}
      </div>
      <h2 className="text-xl">{description}</h2>
      <div className="mx-auto">
        {isCompleted && (
          <Button
            onClick={() => {
              handleRemoveFromState(id);
            }}
            icon={<IoMdRemoveCircleOutline className="text-2xl mr-2" />}
            text={"Remove"}
            color={"rgb(153 0 0)"} 
            hoverColor={"rgb(102 0 0)"} 
          />
        )}
        {!isCompleted && (
          <Button
            onClick={() => {
              handleMarkCompleted(id);
            }}
            icon={<MdDoneOutline className="text-2xl mr-2 " />}
            text={"Complete"}
            color={"rgb(75 136 229)"}
            hoverColor={"rgb(0 0 255)"} 
          />
        )}
      </div>
    </div>
  );
};

export default Card;
