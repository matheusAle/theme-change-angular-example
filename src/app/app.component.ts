import { Component } from '@angular/core';
import {ThemeChanger} from '../themes/theme-change';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public theme: ThemeChanger) {}
}
