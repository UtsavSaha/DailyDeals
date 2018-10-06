import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {Subscription} from 'rxjs';
import {Deal} from '../Deal';
import { DealService } from '../deal.service';

@Component({
  selector: 'app-private-deals',
  templateUrl: './private-deals.component.html',
  styleUrls: ['./private-deals.component.css']
})
export class PrivateDealsComponent implements OnInit {
  dealsSub: Subscription;
  privateDeals: Deal[];
  error: any;

  constructor(
    public authService: AuthService,
    public dealService: DealService
  ) { }

  ngOnInit() {
    this.dealsSub = this.dealService
    .getPrivateDeals()
    .subscribe(
      deals => this.privateDeals = deals,
      err => this.error = err
    );
  }

}
