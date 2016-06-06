export let players: IPlayer[] =[];
export players;
export function reset() {
  players.length= 0;

}
export function remove(id: number) {
  players = players.filter((item) => item.id !== id);
}
//pushing the arrays
export function seed(){
  let players: IPlayer []= [
    {
    id: 1,
    firstName: 'Stephen',
    lastName: 'Curry',
    age: 28,
    sport: 'basketball',
    position: 'point guard',
    height: 6.3,
    weight: 160,
    number: 30,
    image: 'http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3975.png&w=350&h=254',
    teamName: 'Warriors',
    college: 'Harvard',
    nationality: 'American',
  },
  {
  id: 2,
  firstName: 'Kobe',
  lastName: 'Bryant',
  age: 28,
  sport: 'basketball',
  position:'point guard',
  height: 6.4,
  weight: 120,
  number: 12,
  image:'https://i.ytimg.com/vi/YtfZeoFU0J0/maxresdefault.jpg',
  teamName: 'Lakers',
  college: 'American Dream Academy',
  nationality: 'American',
  },
  {
  id: 3,
  firstName: 'Nicole',
  lastName: 'Garcia',
  age: 20,
  sport: 'volleyball',
  position:'spiker',
  height: 5.9,
  weight: 111,
  number: 12,
  image:'http://mybestidolsph.weebly.com/uploads/2/0/0/1/20012051/9172289.jpg?309',
  teamName: 'Tambay',
  college: 'Nicole Academy',
  nationality: 'Filipino',
  },
  {
  id: 4,
  firstName: 'Colin',
  lastName: 'Kaepernick',
  age: 20,
  sport: 'football',
  position:'quarterback',
  height: 6.3,
  weight: 200,
  number: 12,
  image:'http://s11.postimg.org/xds0zkjur/article_2602738_1_D02194100000578_544_634x544.jpg',
  teamName: '49ers',
  college: 'University of California',
  nationality: 'American',
  },
  {
  id: 4,
  firstName: 'Nicole',
  lastName: 'Garcia',
  age: 20,
  sport: 'volleyball',
  position:'spiker',
  height: 5.9,
  weight: 111,
  number: 12,
  image:'http://mybestidolsph.weebly.com/uploads/2/0/0/1/20012051/9172289.jpg?309',
  teamName: 'Tambay',
  college: 'Nicole Academy',
  nationality: 'Filipino',
  },
  {
  id: 4,
  firstName: 'Rusell',
  lastName: 'Wilson',
  age: 20,
  sport: 'football',
  position:'quarterback',
  height: 6.0,
  weight: 200,
  number: 12,
  image:'http://41.media.tumblr.com/646bd13be40976636efc1db4b843bf99/tumblr_nfwal5SPgQ1qaq3bko1_500.jpg',
  teamName: 'Seahawk',
  college: 'football Academy',
  nationality: 'American',
  },
  {
  id: 5,
  firstName: 'Michael',
  lastName: 'Jordan',
  age: 40,
  sport: 'basketball',
  position:'point guard',
  height: 6.0,
  weight: 150,
  number: 12,
  image:'https://upload.wikimedia.org/wikipedia/commons/b/b3/Jordan_Lipofsky.jpg',
  teamName: 'Chicago Bulls',
  college: 'Bulls University',
  nationality: 'American',
  },
  {
  id: 6,
  firstName: 'Kevin',
  lastName: 'Durant',
  age: 29,
  sport: 'basketball',
  position:'point guard',
  height: 6.0,
  weight: 140,
  number: 12,
  image:'https://upload.wikimedia.org/wikipedia/commons/b/b3/Jordan_Lipofsky.jpg',
  teamName: 'Thunders',
  college: 'Oklahoma University',
  nationality: 'American',
  },
  {
  id: 7,
  firstName: 'David',
  lastName: 'Beckham',
  age: 40,
  sport: 'soccer',
  position:'point guard',
  height: 6.0,
  weight: 140,
  number: 12,
  image:'http://hdimagesnew.com/15-david-beckham-hair-2015/',
  teamName: 'Manchester',
  college: 'England University',
  nationality: 'England',
  },
  {
  id: 8,
  firstName: 'Manny',
  lastName: 'Pacquio',
  age: 40,
  sport: 'boxer',
  position:'heavy weight',
  height: 5.4,
  weight: 140,
  number: 12,
  image:'https://static.guim.co.uk/sys-images/Sport/Pix/columnists/2015/5/1/1430494131996/Manny-Pacquiao--009.jpg',
  teamName: 'Pacman',
  college: 'None',
  nationality: 'Filipino',
  },
  {
  id: 9,
  firstName: 'Harden',
  lastName: 'James',
  age: 23,
  sport: 'basketball',
  position:'point guard',
  height: 6.4,
  weight: 140,
  number: 12,
  image:'http://sports.cbsimg.net/images/visual/whatshot/091615_hardo.jpg',
  teamName: 'Rockets',
  college: 'None',
  nationality: 'American',
  },
  {
  id: 10,
  firstName: 'Kyrie',
  lastName: 'Irving',
  age: 23,
  sport: 'basketball',
  position:'point guard',
  height: 6.3,
  weight: 140,
  number: 12,
  image:'http://www.ohio.com/polopoly_fs/1.648704.1450566065!/image/image.jpg_gen/derivatives/landscape_500/cavs20cutweb.jpg',
  teamName: 'Cavaliers',
  college: 'None',
  nationality: 'American',
  },
  {
  id: 11,
  firstName: 'Cristiano',
  lastName:'Ronaldo',
  age: 31,
  sport: 'basketball',
  position:'point guard',
  height: 6.3,
  weight: 140,
  number: 12,
  image:'http://www.ohio.com/polopoly_fs/1.648704.1450566065!/image/image.jpg_gen/derivatives/landscape_500/cavs20cutweb.jpg',
  teamName: 'Madrid',
  college: 'None',
  nationality: 'Spain',
  },
  {
  id: 12,
  firstName: 'Mayweather',
  lastName: 'Floyd',
  age: 40,
  sport: 'boxer',
  position:'heaver weight',
  height: 5.10,
  weight: 120,
  number: 12,
  image:'http://www.ohio.com/polopoly_fs/1.648704.1450566065!/image/image.jpg_gen/derivatives/landscape_500/cavs20cutweb.jpg',
  teamName: 'None',
  college: 'None',
  nationality: 'American',
  }
}
