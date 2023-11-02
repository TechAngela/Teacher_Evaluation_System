import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

interface Credentials {
  email: string;
  password: string;
}

export class AuthService {
    async login(credentials: Credentials) {
        const prisma = new PrismaClient();
        const user = await prisma.user.findUnique({ where: { email: credentials.email } });

        if (!user || !bcrypt.compareSync(credentials.password, user.password)) {
            throw new Error('Invalid email or password');
        }

        const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY as string);
        console.log('User logged in', user);
        return token;
    }
}
