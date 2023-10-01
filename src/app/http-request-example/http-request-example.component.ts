import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCommentComponent } from '../add-comment/add-comment.component';
import { CommentsComponent } from '../comments/comments.component';

@Component({
  selector: 'app-http-request-example',
  standalone: true,
  imports: [CommonModule, AddCommentComponent, CommentsComponent],
  templateUrl: './http-request-example.component.html',
  styleUrls: ['./http-request-example.component.scss']
})
export class HttpRequestExampleComponent {

}
