import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from '../shared/services/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    form: FormGroup;
    clicked: boolean = false;

    constructor(private router: Router, private fb: FormBuilder, private service: UserService, private snackbar: MatSnackBar) {}

    ngOnInit() {
        this.initForm();
    }


    initForm() {
        this.form = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
        });
    }

    onLogin() {
        this.clicked = true;
        this.service.login(this.form.value)
            .then(res => {
                localStorage.setItem('uid', res.user.uid);
                setTimeout(() => {
                    localStorage.setItem('isLoggedin', 'true');
                    this.router.navigate(['/dashboard']);
                    this.openSnackBar('Usuário logado com sucesso!');
                }, 2000);
            }, err => {
                setTimeout(() => {
                    this.clicked = false;
                    switch (err['code']) {
                        case 'auth/invalid-email':
                            this.openSnackBar('Formato de email inválido, tente novamente!');
                            break;
                        case 'auth/user-not-found':
                            this.openSnackBar('Usuário não encontrado em nosso banco de dados, tente novamente!');
                            break;
                        case 'auth/wrong-password':
                            this.openSnackBar('Senha incorreta, tente novamente!');
                            break;
                    
                        default:
                            break;
                    }
                }, 2000);
                console.log(err);
            });
    }


    openSnackBar(message: string) {
        this.snackbar.open(message, 'Fechar', {
          duration: 2000,
        });
    }

}
