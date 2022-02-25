export interface BaseObject {
    [key: string]: string,
}

export interface Destination extends BaseObject {
    id: string;
    name: string,
    address: string,
    population: string,
    hostels: string,
    income: string,
    area: string,
    key: string,
}

export class CardData implements Destination {
    public id: string;
    public name: string;
    public address: string;
    public population: string;
    public hostels: string;
    public income: string;
    public area: string;
    public key: string;
    [key: string]: string;
    constructor(name: string, address: string, population: number, hostels: number, income: number, area: number) {
        this.name = name;
        this.address = address;
        this.population = population.toString();
        this.hostels = hostels.toString();
        this.income = income.toString();
        this.area = area.toString();
        this.id = `${name}-${Date.now()}`;
        this.key = this.id;
    }
}

export class DestinationData implements Destination {
    public id: string = '';
    public name: string = '';
    public address: string = '';
    public population: string = '';
    public hostels: string = '';
    public income: string = '';
    public area: string = '';
    public key: string = '';
    [key: string]: string;
    constructor(props: { [key: string]: any }) {
        for (const key in props) {
            let value: string = props[key].toString();
            if (typeof value === typeof this[key]) this[key] = value;
        }
        this.id = `${props.name}-${Date.now()}`;
        this.key = this.id;
    }
}