var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var QuestionJsonRepository = /** @class */ (function () {
    function QuestionJsonRepository() {
    }
    QuestionJsonRepository.prototype.updateQuestiontText = function (questionText) {
        throw new Error("Method not implemented.");
    };
    QuestionJsonRepository.prototype.loadAllQuestions = function () {
        //Instead of returning null or thowing not implemented exception =>
        //Implment the call to the API using either XmlHttpRequest object or fetch
        console.log("Inside loadAllQuestions JSON");
        return null;
    };
    QuestionJsonRepository.prototype.loadAllQuestionsByCategory = function (category) {
        throw new Error("Method not implemented.");
    };
    QuestionJsonRepository.prototype.loadAllQuestionsByDifficulty = function (difficulty) {
        throw new Error("Method not implemented.");
    };
    QuestionJsonRepository.prototype.insertNewQuestion = function (question) {
        throw new Error("Method not implemented.");
    };
    QuestionJsonRepository.prototype.updateQuestion = function (question) {
        throw new Error("Method not implemented.");
    };
    QuestionJsonRepository.prototype.deleteQuestion = function (questionID) {
        throw new Error("Method not implemented.");
    };
    return QuestionJsonRepository;
}());
//We need to switch on Mongo
var QuestionMongoRepository = /** @class */ (function () {
    function QuestionMongoRepository() {
    }
    QuestionMongoRepository.prototype.loadAllQuestions = function () {
        console.log("Inside loadAllQuestions Mongo");
        return null;
    };
    QuestionMongoRepository.prototype.loadAllQuestionsByCategory = function (category) {
        throw new Error("Method not implemented.");
    };
    QuestionMongoRepository.prototype.loadAllQuestionsByDifficulty = function (difficulty) {
        throw new Error("Method not implemented.");
    };
    QuestionMongoRepository.prototype.insertNewQuestion = function (question) {
        throw new Error("Method not implemented.");
    };
    QuestionMongoRepository.prototype.updateQuestion = function (question) {
        throw new Error("Method not implemented.");
    };
    QuestionMongoRepository.prototype.updateQuestiontText = function (questionText) {
        throw new Error("Method not implemented.");
    };
    QuestionMongoRepository.prototype.deleteQuestion = function (questionID) {
        throw new Error("Method not implemented.");
    };
    return QuestionMongoRepository;
}());
//Dev2 work
var Quiz = /** @class */ (function () {
    function Quiz() {
    }
    return Quiz;
}());
var QuizManager = /** @class */ (function () {
    //Dependency injection: provide example why is so usefull
    function QuizManager(repository) {
        this.repository = repository;
        this.maxNumberOfQuestionsPerQuiz = 10;
    }
    QuizManager.prototype.generateQuiz = function (numberOfQuestion) {
        var allQuestions = this.repository.loadAllQuestions();
        // //apply logic based on allQuestions loaded; use maxNumberOfQuestionsPerQuiz
        console.log("Inside generateQuiz: " + numberOfQuestion);
        return null;
    };
    return QuizManager;
}());
var quiz = new QuizManager(new QuestionJsonRepository());
// const quiz: QuizManager = new QuizManager(new QuestionMongoRepository());
console.log(quiz.generateQuiz(5));
console.log(quiz.generateQuiz());
var Role;
(function (Role) {
    Role[Role["None"] = 0] = "None";
    Role[Role["User"] = 1] = "User";
    Role[Role["Admin"] = 2] = "Admin";
    Role[Role["SuperAdmin"] = 3] = "SuperAdmin";
})(Role || (Role = {}));
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
//Abstract classes
var QuestionRepository = /** @class */ (function () {
    function QuestionRepository() {
    }
    QuestionRepository.prototype.authorizeUser = function (user) {
        if (user.role === Role.SuperAdmin)
            return true;
        return false;
    };
    //You can make them abstract
    QuestionRepository.prototype.loadAllQuestionsByDifficulty = function (difficulty) {
        throw new Error("Method not implemented.");
    };
    QuestionRepository.prototype.insertNewQuestion = function (question) {
        console.log("Inside QuestionRepository insertNewQuestion");
        return null;
    };
    QuestionRepository.prototype.updateQuestion = function (question) {
        throw new Error("Method not implemented.");
    };
    QuestionRepository.prototype.updateQuestiontText = function (questionText) {
        throw new Error("Method not implemented.");
    };
    QuestionRepository.prototype.deleteQuestion = function (questionID) {
        throw new Error("Method not implemented.");
    };
    return QuestionRepository;
}());
var QuestionJsonRepositoryFromAbstract = /** @class */ (function (_super) {
    __extends(QuestionJsonRepositoryFromAbstract, _super);
    function QuestionJsonRepositoryFromAbstract() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QuestionJsonRepositoryFromAbstract.prototype.loadAllQuestions = function () {
        throw new Error("Method not implemented.");
    };
    QuestionJsonRepositoryFromAbstract.prototype.loadAllQuestionsByCategory = function (category) {
        throw new Error("Method not implemented.");
    };
    return QuestionJsonRepositoryFromAbstract;
}(QuestionRepository));
var QuestionMongoRepositoryFromAbstract = /** @class */ (function (_super) {
    __extends(QuestionMongoRepositoryFromAbstract, _super);
    function QuestionMongoRepositoryFromAbstract() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QuestionMongoRepositoryFromAbstract.prototype.loadAllQuestions = function () {
        console.log("Inside QuestionMongoRepositoryFromAbstract loadAllQuestions");
        return null;
    };
    QuestionMongoRepositoryFromAbstract.prototype.loadAllQuestionsByCategory = function (category) {
        throw new Error("Method not implemented.");
    };
    return QuestionMongoRepositoryFromAbstract;
}(QuestionRepository));
//Inheritance level: QuestionRepository (abstract) => QuestionMongoRepositoryFromAbstract => QuestionMongoRepositoryForCasting
var QuestionMongoRepositoryForCasting = /** @class */ (function (_super) {
    __extends(QuestionMongoRepositoryForCasting, _super);
    function QuestionMongoRepositoryForCasting() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QuestionMongoRepositoryForCasting.prototype.loadAllQuestions = function () {
        console.log("Inside QuestionMongoRepositoryForCasting loadAllQuestions");
        return null;
    };
    QuestionMongoRepositoryForCasting.prototype.specificMethodForThisClass = function () {
    };
    return QuestionMongoRepositoryForCasting;
}(QuestionMongoRepositoryFromAbstract));
// const questionRepoFromAbstract = new QuestionJsonRepositoryFromAbstract();
// questionRepoFromAbstract.loadAllQuestions();
// const questionRepo = new QuestionJsonRepository();
// questionRepo.loadAllQuestions();
console.log("-------------");
var questionRepoCasting = new QuestionMongoRepositoryForCasting();
questionRepoCasting.specificMethodForThisClass();
