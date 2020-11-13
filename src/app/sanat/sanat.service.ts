import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
declare var require: any

@Injectable({
  providedIn:'root'
})

export class SanatService{

  xmlFonksiyon: any;
  constructor(public http: HttpClient) {}

  fetchHaberService(): any {
      return this.http
          .get("kultur-sanat", {
              responseType: "text",
          })
          .pipe(
              map((response) => {
                  this.xmldenAl(response)
                  return response;
              })
          );
  }
  xmldenAl(xML) {
      let res;

      var parseString = require("xml2js").parseString;
      var xml = xML;
      parseString(xml, function (err, result) {
         res= result;
      });
      this.xmlFonksiyon=res['haberler']['haber']
      return this.xmlFonksiyon
  }
}
