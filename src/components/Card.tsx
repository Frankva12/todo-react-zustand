import { StoredToDo } from "../interfaces/Todo";
import useToDo from "../hooks/useToDo";
import Button from "./Button";
import { getDays } from "../helpers/getDate";
import { MdDoneOutline } from "react-icons/md";
import { IoMdRemoveCircleOutline } from "react-icons/io";
  
export const Card = ({
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

  const handleMarkAsCompleted = (id: string) => {
    markAsCompleted(id);
  };

  const { days, isOnTime } = getDays(dateOfFinish);  
  return (
    <div
      className={`${
        isCompleted ? "bg-green-100" : "bg-accent"
      } w-[18rem] h-[31rem]  flex flex-col justify-between py-3 px-6  rounded-lg drop-shadow  md:w-[20rem] md:h-[24rem]`}
    >
      <div>
        <h1 className="text-2xl font-medium text-center">{title}</h1>
        <h2 className="text-lg text-center italic text-black/60">{personAssigned}</h2>
        {!isCompleted && (
          <h3 className={`text-md text-center ${isOnTime ? "text-green-600/90" : "text-rose-600/90"}`}>{`⏰ ${days} days ${
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
            color={"rgb(251 113 133)"} //rose-400
            hoverColor={"rgb(225 29 72)"} //rose-600
          />
        )}
        {!isCompleted && (
          <Button
            onClick={() => {
              handleMarkAsCompleted(id);
            }}
            icon={<MdDoneOutline className="text-2xl mr-2" />}
            text={"Complete"}
            color={"rgb(74 222 128)"} //green-400
            hoverColor={"rgb(22 163 74)"} //green-600
          />
        )}
      </div>
    </div>
  );
};