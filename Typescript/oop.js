var Category;
(function (Category) {
    Category[Category["None"] = 0] = "None";
    Category[Category["Movies"] = 1] = "Movies";
    Category[Category["Sport"] = 2] = "Sport";
    Category[Category["Political"] = 3] = "Political";
})(Category || (Category = {}));
var Difficulty;
(function (Difficulty) {
    Difficulty[Difficulty["None"] = 0] = "None";
    Difficulty[Difficulty["Easy"] = 1] = "Easy";
    Difficulty[Difficulty["Medium"] = 2] = "Medium";
    Difficulty[Difficulty["Hard"] = 3] = "Hard";
})(Difficulty || (Difficulty = {}));
var QuestionText = /** @class */ (function () {
    function QuestionText() {
    }
    return QuestionText;
}());
var Question = /** @class */ (function () {
    function Question() {
    }
    return Question;
}());
//Dev1 work
var QuestionRepository = /** @class */ (function () {
    function QuestionRepository() {
    }
    QuestionRepository.prototype.loadAllQuestions = function () {
        //Instead of returning null or thowing not implemented exception =>
        //Implment the call to the API using either XmlHttpRequest object or fetch
        return null;
    };
    QuestionRepository.prototype.loadAllQuestionsByCategory = function (category) {
        throw new Error("Method not implemented.");
    };
    QuestionRepository.prototype.insertNewQuestion = function (question) {
        throw new Error("Method not implemented.");
    };
    QuestionRepository.prototype.updateQuestion = function (question) {
        throw new Error("Method not implemented.");
    };
    QuestionRepository.prototype.deleteQuestion = function (questionID) {
        throw new Error("Method not implemented.");
    };
    return QuestionRepository;
}());
//Dev2 work
var Quiz = /** @class */ (function () {
    function Quiz() {
    }
    return Quiz;
}());
var QuizManager = /** @class */ (function () {
    function QuizManager(repository) {
        this.repository = repository;
        this.maxNumberOfQuestionsPerQuiz = 10;
    }
    QuizManager.prototype.generateQuiz = function () {
        var allQuestions = this.repository.loadAllQuestions();
        //apply logic based on allQuestions loaded; use maxNumberOfQuestionsPerQuiz
        return null;
    };
    return QuizManager;
}());
var quiz = new QuizManager(new QuestionRepository());
console.log(quiz.generateQuiz());
