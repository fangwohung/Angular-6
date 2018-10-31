import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ValidatorFn,
  FormBuilder,
  AbstractControl,
  Validators
} from "@angular/forms";
import ListService from "./list.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  profileForm: FormGroup;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private listService: ListService
  ) {}
  record: any;
  ngOnInit(): void {
    this.listService.getData().subscribe(data => {
      this.record = data;
    });

    this.profileForm = this.formBuilder.group({
      name: ["", Validators.required],
      age: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]]
    });
    this.profileForm.get("name").disable();
    this.profileForm.get("age").disable();
    this.profileForm.get("email").disable();
  }
  Editable(form_control: string) {
    this.profileForm.get(form_control).enable();
  }
  ResetInput(form_control: string) {
    this.profileForm.get(form_control).setValue("");
    this.profileForm.get(form_control).disable();
  }
  get f() {
    return this.profileForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    console.log("wow", this.record);
    this.listService.postData();
    if (this.profileForm.invalid) {
      return;
    }
    alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.profileForm.value));
  }
}
export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}
