import { Component, OnInit } from '@angular/core';
//import { RouteParams } from '@angular/router';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import{ TourService} from "../../tour.service"
import Tour from "../../model/tour";
import { Observable } from 'rxjs';


@Component({
  selector: 'app-tour-detail',
  templateUrl: './tour-detail.component.html',
  styleUrls: ['./tour-detail.component.css']
})
export class TourDetailComponent implements OnInit {

  singleTour:Tour;

  data: any;
  constructor(/*params: RouteParams*/private route: ActivatedRoute, private router: Router, private service: TourService) {
    //this.data = params.get('data');
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.singleTour = this.service.getTourWithId(id);
    console.log(this.singleTour);
  }

}
