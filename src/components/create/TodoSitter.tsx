import Image from "next/image";
import React from "react";
import TodoForm from "../Forms/TodoForm";

export default function TodoSitter({ email }: { email: string }) {
  return (
    <div className="relative">
      <Image src="/todoBG.svg" alt="todo background" width={769} height={467} />
      <TodoForm email={email} />
    </div>
  );
}
