import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { APIUserService } from './services/api-user.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    MatCardModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'users-rest-api';
  apiService = inject(APIUserService)
  users: User[] = []

  ngOnInit() {
    this.apiService.getUsersRestApiNodeJS().subscribe((data: User[]) => {
      this.users = data.map(user => ({
        ...user,
        picture: `https://robohash.org/${user.id}.png?set=set1&size=45x45`,
      }));
    });
  }

  trackById(index: number, user: User): number {
    return user.id;
  }
}
