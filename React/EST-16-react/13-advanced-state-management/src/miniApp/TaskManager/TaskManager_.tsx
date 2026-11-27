import tw from "@/utils/tw"
import { INITIAL_TASKS } from "./@types"
import UnpinnedTaskList from "./UnpinnedTaskList_"
import PinnedTaskList from "./PinnedTaskList_"
import { useReducer } from "react"
import taskReducer, { addTask, deleteTask, setTask, togglePin } from "./@reducer"


function TaskManager() {

  const [taskList, dispatch] = useReducer(taskReducer,INITIAL_TASKS);

  const pinnedTaskList = taskList.filter((task) => task.isPin);
  const unpinnedTaskList = taskList.filter((task) => !task.isPin);

  const handleSetTask = (_taskId: string, _isCompleted: boolean) => 
    dispatch(setTask(_taskId,_isCompleted))

  const handleTogglePin = (_taskId: string) => dispatch(togglePin(_taskId));

  const handleDeleteTask = (_deleteId: string) => dispatch(deleteTask(_deleteId));

  return (
      <div lang="en"
        className={tw(
          'w-72 flex flex-col gap-2 p-5 border border-solid border-accent rounded text-accent'
        )}
      >
        <PinnedTaskList
          pinnedTaskList={pinnedTaskList}
          setTask={handleSetTask}
          togglePin={handleTogglePin}
        />
        <UnpinnedTaskList
          unpinnedTaskList={unpinnedTaskList}
          setTask={handleSetTask}
          togglePin={handleTogglePin}
          deleteTask={handleDeleteTask}
        />
      </div>
  )
}

export default TaskManager