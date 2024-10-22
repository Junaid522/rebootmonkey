import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/_injectible-services/layout.service';
import { AccountService } from '../../_injectible-services/account.service';

@Component({
  selector: 'rm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username!: string;
  password!: string;

  constructor(
    private router: Router,
    private layoutService: LayoutService,
    private accountService: AccountService,
  ) { }

  handleRequest() {
    if (this.username && this.password) {
      this.accountService.login(this.username, this.password).subscribe(
        res => {
          localStorage.setItem('username', this.username);
          this.layoutService.setLoginState('khg87t6gyug87r67dte76r');
          this.router.navigate(['/shop/cart']);
        }
      )
    } else {
      alert('Please fill in your username and password')
    }
  }

}
