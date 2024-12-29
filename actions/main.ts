"use server";
import axios from "axios";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { missionInput, quantInput, todoInput, userInput } from "../util/types";
import { compressTime } from "../util/helpers";
export async function contact(state: unknown, event: FormData) {
  const contactData = Object.fromEntries(event.entries()) as {
    name: string;
    phone: string;
    message: string;
  };
  const errors = [];
  if (contactData.name.length < 5) errors.push("name");
  if (contactData.phone.length !== 11) errors.push("phone");
  if (contactData.message.length < 5) errors.push("message");
  if (errors.length) return errors;
  const response = await fetch(`${process.env.SERVER_HOST}/contact`, {
    method: "POST",
    body: JSON.stringify({ contactMes: contactData }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const message = (await response.json()).message;
  console.log(message);
  redirect("/");
}

export async function setAvatar(state: unknown, event: FormData) {
  const avatarData = Object.fromEntries(event);
  const data = new FormData();
  const avatar = avatarData.avatar;
  data.append("image", avatar);
  const response = await axios.post(
    `${process.env.SERVER_HOST}/set-avatar/${avatarData.email}`,
    data
  );
  const resMes = await response.data;
  console.log(resMes);
  revalidatePath("/", "layout");
  return undefined;
}

export async function getAvatar(email: string) {
  const response = await fetch(
    `${process.env.SERVER_HOST}/get-avatar/${email}`
  );
  const avatar = (await response.json()).avatar;
  revalidatePath("/", "layout");
  return avatar;
}

export async function updateProps(state: unknown, event: FormData) {
  const updatedProps = Object.fromEntries(
    event.entries()
  ) as unknown as userInput;
  const errors = [];
  if (updatedProps.name.length < 5) errors.push("name");
  if (updatedProps.phone.length !== 11) errors.push("phone");
  if (errors.length) return errors;
  const response = await fetch(`${process.env.SERVER_HOST}/update-props`, {
    method: "POST",
    body: JSON.stringify({ props: updatedProps }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const resMes = (await response.json()).message;
  console.log(resMes);
}

export async function setTodo(state: unknown, event: FormData) {
  const data = Object.fromEntries(event.entries()) as unknown as todoInput;
  const errors: string[] = [];
  if (data.todo_days.length == 0) errors.push("days");
  if (data.todo_name.length < 3) errors.push("name");
  if (errors.length) return errors;
  const response = await fetch(`${process.env.SERVER_HOST}/create-todo`, {
    method: "POST",
    body: JSON.stringify({
      email: data.email,
      todo: {
        todo_name: data.todo_name,
        todo_days: data.todo_days,
        todo_id: data.todo_name + data.todo_days,
      },
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const resMes = (await response.json()).message;
  console.log(resMes);
  redirect("/");
}

export async function setMission(state: unknown, event: FormData) {
  const data = Object.fromEntries(event.entries()) as unknown as missionInput;
  console.log(event);
  data.mission_id = data.mission_name + data.mission_days;
  const errors = [];
  if (data.mission_days.length == 0) errors.push("days");
  if (data.mission_name.length < 3) errors.push("name");
  if (data.mission_desc.length < 5) errors.push("desc");
  if (errors.length) return errors;
  const output = { ...data };
  delete output.email;
  const response = await fetch(`${process.env.SERVER_HOST}/create-mission`, {
    method: "POST",
    body: JSON.stringify({
      email: data.email,
      mission: output,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const resMes = (await response.json()).message;
  console.log(resMes);
  redirect("/");
}

export async function setQuant(state: unknown, event: FormData) {
  const data = Object.fromEntries(event.entries()) as unknown as quantInput;
  const errors = [];
  data.quant_id = data.quant_type + data.quant_unit + data.quant_days;
  if (data.quant_days.length == 0) errors.push("days");
  if (data.quant_type.length < 3) errors.push("type");
  if (data.quant_unit === "MEASUREMENT UNIT") errors.push("unit");
  if (data.quant_cap.length == 0 || isNaN(+data.quant_cap)) errors.push("cap");
  data.completed = 0;
  if (errors.length) return errors;
  const output = { ...data, completed: 0, quant_cap: +data.quant_cap };
  delete output.email;
  const response = await fetch(`${process.env.SERVER_HOST}/create-quant`, {
    method: "POST",
    body: JSON.stringify({
      email: data.email,
      quantity: output,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const resMes = (await response.json()).message;
  console.log(resMes);
  redirect("/");
}

export async function getTasks(email: string) {
  const response = await fetch(`${process.env.SERVER_HOST}/get-tasks`, {
    method: "POST",
    body: JSON.stringify({ email }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const dailies = await response.json();
  return dailies;
}

export async function setTodoStatue(
  todoId: string,
  statue: string,
  email: string
) {
  const response = await fetch(`${process.env.SERVER_HOST}/set-todo-statue`, {
    method: "POST",
    body: JSON.stringify({ email, statue, todoId }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const resMes = (await response.json()).message;
  console.log(resMes);
  revalidatePath("/", "page");
}
export async function handleQuantComp(
  email: string,
  increaser: number,
  quantId: string
) {
  const response = await fetch(`${process.env.SERVER_HOST}/handle-quant-comp`, {
    method: "POST",
    body: JSON.stringify({ email, increaser, quantId }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const resMes = (await response.json()).message;
  console.log(resMes);
  revalidatePath("/", "layout");
}

export async function handleDeleteMission(mission_id: string, email: string) {
  const response = await fetch(`${process.env.SERVER_HOST}/remove-mission`, {
    method: "POST",
    body: JSON.stringify({ email, mission_id }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const resMes = (await response.json()).message;
  console.log(resMes);
}

export async function updateMission(state: unknown, event: FormData) {
  const data = Object.fromEntries(event.entries()) as unknown as missionInput;
  data.start_time = compressTime(data.start_time);
  const startTime = data.start_time.split("_");
  data.end_time = compressTime(data.end_time);
  const endTime = data.end_time.split("_");
  const errors = [];
  if (data.mission_name.length < 3) errors.push("name");
  if (data.mission_desc.length < 5) errors.push("desc");
  if (data.mission_days.length == 0) errors.push("days");
  if (
    +startTime[0] > 12 ||
    +startTime[0] < 0 ||
    +startTime[1] > 59 ||
    +startTime[1] < 0 ||
    !["am", "pm"].includes(startTime[2].toLowerCase())
  )
    errors.push("start_time");
  if (
    +endTime[0] > 12 ||
    +endTime[0] < 0 ||
    +endTime[1] > 60 ||
    +endTime[1] < 0 ||
    !["am", "pm"].includes(endTime[2].toLowerCase())
  )
    errors.push("end_time");
  if (errors.length > 0) return errors;
  const response = await fetch(`${process.env.SERVER_HOST}/update-mission`, {
    method: "POST",
    body: JSON.stringify({
      updatedMission: data,
      email: data.email,
      missionId: data.mission_id,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const resMes = (await response.json()).message;
  console.log(resMes);
  revalidatePath("/", "layout");
  return ["done"];
}
