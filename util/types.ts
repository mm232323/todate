export interface userInput {
  awards: number;
  name: string;
  phone: string;
  gender: string;
  job: string;
  email: string;
  password: string;
  repassword: string;
  dailies: { todos: []; missions: []; quantities: [] };
  avatarName: string;
  id: string;
}
export interface todoInput {
  todo_name: string;
  todo_days: string;
  todo_id: string;
  todo_statue: string;
  email: string;
}
export interface missionInput {
  mission_name: string;
  mission_desc: string;
  start_time: string;
  end_time: string;
  mission_days: string;
  mission_id: string;
  mission_statue: string;
  email?: string;
}

export interface quantInput {
  quant_type: string;
  quant_days: string;
  quant_cap: string;
  quant_unit: string;
  quant_shape: string;
  quant_color: string;
  quant_id: string;
  quant_statue: string;
  completed: number;
  email?: string;
}
