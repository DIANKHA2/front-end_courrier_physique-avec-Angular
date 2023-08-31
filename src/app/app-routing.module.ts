import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { TypeCourrierComponent } from './Liste/type-courrier/type-courrier.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorieComponent } from './categorie/categorie.component';
import { HomeComponent } from './home/home.component';
import { ProduitComponent } from './produit/produit.component';
import { LoginComponent } from './security/login/login.component';
import { RegisterComponent } from './security/register/register.component';
import { UpdateCategorieComponent } from './update-categorie/update-categorie.component';
import { SexeComponent } from './Liste/sexe/sexe.component';
import { UpdateTypeCourrierComponent } from './update-type-courrier/update-type-courrier.component';
import { UpdateSexeComponent } from './update-sexe/update-sexe.component';
import { UpdateNatureCourrierComponent } from './update-nature-courrier/update-nature-courrier.component';
import { NatureCourrierComponent } from './Liste/nature-courrier/nature-courrier.component';
import { UpdateFormeComponent } from './update-forme/update-forme.component';
import { FormeComponent } from './Liste/forme/forme.component';
import { UpdateETATComponent } from './update-etat/update-etat.component';
import { ETATComponent } from './Liste/etat/etat.component';
import { UpdateCopieScaneeComponent } from './update-copie-scanee/update-copie-scanee.component';
import { CopieScaneeComponent } from './Liste/copie-scanee/copie-scanee.component';
import { UpdateServiceComponent } from './update-service/update-service.component';
import { ServiceComponent } from './Liste/service/service.component';
import { EmployeeComponent } from './tabrelation/employee/employee.component';
import { COURRIERComponent } from './tabrelation/courrier/courrier.component';
import { ListemployeeComponent } from './tabrelation/listemployee/listemployee.component';
import { UpdateCorrespondantComponent } from './update-correspondant/update-correspondant.component';
import { CorrespondantComponent } from './tabrelation/correspondant/correspondant.component';
import { ListcorrespondantComponent } from './tabrelation/listcorrespondant/listcorrespondant.component';
import { UpdateCOURRIERComponent } from './update-courrier/update-courrier.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'categorie', component: CategorieComponent },

  { path: 'typecourrier', component: TypeCourrierComponent },
  { path: 'updatetypecour/:id', component: UpdateTypeCourrierComponent },

  { path: 'sexe', component: SexeComponent },
  { path: 'updateSexe/:id', component: UpdateSexeComponent },

   { path: 'NaturecourrierService/:id', component: UpdateNatureCourrierComponent},
 { path: 'Naturecourrier', component: NatureCourrierComponent },

{ path: 'updateFormecourrier/:id', component: UpdateFormeComponent},
 { path: 'Formecourrier', component: FormeComponent },

{ path: 'updateEtat/:id', component: UpdateETATComponent},
  { path: 'Etat', component: ETATComponent },

  { path: 'produit', component: ProduitComponent },
  { path: 'updateCategorie/:id', component: UpdateCategorieComponent },



  { path: 'NaturecourrierService/:id', component: UpdateNatureCourrierComponent},
 { path: 'Naturecourrier', component: NatureCourrierComponent },

{ path: 'updateFormecourrier/:id', component: UpdateFormeComponent},
 { path: 'Formecourrier', component: FormeComponent },

{ path: 'updateEtat/:id', component: UpdateETATComponent},
  { path: 'Etat', component: ETATComponent },

  { path: 'updateSERVICE/:id', component: UpdateServiceComponent},
 { path: 'SERVICE', component: ServiceComponent },

{ path: 'updateCopie_Scanne/:id', component: UpdateCopieScaneeComponent},
  { path: 'Copie_Scanne', component: CopieScaneeComponent },

  { path: 'updateEmployee/:id', component: UpdateEmployeeComponent},
  { path: 'Employee', component: EmployeeComponent },
  { path: 'listEmployee', component: ListemployeeComponent },

  { path: 'updatecorrespondant/:id', component: UpdateCorrespondantComponent},
  { path: 'correspondant', component: CorrespondantComponent },
  { path: 'listcorrespondant', component: ListcorrespondantComponent },


  { path: 'courrier', component: COURRIERComponent },
  { path: 'updatecourrier/:id', component: UpdateCOURRIERComponent},

  { path: 'connexion', component: LoginComponent },
  { path: 'inscription', component: RegisterComponent },
  { path: '**', redirectTo: '/inscription', pathMatch: 'full' },






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
