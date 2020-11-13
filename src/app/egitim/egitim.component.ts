import { Component, OnInit } from '@angular/core';
import { EgitimService } from './egitim.service';
import { takeUntil } from 'rxjs/operators';
import { Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-egitim',
  templateUrl: './egitim.component.html',
  styleUrls: ['./egitim.component.css']
})
export class EgitimComponent implements OnInit {

  constructor(private egitimService:EgitimService) { }
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
    this.egitimService.fetchHaberService().pipe(takeUntil(this.isDestroyed$)).subscribe({
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
    this.donusenHaber=this.egitimService.xmldenAl(a)

  }

}
