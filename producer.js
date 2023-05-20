const {Kafka, Partitioners} = require("kafkajs");
const msg                   = process.argv[2];

async function run() {
    try {

        const kafka = new Kafka({
            clientId: "myapp",
            brokers: ["localhost:9092"]
        });

        const producer = kafka.producer({
            createPartitioner: Partitioners.LegacyPartitioner
        });

        console.log("Connecting ...");
        await producer.connect();
        console.log("Connected");

        const partition = msg[0] < "n" ? 0 : 1;

        const result = await producer.send({
            topic: "Users",
            messages: [
                {
                    value: msg,
                    partition: partition
                }
            ]
        });


        console.log("Sent Successfully!", result);

        await producer.disconnect();

    } catch (ex) {
        console.error(`issue happened ${ex}`);
    } finally {
        process.exit();
    }
}

run();