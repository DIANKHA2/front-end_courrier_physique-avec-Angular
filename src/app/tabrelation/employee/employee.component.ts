import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { EmployeeService } from '../../EmployeeService';
import { AddEmployeeComponent } from '../../add-employee/add-employee.component';
import { UpdateEmployeeComponent } from '../../update-employee/update-employee.component';

@Component({
  selector: 'app-employee', 
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['id', 'matricule', 'nom', 'fonction', 'cin', 'address', 'datenaissance', 'sexe','service', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private EmployeeService: EmployeeService,
    public dialog: MatDialog,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.getAllEmployee();
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

  getAllEmployee() {
    this.EmployeeService.listEmployee().subscribe({
      next: (data: any) => {
        this.dataSource = data;
      },
      error: (err) => {},
    });
  }

  openDialogAddEmployee() {
    const dialogRef = this.dialog.open(AddEmployeeComponent);

    dialogRef.afterClosed().subscribe((result) => {
      this.getAllEmployee();
    });
  }

  openDialogUpdateEmployee() {
    const dialogRef = this.dialog.open(UpdateEmployeeComponent);

    dialogRef.afterClosed().subscribe((result) => {
      this.getAllEmployee();
    });
  }

  onDeleteEmployee(id: number) {
    this.EmployeeService.deleteEmployee(id).subscribe((data: any) => {
      this.getAllEmployee();
    });
  }

  onUpdateEmployee(id: number) {
    this.route.navigateByUrl(`/updateEmployee/${id}`);
  }
}

