import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StateService } from 'src/app/shared/services/state.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss']
})
export class AccountPage implements OnInit {
  user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private state: StateService
  ) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.user = this.router.getCurrentNavigation().extras.state.user;
      }
    });
  }

  ngOnInit() {
    this.state
      .loadUserData(localStorage.getItem('user_id'))
      .subscribe(res => (this.user = res));
  }
}
