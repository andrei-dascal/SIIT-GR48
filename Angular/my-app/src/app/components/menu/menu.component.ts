import { Component, Input, OnInit, SimpleChanges } from "@angular/core";
import { Language } from "../../models/language.model";
import { TextContentService } from "../../services/text-content.service";
import { HttpClient, HttpHandler } from "@angular/common/http";
import { TextContent } from "../../models/text-content.model";
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
    standalone: true,
    selector: 'menu',
    imports: [RouterLink],
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css'],
    providers: [TextContentService]
})
export class MenuComponent implements OnInit {
    @Input() language: Language = Language.English;

    articleMenuText: string = '';
    blogMenuText: string = '';
    newsMenuText: string = '';
    accountMenuText: string = '';

    constructor(private textContentService: TextContentService) {

    }

    ngOnInit(): void {
        this.initData();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (!changes["language"].firstChange)
            this.initData();
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

    private initData() {
        this.textContentService.getTextContent(this.language).subscribe((content: TextContent) => {
            this.articleMenuText = content.menu.Article_Button;
            this.blogMenuText = content.menu.Blog_Button;
            this.newsMenuText = content.menu.News_Button;
            this.accountMenuText = content.menu.Account_Button;
        });
    }
}