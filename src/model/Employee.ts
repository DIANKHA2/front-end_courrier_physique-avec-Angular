import { SERVICE } from "./SERVICE";
import { Sexe } from "./Sexe";
import { User } from "./User";

export class Employee {
  id!: number;
  matricule!: string;
  nom!: string;
  fonction!: string;
  cin!: string;
  address!: string;
  datenaissance!: string;
  sexe!: Sexe;
  service!: SERVICE;
}
