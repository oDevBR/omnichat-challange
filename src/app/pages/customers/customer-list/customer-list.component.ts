import { Component, OnInit, ViewChild } from '@angular/core';
import { Customer } from '../../../shared/models/customer';
import { CustomerService } from '../../../core/services';
import { MatDialogConfig, MatDialog, MatPaginator } from '@angular/material';
import { CustomerFormComponent } from '../customer-form/customer-form.component';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource: any;
  columnsToDisplay = ['name', 'mail', 'company', 'action'];
  expandedElement: Customer | null;
  page: number = 1;
  limitPerPage: number = 10;
  length: number = 0;
  customer: Customer = {
    objectId: '',
    createdAt: '',
    updatedAt: '',
    name: '',
    lastName: '',
    acceptsMarketing: false,
    email: '',
    phoneAreaCode: '',
    phoneCountryCode: '',
    phoneNumber: '',
    birthDate: '',
    businessAccount: false,
    businessName: '',
    address: {
      addressLine1: '',
      addressLine2: '',
      number: '',
      suburb: '',
      city: '',
      state: '',
      country: '',
      zip: ''
    }
  }

  constructor(
    private customerService: CustomerService,
    private dialog: MatDialog
    ) { }

  ngOnInit() { 
    this.getAllCustomers()
  }

  getAllCustomers(page?: number) {
    if (page === undefined) {
      page = 1;
    }
    this.page = page;

    this.customerService.getAll(page, this.limitPerPage).subscribe(res => {
      this.dataSource = res;
      this.dataSource.paginator = this.paginator;
    })
    this.getCountCustomers()
  }

  getCountCustomers() {
    this.customerService.count().subscribe(res => {
      this.length = +(res.count / 10)
   })
  }

  private openDialog(customer) {
    if(customer == null) {
      customer = this.customer;
    }
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = customer;
    this.dialog.open(CustomerFormComponent, dialogConfig);
  }
}