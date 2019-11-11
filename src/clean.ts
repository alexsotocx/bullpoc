import { NotificationQueue, repeatOptions } from './queues';

async function clean() {
  await NotificationQueue.removeRepeatable({
    cron: repeatOptions.repeat.cron,
    jobId: repeatOptions.jobId,
  });
  await NotificationQueue.close();
}

clean();
