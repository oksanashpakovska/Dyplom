export default class Hotel{
    name:string;
    country:string;
    city:string;
    description:string;
    price:number;
    rating:number;
    URL:string;
    bisy:Date[];
    constructor(name: string, country: string, city: string, description: string, price: number, rating: number,url:string){
        this.name = name;
        this.country = country;
        this.city = city;
        this.description = description;
        this.price = price;
        this.rating = rating;
        this.URL = url;
    }
}