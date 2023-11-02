import { PrismaClient } from '@prisma/client';

interface EvaluationData {
  studentId: string;
  teacherId: string;
  criteriaOne: number;
  criteriaTwo: number;
  criteriaThree: number;
  criteriaFour: number;
  criteriaFive: number;
}

export class EvaluationService {
    async create(evaluationData: EvaluationData) {
        const prisma = new PrismaClient();
        const evaluation = await prisma.evaluation.create({ data: evaluationData });
        console.log('Evaluation created in database', evaluation);
        return evaluation;
    }

    async getByTeacher(teacherId: string) {
        const prisma = new PrismaClient();
        const evaluations = await prisma.evaluation.findMany({
            where: {
                teacherId: teacherId
            }
        });
        console.log('Retrieved evaluations from database', evaluations);
        return evaluations;
    }

    async getNotifications(teacherId: string) {
        const prisma = new PrismaClient();
        const notifications = await prisma.notification.findMany({
            where: {
                teacherId: teacherId,
                read: false
            }
        });
        console.log('Retrieved notifications from database', notifications);
        return notifications;
    }
}
