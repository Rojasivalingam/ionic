import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.page.html',
  styleUrls: ['./subscribers.page.scss'],
})
export class SubscribersPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
