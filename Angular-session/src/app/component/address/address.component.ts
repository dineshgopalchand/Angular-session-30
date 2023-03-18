import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormArray,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-address',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnInit {


  addressList = new FormArray([] as Address[]);

  constructor() {}

  ngOnInit(): void {}
  addNewAddress() {
    const address: Address = new FormGroup({
      street: new FormGroup({
        street1: new FormControl('', [Validators.required]),
        street2: new FormControl('', [Validators.required]),
      }),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      pincode: new FormControl('', [Validators.required]),
      edit:new FormControl(true)
    });
    this.addressList.push(address);
  }
  deleteAddr(addrIndex: number) {
    this.addressList.controls.splice(addrIndex, 1);
  }
  addAddressSubmit(addr:Address){
    console.log(addr.value)
    addr.get('edit')?.setValue(false);
  }
  editAddressSubmit(addr:Address){
    console.log(addr.value)
    addr.get('edit')?.setValue(true);
  }
}

export type Address = FormGroup<{
  street: FormGroup<{
    street1: FormControl<string | null>;
    street2: FormControl<string | null>;
  }>;
  city: FormControl<string | null>;
  state: FormControl<string | null>;
  country: FormControl<string | null>;
  pincode: FormControl<string | null>;
  edit: FormControl<boolean | null>;

}>;
