import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-card',
  styleUrl: './card.css',
  templateUrl: './card.html',
})
export class Card {
  imgSrc:string = 'assets/images/illustration-article.svg'
  chapter: string = 'Learning';
  publishDate: string = 'Published 21 Dec 2023';
  title: string = 'HTML & CSS foundations';
  description: string = 'These languages are the backbone of every website, defining structure, content, and presentation.'
  profileImgSrc:string = 'assets/images/image-avatar.webp';
  profileImgName:string= 'Greg Hooper';
}
