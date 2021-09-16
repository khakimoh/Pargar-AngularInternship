import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/server/api/api.service';
import { LocalStorageService } from 'src/app/services/storage/local-storage.service';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentStep: number = 1;
  stepForm1: FormGroup = new FormGroup({});
  stepForm2: FormGroup = new FormGroup({});
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  constructor(
    private apiService: ApiService,
    private localStorageService: LocalStorageService
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

}
