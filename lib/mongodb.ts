import { connect, connection } from "mongoose";

const conn = {
    isConnected: false,
};

export async function connectMongoDB() {
    if (conn.isConnected) {
        return;
    }

    const db = await connect(process.env.MONGODB_URI as string);
    // console.log(db.connection.db.databaseName);
    conn.isConnected = db.connections[0].readyState === 1; // Fix: Use boolean value
}

connection.on("connected", () => console.log("Connected to MongoDB."));

connection.on("error", (err) => console.error("Mongodb Errro:", err.message));
