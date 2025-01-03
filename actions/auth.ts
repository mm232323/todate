"use server";

import { userInput } from "../util/types";
import { hash } from "bcrypt";
import { redirect } from "next/navigation";
import { signIn } from "next-auth/react";
import { isValidEmail, isValidPassword } from "../util/validators";

export async function signup(state: unknown, event: FormData) {
  const userData = Object.fromEntries(event.entries()) as unknown as userInput;
  const errors = [];
  const emailValidator = isValidEmail(userData.email);
  if (userData.name.length < 5) errors.push("name");
  if (userData.phone.length !== 11) errors.push("phone");
  if (userData.gender == "Gender") errors.push("gender");
  if (!emailValidator) errors.push("email");
  if (!isValidPassword(userData.password)) errors.push("password");
  if (userData.repassword !== userData.password) errors.push("repassword");
  console.log(errors);
  if (errors.length) return errors;
  const user = userData as userInput;
  user.dailies = { todos: [], missions: [], quantities: [] };
  user.avatarName = "";
  user.awards = 0;
  const id = (await hash(user.email, 15)) as string;
  user.id = id;

  const response = await fetch(`${process.env.SERVER_HOST}/auth/new-user`, {
    method: "POST",
    body: JSON.stringify({ user }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const message = (await response.json()).message;

  console.log(message);

  redirect("/login");
}

export async function login(state: unknown, event: FormData) {
  const userData = Object.fromEntries(event) as {
    email: string;
    password: string;
  };
  const res = await signIn("credentials", {
    email: userData.email,
    password: userData.password,
    redirect: false,
  });
  if (res?.error) console.log({ message: res.error });
  redirect("/");
}
