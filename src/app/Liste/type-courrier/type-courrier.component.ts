import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TypecourrierService } from '../../Type_CourrierService';
import { AddTypeCourrierComponent } from '../../add-type-courrier/add-type-courrier.component';


@Component({
  selector: 'app-type-courrier',
  templateUrl: './type-courrier.component.html',
  styleUrls: ['./type-courrier.component.css']
})
export class TypeCourrierComponent implements AfterViewInit, OnInit{
displayedColumns: string[] = ['id', 'type','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private TypecourrierService: TypecourrierService,
    public dialog: MatDialog,
    private route: Router

  ) {}



  ngOnInit(): void {
    this.getAlltypecour();
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

  getAlltypecour() {
    this.TypecourrierService.listtypecour()
    .subscribe({
      next: (data: any) => {
        this.dataSource = data;
      },
      error: (err) => {},
    });
  }



  openDialogAddtypecour() {
    const dialogRef = this.dialog.open(AddTypeCourrierComponent);

    dialogRef.afterClosed().subscribe((result) => {
      this.getAlltypecour();
    });
  }

 /* openDialogUpdatetypecour() {
    const dialogRef = this.dialog.open(UpdateTypeCourrierComponent);

    dialogRef.afterClosed().subscribe((result) => {
      this.getAlltypecour();
    });
  }
*/

  onDeletetypecour(id: number) {
    this.TypecourrierService.deletetypecour(id).subscribe((data: any) => {
      this.reloadPage();

    });
  }

  onUpdatetypecour(id: number) {
    this.route.navigateByUrl(`updatetypecour/${id}`);
  }

  reloadPage() {
    window.location.reload();
    this.route.navigateByUrl('/typecourrier');
  }
}

