- run docker compose
- ```` 
  docker-compose build && docker-compose up -d
  ````
- everything is ready now
- you should create topic by running
- ````
  node createTopic.js
  ````
- then, produce some messages by running
- ````
  node producer.js
  ````
- you can receive the message at the consumers by running
- ```` 
  node consumer.js
  node anotherConsumer.js #another group
  ````
