import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  public isSpecial: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  changeSpecial(): void {
    this.isSpecial = !this.isSpecial;
  }


}
