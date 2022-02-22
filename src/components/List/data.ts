// interface for card data
export interface Destination {
    id:string;
    name: string,
    address: string,
    population: number,
    hostels: number,
    averageIncome: number,
    area: number,
}

//a class for generating card data object
class CardData implements Destination {
    public id:string;
    public name: string;
    public address: string;
    public population: number;
    public hostels: number;
    public averageIncome: number;
    public area: number;
    constructor(name: string, address: string, population: number, hostels: number, averageIncome: number, area: number) {
        this.name = name;
        this.address = address;
        this.population = population;
        this.hostels = hostels;
        this.averageIncome = averageIncome;
        this.area = area;
        this.id = `${name}-${Date.now()}`;
    }
}

// we export data in an array
export default [
    new CardData('Copenhagen', 'Rådhuspladsen 1, 1550 København, Denmark', 3.4, 5000, 70000, 88.25),
    new CardData('Tehran', 'Tehran, Azadi Square, Iran', 8.6, 400, 30000, 730),
    new CardData('Paris', 'Pl. de l\'Hôtel de Ville, 75004 Paris', 2.1, 7500, 50000, 105.4),
    new CardData('Copenhagen2', 'Rådhuspladsen 1, 1550 København, Denmark', 3.4, 5000, 70000, 88.25),
    new CardData('Tehran2', 'Tehran, Azadi Square, Iran', 8.6, 400, 30000, 730),
    new CardData('Paris2', 'Pl. de l\'Hôtel de Ville, 75004 Paris', 2.1, 7500, 50000, 105.4),
]
