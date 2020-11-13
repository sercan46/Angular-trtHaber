import { Component, OnInit, OnDestroy } from '@angular/core';
import { SporService } from './spor.service';
import { Subject, BehaviorSubject } from 'rxjs';
import {
  takeUntil
} from "rxjs/operators";
@Component({
  selector: 'app-spor',
  templateUrl: './spor.component.html',
  styleUrls: ['./spor.component.css']
})
export class SporComponent implements OnInit,OnDestroy {


  constructor(private sporService:SporService) { }
  anasayfaHaberData:any[]=[];
  donusenHaber:any[]=[];
  loading:BehaviorSubject<boolean>=new BehaviorSubject(true)

  ngOnInit() {
    this.manset()
  }
  isDestroyed$=new Subject();
  ngOnDestroy(){
    this.isDestroyed$.next();
  }
  manset(){
    this.sporService.fetchHaberService().pipe(takeUntil(this.isDestroyed$)).subscribe({
      next:(resp)=>{
          this.anasayfaHaberData=resp
          this.xmlCeviri(this.anasayfaHaberData)
      },
      complete:()=>{
        this.loading.next(false)
    }
    })
  }
  xmlCeviri(a){
    this.donusenHaber=this.sporService.xmldenAl(a)
    console.log("donusenhaber111",this.donusenHaber)

  }
}
