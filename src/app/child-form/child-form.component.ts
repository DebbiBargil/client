import { Component, Input, OnInit } from '@angular/core';
import { Child } from '../models/child';

@Component({
  selector: 'app-child-form',
  templateUrl: './child-form.component.html',
  styleUrls: ['./child-form.component.scss']
})
export class ChildFormComponent implements OnInit {

  constructor() { }
  @Input()
  child : Child;

  ngOnInit(): void {
  }


}
