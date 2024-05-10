import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { LoginNavbarComponent } from '../../login-navbar/login-navbar.component';

@Component({
  selector: 'app-matches',
  standalone: true,
  imports: [RouterLink, NavbarComponent, LoginNavbarComponent],
  templateUrl: './matches.component.html',
  styleUrl: './matches.component.css'
})
export class MatchesComponent {

}