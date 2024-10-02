import { Component } from '@angular/core';
import {
  DBSection,
  DBLink
} from '@db-ui/ngx-components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    DBSection,
    DBLink
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-template';
}
