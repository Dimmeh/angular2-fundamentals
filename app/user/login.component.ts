import {Component} from '@angular/core'
import {AuthService} from './auth.service'
import {Router} from "@angular/router";


@Component({
    templateUrl: './app/user/login.component.html',
    styleUrls: ['./app/user/login.component.css']
})

export class LoginComponent {
    loginInvalid = false;

    constructor(private authService:AuthService,
                private router:Router){

    }

    login(formValues){
        this.authService.loginUser(formValues.userName,
            formValues.password).subscribe(resp => {
                if(!resp){
                    this.loginInvalid = true;
                }
                else{
                    this.router.navigate(['events'])
                }
        })
    }

    cancel(){
        this.router.navigate(['events'])
    }
}