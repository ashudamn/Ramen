import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-displayer',
  templateUrl: './data-displayer.component.html',
  styleUrls: ['./data-displayer.component.css']
})
export class DataDisplayerComponent implements OnInit {

  @Input() Restaurant:any;
  constructor() { }

  ngOnInit() {
  }

}
