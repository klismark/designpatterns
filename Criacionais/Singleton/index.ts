import Connection from "./Connection";

const con1 = Connection.getInstance();
const con2 = Connection.getInstance();

con1.setValue("SELECT *");
con2.executeQuery();

if (con1 === con2) {
    console.log('O Padrão Singleton funcionou.');
} else {
    console.log('O Padrão Singleton está errado.');
}