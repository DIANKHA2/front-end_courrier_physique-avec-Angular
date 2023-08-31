import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { SERVICEService } from '../../SERVICEService';
import { AddServiceComponent } from '../../add-service/add-service.component';
import { UpdateServiceComponent } from '../../update-service/update-service.component';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['id', 'nom',  'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private SERVICEService: SERVICEService,
    public dialog: MatDialog,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.getAllSERVICE();
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

  getAllSERVICE() {
    this.SERVICEService.listSERVICE().subscribe({
      next: (data: any) => {
        this.dataSource = data;
      },
      error: (err) => {},
    });
  }

  openDialogAddSERVICE() {
    const dialogRef = this.dialog.open(AddServiceComponent);

    dialogRef.afterClosed().subscribe((result) => {
      this.getAllSERVICE();
    });
  }

  openDialogUpdateSERVICE() {
    const dialogRef = this.dialog.open(UpdateServiceComponent);

    dialogRef.afterClosed().subscribe((result) => {
      this.getAllSERVICE();
    });
  }

  onDeleteSERVICE(id: number) {
    this.SERVICEService.deleteSERVICE(id).subscribe((data: any) => {
      this.getAllSERVICE();
    });
  }

  onUpdateSERVICE(id: number) {
    this.route.navigateByUrl(`/updateSERVICE/${id}`);
  }
}

