import { Component, OnInit } from '@angular/core';
import { SaglikService } from './saglik.service';
import { takeUntil } from 'rxjs/operators';
import { Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-saglik',
  templateUrl: './saglik.component.html',
  styleUrls: ['./saglik.component.css']
})
export class SaglikComponent implements OnInit {

  constructor(private saglikService:SaglikService) { }
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
    this.saglikService.fetchHaberService().pipe(takeUntil(this.isDestroyed$)).subscribe({
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
    this.donusenHaber=this.saglikService.xmldenAl(a)

  }

}
