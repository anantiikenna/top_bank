'use server'

import { cookies } from "next/headers";
import { createAdminClient, createSessionClient } from "../appwrite";
import { redirect } from "next/navigation";
import { ID } from "node-appwrite";
import { parseStringify } from "../utils";

export const signIn = async () => {
    try {
    // Mutation / Database / Make fetch
    } catch (error) {
        console.error('Error', error);
    }
}

export const signUp = async (userData: SignUpParams) => {
    try {
        // const email = userData.email;
        // const password = userData.password;
        // const firstName = userData.firstName;
        // const lastName = userData.lastName;

        const {email, password, firstName, lastName} = userData;
        const name = `${firstName} ${lastName}`;
        const { account } = await createAdminClient();

        const newUserAccount = await account.create(
            ID.unique(), 
            email, 
            password, 
            name
        );


        const session = await account.createEmailPasswordSession(email, password);

        cookies().set("apperite-session", session.secret, {
            path: "/",
            httpOnly: true,
            sameSite: "strict",
            secure: true,
        });
        return parseStringify(newUserAccount);

    } catch (error) {
        console.error('Error', error);
    }
}

export async function getLoggedInUser() {
    try {
      const { account } = await createSessionClient();
      return await account.get();
    } catch (error) {
      return null;
    }
  }
