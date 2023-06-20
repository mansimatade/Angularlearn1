import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NewProject1';

 menu = [

    {​​

      displayName: 'Home',

      iconName: '',

      route: '/home',

    }​​,

    {​​

      displayName: 'About',

      iconName: '',

      route: '/about',

    }​​,
    {​​

      displayName: 'Contact',

      iconName: '',

      route: 'contact',

    }​​,
  ];
}