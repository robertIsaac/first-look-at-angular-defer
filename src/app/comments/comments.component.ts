import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent {
  comments: unknown;

  constructor(private httpClient: HttpClient) {
    this.httpClient.get('https://run.mocky.io/v3/48632fab-5d73-4825-a1a5-5d97352cf595').subscribe(comments => {
      this.comments = comments
    });
  }

}
