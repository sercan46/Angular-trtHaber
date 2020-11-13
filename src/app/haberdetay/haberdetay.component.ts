import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { AnasayfaService } from "../anasayfa/anasayfa.service";
import { SporService } from "../spor/spor.service";
import { EkonomiService } from "../ekonomi/ekonomi.service";
import { SaglikService } from "../saglik/saglik.service";
import { EgitimService } from "../egitim/egitim.service";
import { SanatService } from "../sanat/sanat.service";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: "app-haberdetay",
  templateUrl: "./haberdetay.component.html",
  styleUrls: ["./haberdetay.component.css"],
})
export class HaberdetayComponent implements OnInit {
  constructor(
    private router: Router,
    public route: ActivatedRoute,
    private anasayfaService: AnasayfaService,
    private sporService: SporService,
    private ekonomiService: EkonomiService,
    private saglikService: SaglikService,
    private egitimService: EgitimService,
    private kulturSanatService: SanatService
  ) {}
  id: any;
  haberData: any[] = [];
  donusturulenHaber: any[] = [];
  datalar: any[] = [];
  //get id parameter
  loading: BehaviorSubject<boolean> = new BehaviorSubject(true);

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
    });
    this.veriGet();
  }

  veriGet() {
    this.anasayfaService.fetchHaberService().subscribe({
      next: (resp) => {
        this.haberData = resp;
        this.xmlCeviri(this.haberData);
      },

      complete: () => {
        this.loading.next(false);
      },
    });
    if (this.haberData.length == 0) {
      this.sporService.fetchHaberService().subscribe({
        next: (resp) => {
          this.haberData = resp;
          this.xmlCeviri(this.haberData);
        },
        complete: () => {
          this.loading.next(false);
        },
      });
    }

    if (this.haberData.length == 0) {
      this.ekonomiService.fetchHaberService().subscribe({
        next: (resp) => {
          this.haberData = resp;
          this.xmlCeviri(this.haberData);
        },
        complete: () => {
          this.loading.next(false);
        },
      });
    }
    if (this.haberData.length == 0) {
      this.saglikService.fetchHaberService().subscribe({
        next: (resp) => {
          this.haberData = resp;
          this.xmlCeviri(this.haberData);
        },
        complete: () => {
          this.loading.next(false);
        },
      });
    }
    if (this.haberData.length == 0) {
      this.egitimService.fetchHaberService().subscribe({
        next: (resp) => {
          this.haberData = resp;
          this.xmlCeviri(this.haberData);
        },
        complete: () => {
          this.loading.next(false);
        },
      });
    }

    if (this.haberData.length == 0) {
      this.kulturSanatService.fetchHaberService().subscribe({
        next: (resp) => {
          this.haberData = resp;
          this.xmlCeviri(this.haberData);
        },
        complete: () => {
          this.loading.next(false);
        },
      });
    }
  }
  xmlCeviri(a) {
    this.donusturulenHaber = this.anasayfaService.xmldenAl(a).forEach((x) => {
      if (x.haber_id[0] == this.id) {
        this.datalar = x;
      }
    });
  }
}
