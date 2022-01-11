import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public name='Đỗ Hồng Thái';
public age =25;
 public address ='Biên Hòa Đồng Nai';

 public listNyc =['DQ','HN','HĐ','TM','TT'];
 
 public traiCay =[
   {ten:'Nhãn' ,gia:12, sell: true},
  {ten:'nho', gia:14,sell: false},
  {ten:'Táo', gia:-3,sell: false},
  {ten:'Dứa', gia:3,sell: true},
];
  constructor() { }

  ngOnInit(): void {
  }

  public resetName():void 
  {
    
    this.name = '';
  }
  public resetAddress():void 
  {
    this.address='';
  }
  public resetAge():void 
  {
    this.age=0;
  }

}
