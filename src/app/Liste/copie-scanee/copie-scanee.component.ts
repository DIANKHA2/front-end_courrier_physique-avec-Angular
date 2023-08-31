import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Copie_ScanneService } from '../../Copie_ScaneeService';
import { UpdateCopieScaneeComponent } from '../../update-copie-scanee/update-copie-scanee.component';
import { AddCopieScaneeComponent } from '../../add-copie-scanee/add-copie-scanee.component';

@Component({
  selector: 'app-copie-scanee',
  templateUrl: './copie-scanee.component.html',
  styleUrls: ['./copie-scanee.component.css']
})
export class CopieScaneeComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['id','copie', 'commentaire', 'date','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private Copie_ScanneService: Copie_ScanneService,
    public dialog: MatDialog,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.getAllCopie_Scanne();
  }

  ngAfterViewInit(): void {
    //this.dataSource.paginator = this.paginator;
    //this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    /*if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }*/
  }

  getAllCopie_Scanne() {
    this.Copie_ScanneService.listCopie_Scanee().subscribe({
      next: (data: any) => {
        this.dataSource = data;
      },
      error: (err) => {},
    });
  }

  openDialogAddCopie_Scanne() {
    const dialogRef = this.dialog.open(AddCopieScaneeComponent);

    dialogRef.afterClosed().subscribe((result) => {
      this.getAllCopie_Scanne();
    });
  }

  openDialogUpdateCopie_Scanne() {
    const dialogRef = this.dialog.open(UpdateCopieScaneeComponent);

    dialogRef.afterClosed().subscribe((result) => {
      this.getAllCopie_Scanne();
    });
  }

  onDeleteCopie_Scanne(id: number) {
    this.Copie_ScanneService.deleteCopie_Scanee(id).subscribe((data: any) => {
      this.getAllCopie_Scanne();
    });
  }

  onUpdateCopie_Scanne(id: number) {
    this.route.navigateByUrl(`/updateCopie_Scanne/${id}`);
  }
}
