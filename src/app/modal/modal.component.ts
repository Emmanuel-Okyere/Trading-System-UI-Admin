import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit{

  tradeFormGroup = new FormGroup({
    product: new FormControl(""),
    quantity: new FormControl(""),
    price: new FormControl(""),
    side: new FormControl(""),
    type: new FormControl(""),
    portfolio: new FormControl("")
  });

  portfolio: any = [];
  portfolios: any = [];
  portfolioName?: String;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private authService: AuthServiceService){
    this.portfolioName = data.name
  }

  ngOnInit(): void {
    this.getUserPortfolio();
  }



  getUserPortfolio(){
    console.log("Come and see me");
    console.log(this.data);

    this.authService.getUserPortfolio().subscribe(results => {
      this.portfolio = results;
      this.portfolios = this.portfolio.data;
      console.log("poooolll");
      console.log(this.portfolio.data);
      console.log("oojsdifsadf");
    });
  }

}
