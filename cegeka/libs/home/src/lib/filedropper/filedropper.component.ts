import { Component, OnInit } from '@angular/core';
import {MyFilePickerAdapter} from "./my-file-picker.adapter";
import {HttpClient} from "@angular/common/http";
import {FilePickerService, FilePreviewModel} from "ngx-awesome-uploader";

@Component({
  selector: 'cegeka-filedropper',
  providers: [FilePickerService],
  templateUrl: './filedropper.component.html',
  styleUrls: ['./filedropper.component.scss'],
})
export class FiledropperComponent implements OnInit {
  files: File[] = [];
  adapter = new  MyFilePickerAdapter(this.http);

  constructor(private http: HttpClient) { }

  ngOnInit(): void {}

  onSelect(event: any) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  public uploadSuccess(event: FilePreviewModel): void {
    console.log(event);
  }

}
