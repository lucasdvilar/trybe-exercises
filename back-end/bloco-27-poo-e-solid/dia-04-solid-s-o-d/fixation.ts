type Book = {
	book: string;
	author: string;
	genre: string;
}

class ReadingTracker {
	private readingGoal: number;
	private booksRead: number;
	constructor(readingGoal: number) {
		this.readingGoal = readingGoal;
		this.booksRead = 0;
	}

	trackReadings(readsCount: number) {
		this.booksRead += readsCount;
		if (this.booksRead >= this.readingGoal) {
			this.progressNotification(
				'Congratulations! You\'ve reached your reading goal!',
			);
			return;
		}
		this.progressNotification(
			'There are still some books to go!',
		);
	}

	progressNotification(message: string): void {
		console.log(message);
	}
}
// deveria estar num arquivo diferente
class Wishlist {
	private wishlist: Book[];

	constructor() {
		this.wishlist = [];
	}

	addToWishlist(book: Book): void {
		this.wishlist.push(book);
	}

	showWishlist(): void {
		console.log(this.wishlist);
	}
}

const readTracker = new ReadingTracker(20);
const wishList = new Wishlist;
wishList.addToWishlist({ book: 'The Road', author: 'Cormac McCarthy', genre: 'Dystopia' });
wishList.showWishlist();
readTracker.trackReadings(12);
readTracker.trackReadings(9);