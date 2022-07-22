function progressNotification(
    message: string,
    notificationType: string,
): void {
    console.log(`${notificationType}: ${message}`);
};

progressNotification('Message', 'Email');