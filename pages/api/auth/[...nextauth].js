import NextAuth from "next-auth";
import { prismaDB } from "@/util/prisma";
import Credentials from "next-auth/providers/credentials";
import bcypt from 'bcrypt'


export const authOptions = {
  providers: [
    Credentials({
      //1. 로그인페이지 폼 자동생성해주는 코드 
      name: "credentials",
        credentials: {
          email: { label: "email", type: "text" },
          password: { label: "password", type: "password" },
      },

      async authorize(credentials) {
        let db = prismaDB;

        console.log(credentials.email);

        let user = await db.user.findUnique({
          where : {
            email : credentials.email
          }
        });

        if (!user) {
          return null
        }

        console.log(user)
        
        const pwcheck = await bcypt.compare(credentials.password, user.password);
        
        console.log(pwcheck)
        
        if (!pwcheck) {
          return null
        }
        
        return user
      }
    })
  ],

  pages: {
    login: '/login',
    signIn: '/auth/signin',
  },


  //jwt + jwt 만료일설정
  session: {
    strategy: "jwt",
  },

  callbacks: {
    //jwt 만들기
    jwt: async ({ token, user }) => {
      if (user) {
        token.user = {};
        token.user.id = user.id
      }
      return token;
    },
    //유저 세션 조회
    session: async ({ session, token }) => {
      session.user = token.user;  
      return session;
    },
  },

  secret: process.env.JWTSECRET
};
export default NextAuth(authOptions); 