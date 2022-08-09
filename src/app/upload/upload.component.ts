import { Component, Input, OnInit } from '@angular/core';
import { File } from '../file';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { interval, take, finalize } from 'rxjs';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
export class UploadComponent {
  @Input()
  requiredFileType!: string;

  fileName = '';
  uploadProgress!: number | null;
  uploadSub!: Subscription | null;

  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    // if (file) {
    //   this.fileName = file.name;
    //   const formData = new FormData();
    //   formData.append('thumbnail', file as unknown as string);

    //   const upload$ = this.http
    //     .post('/api/thumbnail-upload', formData, {
    //       reportProgress: true,
    //       observe: 'events',
    //     })
    //     .pipe(finalize(() => this.reset()));

    //   this.uploadSub = upload$.subscribe((event) => {
    //     if (event.type == HttpEventType.UploadProgress) {
    //       if (event.total) {
    //         const total: number = event.total;
    //         this.uploadProgress = Math.round(
    //           100 * (event.loaded / event.total)
    //         );
    //       }
    //     }
    //   });
    // }
  }

  // cancelUpload() {
  //   this.reset();
  // }

  // reset() {
  //   this.uploadProgress = null;
  //   this.uploadSub = null;
  // }
}
