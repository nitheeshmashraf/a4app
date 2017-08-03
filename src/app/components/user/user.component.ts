import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    name="john Doe";
    hobbies=["sports","basket ball","trekking"];
    hidehob:boolean;
    posts:posts[];
  
    constructor( private dataservice:DataService) { 
  }

  ngOnInit() {
    this.hidehob=true;
    this.name="nithz";

    this.dataservice.getPosts().subscribe((posts)=>{
     // console.log(posts);
      this.posts=posts;
    });

  }

  OnClick(){
    this.hidehob=!this.hidehob;
    console.log("hide hobby "+this.hidehob);
  }

}
 
interface posts{
  id:number;
  title:string;
  body:string;
  uid:number;
}