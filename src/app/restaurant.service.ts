import Restaurant from "./model/restaurant";

export class RestaurantService{
    private Restaurants:Restaurant[]=[
        new Restaurant(
            "Bahamas, Nassau, Sandyport Beach Resort",
            "Bahamas",
            "Nassau",
            "A Casual Shabby Chic dining restaurant overlooking the pristine Sandyport beach with views over the ocean. Spectacular beach bar and outdoor dining views with a Mediterranean French fusion menu with a lot of local Bahamian favorites.",
            5,
            "https://2486634c787a971a3554-d983ce57e4c84901daded0f67d5a004f.ssl.cf1.rackcdn.com/sandyport-beach-resort/media/cache/SBR-Dining-BlueSail-2-594066e64aa10-587x416.jpg"
        ), new Restaurant(
            "France, Paris, Le Train Bleu Restaurant",
            "France",
            "Paris",
            "LUXURY AND TRADITION - The cuisine of the Train Bleu is in the image of its interior: luxurious and refined, with beautiful products and unrivalled know-how.",
            5,
            "https://www.francetoday.com/wp-content/uploads/2019/03/C01L9736.jpg"
        ), new Restaurant(
            "Deutschland, Berlin, Marjellchen",
            "Deutschland",
            "Berlin",
            "If you are looking for one of the fine dining restaurants in Berlin, you should head to Marjellchen.Considered to be one of the best restaurants in Berlin, Marjellchen offers traditional German food.",
            5,
            "https://img.traveltriangle.com/blog/wp-content/uploads/2018/08/46.jpg"
        ), new Restaurant(
            "China, Beijing, Lan Club and Bei",
            "China",
            "Beijing",
            "Beijing food is accompanied by centuries of history and culinary tradition, with influences from all over China. Considered to be the choice of millions, Chinese cuisine is probably one of the most popular cuisine in the world. ",
            5,
            "https://p-airnz.com/cms/assets/Common-Assets/Destination-Images/china-beijing-cuisine-lan-club-grand-table-nc-rf-noexp-allsites-1200x800__ScaleMaxWidthWzUyMF0.jpg"
        )

    ];
    getAllRestaurant(){
        return this.Restaurants.slice();
    }
    SearchRestaurant(request:string){
        let tmp:Restaurant[]=[];
        for (let i = 0; i < this.Restaurants.length; i++) {
            if(this.Restaurants[i].name.search(request)>=0){
                tmp.push(this.Restaurants[i]);
            }
            
        }
        return tmp;
    }
}
