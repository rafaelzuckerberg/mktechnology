import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-register-new-user',
  templateUrl: './register-new-user.component.html',
  styleUrls: ['./register-new-user.component.scss']
})
export class RegisterNewUserComponent implements OnInit {

  form: FormGroup;
  clicked: boolean = false;

  constructor(private fb: FormBuilder, private service: UserService, private router: Router, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.initForm();
  }


  initForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  submit() {
    this.clicked = true;
    this.service.register(this.form.value).then(res => {
      if(res) {
        this.form.value.profile = 'Customer';
        this.form.value.id = res['user']['uid'];
        this.service.add(this.form.value)
            .then(() => {
              setTimeout(() => {
                localStorage.setItem('isLoggedin', 'true');
                this.router.navigate(['/dashboard']);
                this.openSnackBar('Registro realizado com sucesso');
              }, 3000);
            });
      }
    }, err => {
      console.log(err);
      setTimeout(() => {        
        this.clicked = false;
        switch (err['code']) {
          case 'auth/invalid-email':
            this.openSnackBar('Formato de email inválido, tente novamente');
            break;
          case 'auth/email-already-in-use':
            this.openSnackBar('Email já cadastrado em nosso banco de dados, tente outro!');
            break;
          case 'auth/weak-password':
            this.openSnackBar('Senha muito curta, mínimo de 6 caracteres');
            break;
        
          default:
            break;
        }
      }, 2000);
    })
  }


  openSnackBar(message: string) {
    this.snackbar.open(message, 'Fechar', {
      duration: 2000,
    });
  }


}
