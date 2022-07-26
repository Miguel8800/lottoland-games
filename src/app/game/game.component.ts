import { Component, OnInit } from '@angular/core';
import { GameData } from './game-data';
import { LottolandService } from './lottoland.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  gameDataX: GameData | undefined;

  counterX:number=0;
  counterVictory:number=0;
  counterLosses:number=0;
  counterDraws:number=0;

  constructor(private gameService:LottolandService) { }

  ngOnInit(): void {

    this.gameService.getGameData().subscribe((resultado)=>console.log(resultado)
    )
    this.gameService.getGameData().subscribe(
      resultados => this.gameDataX = resultados

    )
    console.log(this.gameDataX?.winner);
    if(this.gameDataX?.winner == "HUMAN" ){
      this.counterVictory+=1;
      console.log(this.counterVictory);
    }
    if(this.gameDataX?.winner == "MACHINE" ){
      this.counterLosses+=1;
      console.log(this.counterLosses);
    }
    if(this.gameDataX?.winner == "NO_WINNER" ){
      this.counterDraws+=1;
      console.log(this.counterDraws);
    }
  }
  refresh(){
    this.counterX+=1;
    this.ngOnInit();

  }

  reset(){
    this.counterX=0;
    this.counterVictory=0;
    this.counterLosses=0;
    this.counterDraws=0;
  }
}
