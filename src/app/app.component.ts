import { Component } from '@angular/core';
import { DataGathererService } from './services/data-gatherer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ramen';
  Restaurants: any[];
  NumberOfRows: number;
  NumberOfCols: number;
  constructor(private dataGathererService: DataGathererService) {
    this.dataGathererService.getJson().subscribe((data) => {
      this.Restaurants = data;
      this.NumberOfRows = Math.ceil(this.Restaurants.length / 3);
    }, (error) => {
      console.log(error);
    });
  }
  ngOnInit() {
    
  }
  getRestaurantsForRow(rowIndex) {
    let endIndex=rowIndex*3+3;
    if(rowIndex*3+3>this.Restaurants.length){
      endIndex=this.Restaurants.length;
    }
    return this.Restaurants.slice(rowIndex*3,endIndex);
  }
  getRowIndexes(){
    return Array(this.NumberOfRows).fill(0).map((val,index)=>index)
  }
}
