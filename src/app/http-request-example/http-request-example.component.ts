import { Component } from '@angular/core';
import { CommentsComponent } from '../comments/comments.component';

@Component({
  selector: 'app-http-request-example',
  standalone: true,
  imports: [CommentsComponent],
  templateUrl: './http-request-example.component.html',
  styleUrls: ['./http-request-example.component.scss']
})
export class HttpRequestExampleComponent {

}
