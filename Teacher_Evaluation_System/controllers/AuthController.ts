import { Request, Response } from 'express';
import { AuthService } from '../services/AuthService';

export class AuthController {
    async login(request: Request, response: Response) {
        const authService = new AuthService();
        const token = await authService.login(request.body);
        return response.json({ token });
    }
}

