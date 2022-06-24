import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cegeka-filedropper',
  templateUrl: './filedropper.component.html',
  styleUrls: ['./filedropper.component.scss'],
})
export class FiledropperComponent implements OnInit {
  files: File[] = [];

  ngOnInit(): void {}

  onSelect(event: any) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

}
