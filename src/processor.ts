import { NotificationQueue, EmailNotificationQueue } from './queues';



async function start() {
    NotificationQueue.process(async(job) => {
        let jobs = 100;

        while(jobs > 0) {
            console.log("Enque")
            EmailNotificationQueue.add({
                jobNumber: jobs
            })
            jobs--;
        }
    
    });

    EmailNotificationQueue.process(async (job) => {
        console.log("processing job", job.data);
    });
}

start();