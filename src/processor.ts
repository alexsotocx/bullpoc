import { NotificationQueue, EmailNotificationQueue } from './queues';

async function start() {
  NotificationQueue.process(async (_) => {
    let jobs = 100;

    while (jobs > 0) {
      console.log("Enqueuing job", jobs);
      EmailNotificationQueue.add({
        jobNumber: jobs
      }, {
        removeOnComplete: true,
      })
      jobs--;
    }
  });

  EmailNotificationQueue.process(async (job) => {
    console.log("processing job", job.data);
  });
}

start();
