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
        "https://www.booking.com/hotel/gb/crashpads-shoreditch-loft-apartment.en-gb.html?aid=376363;label=bh-apartments-L%2AXf2U1sq4%2AGEkIwcLOALQS267777916048%3Apl%3Ata%3Ap1%3Ap22%2C544%2C000%3Aac%3Aap1t1%3Aneg%3Afi32510904010%3Atikwd-65526620%3Alp1030460%3Ali%3Adec%3Adm;sid=dbb56c1e474ea26891a60ff19bbb86d2;dest_id=-2601889;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=3;hpos=3;nflt=sth%253D1;no_rooms=1;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1573240562;srpvid=e21187791d430140;type=total;ucfs=1&#hotelTmpl"),
        new Hotel("Fedro", "USA", "Sanfrancisko","bla bla bla bla ",400,4,""),
        new Hotel("Fedro","USA","Sanfrancisko","bla bla bla",300,3,""),
        new Hotel("Fedro","USA","Sanfrancisko","bla bla bla",20,2,""),
        new Hotel("Fedro","USA","Sanfrancisko","bla bla bla",10,1,"")
    ];
    getAllHotels(){
        return this.Hotels.slice();
    }
}