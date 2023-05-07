import { createParamDecorator, ExecutionContext } from '@nestjs/common';
// import { GqlExecutionContext } from '@nestjs/graphql';

export const GetCurrentUserId = createParamDecorator(
  (_data: string | undefined, context: ExecutionContext) => {
    // const ctx = GqlExecutionContext.create(context);
    // const request = ctx.getContext().req;
    return 'cbdf2603-d52b-4aa9-9c36-58c811764df1';
    // return request.user.id;
  },
);
