import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Child } from '../models/child';
import { Parent } from '../models/parent';

@Injectable({
  providedIn: 'root'
})
export class ParentService {

  constructor(private http: HttpClient) { }
  parent: Parent = new Parent(0, "", "", "", "", "", [],null);
  baseRouteUrl = `${environment.baseUrl}/Parent`

  addParent(parent: Parent) {
    debugger;
    return this.http.post(this.baseRouteUrl, parent).subscribe((result) => {
      console.log(result);
    });
  }

}
