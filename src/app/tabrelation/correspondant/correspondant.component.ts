import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { UpdateCorrespondantComponent } from '../../update-correspondant/update-correspondant.component';
import { AddCorrespondantComponent } from '../../add-correspondant/add-correspondant.component';
import { CorrespondantService } from '../../CorrespondantService';


@Component({
  selector: 'app-correspondant',
  templateUrl: './correspondant.component.html',
  styleUrls: ['./correspondant.component.css']
})
export class CorrespondantComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['id', 'matricule', 'nom', 'fonction', 'cin', 'address', 'datenaissance', 'sexe','service', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private CorrespondantService:CorrespondantService ,
    public dialog: MatDialog,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.getAllcorrespondant();
  }

  ngAfterViewInit(): void {
   // this.dataSource.paginator = this.paginator;
   // this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

   // if (this.dataSource.paginator) {
     // this.dataSource.paginator.firstPage();
   // }
  }

  getAllcorrespondant() {
    this.CorrespondantService.listcorrespondant().subscribe({
      next: (data: any) => {
        this.dataSource = data;
      },
      error: (err) => {},
    });
  }

  openDialogAddcorrespondant() {
    const dialogRef = this.dialog.open(AddCorrespondantComponent);

    dialogRef.afterClosed().subscribe((result) => {
      this.getAllcorrespondant();
    });
  }

  openDialogUpdatecorrespondant() {
    const dialogRef = this.dialog.open(UpdateCorrespondantComponent);

    dialogRef.afterClosed().subscribe((result) => {
      this.getAllcorrespondant();
    });
  }

  onDeletecorrespondant(id: number) {
    this.CorrespondantService.deletecorrespondant(id).subscribe((data: any) => {
      this.getAllcorrespondant();
    });
  }

  onUpdatecorrespondant(id: number) {
    this.route.navigateByUrl(`/updatecorrespondant/${id}`);
  }
}


