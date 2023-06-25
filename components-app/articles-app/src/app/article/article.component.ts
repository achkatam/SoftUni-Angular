import { Component, Input } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {

  constructor() {
    this.articleDescriptionLength = 0;
    this.descriptionToShow = '';
  }
  
  private symbols: number = 250;
  @Input() article!: Article;
  @Input() articleDescription!: string;
  descriptionToShow: string;
  articleDescriptionLength: number;
  showReadMoreBtn: boolean = true;
  showHideBtn: boolean = false;
  imageIsShown: boolean = false;
  imageButtonTitle = 'Show Image'; 

  readMore() {
    this.articleDescriptionLength += this.symbols;
    if (this.articleDescriptionLength > this.articleDescription.length){
      this.showReadMoreBtn = false;
      this.showHideBtn = true;
    } else {
      this.descriptionToShow = this.articleDescription.substring(0, this.articleDescriptionLength);
    }
  }

  toggleImage() {
    this.imageIsShown = !this.imageIsShown;  
    this.imageButtonTitle = this.imageIsShown ? 'Hide Image' : 'Show Image';
  }

  hideDesc() {
    this.descriptionToShow = '';
    this.articleDescriptionLength = 0;
    this.showHideBtn = false;
    this.showReadMoreBtn = true;
  } 
}