import { File } from './file';
// import { UploadService } from './upload.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  files!: File[];
  file: File = new File();
  title = 'int-mobsf-ang';
  // constructor(private fileService: UploadService) {}
  constructor() {}

  ngOnInit(): void {
    // console.log('tests');
    // this.fileService.getUsers().subscribe((data: any) => {
    //   console.log(data);
    //   this.files = data;
    // });
  }
}
