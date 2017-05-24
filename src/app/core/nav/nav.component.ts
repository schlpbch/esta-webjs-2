/**
 * Copyright (C) Schweizerische Bundesbahnen SBB, 2017.
 *
 * ESTA WebJS: Navbar Component
 *
 * @author u218609 (Kevin Kreuzer)
 * @version: 2.0.0
 * @since 28.04.2017, 2017.
 */
import {Component} from '@angular/core';
import {MenuItem} from "primeng/primeng";

@Component({
  selector: 'navbar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  public navItems: Array<MenuItem> = [
    {label: 'Home', routerLink: ['/']},
    {label: 'About', routerLink: ['about']},
    {label: 'Theme', routerLink: ['theme']}
  ]

  constructor() {
  }
}
