import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GameData } from './game-data'

@Injectable({
  providedIn: 'root'
})
export class LottolandService {

  private playGame = 'http://localhost:8080/lottoland/v1/play';

  constructor(private http: HttpClient) { }

  getGameData():Observable<GameData> {
    return this.http.get<GameData>(this.playGame);
  }
}