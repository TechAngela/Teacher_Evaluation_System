import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

interface UserData {
  email: string;
  password: string;
  role: 'ADMIN' | 'STUDENT' | 'TEACHER';
}

interface StudentData extends UserData {
  studentId: string;
}

interface TeacherData extends UserData {
  staffId: string;
}

export class UserService {
    async create(userData: UserData) {
        const prisma = new PrismaClient();
        userData.password = bcrypt.hashSync(userData.password, 10);
        const user = await prisma.user.create({ data: userData });
        console.log('User created in database', user);
        return user;
    }

    async createStudent(studentData: StudentData) {
        const prisma = new PrismaClient();
        studentData.password = bcrypt.hashSync(studentData.password, 10);
        const student = await prisma.student.create({ 
            data: { 
                user: {
                    create: {
                        email: studentData.email,
                        password: studentData.password,
                        role: studentData.role
                    }
                },
                studentId: studentData.studentId
            } 
        });
        console.log('Student created in database', student);
        return student;
    }

    async createTeacher(teacherData: TeacherData) {
        const prisma = new PrismaClient();
        teacherData.password = bcrypt.hashSync(teacherData.password, 10);
        const teacher = await prisma.teacher.create({ 
            data: { 
                user: {
                    create: {
                        email: teacherData.email,
                        password: teacherData.password,
                        role: teacherData.role
                    }
                },
                staffId: teacherData.staffId
            } 
        });
        console.log('Teacher created in database', teacher);
        return teacher;
    }

    async getTeachers() {
        const prisma = new PrismaClient();
        const teachers = await prisma.teacher.findMany();
        console.log('Retrieved teachers from database', teachers);
        return teachers;
    }
}
