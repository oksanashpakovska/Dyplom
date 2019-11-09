import Hotel from "./model/hotel"

export class HotelService{
    private Hotels:Hotel[]=[
        new Hotel(
        "Crashpads Shoreditch the Club Row Collection",
        "United Kingdom",
        "London", 
        "Located in London in the Greater London region, with Brick Lane and Sky Garden nearby, Crashpads Shoreditch the Club Row Collection provides accommodation with free WiFi.",
        500,
        5,
        "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fforbestravelguide%2Ffiles%2F2019%2F02%2FFORBES-LondonMacauShowTheirStarPower-MandarinOrientalHydeParkLondon-CreditMandarinOrientalHydeParkLondon.jpg"
        ),
        new Hotel(
         "Hôtel Du Romancier",
         "France", 
         "Paris",
         "Located in Paris’ 8th district, the elegant Hôtel du Romancier is just 100 metres from the Champs-Elysées. Free WiFi access and a flat-screen TV with satellite channels are provided in each guest... ",
         400,
         4,
         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLR9D9xkIAz-s5G2wSTr6HOwNwaI4MHaTAfZur-5Aza9a89HRZ&s"),
        new Hotel(
        "Rome Cavalieri, A Waldorf Astoria Resort",
        "Italy",
        "Rome",
        "Offering the most spectacular view over Rome from its elevated position on Monte Mario, the Rome Cavalieri, A Waldorf Astoria Resort will exceed your expectations in so many ways. ",
        300,
        3,
        "https://www.touropia.com/gfx/b/2016/06/Radisson_Blu_Hotel_Berlin.jpg"),
        new Hotel(
        "Radisson Blu Hotel",
        "Germany",
        "Berlin",
        "The Radisson Blu Hotel In Berlin, Germany may look like just another luxury hotel, however once you enter it, you will be blown away by the enormous 82-feet high aquarium in the heart of the hotel’s lobby atrium.",
        20,
        2,
        "https://a1.cdn-hotels.com/cos/production45/d1909/4f517e50-3ac4-11e5-926b-d89d672c79ac.jpg"),
        new Hotel(
            "Pan Pacific",
            "China",
            "Beijing",
            "Set in the popular Xidan Area, Pan Pacific Beijing is about a 25-minute walk from Forbidden City and Tiananmen Square. It takes 10 minutes to walk to Xinhua Gate. Featuring a 24-hour front desk, this property also provides guests with a terrace. Free WiFi is provided throughout the entire property.",
            200,
            2,
            "https://millennialmagazine.com/wp-content/uploads/2016/12/hotel-art-singapore-c.jpg"),
        new Hotel(
            "The Island House ",
            "Commonwealth of the Bahamas",
            "Nassau",
            "Offering a year-round outdoor pool and spa centre, The Island House is located a 6-minute drive from the closest beach, Nirvana. The hotel has a terrace, and guests can enjoy a meal at the restaurant.",
            100,
            1,
            "https://r-cf.bstatic.com/images/hotel/max1024x768/546/54650110.jpg")
    ];
    
    getAllHotels(){
        return this.Hotels.slice();
    }
}