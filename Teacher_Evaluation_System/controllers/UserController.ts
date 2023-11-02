import { Request, Response } from 'express';
import { UserService } from '../services/UserService';

export class UserController {
    async create(request: Request, response: Response) {
        const userService = new UserService();
        const user = await userService.create(request.body);
        return response.json(user);
    }

    async createStudent(request: Request, response: Response) {
        const userService = new UserService();
        const student = await userService.createStudent(request.body);
        return response.json(student);
    }

    async createTeacher(request: Request, response: Response) {
        const userService = new UserService();
        const teacher = await userService.createTeacher(request.body);
        return response.json(teacher);
    }

    async getTeachers(request: Request, response: Response) {
        const userService = new UserService();
        const teachers = await userService.getTeachers();
        return response.json(teachers);
    }
}
