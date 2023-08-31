import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { EtatcourrierService } from '../../EtatcourrierService';
import { AddETATComponent } from '../../add-etat/add-etat.component';
import { UpdateETATComponent } from '../../update-etat/update-etat.component';

@Component({
  selector: 'app-etat',
  templateUrl: './etat.component.html',
  styleUrls: ['./etat.component.css']
})
export class ETATComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['id', 'nature_etat', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private  EtatcourrierService: EtatcourrierService,
    public dialog: MatDialog,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.getAllEtat();
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

  getAllEtat() {
    this.EtatcourrierService.listETAT().subscribe({
      next: (data: any) => {
        this.dataSource = data;
      },
      error: (err) => {},
    });
  }

  openDialogAddEtat() {
    const dialogRef = this.dialog.open(AddETATComponent);

    dialogRef.afterClosed().subscribe((result) => {
      this.getAllEtat();
    });
  }

  openDialogUpdateEtat() {
    const dialogRef = this.dialog.open(UpdateETATComponent);

    dialogRef.afterClosed().subscribe((result) => {
       this.getAllEtat();
    });
  }

  onDeleteEtat(id: number) {
    this.EtatcourrierService.deleteETAT(id).subscribe((data: any) => {
      this.getAllEtat();
    });
  }

  onUpdateEtat(id: number) {
    this.route.navigateByUrl(`/updateEtat/${id}`);
  }
}

