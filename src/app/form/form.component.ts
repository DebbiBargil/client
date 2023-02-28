import { Component, OnInit } from '@angular/core';
import { Child } from '../models/child';
import { Parent } from '../models/parent';
import { ParentService } from '../services/parent.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private parentService:ParentService) { }

 parent : Parent;
 
  


  ngOnInit(): void {
    this.parent=this.parentService.parent;
  }

  ngOnDestroy(): void {
    this.parentService.parent=this.parent;
  }

 

  AddChild(){
    this.parent.Children.push(new Child(0,"", new Date(),"",""));
   
  }
send(){
this.parentService.addParent(this.parent);
}
}
