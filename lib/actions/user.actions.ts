'use server'

import { cookies } from "next/headers";
import { createAdminClient, createSessionClient } from "../appwrite";
import { ID } from "node-appwrite";
import { parseStringify } from "../utils";
import { Products } from "plaid";
import { plaidClient } from "../plaid";

export const signIn = async ({email, password} : signInProps) => {
    try {
        const { account } = await createAdminClient();

        const response = await account.createEmailPasswordSession(email, password);
        cookies().set("appwrite-session", response.secret, {
            path: "/",
            httpOnly: true,
            sameSite: "strict",
            secure: true,
        });
        return parseStringify(response);

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
            name,
        );

        const session = await account.createEmailPasswordSession(email, password);

        cookies().set("appwrite-session", session.secret, {
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
      const user = await account.get(); 
      return parseStringify(user);

    } catch (error) {
      return null;
    }
}

export const logoutAccount = async () => {
    try {
        const { account } = await createSessionClient();

        cookies().delete('appwrite-session');

        await account.deleteSession('current');

            return true;
    } catch (error) {
        return null;
    }
}

export const createLinkToken = async (user: User) => {
    try {
        const tokenParam = {
            user: {
                client_user_id: user.$id
            },
            client_name: user.name,
            products: ['auth'] as Products[],
            language: 'en',
            country_codes: ['US'] as CountryCode[],
        }

        const response = await plaidClient.linkTokenCreate(tokenParam);
        
        return parseStringify({ linkToken: response.data.link_token })

    } catch (error) {
        console.log(error);
    }
}

export const exchangePublicToken = async ({ publicToken, user}: exchangePublicTokenProps) => {
    try {
        //Exchange public token for access token and item ID
        const response = await plaidClient.itemPublicTokenExchange({ public_token: publicToken });
        const a
    } catch (error) {
        console.log('An error occured while creating exchanging token:', error);
    }
}