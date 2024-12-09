import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { agendaa } from './agendaa';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AgendaaService {

  url='http://localhost:3000/agenda';


  constructor(private http:HttpClient) { }

  getagendaa(): Observable<agendaa []>{

    return this.http.get<agendaa []>(this.url);
  }

  delete(agendaa:agendaa): Observable<void>{
    return this.http.delete<void>(`${this.url}/${agendaa.id}`);

    }

    getagendaaById(id:number): Observable<agendaa>{
      return this.http.get<agendaa>( `${this.url}/${id}`);
    }

    update(agendaa: agendaa):Observable<agendaa>{
      return this.http.put<agendaa>(`${this.url}/${agendaa.id}`,agendaa);
    }
    save(agendaa: agendaa):Observable<agendaa>{
      return this.http.post<agendaa>(this.url, agendaa);
    }

  }
