import { Component, Input, OnInit, SimpleChange } from "@angular/core";
import { Language } from "../../models/language.model";

@Component({
    standalone: true,
    selector: 'menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    @Input() language: Language = Language.English;

    articleMenuText: string = '';
    blogMenuText: string = '';
    newsMenuText: string = '';
    accountMenuText: string = '';

    ngOnInit(): void {
        if (this.language === Language.English) {
            this.articleMenuText = "Article";
            this.blogMenuText = "Blog";
            this.newsMenuText = "News";
            this.accountMenuText = "Account";
        } else {
            this.articleMenuText = "Articol";
            this.blogMenuText = "Blog";
            this.newsMenuText = "Stiri";
            this.accountMenuText = "Contul meu";
        }
    }

    ngOnChanges(changes: SimpleChange): void {
        if (this.language === Language.English) {
            this.articleMenuText = "Article";
            this.blogMenuText = "Blog";
            this.newsMenuText = "News";
            this.accountMenuText = "Account";
        } else {
            this.articleMenuText = "Articol";
            this.blogMenuText = "Blog";
            this.newsMenuText = "Stiri";
            this.accountMenuText = "Contul meu";
        }
    }

    goToArticle() {
        console.log('goToArticle');
    }

    goToBlog() {
        console.log('goToBlog');
    }

    goToNews() {
        console.log('goToNews');
    }

    goToAccount() {
        console.log('goToAccount');
    }
}