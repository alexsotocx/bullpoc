import { NotificationQueue, repeatOptions } from './queues';

async function start() {
  await NotificationQueue.add({ started: Date.now() }, repeatOptions);
  await NotificationQueue.close();
}

start();
