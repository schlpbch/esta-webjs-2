import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styles: [`
    h1 {
      margin-top: 25px;
    }
    .top-margin {
        margin-top: 20px;
    }
  `]
})
export class ThemeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
