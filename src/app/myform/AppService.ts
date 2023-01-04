import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class AppService {
  constructor(private http: HttpClient) {}

  postRequest(body: any, url: string) {
    return this.http.post(url, body)
  }
}
