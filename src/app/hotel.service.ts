import Hotel from "./model/hotel"

export class HotelService{
    private Hotels:Hotel[]=[
        new Hotel(
            "Bahamas, Nassau, The Island House",
            "Bahamas",
            "Nassau",
            "Offering a year-round outdoor pool and spa centre, The Island House is located a 6-minute drive from the closest beach, Nirvana. The hotel has a terrace, and guests can enjoy a meal at the restaurant.",
            100,
            1,
            "https://r-cf.bstatic.com/images/hotel/max1024x768/546/54650110.jpg"),
        new Hotel(
        "United Kingdom, London, Crashpads Shoreditch the Club Row Collection",
        "United Kingdom",
        "London", 
        "Located in London in the Greater London region, with Brick Lane and Sky Garden nearby, Crashpads Shoreditch the Club Row Collection provides accommodation with free WiFi.",
        100,
        5,
        "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fforbestravelguide%2Ffiles%2F2019%2F02%2FFORBES-LondonMacauShowTheirStarPower-MandarinOrientalHydeParkLondon-CreditMandarinOrientalHydeParkLondon.jpg"
        ),
        new Hotel(
         "France, Paris, Hôtel Du Romancier",
         "France", 
         "Paris",
         "Located in Paris’ 8th district, the elegant Hôtel du Romancier is just 100 metres from the Champs-Elysées. Free WiFi access and a flat-screen TV with satellite channels are provided in each guest... ",
         100,
         4,
         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLR9D9xkIAz-s5G2wSTr6HOwNwaI4MHaTAfZur-5Aza9a89HRZ&s"),
        new Hotel(
        "Italy, Rome,  Cavalieri",
        "Italy",
        "Rome",
        "Offering the most spectacular view over Rome from its elevated position on Monte Mario, the Rome Cavalieri, A Waldorf Astoria Resort will exceed your expectations in so many ways. ",
        50,
        3,
            "https://www.italy-spb.ru/gallery/1950/rome-cavalieri-32-1950-12547-2-577.jpg"), 
        new Hotel(
        "Deutschland, Berlin, Radisson Blu Hotel",
        "Deutschland",
        "Berlin",
        "The Radisson Blu Hotel In Berlin, Deutschland may look like just another luxury hotel, however once you enter it, you will be blown away by the enormous 82-feet high aquarium in the heart of the hotel’s lobby atrium.",
        50,
        2,
        "https://www.touropia.com/gfx/b/2016/06/Radisson_Blu_Hotel_Berlin.jpg"),
        new Hotel(
            "China, Beijing,  Pan Pacific",
            "China",
            "Beijing",
            "Set in the popular Xidan Area, Pan Pacific Beijing is about a 25-minute walk from Forbidden City and Tiananmen Square. It takes 10 minutes to walk to Xinhua Gate. Featuring a 24-hour front desk, this property also provides guests with a terrace. Free WiFi is provided throughout the entire property.",
            500,
            2,
            "https://millennialmagazine.com/wp-content/uploads/2016/12/hotel-art-singapore-c.jpg")
        
    ];
    
    getAllHotels(){
        return this.Hotels.slice();
    }
    getFourHotels(){
        return this.Hotels.slice(1);
    }
    SearchHotels(request:string, isHome:boolean){
        let tmp:Hotel[]=[];
        if(isHome){
            for (let i = 0; i < this.Hotels.length; i++) {
                // console.log(request);
                // console.log(this.Hotels[i].name);
                // console.log(this.Hotels[i].name.search(request));

                if (this.Hotels[i].name.search(request) >= 0 && tmp.length<5) {
                    tmp.push(this.Hotels[i]);
                }
            }
        }
        else{
            for (let i = 0; i < this.Hotels.length; i++) {
                // console.log(request);
                // console.log(this.Hotels[i].name);
                // console.log(this.Hotels[i].name.search(request));
                
                if (this.Hotels[i].name.search(request)>=0){
                    tmp.push(this.Hotels[i]);
                }
            }
        }
        console.log(tmp);
        return tmp.slice();
    }
}