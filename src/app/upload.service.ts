// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { HttpClient, HttpHeaders } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root',
// })
// export class UploadService {
//   public baseUrl = 'http://localhost:8000/api/v1/upload';
//   constructor(private httpClient: HttpClient) {}
//   public getUsers(): Observable<any> {
//     return this.httpClient.post(
//       this.baseUrl,
//       {},
//       {
//         headers: new HttpHeaders()

//           .set(
//             'Authorization',
//             '2919e1b1883b6137a6e2bfdf22f8a7bbafa4a79c884c29a90c8356590519d045'
//           )
//           .set('Content-Type', 'multipart/form-data'),
//         responseType: 'blob',
//       }
//     );
//   }
// }
