"use client";
import { getTasks } from "../../../actions/main";
import { missionInput, quantInput, todoInput } from "../../../util/types";
import DaysHandler from "./daysHandler";
import TasksTypeHandler from "./tasksTypeHandler";
import { useState, useEffect } from "react";
import Todo from "./Todo";
import { AnimatePresence } from "framer-motion";
import Mission from "./Mission";
import Quant from "./Quant";
export default function TasksHandler({ email }: { email: string }) {
  const [dailies, setDailies] = useState({
    todos: [],
    missions: [],
    quantities: [],
  });
  const [days, setDays] = useState<string[]>([]);
  const [types, setTypes] = useState<string[]>([]);
  const chooseDays = (days: string[]) => {
    setDays(days);
  };
  const chooseTask = (types: string[]) => {
    setTypes(types);
  };
  useEffect(() => {
    const getDailies = async () => {
      const dailies = await getTasks(email);
      setDailies(dailies);
    };
    getDailies();
  }, [email]);
  const formatedDays = days.map((day) => day.slice(0, 3).toUpperCase());
  return (
    <div className="flex gap-[10px] justify-center w-full">
      <DaysHandler onhandleDays={chooseDays} />
      <div className="flex flex-col gap-[10px] w-[70%]">
        <TasksTypeHandler onhandleTask={chooseTask} />
        <div className="w-[90%] h-fit pb-[20px] min-h-[370px] bg-black/5 rounded-[4px] flex items-center pt-[20px] flex-col gap-[20px] mb-[30px]">
          <AnimatePresence>
            {types.includes("TODOS") &&
              dailies.todos
                .filter((todo: todoInput) => {
                  for (let i = 0; i < formatedDays.length; i++) {
                    if (!todo.todo_days.includes(formatedDays[i])) return false;
                  }
                  return true;
                })
                .map((todo: todoInput) => (
                  <Todo
                    key={todo.todo_days + todo.todo_name}
                    todo={todo}
                    email={email}
                  />
                ))}
          </AnimatePresence>
          <AnimatePresence>
            {types.includes("MISSIONS") &&
              dailies.missions
                .filter((mission: missionInput) => {
                  for (let i = 0; i < formatedDays.length; i++) {
                    if (!mission.mission_days.includes(formatedDays[i]))
                      return false;
                  }
                  return true;
                })
                .map((mission: missionInput) => (
                  <Mission
                    key={mission.mission_days + mission.mission_name}
                    mission={mission}
                    email={email}
                  />
                ))}
          </AnimatePresence>
          <AnimatePresence>
            {types.includes("AMOUNTS") &&
              dailies.quantities
                .filter((quantities: quantInput) => {
                  for (let i = 0; i < formatedDays.length; i++) {
                    if (!quantities.quant_days.includes(formatedDays[i]))
                      return false;
                  }
                  return true;
                })
                .map((quantities: quantInput) => (
                  <Quant
                    key={quantities.quant_type + quantities.quant_unit}
                    quant={quantities}
                    email={email}
                  />
                ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
