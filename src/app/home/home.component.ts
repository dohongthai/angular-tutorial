import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // public name = 'Đỗ Hồng Thái';
  // public age = 25;
  // public address = 'Biên Hòa Đồng Nai';

  // public listNyc = ['DQ', 'HN', 'HĐ', 'TM', 'TT'];

  // public traiCay = [
  //   { ten: 'Nhãn', gia: 12, sell: true },
  //   { ten: 'nho', gia: 14, sell: false },
  //   { ten: 'Táo', gia: -3, sell: false },
  //   { ten: 'Dứa', gia: 3, sell: true },
  // ];

  public districts: string[] = ['Quận / Huyện'];
  public dataVietnam = [

    { city: 'Chọn Thành Phố', district: ['Quận / Huyện'] },

    {
      city: 'Hồ Chí Minh',
      district: ['Quận 1', 'Quận 2', 'Quận 3', 'Quận 4'],
    },

    {
      city: 'Vũng Tàu',
      district: ['Thành phố Vũng Tàu', 'Thị xã Bà Rịa', 'Thị xã Phú Mỹ'],
    },

    {
      city: 'Nha Trang',
      district: ['hành phố Nha Trang', 'Thị xã Cam Ranh', 'Thị xã Ninh Hòa'
      ],
    },
  ];

  public streetData= [
  //tim hieu them
  ]
  constructor() { }

  ngOnInit(): void {
    
  }
  public changeCity(event: any): void {
    const city = event.target.value; //Lấy city
    if (!city) {
      return;
    }
    //cách 1
    // const search = this.dataVietnam.filter(data => data.city === city);
    // if (search && search.length > 0) {
    //   this.districts = search[0].district;
    // }

      //cách 2 Tìm Dictrict:
      this.districts = 
      this.dataVietnam.find(data =>data.city === city ) ?.district || [];
    }
  






  // public resetName(): void {

  //   this.name = '';
  // }
  // public resetAddress(): void {
  //   this.address = '';
  // }
  // public resetAge(): void {
  //   this.age = 0;
  // }

}
