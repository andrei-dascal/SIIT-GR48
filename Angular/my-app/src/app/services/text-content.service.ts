import { Injectable } from "@angular/core";
import { TextContent } from "../models/text-content.model";
import { Language } from "../models/language.model";
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";

@Injectable()
export class TextContentService {

    constructor(private httpClient: HttpClient) {

    }

    private apiTextContent: string = 'http://localhost:3000/languages';

    public getTextContent(language: Language): Observable<TextContent> {
        return this.httpClient.get<TextContent[]>(`${this.apiTextContent}?language=${language}`)
        .pipe(map((content: TextContent[]) => {
            return content[0];
        }));
    }

}