import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(
    private data: DataService,
    private route : ActivatedRoute
  
  ) { }

  private listID = +this.route.snapshot.paramMap.get('id');

  ngOnInit() {
  }

  updateList(id,title,detail){
    this.data.updateListId(id,title,detail);
  }
}
