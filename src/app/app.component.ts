import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'akhil';
  constructor(private service: AuthService,
                private router: Router)
                {

                }
    logout()
    {
      this.service.SignOut();
      this.router.navigate(['login']);
    }
}
