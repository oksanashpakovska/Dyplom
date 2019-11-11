import Shop from "./model/shop";

export class ShopService{
    private Shops: Shop[]=[
        new Shop(
            "Marina Village",
            "Bahamas",
            "Nassau",
            "Marina Village - This whimsical outdoor marketplace is decorated with fun, colorful paint and tiles. Lush plants and the view of the Atlantis Marina give you a lively, but comfortable atmosphere. ",
            5,
            "http://www.atlantis-bahamas-vacation.com/images/marinav_sm.jpg"
        ),
        new Shop(
            "Mancini",
            "Italy",
            "Roma",
            "Where can I find a good leather store in Rome?” has to be one of the most frequently-asked questions I get. Although I’ve dragged my (leather-clad) heels on writing a full list — it’s pending, I promise — here’s one to add: Mancini.",
            5,
            "https://revealedrome.com/wp-content/uploads/2016/01/mancini-1024x680.png"
        ),
        new Shop(
            "Le BHV Marais",
            "France",
            "Paris",
            "Unless you’re after a space suit or a pair of parabolic skis, you’ll find pretty much everything worth looking for at LE BHV MARAIS: fashion, beds, sneakers, door knobs, pressure cookers, vintage dresses, Campbell’s soup, oil paint, suitcases, cushions.",
            5,
            "https://www.relaisdulouvre.com/images/actualites/header-rivoli-ok.jpg"
        ),
        new Shop(
            "Kingsman x Mr Porter",
            "United Kingdom",
            "London",
            "Kingsman, Mathew Vaughn's Secret Agent frilm franchise, has opened a pop-up shop with Mr Porter at 4 St James Street, so that fans can step into (& buy) the films' world of curated British luxury.",
            5,
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcE--B1UAnQepJ8eIX9jxGyZyr84lyyLu5MiObhp6sztaD0xVt&s"
        )
        
        
    ]
    getAllShops(){
        return this.Shops.slice();
    }
    SearchShops(request:string){
        let tmp:Shop[]=[];
        for(let i=0; i<this.Shops.length; i++){
            if (this.Shops[i].name.search(request)>=0){
                tmp.push(this.Shops[i]);
            }
        }
        return tmp;
    }
    
}