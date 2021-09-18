import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/server/api/api.service';
import { LocalStorageService } from 'src/app/services/storage/local-storage.service';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  accountDrop1:string="ورود / ثبت نام";
  accountDrop2:string="کد هدیه";
  currentStep: number = 1;
  stepForm1: FormGroup = new FormGroup({});
  stepForm2: FormGroup = new FormGroup({});
  constructor(
    private apiService: ApiService,
    private localStorageService: LocalStorageService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.initForms();
  }

  initForms(): void {
    this.stepForm1 = new FormGroup({
      mobile: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(13),
      ]),
      device_id: new FormControl('Desktop', [Validators.required]),
      device_model: new FormControl('browser', [Validators.required]),
      device_os: new FormControl('angularJS'),
    });

    this.stepForm2 = new FormGroup({
      mobile: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(13),
      ]),
      device_id: new FormControl('Desktop', [Validators.required]),
      verification_code: new FormControl('', [Validators.required]),
      nickname: new FormControl('نام مستعار', [Validators.required]),
    });
  }

  verifyCode() {
    this.apiService.getVerificationCode(this.stepForm1.value).subscribe(
      () => {
        this.currentStep = 2;
        this.stepForm2
          .get('mobile')
          ?.patchValue(this.stepForm1.value.mobile);
      },
      (error) => {
        this.currentStep = 1;
      }
    );
  }

  getToken() {
    this.apiService.getTokenWithCode(this.stepForm2.value).subscribe(
      (data) => {
        this.currentStep = 0;
        this.localStorageService.token = data.token;
      }
    );
  }

  profileInfo() {
    this.apiService.getUserProfile().subscribe((data) => {
      console.log(data);
    });
  }
  // openDialog() {
  //   const dialogRef = this.dialog.open(DialogContentExampleDialog);

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }
}

// @Component({
//   selector: 'dialog-content-example-dialog',
//   templateUrl: '../dialog/dialog-overview-example-dialog.html',
// })
// export class DialogContentExampleDialog {}

