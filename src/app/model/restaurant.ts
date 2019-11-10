export default class Restaurant {
    name: string;
    country: string;
    city: string;
    description: string;
    rating: number;
    URL: string;
    constructor(name: string, country: string, city: string, description: string, rating: number, url: string) {
        this.name = name;
        this.country = country;
        this.city = city;
        this.description = description;
        this.rating = rating;
        this.URL = url;
    }
}