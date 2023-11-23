import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Technical} from "../../model/Technical";
import {ProfileService} from "../../services/profile.service";
import {User} from "../../../security/model/user";
import {SecurityService} from "../../../security/services/security.service";

@Component({
  selector: 'app-edit-profile-technical',
  templateUrl: './edit-profile-technical.component.html',
  styleUrls: ['./edit-profile-technical.component.css']
})
export class EditProfileTechnicalComponent implements OnInit{
  formEdit: FormGroup;

  tech: Technical | undefined;

  constructor(
    private formBuilder: FormBuilder,

    private profileService: ProfileService,

    private route: ActivatedRoute,

    private securityService: SecurityService,

    private router: Router) {
    this.formEdit = this.formBuilder.group({
      name: [this.tech?.name, [Validators.required]],
      lastName: [this.tech?.lastName],
      description: [this.tech?.description],
      address: [this.tech?.address],
      city: [this.tech?.city],
      experience: [this.tech?.experience],
      photo: [this.tech?.photo],
      price: [''],
      ranking: [''],
    });
      this.profileService.getPerfilebyId(this.user?.id).subscribe(response => {
          this.tech = response;
          this.formEdit.patchValue(response);
      })







  }
  //this.registerForm.controls['email'].value

  updateProfile() {


    /*
    if (this.formEdit.valid && this.tech) {
      const updatedProfile = { ...this.tech, ...this.formEdit.value };
      this.profileService.updateProfile(updatedProfile).subscribe((response) => {
        console.log('Perfil actualizado:', response);
        this.router.navigate(['/myProfile']);
      });
    } else {
      console.error('El formulario no es válido');
    }*/
  }

  ngOnInit(): void {





  }

  get user():User|undefined{
    return this.securityService.currentUser;

  }

}
