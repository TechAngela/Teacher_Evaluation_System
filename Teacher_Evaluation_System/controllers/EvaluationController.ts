import { Request, Response } from 'express';
import { EvaluationService } from '../services/EvaluationService';

export class EvaluationController {
    async create(request: Request, response: Response) {
        const evaluationService = new EvaluationService();
        const evaluation = await evaluationService.create(request.body);
        return response.json(evaluation);
    }

    async getByTeacher(request: Request, response: Response) { // Add this method
        const evaluationService = new EvaluationService();
        const evaluations = await evaluationService.getByTeacher(request.params.teacherId);
        return response.json(evaluations);
    }

    async getNotifications(request: Request, response: Response) { // Add this method
     const evaluationService = new EvaluationService();
     const notifications = await evaluationService.getNotifications(request.params.teacherId);
     return response.json(notifications);
 }
}
