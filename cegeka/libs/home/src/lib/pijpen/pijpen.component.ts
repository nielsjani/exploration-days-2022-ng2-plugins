import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'cegeka-pijpen',
  templateUrl: './pijpen.component.html',
  styleUrls: ['./pijpen.component.scss']
})
export class PijpenComponent implements OnInit {

  fullArray = ['andre', 'nico', 'keons', 'keons', 'keons', 'keons', 'savarver', 'lisden', 'reisdro', 'nills', 'vetomo', 'listo', null, undefined, ''];
  intersection = ['nico', 'keons', 'savarver', null, undefined, '', 'Tyler', 'Josh'];

  now = moment();
  minutesAgo = moment().subtract(10, 'minutes');
  hourAgo = moment().subtract(60, 'minutes');
  dayAgo = moment().subtract(24, 'hours');
  weekAgo = moment().subtract(7, 'days');

  wordsForAOrAnPipe = ['book', 'apple', 'black pete', 'ananananas'];

  constructor() {
  }

  ngOnInit(): void {
  }
}
