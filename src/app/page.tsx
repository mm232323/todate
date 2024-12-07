import TasksHandler from "@/components/home/TasksHandler";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
export default async function Home() {
  const session = await getServerSession();
  if (!session) redirect("/login");
  return <TasksHandler email={session.user?.email as string} />;
}
