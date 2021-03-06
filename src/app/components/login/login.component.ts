import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/models/auth';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	user: Auth;
	message: string;
	loading: boolean;

	constructor(private authService: AuthService, private router: Router) {
		this.loading = false;
		this.user = new Auth();
	}

	ngOnInit() {
		if(this.authService.isLoggedIn()){
			this.router.navigate(['/dashboard']);
		}
	}

	login() {
		this.loading = true;
		this.message = '';
		this.authService.login(this.user)
		.then(response => {
			this.loading = false;
			this.router.navigate(['/dashboard']);
		}).catch(error => {
			this.loading = false;
			this.message = 'Email ou Senha inválidos';
			console.log('Something went wrong:', error.message);
		});
	}

}
