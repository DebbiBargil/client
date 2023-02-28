import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Child } from '../models/child';

@Injectable({
  providedIn: 'root'
})
export class ChidService {

  constructor(public http:HttpClient) { }




}
