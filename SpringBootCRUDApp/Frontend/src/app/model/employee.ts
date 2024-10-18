import { Department } from '../model/department';
import { Location } from './location';

export class Employee {
  id: number = 0;
  firstName: string = "";
  lastName: string = "";
  gender: string = "";
  age: number = 0;
  doj: Date = new Date();
  designation: string = "";
  department: Department = new Department();
  location: Location = new Location();
}
