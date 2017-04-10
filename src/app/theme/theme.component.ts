import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styles: [`
    .section-title {
      margin-top: 15px;
      padding-top: 15px;
      border-top: solid 0.1px lightgray;
    }
    .top-margin {
        margin-top: 20px;
    }
    small{
        font-size: 20px;
    }
  `]
})
export class ThemeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
