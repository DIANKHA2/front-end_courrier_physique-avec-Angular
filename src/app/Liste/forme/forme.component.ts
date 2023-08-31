import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { FormecourrierService } from '../../FormecourrierService';
import { UpdateFormeComponent } from '../../update-forme/update-forme.component';
import { AddFormeComponent } from '../../add-forme/add-forme.component';

@Component({
  selector: 'app-forme',
  templateUrl: './forme.component.html',
  styleUrls: ['./forme.component.css']
})
export class FormeComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['id', 'forme_courrier', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private FormecourrierService: FormecourrierService,
    public dialog: MatDialog,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.getAllFormecourrier();
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

  getAllFormecourrier() {
    this.FormecourrierService.listForme().subscribe({
      next: (data: any) => {
        this.dataSource = data;
      },
      error: (err) => {},
    });
  }

  openDialogAddFormecourrier() {
    const dialogRef = this.dialog.open(AddFormeComponent);

    dialogRef.afterClosed().subscribe((result) => {
      this.getAllFormecourrier();
    });
  }

  openDialogUpdateFormecourrier() {
    const dialogRef = this.dialog.open(UpdateFormeComponent);

    dialogRef.afterClosed().subscribe((result) => {
      this.getAllFormecourrier();
    });
  }

  onDeleteFormecourrier(id: number) {
    this.FormecourrierService.deleteForme(id).subscribe((data: any) => {
      this.getAllFormecourrier();
    });
  }

  onUpdateFormecourrier(id: number) {
    this.route.navigateByUrl(`/updateFormecourrier/${id}`);
  }
}

