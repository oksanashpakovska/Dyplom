import Tour from "./model/tour"

export class TourService{
    private Tours:Tour[] = [
        new Tour(
            "Commonwealth of the Bahamas",
            "Nassau",
            "Arrival at the airport of Nassau. Transfer and hotel accommodation. Free time. The extraordinary contrasts of the diverse islands of the Bahamas are legendary, offering sundry experiences for everyone-from snorkeling and swimming with the dolphins to heading out on the town to enjoy a famous fish fry fete. Whether it is an intimate chat with local artisans, discovering things to do amidst Nassau‘s Blue Lagoon, or exploring the enchanting cays of the Great Exumas, the varied Bahamian archipelagos open the door to the most authentic and fascinating people, places, and excursions. Fort Fincastle is a fort located in the city of Nassau on the island of New Providence in The Bahamas. It was built to provide protection to Nassau. View towards Nassau from The Cloisters on Paradise Island.The Cloisters is the remains of the cloisters of a 14th - century French monastery which was transported to the island in the 1920s by William Randolph Hearst, and finally erected in the 1960s by Huntington Hartford. Paradise Island is an island in the Bahamas formerly known as Hog Island, is located just off the shore of the city of Nassau.It is best known for the sprawling resort Atlantis with its extensive water park rides, pools, beach, restaurants, walk -in aquarium and casinos. Overnight at the hotel.",
            4,
            2000,
            5,
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLjSVDG8YvC56G1XsVB2aKS8Oil--bPr-SoIN10X0rFSoxXy-WTw&s",
            ["wonderful vacation full of impressions",
                "Birthday in London, what could be more beautiful! DREAMS COME TRUE!!!",
                "Probably one of the most impressive cities in the world."],
            ["https://i.ytimg.com/vi/XnwdUeU2d8g/hqdefault.jpg", 
            "https://i.ytimg.com/vi/Yf_pF_6sUxU/maxresdefault.jpg", 
            "https://www.weddingideasmag.com/wp-content/uploads/2016/04/bahamas-tourist-o2.jpg",
            "http://www.woostercollective.com/bahamas-natural-bridge.jpg",
            "https://www.porthole.com/wp-content/uploads/2018/05/Cruise-Ships.jpg",
            "https://cdn.vallarta-adventures.com/sites/default/files/2018-08/1-IMAGE%20800x500-De_0.jpg",
            "https://i0.wp.com/metro.co.uk/wp-content/uploads/2018/06/sei_19015383.jpg?quality=90&strip=all&zoom=1&resize=964%2C723&ssl=1"]
        ),
        new Tour(
            "United Kingdom",
            "London",
            "Arrival at the airport of London. Meeting with a  representative. Transfer and hotel accommodation. Free time. The number of people wishing to visit London is growing every day. In London - Trafalgar Square, Tower, Buckingham Palace, Piccadilly Circus, British Museum, Big BenThe Big Ben.The world - known clock.Built in 1858, it was named after an architect whose name was Ben(Benjamin).The interesting fact is that you are not allowed to get insi.Piccadilly Circus.The place is far from what is called “a circus.” It is a well - known meeting point of the city.It has become so popular, that is now considered to be a place to visit for all the tourists.de the Big Ben if you aren't an Englishman.No tourists allowed.  London Eye.It is one of the biggest observation wheels in the world.Its height is 135 meters.It has 32 cabins which symbolize 32 districts of London.It takes 30 minutes to make a full circle.But it is the view you will never forget.The cost is about £ 20.Overnight at the hotel.",            
            4,
            2000,
            5,
            "https://feerie.com.ua/sites/default/files/styles/for_tour2/public/2018-11/London-1.jpg?h=a3972cd4&itok=ZRtZXzkT",
            ["wonderful vacation full of impressions", 
             "Birthday in London, what could be more beautiful! DREAMS COME TRUE!!!",
             "Probably one of the most impressive cities in the world."],
            ["https://upload.wikimedia.org/wikipedia/commons/a/a6/Trafalgar_Square%2C_London_2_-_Jun_2009.jpg",
             "https://upload.wikimedia.org/wikipedia/commons/2/2c/Tower_of_London_viewed_from_the_River_Thames.jpg",
             "http://london.kiev.ua/images/phocagallery/bykingemskii-dvorec-v-londone/thumbs/phoca_thumb_l_cvetyshie-tulpanu-na-fone-dvorca.jpg"]
        ),
        new Tour(
            "France",
            "Paris",
            "Arrival at the airport of Paris. Transfer and hotel accommodation. Free time. Paris - the capital of France, tourists from all over the world consider their long visits to the known advantages.The most visited city in the world - its beauty and splendor was perpetuated by great writers, ingenious artists painted his landscapes on numerous canvases, talented playwrights tried to portray his character in plays, and composers revealed his soul in music and songs.Its features are recognized by every person in the world, and the concentration of monuments is such that it is impossible to cover them in a day, month, or year - life is not enough to reveal all its secrets! - and so they come back to him again and again.The legendary Eiffel Tower and romantic Montmartre, the magnificent Versailles and the majestic Louvre, the charming Disneyland and the Moulin Rouge incendiary cabaret, magnificent museums, famous streets, various boutiques and shops await you.And also - a boat ride on the Seine and a lot of free time! Overnight at the hotel.",
            4,
            2000,
            7,
            "https://paris10.ru/sites/paris10.ru/files/styles/large_640_425_/public/field/image/eiffel-tower-3349075_1920.jpg?itok=r60aJzKv",
            ["wonderful vacation full of impressions",
            "Birthday in London, what could be more beautiful! DREAMS COME TRUE!!!",
            "Probably one of the most impressive cities in the world."],
            ["https://media.tacdn.com/media/attractions-splice-spp-360x240/06/74/aa/fc.jpg",
             "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/e4/a8/99.jpg", 
             "https://media-cdn.tripadvisor.com/media/photo-s/01/7f/bd/40/paris.jpg"]
        ),
        new Tour(
            "Italy",
            "Rome",
            "Arrival at the airport of Rome. Meeting with a  representative. Transfer and hotel accommodation. Free time. Dinner at the restaurant. In the evening, for those who wish, for an additional fee, an excursion “Night Rome” is offered. Overnight at the hotel. Breakfast in the hotel.Excursion to the Vatican Museums guide.Sightseeing tour of Rome with a  guide.Free time in the city or for those who wish for an additional fee offers excursions: “Roman Castles” - small medieval fortified cities or “Rome Christian”.In the evening, for an additional fee, dinner is possible in the restaurant - theater.The Colosseum .Iam gazing up at some of the most famous works of one of the world’s finest masters, commissioned in 1599 and hanging where they were painted to be seen. Arch of ConstantineAt nearly 70 feet tall, this largest - surviving triumphal arch is dedicated to Roman Emperor Constantine’s victory over Maxentius in 312 CE. Piazza Navona  is a public space / plaza in Rome, Italy.It is built on the site of the Stadium of Domitian, built in the 1st century AD, and follows the form of the open space of the stadium.Overnight at the hotel.",
            4,
            2000,
            10,
            "https://www.fodors.com/wp-content/uploads/2018/10/HERO_UltimateRome_Hero_shutterstock789412159.jpg",
            ["wonderful vacation full of impressions",
             "Birthday in London, what could be more beautiful! DREAMS COME TRUE!!!",
             "Probably one of the most impressive cities in the world."],
            ["https://www.worldtravel.kiev.ua/198stitle/avia-tur.-rim---milan.jpg",
             "https://www.tripsavvy.com/thmb/9iqDi0Z_KcDjfs_1nqClNYDq8UI=/3862x2578/filters:no_upscale():max_bytes(150000):strip_icc()/piazza-navona-598253135-5ad6043a30371300375af805.jpg",
              "https://img.traveltriangle.com/blog/wp-content/uploads/2018/10/Castles-In-Italy-Cover.jpg",
              "http://imperialstyle.eu/sites/lemanvip/files/styles/large/public/Boscolo%20Exedra.JPG?itok=cdiqLVJP"]
        ),
        new Tour(
            "Deutschland",
            "Berlin",
            "Arrival at the airport of Berlin. Transfer and hotel accommodation. Free time. Interesting party located in the heart of Europe - Germany. When Traveling - Stay at Park Inn Alexanderplatz 4 * in central Berlin within walking distance to sights! We invite you to take a trip to the winter fairy tale - New Year's Eve Berlin. The capital of Germany these days is especially attractive, the streets are decorated with festive lights, the smell of Christmas in the air. Famous Christmas markets with carousels, nuts, mulled wine that warms the hands and soul. And of course, Christmas sales, concerts, street performances. This is a holiday that will be remembered for a long time! But not just Christmas walks in the travel program.Interesting sightseeing excursions await you.Berlin is a city with a complex history, but now it is a modern metropolis, where you can relax with comfort and spend some wonderful days of rest, to have a pleasant experience.You will get acquainted with the main sights of the German capital, visit museums, visit Potsdam, the city of palaces and gardens.  Charlottenburg Palace Initially constructed as a summer palace, today it is the most splendid palace in Berlin. Alexanderplatz & Nikolaiviertel Alexanderplatz  is a large public square and transport hub in the central Mitte district of Berlin. The Brandenburg Gate  is an 18th - century neoclassical monument in Berlin. Overnight at the hotel.",
            4,
            2000,
            15,
            "http://www.lasallianstudyabroad.com/sites/default/files/images/Charlottenburg-Berlin-Germany.jpg",
            ["wonderful vacation full of impressions",
            "Birthday in London, what could be more beautiful! DREAMS COME TRUE!!!",
             "Probably one of the most impressive cities in the world."],
            ["https://www.thelocal.de/userdata/images/article/3055de7f5332b984d7dade29667f67254eb8887766d5b91c179e435d412aa8d7.jpg",
             "https://feerie.com.ua/sites/default/files/styles/for_tour2/public/2019-05/hoteles-en-berlin-mercado-navidad-berlin.jpg?h=920929c4&itok=gTbsjean",
              "images3"]
        ),
        new Tour(
            "China",
            "Beijing",
            "Arrival at the airport of Beijing. Transfer and hotel accommodation. Free time. China is a country with thousands of years of history, a mysterious and unusual country, a land of rich culture and the birthplace of many philosophical students. There are many historical sites in Beijing that even a week will be difficult to see. Forbidden City is a huge architectural complex with over a hundred buildings of extraordinary beauty. There is a grand Imperial Palace and Beihai Park on Heavenly Peace Square, which is unlikely to get around in a day. The scale of the imperial possessions is truly astounding. Near the palace there is a pilgrimage site for many Chinese and tourists: the mausoleum of Mao Zedong. Nature lovers can visit the oceanarium and the zoo, admire the marine life, pandas, turtles and other animals.  The Great Wall of China  is the collective name of a series of fortification systems generally built across the historical northern borders of China to protect and consolidate territories of Chinese states and empires against various nomadic groups of the steppe and their polities. The Forbidden City  is a palace complex in central Beijing, China.It houses the Palace Museum, and was the former Chinese imperial palace from the Ming dynasty to the end of the Qing dynasty(the years 1420 to 1912). The Temple of Heaven is an imperial complex of religious buildings situated in the southeastern part of central Beijing.The complex was visited by the Emperors of the Ming and Qing dynasties for annual ceremonies of prayer to Heaven for good harvest. Overnight at the hotel.",
            4,
            3000,
            9,
            "https://data.travelchinaguide.com/package/image/great-wall10_0905193.jpg",
            ["wonderful vacation full of impressions",
                "Birthday in London, what could be more beautiful! DREAMS COME TRUE!!!",
                "Probably one of the most impressive cities in the world."],
            ["https://feerie.com.ua/sites/default/files/styles/for_country/public/2019-01/kit1.jpg?itok=r9CLV0Gc",
             "https://feerie.com.ua/sites/default/files/styles/for_country/public/2019-01/ifYus6JMXnITf9AA0od274BvLF0ofiPW_0.jpg?itok=J38paULw",
              "https://feerie.com.ua/sites/default/files/styles/for_country/public/2019-01/4d7dca06280e4aa18b60cf7b8ca488e9.jpg?itok=3T4gu0p3"]
        )
        
    ]
    getAllTours(){
        return this.Tours.slice();
    }

}