function init() {
    const articleRepository = new ArticleRepository();

    const allArticles = articleRepository.getAllArticles();

    for(const article of allArticles) {
        //get container where to insert (using document)
        //create element
        //insert element into DOM
    }
}