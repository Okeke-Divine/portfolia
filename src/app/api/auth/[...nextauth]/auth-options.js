import prisma from "@/app/db";
import { compare } from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            name: "Login",
            credentials: {
                email: { type: "email", label: "Email", placeholder: "Email" },
                password: { type: "password", label: "password", placeholder: "password" }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    return null;
                }

                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email,
                    }, select: {
                        email: true, password: true, id: true, fullname: true
                    }
                });

                if (!user) {
                    return null;
                }

                const isPasswordValid = await compare(
                    credentials.password, user.password
                );

                if (!isPasswordValid) {
                    return null;
                }

                return {
                    id: user.id,
                    email: user.email,
                    name: user.fullname,
                }
            }
        })
    ],
    callbacks: {
        async redirect({ url, baseUrl }) {
            if (url !== baseUrl) {
                return url;
            }
            return new URL("/dashboard", baseUrl).toString();
        },
        jwt: ({ token, user }) => {
            if (user) {
              const u = user;
              return {
                ...token,
                id: u.id,
              };
            }
            return token;
          },
          session: ({ session, token }) => {
            return {
              ...session,
              user: {
                ...session.user,
                id: token.id,
              },
            };
          },
    }
}