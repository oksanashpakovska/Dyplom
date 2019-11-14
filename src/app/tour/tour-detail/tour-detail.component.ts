import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import{ TourService} from "../../tour.service"
import Tour from "../../model/tour";


@Component({
  selector: 'app-tour-detail',
  templateUrl: './tour-detail.component.html',
  styleUrls: ['./tour-detail.component.css']
})
export class TourDetailComponent implements OnInit {

  singleTour:Tour;

  constructor(private route: ActivatedRoute, private router: Router, private service: TourService) {

  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.singleTour = this.service.getTourWithId(id);
    console.log(this.singleTour);
  }

}
