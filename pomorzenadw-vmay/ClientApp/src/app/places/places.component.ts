import { Component, OnInit } from '@angular/core';
import { MyData } from 'src/app/mydata';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Place } from '../../models/place.model';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

  place: Place[] = [];
  missingImageURL: string = '../../assets/images/missing.jpg';

  constructor(private http: HttpClient, private myData: MyData, private router: Router) { }

  ngOnInit() {
    this.myData.getPlaces().subscribe((data: Place[]) => {
      this.place = data;
    });
  }

  getRandomImage(placeId: any, count: any): string {
    if (count > 0) {
      const randomImageNumber = Math.floor(Math.random() * count) + 1;
      return `url(../../assets/images/places/${placeId}_${randomImageNumber}.jpg)`;
    } else {
      return `url(../../assets/images/missing.jpg)`;
    }
  }
  

  navigateToPlace(id: number) {
    this.router.navigateByUrl(`/attraction/${id}`)
      .then(() => console.log('Navigation successful'))
      .catch(error => console.error('Navigation failed:', error));
  }
}
