class Tv {
    private _brand: string;
    private _size: number;
    private _resolution: string;
    private _connections: string[];
    private _connectedTo: string = 'VGA';

    constructor(b: string, s: number, r: string, c: string[]) {
        this._brand = b;
        this._size = s;
        this._resolution = r;
        this._connections = c;
    }

    turnOn() {
        console.log(this._brand, this._size, this._resolution, this._connections);
    }

    set connectTo(connection: string) {
        if (this._connections.includes(connection)) {
            this._connectedTo = connection;
        } else {
            console.log('Sorry, connection unavailable!');
        }
    }

    get connectedTo() {
        return this._connectedTo;
    }
}

const tv1 = new Tv('Samsung', 38, '4K', ['HDMI', 'VGA']);

tv1.turnOn();
tv1.connectTo = 'HDMI';
console.log(tv1.connectedTo);
