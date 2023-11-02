import express from 'express';
import { UserController } from '../controllers/UserController';
import {AuthController} from "../controllers/AuthController";
import {EvaluationController} from "../controllers/EvaluationController"

export const router = express.Router();

const userController = new UserController();
const authController = new AuthController();
const evaluationController = new EvaluationController();
// routes in general
router.post('/login', authController.login);
router.post('/users', userController.create);
router.post('/students', userController.createStudent);
router.post('/teachers', userController.createTeacher);
router.get('/teachers', userController.getTeachers);
router.post('/evaluations', evaluationController.create);
router.get('/evaluations/:teacherId', evaluationController.getByTeacher);
router.get('/notifications/:teacherId', evaluationController.getNotifications);
