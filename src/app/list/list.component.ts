import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  lists$: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getList().subscribe(
      data => this.lists$ = data  
    );
  }

  deleteList(id){
    this.data.deleteList(id);
  }

}
