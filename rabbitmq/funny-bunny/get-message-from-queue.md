# Get message from queue

## Start funny-bunny
```
cd funny-bunny
node index.js --host amqp://localhost:5672 --queue queueName
```

## Get first message
1. `next` fetches next message.
2. `headers` shows message headers.
3. `properties` shows message properties.
4. `print` shows message.