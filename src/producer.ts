import { NotificationQueue, RepeatedJobsId } from './queues';



async function start() {
  await NotificationQueue.add({started: Date.now()}, {
    jobId: RepeatedJobsId.NOTIFICATION,
    repeat: {
      cron: "* * * * *",
    }
  });
}


start().then(console.log);
