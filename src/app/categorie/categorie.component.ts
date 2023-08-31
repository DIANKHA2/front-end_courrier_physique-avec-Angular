import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router'; 
import { AddCategorieComponent } from '../add-categorie/add-categorie.component';
import { CategorieService } from '../categorie.service';
import { UpdateCategorieComponent } from '../update-categorie/update-categorie.component';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css'],
})
export class CategorieComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['id', 'code', 'libelle', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private CategorieService: CategorieService,
    public dialog: MatDialog,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.getAllCategories();
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

  getAllCategories() {
    this.CategorieService.getAllCategories().subscribe({
      next: (data: any) => {
        this.dataSource = data;
      },
      error: (err) => {},
    });
  }

  openDialogAddCategorie() {
    const dialogRef = this.dialog.open(AddCategorieComponent);

    dialogRef.afterClosed().subscribe((result) => {
      this.getAllCategories();
    });
  }

  openDialogUpdateCategorie() {
    const dialogRef = this.dialog.open(UpdateCategorieComponent);

    dialogRef.afterClosed().subscribe((result) => {
      this.getAllCategories();
    });
  }

  onDeleteCategorie(id: number) {
    this.CategorieService.deleteCategorie(id).subscribe((data: any) => {
      this.getAllCategories();
    });
  }

  onUpdateCategorie(id: number) {
    console.log(id);
    this.route.navigateByUrl(`/updateCategorie/${id}`);
  }
}
