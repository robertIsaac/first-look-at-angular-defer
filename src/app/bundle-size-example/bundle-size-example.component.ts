import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCommentComponent } from '../add-comment/add-comment.component';

@Component({
  selector: 'app-bundle-size-example',
  standalone: true,
  imports: [CommonModule, AddCommentComponent],
  templateUrl: './bundle-size-example.component.html',
  styleUrls: ['./bundle-size-example.component.scss']
})
export class BundleSizeExampleComponent {

}
