import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AddSexeComponent } from 'src/app/add-sexe/add-sexe.component';
import { SexeService } from 'src/app/SexeService';
import { UpdateSexeComponent } from 'src/app/update-sexe/update-sexe.component';

@Component({
  selector: 'app-sexe',
  templateUrl: './sexe.component.html',
  styleUrls: ['./sexe.component.css']
})

export class SexeComponent implements AfterViewInit, OnInit {  
  displayedColumns: string[] = ['id', 'genre', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private SexeService: SexeService,
    public dialog: MatDialog,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.getAllSexe();
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

  getAllSexe() {
    this.SexeService.listSexe().subscribe({
      next: (data: any) => {
        this.dataSource = data;
      },
      error: (err) => {},
    });
  }

  openDialogAddSexe() {
    const dialogRef = this.dialog.open(AddSexeComponent);

    dialogRef.afterClosed().subscribe((result) => {
      this.getAllSexe();
    });
  }

  openDialogUpdateSexe() {
    const dialogRef = this.dialog.open(UpdateSexeComponent);

    dialogRef.afterClosed().subscribe((result) => {
      this.getAllSexe();
    });
  }

  onDeleteSexe(id: number) {
    this.SexeService.deleteSexe(id).subscribe((data: any) => {
      this.getAllSexe();
    });
  }

  onUpdateSexe(id: number) {
    this.route.navigateByUrl(`/updateSexe/${id}`);
  }
}
