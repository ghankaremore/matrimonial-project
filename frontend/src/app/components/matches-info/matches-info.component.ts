import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LoginNavbarComponent } from '../../login-navbar/login-navbar.component';

@Component({
  selector: 'app-matches-info',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, LoginNavbarComponent],
  templateUrl: './matches-info.component.html',
  styleUrl: './matches-info.component.css'
})
export class MatchesInfoComponent {

}