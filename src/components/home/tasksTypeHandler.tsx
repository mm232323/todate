/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState } from "react";

export default function TasksTypeHandler({
  onhandleTask,
}: {
  onhandleTask: (days: string[]) => void;
}) {
  const taskTypes = ["TODOS", "MISSIONS", "AMOUNTS"];
  const [choosedTaskType, setChoosedTaskType] = useState<string[]>([]);
  const handleTypes = (type: string): void => {
    if (choosedTaskType.includes(type)) {
      setChoosedTaskType((prevTask) =>
        prevTask.filter((task) => task !== type)
      );
      onhandleTask(choosedTaskType.filter((task) => task !== type));
    } else {
      if (type == "All") {
        if (choosedTaskType.length == 3) {
          setChoosedTaskType((prevTasks) => []);
          onhandleTask([]);
        } else {
          setChoosedTaskType((prevTasks) => taskTypes);
          onhandleTask(taskTypes);
        }
      } else {
        setChoosedTaskType((prevTasks) => [...prevTasks, type]);
        onhandleTask([...choosedTaskType, type]);
      }
    }
  };
  return (
    <div className="w-[90%] h-[75px] rounded-[4px] bg-[#4f87ff44] flex justify-center items-center gap-[25px]">
      {taskTypes.map((task) => (
        <h1
          onClick={() => handleTypes(task)}
          key={task}
          className={`font-[100] text-[15px] p-[15px] rounded-[3px] duration-300 cursor-pointer ${
            choosedTaskType.includes(task)
              ? "text-white bg-[#02112c]"
              : "text-[#02112C] bg-transparent"
          }`}
        >
          {task}
        </h1>
      ))}
      <h1
        onClick={() => handleTypes("All")}
        className={`font-[100] text-[18px] p-[15px] rounded-[3px] duration-300 cursor-pointer ${
          choosedTaskType.length == 3
            ? "text-white bg-[#02112c]"
            : "text-[#02112C] bg-transparent"
        }`}
      >
        All
      </h1>
    </div>
  );
}
