import { Component, OnInit } from '@angular/core';
import { SanatService } from './sanat.service';
import { takeUntil } from 'rxjs/operators';
import { Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-sanat',
  templateUrl: './sanat.component.html',
  styleUrls: ['./sanat.component.css']
})
export class SanatComponent implements OnInit {

  constructor(private sanatService:SanatService) { }
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
    this.sanatService.fetchHaberService().pipe(takeUntil(this.isDestroyed$)).subscribe({
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
    this.donusenHaber=this.sanatService.xmldenAl(a)
    console.log("donusenhaber111",this.donusenHaber)

  }

}
