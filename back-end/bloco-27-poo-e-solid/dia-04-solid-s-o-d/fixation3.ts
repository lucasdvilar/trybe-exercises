interface Notificator {
    sendNotification(message: string): void;
}


class ConsoleNotification implements Notificator {
    constructor(private name: string) { }

    sendNotification(message: string): void {
        console.log(`Here we go again! - ${message} from ${this.name}`);
    }
}

class EmailNotification implements Notificator {
    private email: string;

    constructor(email: string) {
        this.email = email;
    }

    sendNotification(message: string): void {
        console.log(
            `Here should go the implementation \
      to send notification to the email: ${this.email} - ${message}`,
        );
    }
}

class PhoneNotification implements Notificator {
    private phone: number;

    constructor(phone: number) {
        this.phone = phone;
    }

    sendNotification(message: string): void {
        console.log(
            `Here should go the implementation \
      to send notification to the phone ${this.phone} - ${message}`,
        );
    }
}

class ReadingTracker {
    private readingGoal: number;
    private booksRead: number;
    constructor(readingGoal: number, public notificator: Notificator = new ConsoleNotification('console')) {
        this.readingGoal = readingGoal;
        this.booksRead = 0;
    }

    trackReadings(readsCount: number): void {
        this.booksRead += readsCount;
        if (this.booksRead >= this.readingGoal) {
            this.notificator.sendNotification(
                'Congratulations! You\'ve reached your reading goal!',
            );
            return;
        }
        this.notificator.sendNotification('There are still some books to go!');
    }
}

/* const email = new EmailNotification('t@t.com');
const tracker = new ReadingTracker(10, email);
tracker.notificator.sendNotification('teste'); */
