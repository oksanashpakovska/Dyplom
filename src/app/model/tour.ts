export default class Tour{
    id:number;
    country:string;
    city:string;
    description:string;
    rating:number;
    price:number;
    days:number;
    URL:string;
    reviews:string[];
    images:string[];
    constructor(id:number,country: string, city: string, description: string, rating: number, price: number, days: number, URL: string, reviews: string[], images: string[]){
        this.id = id;
        this.country = country;
        this.city =city;
        this.description = description;
        this.rating = rating;
        this.price = price;
        this.days = days;
        this.URL = URL;
        this.reviews = reviews;
        this.images = images;
    }
}