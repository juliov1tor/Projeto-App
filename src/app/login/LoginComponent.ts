import { AuthService } from './../blog/common/auth/service/AuthService';
import { UserLogin } from './../blog/common/auth/user/dataModel/UserLogin';
import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {finalize} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: 'login.html'
})

export class LoginComponent {
    public user = {} as UserLogin;
    public isLoading = false;

    constructor(private readonly authService: AuthService,
                private readonly router: Router) {
    }

    public onSubmit(form: NgForm) {
        if (form.valid) {
            this.isLoading = true;
            this.authService.signIn(this.user)
                .pipe(finalize(() => this.isLoading = false))
                .subscribe(() => this.router.navigate(['blog', 'list']));
        }
    }
}