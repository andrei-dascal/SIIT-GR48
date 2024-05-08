enum Category {
    None = 0,
    Movies = 1,
    Sport = 2,
    Political = 3
}

enum Difficulty {
    None = 0,
    Easy = 1,
    Medium = 2,
    Hard = 3
}

class QuestionText {
    private text: string;
}

class Question {
    private id: string;
    private category: Category;
    private difficulty: Difficulty;
    private correctAnswer: string;
    private incorrectAnswers: string[];
    private question: QuestionText;
}

//Dev1 and Dev2 aggreed the contract
interface IQuestionRepository {
    loadAllQuestions(): Question[];

    loadAllQuestionsByCategory(category: Category): Question[];

    loadAllQuestionsByDifficulty(difficulty: Difficulty): Question[];

    insertNewQuestion(question: Question): boolean;

    updateQuestion(question: Question): boolean;
    updateQuestiontText(questionText: QuestionText): boolean;

    deleteQuestion(questionID: string): boolean;
}

//Dev1 work
class QuestionJsonRepository implements IQuestionRepository  {
    updateQuestiontText(questionText: QuestionText): boolean {
        throw new Error("Method not implemented.");
    }

    loadAllQuestions(): Question[] {
        //Instead of returning null or thowing not implemented exception =>
        //Implment the call to the API using either XmlHttpRequest object or fetch
        console.log("Inside loadAllQuestions JSON");
        return null;
    }

    loadAllQuestionsByCategory(category: Category): Question[] {
        throw new Error("Method not implemented.");
    }

    loadAllQuestionsByDifficulty(difficulty: Difficulty): Question[] {
        throw new Error("Method not implemented.");
    }

    insertNewQuestion(question: Question): boolean {
        throw new Error("Method not implemented.");
    }

    updateQuestion(question: Question): boolean {
        throw new Error("Method not implemented.");
    }

    deleteQuestion(questionID: string): boolean {
        throw new Error("Method not implemented.");
    }
}

//We need to switch on Mongo

class QuestionMongoRepository implements IQuestionRepository {
    loadAllQuestions(): Question[] {
        console.log("Inside loadAllQuestions Mongo");
        return null;
    }
    loadAllQuestionsByCategory(category: Category): Question[] {
        throw new Error("Method not implemented.");
    }
    loadAllQuestionsByDifficulty(difficulty: Difficulty): Question[] {
        throw new Error("Method not implemented.");
    }
    insertNewQuestion(question: Question): boolean {
        throw new Error("Method not implemented.");
    }
    updateQuestion(question: Question): boolean {
        throw new Error("Method not implemented.");
    }
    updateQuestiontText(questionText: QuestionText): boolean {
        throw new Error("Method not implemented.");
    }
    deleteQuestion(questionID: string): boolean {
        throw new Error("Method not implemented.");
    }

}

//Dev2 work
class Quiz {
    public questions: Question[];
}

class QuizManager {
    private maxNumberOfQuestionsPerQuiz: number = 10;

    //Dependency injection: provide example why is so usefull
    constructor(private repository: IQuestionRepository) {

    }

    generateQuiz(numberOfQuestion: number = 10): Quiz {
        const allQuestions: Question[] = this.repository.loadAllQuestions();

        // //apply logic based on allQuestions loaded; use maxNumberOfQuestionsPerQuiz
        
        console.log("Inside generateQuiz: " + numberOfQuestion);

        return null;
    }
}

const quiz: QuizManager = new QuizManager(new QuestionJsonRepository());
// const quiz: QuizManager = new QuizManager(new QuestionMongoRepository());

console.log(quiz.generateQuiz(5));
console.log(quiz.generateQuiz());

enum Role {
    None = 0,
    User = 1,
    Admin = 2,
    SuperAdmin = 3
}

class User {
    public readonly username: string;
    public readonly password: string;
    public readonly role: Role;
}

//Abstract classes
abstract class QuestionRepository implements IQuestionRepository {
    authorizeUser(user: User): boolean {
        if(user.role === Role.SuperAdmin)
            return true;
        
        return false;
    }

    abstract loadAllQuestions(): Question[];

    abstract loadAllQuestionsByCategory(category: Category): Question[];

    //You can make them abstract
    loadAllQuestionsByDifficulty(difficulty: Difficulty): Question[] {
        throw new Error("Method not implemented.");
    }
    insertNewQuestion(question: Question): boolean {
        console.log("Inside QuestionRepository insertNewQuestion");
        return null;
    }
    updateQuestion(question: Question): boolean {
        throw new Error("Method not implemented.");
    }
    updateQuestiontText(questionText: QuestionText): boolean {
        throw new Error("Method not implemented.");
    }
    deleteQuestion(questionID: string): boolean {
        throw new Error("Method not implemented.");
    }
}

class QuestionJsonRepositoryFromAbstract extends QuestionRepository {
    loadAllQuestions(): Question[] {
        throw new Error("Method not implemented.");
    }
    
    loadAllQuestionsByCategory(category: Category): Question[] {
        throw new Error("Method not implemented.");
    }
}

class QuestionMongoRepositoryFromAbstract extends QuestionRepository {
    loadAllQuestions(): Question[] {
        console.log("Inside QuestionMongoRepositoryFromAbstract loadAllQuestions");
        return null;
    }
    loadAllQuestionsByCategory(category: Category): Question[] {
        throw new Error("Method not implemented.");
    }
}

//Inheritance level: QuestionRepository (abstract) => QuestionMongoRepositoryFromAbstract => QuestionMongoRepositoryForCasting

class QuestionMongoRepositoryForCasting extends QuestionMongoRepositoryFromAbstract {
    loadAllQuestions(): Question[] {
        console.log("Inside QuestionMongoRepositoryForCasting loadAllQuestions");
        return null;
    }

    specificMethodForThisClass() {

    }
}

// const questionRepoFromAbstract = new QuestionJsonRepositoryFromAbstract();
// questionRepoFromAbstract.loadAllQuestions();

// const questionRepo = new QuestionJsonRepository();
// questionRepo.loadAllQuestions();

console.log("-------------");

const questionRepoCasting: QuestionMongoRepositoryForCasting = new QuestionMongoRepositoryForCasting();
questionRepoCasting.specificMethodForThisClass();