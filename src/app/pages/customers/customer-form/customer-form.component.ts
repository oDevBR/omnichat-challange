import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Customer } from '../../../shared/models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { AlertService, CustomerService } from '../../../core/services';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {

  detailForm: FormGroup;
  editMode: boolean = false

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Customer,
    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private customerService: CustomerService,
    private dialogRef: MatDialogRef<CustomerFormComponent>
  ) { 
    if(this.data.createdAt == '') {
      this.editMode = true;
    }
  }

  ngOnInit() {
    this.detailForm = this.formBuilder.group({
      marketing: [{ value: this.data.acceptsMarketing, disabled: !this.editMode }],
      name: [{ value: this.data.name, disabled: !this.editMode }],
      lastName: [{ value: this.data.lastName, disabled: !this.editMode }],
      email: [{ value: this.data.email, disabled: !this.editMode }],
      phoneCountryCode: [{ value: this.data.phoneCountryCode, disabled: !this.editMode }],
      phoneAreaCode: [{ value: this.data.phoneAreaCode, disabled: !this.editMode }],
      phoneNumber: [{ value: this.data.phoneNumber, disabled: !this.editMode }],
      business: [{ value: this.data.businessName, disabled: !this.editMode }],
      birthDate: [{ value: moment(this.data.birthDate), disabled: !this.editMode }],
      addressLine1: [{ value: this.data.address.addressLine1, disabled: !this.editMode }],
      addressLine2: [{ value: this.data.address.addressLine2, disabled: !this.editMode }],
      addressNumber: [{ value: this.data.address.number, disabled: !this.editMode }],
      addressSuburb: [{ value: this.data.address.suburb, disabled: !this.editMode }],
      addressCity: [{ value: this.data.address.city, disabled: !this.editMode }],
      addressState: [{ value: this.data.address.state, disabled: !this.editMode }],
      addressCountry: [{ value: this.data.address.country, disabled: !this.editMode }],
      addressZip: [{ value: this.data.address.zip, disabled: !this.editMode }],
    });

    if(this.data.createdAt == '') {
      this.form.name.setValidators([Validators.required]);
      this.form.lastName.setValidators([Validators.required]);
      this.form.email.setValidators([Validators.email]);
      this.form.birthDate.setValidators([Validators.required]);
    }
  }

  get form() {
    return this.detailForm.controls;
  }

  create() {
    this.data = {
      name: this.form.name.value,
      lastName: this.form.lastName.value,
      acceptsMarketing: this.form.marketing.value,
      email: this.form.email.value,
      phoneAreaCode: this.form.phoneAreaCode.value,
      phoneCountryCode: this.form.phoneCountryCode.value,
      phoneNumber: this.form.phoneNumber.value,
      birthDate: this.form.birthDate.value,
      businessName: this.form.business.value,
      address: {
        addressLine1: this.form.addressLine1.value,
        addressLine2: this.form.addressLine2.value,
        number: this.form.addressNumber.value,
        suburb: this.form.addressSuburb.value,
        city: this.form.addressCity.value,
        state: this.form.addressState.value,
        country: this.form.addressCountry.value,
        zip: this.form.addressZip.value
      }
    }

    this.customerService.create(this.data).subscribe(res => {
      this.alertService.swalSuccess(`Cliente criado ${moment(res.createdAt).format('LLL')}`, 'Sucesso!');
      this.dialogRef.close();
    })

  }

  delete() {
    this.alertService.swalCustom().fire({
      text: 'Deseja excluir o cliente?',
      type: "question",
      showCancelButton: true,
      confirmButtonText: "Sim",
      cancelButtonText: "Não"
    }).then(result => {
      if (result.value) {
        this.customerService.delete(this.data.objectId).subscribe(() => {
          this.alertService.swalSuccess('Cliente excluido com sucesso!');
          this.dialogRef.close();
        })
      }
    });
  }

}
