import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../shared/services/auth-service.service';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  formErrors = '';
  formHasErrors = false;
  toggleLogin = true;

  constructor(
    private authService: AuthServiceService,
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    if (localStorage.getItem('user_id') !== null) {
      this.router.navigate(['tabs/tab3/account']);
    }
  }

  register(form) {
    if (form.value.password === form.value.confirm) {
      this.formHasErrors = false;
      this.authService.register(form.value).subscribe(
        res => {
          this.authService
            .login({
              email: form.value.email,
              password: form.value.password
            })
            .subscribe(
              resp => {
                localStorage.setItem('user_id', resp.user.id);
                const navigationExtra: NavigationExtras = {
                  state: {
                    user: resp.user
                  }
                };
                this.router.navigate(['tabs/tab3/account'], navigationExtra);
              },
              err => this.presentAlert(err.message)
            );
        },
        err => this.presentAlert(err.message)
      );
    } else {
      this.formHasErrors = true;
      this.formErrors = 'Password missmatch';
      form.controls.confirm.setErrors({ incorrect: true });
    }
  }

  login(form) {
    this.authService.login(form.value).subscribe(
      res => {
        localStorage.setItem('user_id', res.user.id);
        const navigationExtra: NavigationExtras = {
          state: {
            user: res.user
          }
        };
        this.router.navigate(['tabs/tab3/account'], navigationExtra);
      },
      err => this.presentAlert(err.message)
    );
  }

  switchForm() {
    this.toggleLogin = !this.toggleLogin;
  }

  async presentAlert(message) {
    const alert = await this.alertController.create({
      header: 'Registration error',
      message,
      buttons: ['OK']
    });

    await alert.present();
  }
}
