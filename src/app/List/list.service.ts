import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export default class ListService {
  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };
  data = {
    maGiay: "123",
    tenGiay: "hehe",
    gioiTinh: "name"
  };
  getData() {
    return this.http.get("http://localhost:8080/getListStaff");
  }
  postData() {
    this.http.post("http://localhost:8080/giay", this.data, this.httpOptions).subscribe();
  }
}
