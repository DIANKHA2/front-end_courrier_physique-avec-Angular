import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AddCOURRIERComponent } from '../../add-courrier/add-courrier.component';
import { CourrierService } from 'src/app/CourrierService';
import { UpdateCOURRIERComponent } from '../../update-courrier/update-courrier.component';

@Component({
  selector: 'app-courrier',
  templateUrl: './courrier.component.html',
  styleUrls: ['./courrier.component.css'] 
})

export class  COURRIERComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['id', 'ref', 'date', 'details', 'objet','fax','typefax', 'correspondant', 'copieScanee', 'typecourrier','naturecourrier' ,'forme' ,'etat' ,'employee', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private CourrierService : CourrierService,
    public dialog: MatDialog,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.getAllCourrier();
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

  getAllCourrier() {
    this.CourrierService.listCOURRIER().subscribe({
      next: (data: any) => {
        this.dataSource = data;
      },
      error: (err) => {},
    });
  }

  openDialogAddCourrier() {
    const dialogRef = this.dialog.open(AddCOURRIERComponent);

    dialogRef.afterClosed().subscribe((result) => {
      this.getAllCourrier();
    });
  }

  openDialogUpdateCourrier() {
    const dialogRef = this.dialog.open(UpdateCOURRIERComponent);

    dialogRef.afterClosed().subscribe((result) => {
      this.getAllCourrier();
    });
  }

  onDeleteCourrier(id: number) {
    this.CourrierService.deleteCOURRIER(id).subscribe((data: any) => {
      this.getAllCourrier();
    });
  }

  onUpdateCourrier(id: number) {
    this.route.navigateByUrl(`/updatecourrier/${id}`);
  }
}

