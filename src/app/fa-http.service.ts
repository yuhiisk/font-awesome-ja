import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class FaHttpService {

  private url = './fa.csv';
  constructor(private http: Http) {}

  getData() {
    return this.http.get(this.url)
      .toPromise()
      .then(response => {
        return this.csvToJSON(response.text());
      })
      .catch(this.handleError);
  }

  csvToJSON(csv) {

    let lines = csv.split('\n');
    let headers = lines[0].split(',');
    let result = [];

    for(let i = 1; i < lines.length; i++) {
      let obj = {},
          currentline = lines[i].split(',');

      for(let j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentline[j];
      }

      result.push(obj);
    }

    return result; //JavaScript object
    //return JSON.stringify(result); //JSON
  }

  private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = res.json();
    return body.response || { };
  }

  private handleError (error: any): Promise<any> {
    // In a real world app, we might send the error to remote logging infrastructure
    let errMsg = error.message || 'Server error';
    console.error(errMsg); // log to console instead
    return Promise.reject(error.message || error);
  }
}
