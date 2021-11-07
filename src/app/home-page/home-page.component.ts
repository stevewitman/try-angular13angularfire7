import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService, Post } from '../services/data.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  posts: Post[] = [];

  constructor(private dataService: DataService, private matDailog: MatDialog) {
    this.dataService.getPosts().subscribe((res) => {

      this.posts = res;
      console.log('POSTS:', this.posts);
      
    });
  }

}
