import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GameType } from '../types/game.types';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {
  apiGames: GameType[] = [];
  searchGame: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://api.boardgameatlas.com/api/search?order_by=rank&ascending=false&limit=30&client_id=hurim48HCa').subscribe( (data: any) => {
      if(data.games) {
        data.games.forEach((game: any) => {
          const gameValue: GameType = {
            imageUrl: game.images.small,
            min_players: game.min_players,
            name: game.name,
            players: game.players,
            playtime: game.playtime
          };
          this.apiGames.push(gameValue);
        });
      }
      console.log('subscribe', this.apiGames)
    });
  }

  callApiSearch(): void {
    console.log(this.searchGame);
    this.http.get(`https://api.boardgameatlas.com/api/search?order_by=rank&ascending=false&limit=30&name=${this.searchGame}&client_id=hurim48HCa`).subscribe( (data: any) => {
      if(data.games) {
        this.apiGames = [];
        data.games.forEach((game: any) => {
          const gameValue: GameType = {
            imageUrl: game.images.small,
            min_players: game.min_players,
            name: game.name,
            players: game.players,
            playtime: game.playtime
          };
          this.apiGames.push(gameValue);
        });
      }
      console.log('search', this.apiGames)
    });
  }
}
