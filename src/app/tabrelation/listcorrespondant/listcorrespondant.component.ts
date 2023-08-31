import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CorrespondantService } from 'src/app/CorrespondantService';

@Component({
  selector: 'app-listcorrespondant',
  templateUrl: './listcorrespondant.component.html',
  styleUrls: ['./listcorrespondant.component.css']
})
export class ListcorrespondantComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['matricule', 'nom', 'fonction', 'cin', 'address', 'datenaissance', 'sexe','service'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private CorrespondantService:CorrespondantService ,
    public dialog: MatDialog,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.getAlllistcorrespondantreponse();
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

  getAlllistcorrespondantreponse() {
    this.CorrespondantService.listcorrespondantreponse().subscribe({
      next: (data: any) => {
        this.dataSource = data;
      },
      error: (err) => {},
    });
  }

}



