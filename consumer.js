const {Kafka} = require("kafkajs");

async function run() {
    try {

        const kafka = new Kafka({
            clientId: "myapp",
            brokers: ["localhost:9092"]
        });

        const consumer = kafka.consumer({
            groupId: "testgroup"
        });

        console.log("Connecting ...");
        await consumer.connect();
        console.log("Connected");

        await consumer.subscribe({
            topic: "Users",
            fromBeginning: true
        });

        await consumer.run({
            eachMessage : async result => {
                console.log(`Received Message ${result.message.value} from partition ${result.partition}`);
            }
        });


    } catch (ex) {
        console.error(`issue happened ${ex}`);
    }
}

run();