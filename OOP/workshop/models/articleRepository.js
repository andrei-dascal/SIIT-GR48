class ArticleReposiotry {
    #allArticlesMocked

    constructor() {
        this.#allArticlesMocked = [
            new Article("Title", "Date", "Topic", "Text", "Author"),
            new Article("Title", "Date", "Topic", "Text", "Author"),
            new Article("Title", "Date", "Topic", "Text", "Author"),
            new Article("Title", "Date", "Topic", "Text", "Author")
        ]
    }

    getAllArticles() {
        //return mocked data
        //call to an API to load all articles
        return this.#allArticlesMocked;
    }

    getArticleByID(articleID) {
        //return mocked data
        //call to an API to load all articles
    }
}

class Article {
    #id;
    #title;
    #date;
    #topic;
    #text;
    #author;

    constructor(title, date, topic, text, author) {
        //this.#id = generate a unique number //Guid
        this.#title = title;
    }
}