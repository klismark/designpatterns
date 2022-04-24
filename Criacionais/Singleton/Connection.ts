export default class Connection {
    private static instance:Connection;
    private static value:string;

    private constructor(){}

    public static getInstance(): Connection {
        if (!Connection.instance) {
            Connection.instance = new Connection();
        }
        return Connection.instance;
    }

    public setValue(value: string) {
        Connection.value = value;
    }

    public executeQuery() {
        console.log(`Executou uma consulta com o valor: ${Connection.value}`);
    }
}