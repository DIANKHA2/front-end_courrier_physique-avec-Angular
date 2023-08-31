import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './nav/toolbar/toolbar.component';
import { SidebarComponent } from './nav/sidebar/sidebar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { CategorieComponent } from './categorie/categorie.component';
import { ProduitComponent } from './produit/produit.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { AddCategorieComponent } from './add-categorie/add-categorie.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { UpdateCategorieComponent } from './update-categorie/update-categorie.component';
import { LoginComponent } from './security/login/login.component';
import { RegisterComponent } from './security/register/register.component';
import { TypeCourrierComponent } from './Liste/type-courrier/type-courrier.component';
import { SexeComponent } from './Liste/sexe/sexe.component';
import { AddTypeCourrierComponent } from './add-type-courrier/add-type-courrier.component';
import { UpdateTypeCourrierComponent } from './update-type-courrier/update-type-courrier.component';
import { AddSexeComponent } from './add-sexe/add-sexe.component';
import { UpdateSexeComponent } from './update-sexe/update-sexe.component';
import { ETATComponent } from './Liste/etat/etat.component';
import { FormeComponent } from './Liste/forme/forme.component';
import { NatureCourrierComponent } from './Liste/nature-courrier/nature-courrier.component';
import { AddETATComponent } from './add-etat/add-etat.component';
import { AddFormeComponent } from './add-forme/add-forme.component';
import { AddNatureCourrierComponent } from './add-nature-courrier/add-nature-courrier.component';
import { UpdateETATComponent } from './update-etat/update-etat.component';
import { UpdateFormeComponent } from './update-forme/update-forme.component';
import { UpdateNatureCourrierComponent } from './update-nature-courrier/update-nature-courrier.component';
import { ServiceComponent } from './Liste/service/service.component';
import { CopieScaneeComponent } from './Liste/copie-scanee/copie-scanee.component';
import { UpdateCopieScaneeComponent } from './update-copie-scanee/update-copie-scanee.component';
import { UpdateServiceComponent } from './update-service/update-service.component';
import { AddCopieScaneeComponent } from './add-copie-scanee/add-copie-scanee.component';
import { AddServiceComponent } from './add-service/add-service.component';
import { EmployeeComponent } from './tabrelation/employee/employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { MatSelectModule } from '@angular/material/select';
import {MatStepperModule} from '@angular/material/stepper';
import { CorrespondantComponent } from './tabrelation/correspondant/correspondant.component';
import { AddCorrespondantComponent } from './add-correspondant/add-correspondant.component';
import { UpdateCorrespondantComponent } from './update-correspondant/update-correspondant.component';
import { COURRIERComponent } from './tabrelation/courrier/courrier.component';
import { AddCOURRIERComponent } from './add-courrier/add-courrier.component';
import { UpdateCOURRIERComponent } from './update-courrier/update-courrier.component';
import { ListemployeeComponent } from './tabrelation/listemployee/listemployee.component';
import { ListcorrespondantComponent } from './tabrelation/listcorrespondant/listcorrespondant.component';
import { ProfileComponent } from './security/profile/profile.component';
import { UserServiceComponent } from './user-service/user-service.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidebarComponent,
    HomeComponent,
    CategorieComponent,
    ProduitComponent,
    AddCategorieComponent,
    UpdateCategorieComponent,
    LoginComponent,
    RegisterComponent,
    TypeCourrierComponent,
    SexeComponent,
    AddTypeCourrierComponent,
    UpdateTypeCourrierComponent,
    AddSexeComponent,
    UpdateSexeComponent,
    ETATComponent,
    FormeComponent,
    NatureCourrierComponent,
    AddETATComponent,
    AddFormeComponent,
    AddNatureCourrierComponent,
    UpdateETATComponent,
    UpdateFormeComponent,
    UpdateNatureCourrierComponent,
    ServiceComponent,
    CopieScaneeComponent,
    UpdateCopieScaneeComponent,
    UpdateServiceComponent,
    AddCopieScaneeComponent,
    AddServiceComponent,
    EmployeeComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
    CorrespondantComponent,
    AddCorrespondantComponent,
    UpdateCorrespondantComponent,
    COURRIERComponent,
    AddCOURRIERComponent,
    UpdateCOURRIERComponent,
    ListemployeeComponent,
    ListcorrespondantComponent,
    ProfileComponent,
    UserServiceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    MatMenuModule,
    MatButtonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatStepperModule,
    MatAutocompleteModule,



  ],
  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}
