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
class QuestionRepository implements IQuestionRepository  {
    updateQuestiontText(questionText: QuestionText): boolean {
        throw new Error("Method not implemented.");
    }

    loadAllQuestions(): Question[] {
        //Instead of returning null or thowing not implemented exception =>
        //Implment the call to the API using either XmlHttpRequest object or fetch
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

//Dev2 work
class Quiz {
    public questions: Question[];
}

class QuizManager {
    private maxNumberOfQuestionsPerQuiz: number = 10;

    //Dependency injection: provide example why is so usefull
    constructor(private repository: IQuestionRepository) {

    }

    generateQuiz(): Quiz {
        const allQuestions: Question[] = this.repository.loadAllQuestions();

        //apply logic based on allQuestions loaded; use maxNumberOfQuestionsPerQuiz
        return null;
    }
}

const quiz: QuizManager = new QuizManager(new QuestionRepository());

console.log(quiz.generateQuiz());