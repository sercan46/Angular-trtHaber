import { Component, OnInit, OnDestroy } from '@angular/core';
import { AnasayfaService } from './anasayfa.service';
import { Subject, BehaviorSubject } from 'rxjs';
import {
  takeUntil
} from "rxjs/operators";
@Component({
  selector: 'app-anasayfa',
  templateUrl: './anasayfa.component.html',
  styleUrls: ['./anasayfa.component.css']
})
export class AnasayfaComponent implements OnInit,OnDestroy {

  constructor(private anasayfaService:AnasayfaService) { }
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
    this.anasayfaService.fetchHaberService().pipe(takeUntil(this.isDestroyed$)).subscribe({
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
    this.donusenHaber=this.anasayfaService.xmldenAl(a)

  }
}
