export interface Order{
  id: number
  technicianId:number;
  client_name:string;
  phone_name:string;
  problem:string;
  components_to_use:string;
  value_progress:number;
  delivery_day:Date;
  income:string;
}
