import mysql from 'serverless-mysql';

export const db = mysql({
    config: {
        host: "localhost",
        database: "test",
        port: 3306,
        user: "root",
        password: "",
        //socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
    },
});

export default async function excuteQuery({ query, values }) {
    try {
        const results = await db.query(query, values);
        await db.end();
        return results;
    } catch (error) {
        return { error };
    }
}
