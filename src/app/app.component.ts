import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'All images on same size!';

  list = ['assets/html_5.png', 'assets/css_3.png', 'assets/js_1.png']
}
