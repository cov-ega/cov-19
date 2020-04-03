import {Component, OnInit} from '@angular/core';
import {ProfileService} from '../services/profile.service';
import {AuthService} from '../../core/services/auth.service';
import {Router} from '@angular/router';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IUser} from '../../core/models/user.model';


function passwordMatch(c: AbstractControl): { invalid: boolean } {
  if (c.get('user_password').value !== c.get('confirm_password').value) {
    return {invalid: true};
  }
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userProfile: any;
  profileImg = "../../../assets/profile-image.png"
  userInfo: FormGroup;
  user: IUser;
  userAddress: any;
  selectedFile = null;
  countries: Array<any> = [
    {value: 'Kosova', viewValue: 'Kosova'},
    {value: 'Shqiperia', viewValue: 'Shqiperia'},
  ];
  cities: Array<any> = [
    {value: 'Prishtina', viewValue: 'Prishtina'},
    {value: 'Podujeve', viewValue: 'Podujeve'},
    {value: 'Skenderaj', viewValue: 'Skenderaj'}
  ];
  lagjet: Array<any> = [
    {value: 'Tirana', viewValue: 'Tirana'},
    {value: 'Podujeve', viewValue: 'Podujeve'},
    {value: 'Skenderaj', viewValue: 'Skenderaj'}
  ];

  constructor(
    private profileService: ProfileService,
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder) {
  }

  // TODO: Validate form and implement http request
  ngOnInit() {
    this.initialize();
    this.userInfo = this.formBuilder.group({
      userName: ['dadas', [Validators.required]],
      userSurname: ['dasdas', [Validators.required, Validators.minLength(3)]],
      userEmailAddress: ['dasasas', [Validators.required, Validators.email, Validators.minLength(3)]],
      userPhoneNumber: ['dasdass'],
      userPassword: ['', [Validators.required]],
      userBirthday: ['dasdsa', [Validators.required]],
      userPersonalId: ['dasdasda'],
      addressCountry: ['', [Validators.required]],
      addressCity: ['', [Validators.required]],
      addressStreet: ['', [Validators.required]],
      userLastTravelDate: [''],
      userProfileImage: ['dasdas'],
      userAddressId: 1,
    });
  }

  initialize() {
     this.profileService.getUserProfileInfo().subscribe(
      (data => {
        this.user = data;
        this.getAddress(data.userAddressId);
        this.userInfo.patchValue(this.user);

      }),
      (error => {
        console.log(error.title + ' ' + error.status);
      })
    );
  }


  logOut() {
    this.authService.logout();
    this.router.navigateByUrl('');
  }

  fileChangeEvent(fileInput: any) {
    this.selectedFile  = fileInput.target.files[0] as File;
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    this.profileService.updateImageProfile(fd).subscribe(
      (data => {}),
      (error => {})
    )
    console.log(fileInput.target.files[0])
    debugger;
  }



  updateUserProfile() {
    debugger
        this.profileService.updateUserProfile(this.userInfo.value).subscribe(
          (data => console.log(data)),
          (error => console.log(error))
        );
  }

  getAddress(addressID: number) {
    this.profileService.getUserAddress(addressID).subscribe(
      (data => {
        this.userAddress = data;
        this.userInfo.patchValue(this.userAddress);
      }),
      (error => {
        console.log(error.title + ' ' + error.status);
      })
    );
  }


}
