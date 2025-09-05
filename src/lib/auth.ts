import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db"; // your drizzle instance
<<<<<<< HEAD
import * as schema from "@/db/schema"; // your drizzle schema
=======
>>>>>>> 3208fd8f1c80888f5367086ac8216c448d5348a6
 
export const auth = betterAuth({
    emailAndPassword: ({
        enabled: true,
    }),
    database: drizzleAdapter(db, {
        provider: "pg", 
<<<<<<< HEAD
        schema: {
            ...schema,
        },
=======
>>>>>>> 3208fd8f1c80888f5367086ac8216c448d5348a6
    }),
}); 