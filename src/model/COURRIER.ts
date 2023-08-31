import { Copie_Scanee } from "./Copie_Scanee";
import { Employee } from "./Employee";
import { ETAT } from "./ETAT";
import { Forme } from "./Forme";
import { Nature_Courrier } from "./Nature_Courrier";
import { Type_Courrier } from "./Type_Courrier";



export class COURRIER {
  id!: number;
  ref!: string;
  date!: string;
  details!: string;
  objet!: string;
  fax!: string;
  typefax!: string;
  correspondant!: string;
  copieScanee!: Copie_Scanee;
  typecourrier!: Type_Courrier;
  naturecourrier!: Nature_Courrier;
  forme!: Forme;
  etat!: ETAT;
  employee!: Employee;

}
