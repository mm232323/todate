"use client";
import React, { useState } from "react";
import { todoInput } from "../../../util/types";
import { setTodoStatue } from "../../../actions/main";
import { motion } from "framer-motion";
export default function Todo({
  todo,
  email,
}: {
  todo: todoInput;
  email: string;
}) {
  const [statue, setStatue] = useState(todo.todo_statue);
  const handleActions = (statue: string) => {
    setStatue(statue);
    setTodoStatue(todo.todo_id, statue, email);
  };

  return (
    <motion.div
      variants={{
        show: { opacity: 1, filter: "blur(0)", y: 0 },
        hide: { opacity: 0, filter: "blur(10px)", y: 20 },
      }}
      initial="hide"
      animate="show"
      exit="hide"
      className={`text-white font-[100] text-[17px] w-11/12 h-[61px] rounded-[23px] flex justify-between p-[15px] duration-[400ms] ${
        statue == "complete"
          ? "bg-[#072c02]"
          : statue == "fail"
          ? "bg-[#2c0202]"
          : "bg-[#02112C]"
      }`}
    >
      {todo.todo_name}
      <div className="flex gap-[10px]">
        <div
          className={`w-[33px] h-[33px] rounded-full hover:bg-green-500 duration-300 cursor-pointer ${
            statue == "complete" ? "bg-green-500" : "bg-green-700"
          }`}
          onClick={() => handleActions("complete")}
        ></div>
        <div
          className={`w-[33px] h-[33px] rounded-full hover:bg-red-500 duration-300 cursor-pointer ${
            statue == "fail" ? "bg-red-500" : "bg-red-700"
          } `}
          onClick={() => handleActions("fail")}
        ></div>
      </div>
    </motion.div>
  );
}
