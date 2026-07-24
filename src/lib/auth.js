import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { jwt } from "better-auth/plugins";

const client = new MongoClient(process.env.MONGODB_URI);

await client.connect();
const db = client.db("tutorsync");

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL,   
  secret: process.env.BETTER_AUTH_SECRET, 
  database: mongodbAdapter(db),

  emailAndPassword: {
    enabled: true,
  },

  

  session: {
      cookieCache:{
      enabled: true,
      strategy: "jwt",
      maxAge: 3*30* 24* 60*60, // 3 years
    }
  },

    plugins:[
      jwt()
    ]
});