import { Component, Input, OnInit } from '@angular/core';
import { ParentService } from '../services/parent.service';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss']
})
export class InstructionsComponent implements OnInit {

  constructor(private parentService:ParentService) { }

firstName:string;
lastName:string;
  ngOnInit(): void {
    this.firstName=this.parentService.parent.FirstName;
    this.lastName=this.parentService.parent.LastName;
  }

}
