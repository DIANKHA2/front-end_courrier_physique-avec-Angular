import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

import { AddNatureCourrierComponent } from '../../add-nature-courrier/add-nature-courrier.component';
import { UpdateNatureCourrierComponent } from '../../update-nature-courrier/update-nature-courrier.component';
import { NaturecourrierService } from '../../NaturecourrierService';

@Component({
  selector: 'app-nature-courrier',
  templateUrl: './nature-courrier.component.html',
  styleUrls: ['./nature-courrier.component.css']
})
export class NatureCourrierComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['id', 'nature', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private NaturecourrierService: NaturecourrierService,
    public dialog: MatDialog,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.getAllNaturecourrier();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAllNaturecourrier() {
    this.NaturecourrierService.listNature_Courrier().subscribe({
      next: (data: any) => {
        this.dataSource = data;
      },
      error: (err) => {},
    });
  }
 
  openDialogAddNaturecourrier() {
    const dialogRef = this.dialog.open(AddNatureCourrierComponent);

    dialogRef.afterClosed().subscribe((result) => {
      this.getAllNaturecourrier() ;
    });
  }

  openDialogUpdateNaturecourrier() {
    const dialogRef = this.dialog.open(UpdateNatureCourrierComponent);

    dialogRef.afterClosed().subscribe((result) => {
      this.getAllNaturecourrier() ;
    });
  }

  onDeleteNaturecourrier(id: number) {
    this.NaturecourrierService.deleteNature_Courrier(id).subscribe((data: any) => {
      this.getAllNaturecourrier();
    });
  }

  onUpdateNaturecourrier(id: number) {
    this.route.navigateByUrl(`/NaturecourrierService/${id}`);
  }
}

