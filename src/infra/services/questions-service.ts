import { axios } from "app/core";
import { Question } from "domain/models";

interface GetOneQuestionResponse {
  response_code: number;
  results: Question[];
}

export class QuestionsService {
  static async getOneQuestion() {
    try {
      const res = await axios.get<GetOneQuestionResponse>(
        "/api.php?amount=1&difficulty=easy"
      );

      return res.data.results;
    } catch (error) {
      console.error(error);
    }
  }
}
