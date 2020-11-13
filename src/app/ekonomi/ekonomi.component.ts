import { Component, OnInit } from '@angular/core';
import { EkonomiService } from './ekonomi.service';
import { takeUntil } from 'rxjs/operators';
import { Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-ekonomi',
  templateUrl: './ekonomi.component.html',
  styleUrls: ['./ekonomi.component.css']
})
export class EkonomiComponent implements OnInit {
  constructor(private ekonomiService:EkonomiService) { }
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
    this.ekonomiService.fetchHaberService().pipe(takeUntil(this.isDestroyed$)).subscribe({
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
    this.donusenHaber=this.ekonomiService.xmldenAl(a)

  }
}
