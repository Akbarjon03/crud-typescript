export interface IEmplopee {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export const dummyEmplopeeList: IEmplopee[] = [
  {
    id: new Date().toJSON().toString(),
    firstName: "Dummy1",
    lastName: "Dummy11",
    email: "Dummy1@gmail.com",
  }
]

export enum PageEnum {
  list,
  add,
  edit,
}