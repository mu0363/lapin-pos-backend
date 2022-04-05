import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import * as admin from 'firebase-admin';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthenticateGuard implements CanActivate {
  constructor(private readonly userService: UserService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext().req;
    const token = request.headers['authorization'].split(' ')[1];

    try {
      const decodedToken = await admin.auth().verifyIdToken(token);
      const firebaseUser = {
        uid: decodedToken.uid,
        email: decodedToken.email,
        username: decodedToken.name,
        avatarUrl: decodedToken.picture,
        isAdmin: false,
      };

      const user = await this.userService.findOne(decodedToken.uid);

      if (!user) {
        const newUser = await this.userService.initUser(firebaseUser);
        request['user'] = newUser;
      } else {
        request['user'] = user;
      }

      return true;
    } catch (error) {
      throw new ForbiddenException('Access denied');
    }
  }
}
