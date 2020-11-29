import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  constructor(private router: Router) { }
  go () {
    this.router.navigate(['subscribers'])
  }
  next () {
    this.router.navigate(['payment'])
  }
  account () {
    this.router.navigate(['account'])
  }
}

  
