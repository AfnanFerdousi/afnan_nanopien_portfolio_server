import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";
import dotenv from "dotenv";

dotenv.config();

let server: Server;

process.on("uncaughtException", (err) => {
    console.log("Uncaught Exception ", err);
    process.exit(1);
});

async function main() {
    try {
        await mongoose.connect(process.env.DB as string); 
        console.log(`DB Connected`);

        server = app.listen(5000, () => {
            console.log(`Application  listening on port 5000`);
        });
    } catch (error) {
        console.log("Failed to connect DB", error);
    }
    process.on("unhandledRejection", (error) => {
        if (server) {
            server.close(() => {
                console.log(error);
                process.exit(1);
            });
        } else {
            process.exit(1);
        }
    });
}

main();
