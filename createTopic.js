const {Kafka} = require("kafkajs");

async function run() {
    try {

        const kafka = new Kafka({
            clientId : "myapp",
            brokers: ["localhost:9092"]
        });

        const admin = kafka.admin();

        console.log("Connecting ...");
        await admin.connect();
        console.log("Connected");

        //A-M, N-Z //two Partitions
        await admin.createTopics({
            topics : [{
                topic : "Users",
                numPartitions: 2,
            }]
        });

        console.log("Created Successfully!");

        await admin.disconnect();

    } catch (ex) {
        console.error(`issue happened ${ex}`);
    }
    finally {
        process.exit();
    }
}

run();