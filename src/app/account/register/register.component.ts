import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/_injectible-services/layout.service';
import { AccountService } from '../../_injectible-services/account.service';

@Component({
  selector: 'rm-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  acount: any = {
    full_name: '',
    email: '',
    hashed_password: '',
    username: '',
    phone: '',
    location: '',
  };
  confirmPassword!: string;

  constructor(
    private router: Router,
    private layoutService: LayoutService,
    private accountService: AccountService,
  ) { }
  
  handleRequest() {
    this.accountService.signup(this.acount).subscribe(
      res => {
        alert('success !');
        this.router.navigate(['/account/login']);
      }
    )
  }

}
