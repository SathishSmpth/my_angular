import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  randomPage = Math.floor(Math.random()*10)

  actionMovies:any
  posterUrl:String

  constructor( private http : HttpClient){
    this.posterUrl="https://image.tmdb.org/t/p/w500"
  }

  ngOnInit() {
     this.http.get(`https://api.themoviedb.org/3/movie/299536/similar?api_key=3d23c0d560393968f848f436205e4c3e&language=en-US&page=${this.randomPage}`)
    .subscribe(response=>{
      this.actionMovies = response
    })

    console.log(this.actionMovies)
   }

}
