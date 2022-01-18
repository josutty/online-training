import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from './../../services/http-service.service'
@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard-component.component.html',
  styleUrls: ['./dashboard-component.component.scss']
})
export class DashboardComponentComponent implements OnInit {
  courses: any;
  priceList: { id: string; name: string; }[] = [];
  dataCopy: any;
  courseName:any;
  cartValue: any = 0;
  cart: any= [];
  constructor(public httpService: HttpServiceService) { }

  ngOnInit(): void {
    this.priceList = [
      {id:'default', name: 'Default'},
      { id: 'low', name: "Low - High" },
      { id: 'high', name: "High - Low" },
    ];

    this.httpService.getDetails("assets/json/assignment_sample.json").subscribe(data => {
      console.log(data);
      this.courses = data;
      this.dataCopy = [...this.courses]
    })
  }

  priceChanged(e:any) {
    if(e == 'low') {
      this.courses.sort((a:any, b:any) => parseFloat(a.actual_price) - parseFloat(b.actual_price));
    } else if(e == 'high') {
      this.courses.sort((a:any, b:any) => parseFloat(b.actual_price) - parseFloat(a.actual_price));
    } else {
      this.courses = [];
      this.courses = this.dataCopy;
    }
  }


 searchCourse(value:any){
    if(!value){
       this.courses = this.dataCopy;
    } 
    this.courses = Object.assign([], this.dataCopy).filter(
       (item:any) => item.title.toLowerCase().indexOf(value.toLowerCase()) > -1
    )
 }

 addToCart(val:any) {
   this.cart.push(val)
   console.log(this.cart)
   this.cartValue = this.cart.map((item:any) => +item.actual_price).reduce((prev:any, curr:any) => prev + curr, 0);
 }

}
