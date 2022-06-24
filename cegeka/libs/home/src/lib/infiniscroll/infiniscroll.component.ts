import { Component } from '@angular/core';

@Component({
  selector: 'cegeka-infiniscroll',
  templateUrl: './infiniscroll.component.html',
  styleUrls: ['./infiniscroll.component.scss'],
})
export class InfiniscrollComponent  {
  array: string[] = [];
  sum = 20;
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  direction = "";


  constructor() {
    this.appendItems(0, this.sum);
  }

  addItems(startIndex: number, endIndex: number, method: string) {
    for (let i = 0; i < this.sum; ++i) {
      if(method === 'push') {
        this.array.push([i, " ", this.generateWord()].join(""));
      } else {
        this.array.unshift([i, " ", this.generateWord()].join(""));
      }
    }
  }

  appendItems(startIndex: number, endIndex: number) {
    this.addItems(startIndex, endIndex, "push");
  }

  prependItems(startIndex: number, endIndex: number) {
    this.addItems(startIndex, endIndex, "unshift");
  }

  onScrollDown(ev: any) {
    console.log("scrolled down!!", ev);

    // add another 20 items
    const start = this.sum;
    // this.sum += 20;
    this.appendItems(start, this.sum);

    this.direction = "down";
  }

  onUp(ev: any) {
    console.log("scrolled up!", ev);
    const start = this.sum;
    // this.sum += 20;
    this.prependItems(start, this.sum);

    this.direction = "up";
  }
  generateWord() {
    return 'LOUIS APPROVES';
  }
}
