import Tour from "./model/tour"

export class TourService{
    private Tours:Tour[] = [
        new Tour(
            "United Kingdom",
            "London",
            "1. The Big Ben.The world - known clock.Everyday about 500 tourists come to London to see the Big Ben.Built in 1858, it was named after an architect whose name was Ben(Benjamin).The interesting fact is that you are not allowed to get insi            2. Piccadilly Circus.The place is far from what is called “a circus”.It is a well - known meeting point of the city.It has become so popular, that is now considered to be a place to visit for all the tourists.de the Big Ben if you aren’t an Englishman.No tourists allowed.3. London Eye.It is one of the biggest observation wheels in the world.Its height is 135 meters.It has 32 cabins which symbolize 32 districts of London.It takes 30 minutes to make a full circle.But it is the view you will never forget.The cost is about £20.",
            4,
            200,
            5,
            "https://www.theoriginaltour.com/sites/default/files/inline-images/big-ben-bong-bong.jpg",
            ["wonderful vacation full of impressions", 
             "Birthday in London, what could be more beautiful! DREAMS COME TRUE!!!",
             "Probably one of the most impressive cities in the world."],
            ["",
             "",
             ""]
        ),
        new Tour(
            "France",
            "Paris",
            "1. The Eiffel Tower is a wrought iron grate on the Champ de Mars in Paris, France. It is named after engineer Gustav Eiffel, whose company designed and built the tower.2. The Louvre(fr.Musée du Louvre), which has everything you need to get acquainted with the museum.Nalazi se on the gum obese Seine at Paris, at the first Arondisman.In the museum I will set out soon 35, 000 US dollars from 19 months.3. Paris Disneyland - the most popular entertainment complex in Europe, which is of exceptional interest for families with children.",
            4,
            200,
            5,
            "https://paris10.ru/sites/paris10.ru/files/styles/large_640_425_/public/field/image/eiffel-tower-3349075_1920.jpg?itok=r60aJzKv",
            ["wonderful vacation full of impressions",
            "Birthday in London, what could be more beautiful! DREAMS COME TRUE!!!",
            "Probably one of the most impressive cities in the world."],
            ["images1", "images2", "images3"]
        ),
        new Tour(
            "Italy",
            "Rome",
            "1.The Colosseum .Iam gazing up at some of the most famous works of one of the world’s finest masters, commissioned in 1599 and hanging where they were painted to be seen.2.Arch of ConstantineAt nearly 70 feet tall, this largest - surviving triumphal arch is dedicated to Roman Emperor Constantine’s victory over Maxentius in 312 CE.3.Piazza Navona(pronounced[ˈpjattsa naˈvoːna]) is a public space / plaza in Rome, Italy.It is built on the site of the Stadium of Domitian, built in the 1st century AD, and follows the form of the open space of the stadium.",
             4,
            200,
            5,
            "https://www.fodors.com/wp-content/uploads/2018/10/HERO_UltimateRome_Hero_shutterstock789412159.jpg",
            ["wonderful vacation full of impressions",
             "Birthday in London, what could be more beautiful! DREAMS COME TRUE!!!",
             "Probably one of the most impressive cities in the world."],
            ["images1", "images2", "images3"]
        ),
        new Tour(
            "Germany",
            "Berlin",
            "1.Charlottenburg Palace Initially constructed as a summer palace, today it is the most splendid palace in Berlin 2. Alexanderplatz & Nikolaiviertel Alexanderplatz  is a large public square and transport hub in the central Mitte district of Berlin. 3.The Brandenburg Gate  is an 18th - century neoclassical monument in Berlin.",
            4,
            1200,
            5,
            "https://www.fodors.com/wp-content/uploads/2018/10/HERO_UltimateRome_Hero_shutterstock789412159.jpg",
            ["wonderful vacation full of impressions",
            "Birthday in London, what could be more beautiful! DREAMS COME TRUE!!!",
             "Probably one of the most impressive cities in the world."],
            ["images1", "images2", "images3"]
        ),
        new Tour(
            "China",
            "Beijing",
            "1.The Great Wall of China  is the collective name of a series of fortification systems generally built across the historical northern borders of China to protect and consolidate territories of Chinese states and empires against various nomadic groups of the steppe and their polities. 2.The Forbidden City  is a palace complex in central Beijing, China.It houses the Palace Museum, and was the former Chinese imperial palace from the Ming dynasty to the end of the Qing dynasty(the years 1420 to 1912) 3.The Temple of Heaven is an imperial complex of religious buildings situated in the southeastern part of central Beijing.The complex was visited by the Emperors of the Ming and Qing dynasties for annual ceremonies of prayer to Heaven for good harvest.",
            4,
            1500,
            5,
            "https://data.travelchinaguide.com/package/image/great-wall10_0905193.jpg",
            ["wonderful vacation full of impressions",
                "Birthday in London, what could be more beautiful! DREAMS COME TRUE!!!",
                "Probably one of the most impressive cities in the world."],
            ["images1", "images2", "images3"]
        ),
        new Tour(
            "Commonwealth of the Bahamas",
            "Nassau",
            "1.Fort Fincastle is a fort located in the city of Nassau on the island of New Providence in The Bahamas. It was built to provide protection to Nassau 2.View towards Nassau from The Cloisters on Paradise Island.The Cloisters is the remains of the cloisters of a 14th - century French monastery which was transported to the island in the 1920s by William Randolph Hearst, and finally erected in the 1960s by Huntington Hartford 3.Paradise Island is an island in the Bahamas formerly known as Hog Island, is located just off the shore of the city of Nassau.It is best known for the sprawling resort Atlantis with its extensive water park rides, pools, beach, restaurants, walk -in aquarium and casinos.",
            4,
            1000,
            5,
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLjSVDG8YvC56G1XsVB2aKS8Oil--bPr-SoIN10X0rFSoxXy-WTw&s",
            ["wonderful vacation full of impressions",
                "Birthday in London, what could be more beautiful! DREAMS COME TRUE!!!",
                "Probably one of the most impressive cities in the world."],
            ["images1", "images2", "images3"]
        )
    ]
    getAllTours(){
        return this.Tours.slice();
    }

}