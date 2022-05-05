import "reflect-metadata";
import app from "./app";
import {AppDataSource} from "./db";

async function main(){
    try {
        await AppDataSource.initialize();
        console.log('Database connected')

        const PORT = process.env.PORT || 5000

        app.listen( PORT, () => console.log('Server is listening on port', ));

    } catch (error) {
        console.log(error)
    }
}

main()

