import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit{

  constructor() { }

  ngOnInit() {

    function randomNum(): number {
      return Math.floor(Math.random() * 9) + 1;
    }

    let loop1: any;
    let loop2: any;
    let loop3: any;
    let time = 30;
    let i = 0;
    let number: number | undefined;

    const selector3 = document.querySelector('.thirdDigit') as HTMLElement;
    const selector2 = document.querySelector('.secondDigit') as HTMLElement;
    const selector1 = document.querySelector('.firstDigit') as HTMLElement;

    loop3 = setInterval(() => {
      if (i > 40) {
        clearInterval(loop3);
        selector3.textContent = '4';
      } else {
        selector3.textContent = randomNum().toString();
        i++;
      }
    }, time);

    loop2 = setInterval(() => {
      if (i > 80) {
        clearInterval(loop2);
        selector2.textContent = '0';
      } else {
        selector2.textContent = randomNum().toString();
        i++;
      }
    }, time);

    loop1 = setInterval(() => {
      if (i > 100) {
        clearInterval(loop1);
        selector1.textContent = '4';
      } else {
        selector1.textContent = randomNum().toString();
        i++;
      }
    }, time);

  }
}
