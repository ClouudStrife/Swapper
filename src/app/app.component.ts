import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { library } from '../../node_modules/@fortawesome/fontawesome-svg-core';

library.add(faCoffee);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'swapperProject';
  faCoffee = faCoffee;
}
