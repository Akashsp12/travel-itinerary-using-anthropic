import { Component, Input } from '@angular/core';
import { ScrollPanelModule } from 'primeng/scrollpanel';

@Component({
  selector: 'app-response-page',
  standalone: true,
  imports: [ScrollPanelModule],
  templateUrl: './response-page.component.html',
  styleUrl: './response-page.component.scss'
})
export class ResponsePageComponent {
  
  @Input('showImage') showImage: any
  @Input('loader') loader: any
  @Input('result') result: any

}
