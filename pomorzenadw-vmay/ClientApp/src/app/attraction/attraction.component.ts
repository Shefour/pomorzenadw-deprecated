import { Component, OnInit } from '@angular/core';
import { MyData } from 'src/app/mydata';
import { Place } from '../../models/place.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-attraction',
  templateUrl: './attraction.component.html',
  styleUrls: ['./attraction.component.css']
})
export class AttractionComponent implements OnInit {

  selectedPlace: Place | undefined;
  placeId: number | undefined;

  constructor(
    private myData: MyData,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.placeId = Number(params.get('id'));
      if (this.placeId) {
        this.getPlaceById(this.placeId);
      }
    });
  }

  getPlaceById(id: number) {
    this.myData.getPlaceById(id).subscribe((data: Place) => {
      this.selectedPlace = data;
    });
  }
}
