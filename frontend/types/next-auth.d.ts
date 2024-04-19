import 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      meta: any;
      email: string;
      token: string;
    };
  }
}
