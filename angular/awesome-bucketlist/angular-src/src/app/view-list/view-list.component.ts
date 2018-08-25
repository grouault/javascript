import { Component, OnInit } from '@angular/core';
import {ListService} from "../services/list.service";

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.css']
})
export class ViewListComponent implements OnInit {

  private lists: List[] = [];

  constructor(private listServ: ListService) { }

  ngOnInit() {

  }

  public loadLists() {
    // TODO: implémenter le service listServ
  }

}
