import { Component, OnInit } from '@angular/core';
import { welcomeFunction } from 'src/app/welcomemenu.js';

@Component({
  selector: 'app-new-welcome',
  templateUrl: './new-welcome.component.html',
  styleUrls: ['./new-welcome.component.css']
})
export class NewWelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    welcomeFunction();
  }

}
