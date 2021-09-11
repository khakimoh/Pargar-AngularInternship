import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/server/api/api.service';
import { LocalStorageService } from 'src/app/server/storage/local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  tokenAuth: string | undefined;
  stepForm1: FormGroup = new FormGroup({});
  stepForm2: FormGroup = new FormGroup({});
  currentStep: number = 1;

  constructor(
    private apiService: ApiService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.initForms();
  }

  initForms(): void {
    this.stepForm1 = new FormGroup({
      mobile: new FormControl('09357779303', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(13),
      ]),
      device_id: new FormControl('Desktop', [Validators.required]),
      device_model: new FormControl('browser', [Validators.required]),
      device_os: new FormControl('angularJS', [Validators.required]),
    });
    this.stepForm2 = new FormGroup({
      mobile: new FormControl('09357779303', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(13),
      ]),
      device_id: new FormControl('Desktop', [Validators.required]),
      verification_code: new FormControl('', [Validators.required]),
      nickname: new FormControl('', [Validators.required]),
    });
  }

  getVerificationCode() {
    this.apiService.getVerificationCode(this.stepForm1.value).subscribe(
      () => {
        this.currentStep = 2;
        this.stepForm2
          .get('mobile')
          ?.patchValue(this.stepForm1.value('mobile'));
      },
      (error) => {
        this.currentStep = 1;
      }
    );
  }

  getToken() {
    this.apiService.getTokenWithCode(this.stepForm2.value).subscribe(
      (data) => {
        this.currentStep = -1;
        this.localStorageService.token = data.token;
      },
      (error) => {}
    );
  }

  getProfileInfo() {
    this.apiService.getUserProfile().subscribe((data) => {
      console.log(data);
    });
  }

  // filter = {
  //   "mobile":"09357779303",
  //   "device_os":"angularJS",
  //   "device_id":"Desktop",
  //   "device_model":"browser"
  // }
  // login():void {
  //   console.log("i am click");
  //   this.apiService.getTokenAuth(this.filter).subscribe(
  //     response =>{
  //       console.log(response)
  //     }
  //   )

  // }
}
