import * as Bull from 'bull';

export enum QueueNames {
  NOTIFICATION = "notification",
  EMAIL_NOTIFICATION = "email_notification",
}

export enum RepeatedJobsId {
  NOTIFICATION = "UUUUUUUUID12354",
}

export const NotificationQueue = new Bull.default(QueueNames.NOTIFICATION, {
  prefix: "development"
});

export const EmailNotificationQueue = new Bull.default(QueueNames.EMAIL_NOTIFICATION, {
  prefix: "development"
});
