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
      if (res.status !== 200) {
        throw new Error("Internal server error !!");
      }
      return res.data.results[0];
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
