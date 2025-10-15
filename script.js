// Anime Database
let animeDatabase = [
    {
        id: 1,
        title: "Attack on Titan",
        year: 2013,
        genre: ["Animation", "Action", "Adventure", "Drama", "Fantasy", "Horror"],
        rating: 9.1,
        poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx16498-buvcRTBx4NSm.jpg",
        trailer: "https://www.imdb.com/title/tt2560140/",
        description: "Humanity fights for survival against giant humanoid Titans in a dark, post-apocalyptic world.",
        cast: ["Eren Yeager", "Mikasa Ackerman", "Armin Arlert"],
        creator: "Hajime Isayama",
        director: "Tetsurō Araki",
        studio: "Wit Studio",
        crunchyrollUrl: "https://www.crunchyroll.com/attack-on-titan",
        duration: "24 min",
        language: "Sub | Dub"
    },
    {
        id: 2,
        title: "Fullmetal Alchemist:<br>Brotherhood",
        year: 2009,
        genre: ["Animation", "Action", "Adventure", "Comedy", "Drama", "Fantasy", "Sci-Fi"],
        rating: 9.1,
        poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx5114-nSWCgQlmOMtj.jpg",
        trailer: "https://www.imdb.com/title/tt1355642/",
        description: "Two brothers use alchemy to restore their bodies after a failed transmutation in a tale of adventure and sacrifice.",
        cast: ["Edward Elric", "Alphonse Elric", "Winry Rockbell"],
        creator: "Hiromu Arakawa",
        director: "Yasuhiro Irie",
        studio: "Bones",
        crunchyrollUrl: "https://www.crunchyroll.com/fullmetal-alchemist-brotherhood",
        duration: "24 min",
        language: "Sub | Dub"
    },
    {
        id: 3,
        title: "Hunter x Hunter",
        year: 2011,
        genre: ["Animation", "Action", "Adventure", "Comedy", "Fantasy"],
        rating: 9.0,
        poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx136-gj0bbCpDNrKG.jpg",
        trailer: "https://www.imdb.com/title/tt2098220/",
        description: "A young boy pursues his dream of becoming a Hunter to find his missing father in a world full of dangerous challenges.",
        cast: ["Gon Freecss", "Killua Zoldyck", "Kurapika", "Leorio Paradinight"],
        creator: "Yoshihiro Togashi",
        director: "Hiroshi Kōjina",
        studio: "Madhouse",
        crunchyrollUrl: "https://www.crunchyroll.com/hunter-x-hunter",
        duration: "24 min",
        language: "Sub | Dub"
    },
    {
        id: 4,
        title: "Steins;Gate",
        year: 2011,
        genre: ["Animation", "Comedy", "Drama", "Sci-Fi", "Thriller"],
        rating: 9.0,
        poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx9253-tIUXF2gfU8Sg.jpg",
        trailer: "https://www.imdb.com/title/tt1910272/",
        description: "A group of friends accidentally create a time machine and must deal with the consequences of altering the past.",
        cast: ["Rintaro Okabe", "Kurisu Makise", "Mayuri Shiina"],
        creator: "Chiyomaru Shikura",
        director: "Hiroshi Hamasaki",
        studio: "White Fox",
        crunchyrollUrl: "https://www.crunchyroll.com/steinsgate",
        duration: "24 min",
        language: "Sub | Dub"
    },
    {
        id: 5,
        title: "Death Note",
        year: 2006,
        genre: ["Animation", "Crime", "Drama", "Mystery", "Thriller"],
        rating: 8.9,
        poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1535-kUgkcrfOrkUM.jpg",
        trailer: "https://www.imdb.com/title/tt0877057/",
        description: "A high school student discovers a supernatural notebook that allows him to kill anyone by writing their name in it.",
        cast: ["Light Yagami", "L", "Misa Amane"],
        creator: "Tsugumi Ohba",
        director: "Tetsurō Araki",
        studio: "Madhouse",
        crunchyrollUrl: "https://www.crunchyroll.com/death-note",
        duration: "23 min",
        language: "Sub | Dub"
    },
    {
      id: 6,
      title: "Naruto: Shippuden",
      year: 2007,
      genre: ["Animation", "Action", "Adventure", "Comedy", "Drama", "Fantasy"],
      rating: 8.7,
      poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1735-kGfVm0YqCPcu.png",
      trailer: "https://www.imdb.com/title/tt0988824/",
      description: "Naruto Uzumaki grows stronger to protect his friends and village while confronting dangerous enemies.",
      cast: ["Naruto Uzumaki", "Sasuke Uchiha", "Sakura Haruno", "Kakashi Hatake"],
      creator: "Masashi Kishimoto",
      director: "Hayato Date",
      studio: "Studio Pierrot",
      crunchyrollUrl: "https://www.crunchyroll.com/series/GY9PJ5KWR/naruto-shippuden",
      duration: "24 min",
      language: "Sub | Dub"
    },
    {
      id: 7,
      title: "Code Geass",
      year: 2006,
      genre: ["Animation", "Action", "Drama", "Fantasy", "Sci-Fi", "Thriller"],
      rating: 8.7,
      poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx126830-Mx56p5DMIjiq.png",
      trailer: "https://www.imdb.com/title/tt0994314/",
      description: "An exiled prince gains a power to control others and seeks to overthrow a tyrannical empire.",
      cast: ["Lelouch Lamperouge", "C.C.", "Suzaku Kururugi"],
      creator: "Ichirō Ōkouchi",
      director: "Goro Taniguchi",
      studio: "Sunrise",
      crunchyrollUrl: "https://www.crunchyroll.com/series/G6JQ5Q3PR/code-geass-lelouch-of-the-rebellion",
      duration: "24 min",
      language: "Sub | Dub"
    },
    {
      id: 8,
      title: "Monster",
      year: 2004,
      genre: ["Animation", "Crime", "Drama", "Mystery", "Thriller"],
      rating: 8.7,
      poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124756-4DBO8VSFaJ6Y.jpg",
      trailer: "https://www.imdb.com/title/tt0434706/",
      description: "A doctor’s life unravels as he hunts a serial killer he once saved, uncovering a dark conspiracy.",
      cast: ["Dr. Kenzo Tenma", "Johan Liebert", "Nina Fortner"],
      creator: "Naoki Urasawa",
      director: "Masayuki Kojima",
      studio: "Madhouse",
      crunchyrollUrl: "https://www.crunchyroll.com/series/GY190752Y/monster",
      duration: "24 min",
      language: "Sub | Dub"
    },
    {
      id: 9,
      title: "Vinland Saga",
      year: 2019,
      genre: ["Animation", "Action", "Adventure", "Drama", "History"],
      rating: 8.8,
      poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx101348-2fhDFPCuMNiz.jpg",
      trailer: "https://www.imdb.com/title/tt10233448/",
      description: "A young Viking warrior seeks revenge while navigating the brutal politics and battles of medieval Europe.",
      cast: ["Thorfinn", "Askeladd", "Canute"],
      creator: "Makoto Yukimura",
      director: "Shūhei Yabuta",
      studio: "Wit Studio",
      crunchyrollUrl: "https://www.crunchyroll.com/series/GEXH3WKK0/vinland-saga",
      duration: "24 min",
      language: "Sub | Dub"
    },
    {
      id: 10,
      title: "Bleach: Thousand-Year Blood War",
      year: 2022,
      genre: ["Animation", "Action", "Adventure", "Fantasy"],
      rating: 9.0,
      poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx116674-p3zK4PUX2Aag.jpg",
      trailer: "https://www.imdb.com/title/tt14986406/",
      description: "Ichigo and allies face a deadly new threat from the Wandenreich in this epic continuation.",
      cast: ["Ichigo Kurosaki", "Rukia Kuchiki", "Renji Abarai"],
      creator: "Tite Kubo",
      director: "Tomohisa Taguchi",
      studio: "Pierrot",
      crunchyrollUrl: "https://www.crunchyroll.com/series/G63VGG2NY/bleach-thousand-year-blood-war",
      duration: "24 min",
      language: "Sub | Dub"
  },
  {
      id: 11,
      title: "Jujutsu Kaisen",
      year: 2020,
      genre: ["Animation", "Action", "Adventure", "Fantasy", "Thriller"],
      rating: 8.5,
      poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx113415-LHBAeoZDIsnF.jpg",
      trailer: "https://www.imdb.com/title/tt12343534/",
      description: "A high schooler battles cursed spirits using powerful jujutsu after ingesting a deadly talisman.",
      cast: ["Yuuji Itadori", "Megumi Fushiguro", "Nobara Kugisaki", "Satoru Gojo"],
      creator: "Gege Akutami",
      director: "Sunghoo Park",
      studio: "MAPPA",
      crunchyrollUrl: "https://www.crunchyroll.com/series/GRDV0019R/jujutsu-kaisen",
      duration: "24 min",
      language: "Sub | Dub"
  },
  {
      id: 12,
      title: "Haikyu!!",
      year: 2014,
      genre: ["Animation", "Comedy", "Drama", "Sport"],
      rating: 8.7,
      poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20464-ooZUyBe4ptp9.png",
      trailer: "https://www.imdb.com/title/tt3398540/",
      description: "A determined boy strives to become a top volleyball player despite his short stature.",
      cast: ["Shoyo Hinata", "Tobio Kageyama", "Daichi Sawamura", "Koshi Sugawara"],
      creator: "Haruichi Furudate",
      director: "Susumu Mitsunaka",
      studio: "Production I.G",
      crunchyrollUrl: "https://www.crunchyroll.com/series/GY8VM8MWY/haikyu",
      duration: "24 min",
      language: "Sub | Dub"
  },
  {
      id: 13,
      title: "Frieren: Beyond Journey's End",
      year: 2023,
      genre: ["Animation", "Adventure", "Comedy", "Drama", "Fantasy"],
      rating: 8.9,
      poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx170068-ijY3tCP8KoWP.jpg",
      trailer: "https://www.imdb.com/title/tt22248376/",
      description: "An elf mage reflects on life and friendship after a long hero’s journey.",
      cast: ["Frieren", "Eisen", "Himmel"],
      creator: "Kanehito Yamada",
      director: "Kazuya Iwata",
      studio: "Madhouse",
      crunchyrollUrl: "https://www.crunchyroll.com/series/GDKHZEP3R/frieren-beyond-journeys-end",
      duration: "25 min",
      language: "Sub | Dub"
  },
  {
      id: 14,
      title: "Fighting Spirit",
      year: 2000,
      genre: ["Animation", "Action", "Comedy", "Sport"],
      rating: 8.8,
      poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx263-ivVyn9xAgwSZ.png",
      trailer: "https://www.imdb.com/title/tt0481256/",
      description: "A boxer overcomes personal struggles and fierce rivals in pursuit of championship glory.",
      cast: ["Ippo Makunouchi", "Mamoru Takamura", "Ichiro Miyata"],
      creator: "George Morikawa",
      director: "Goro Taniguchi",
      studio: "Madhouse",
      crunchyrollUrl: "https://www.crunchyroll.com/series/G6MG8W0P6/hajime-no-ippo",
      duration: "30 min",
      language: "Sub | Dub"
  },
  {
      id: 15,
      title: "JoJo's Bizarre Adventure",
      year: 2012,
      genre: ["Animation", "Action", "Adventure", "Comedy", "Drama", "Fantasy", "Horror"],
      rating: 8.5,
      poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx666-kYzXvKlUbeMP.jpg",
      trailer: "https://www.imdb.com/title/tt2359704/",
      description: "Generations of the Joestar family battle supernatural foes with unique powers.",
      cast: ["Jonathan Joestar", "Dio Brando", "Joseph Joestar", "Jotaro Kujo"],
      creator: "Hirohiko Araki",
      director: "Naokatsu Tsuda",
      studio: "David Production",
      crunchyrollUrl: "https://www.crunchyroll.com/series/GYP8DP1MY/jojos-bizarre-adventure",
      duration: "24 min",
      language: "Sub | Dub"
  },
  {
      id: 16,
      title: "Naruto",
      year: 2002,
      genre: ["Animation", "Action", "Adventure", "Comedy", "Fantasy"],
      rating: 8.4,
      poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20-dE6UHbFFg1A5.jpg",
      trailer: "https://www.imdb.com/title/tt0409591/",
      description: "A young ninja seeks recognition and dreams of becoming the strongest leader in his village.",
      cast: ["Naruto Uzumaki", "Sasuke Uchiha", "Sakura Haruno", "Kakashi Hatake"],
      creator: "Masashi Kishimoto",
      director: "Hayato Date",
      studio: "Pierrot",
      crunchyrollUrl: "https://www.crunchyroll.com/series/GY9PJ5KWR/naruto",
      duration: "24 min",
      language: "Sub | Dub"
  },
  {
      id: 17,
      title: "Demon Slayer: Kimetsu no Yaiba",
      year: 2019,
      genre: ["Animation", "Action", "Adventure", "Fantasy", "Thriller"],
      rating: 8.6,
      poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx101922-WBsBl0ClmgYL.jpg",
      trailer: "https://www.imdb.com/title/tt9335498/",
      description: "A boy becomes a demon slayer to avenge his family and cure his sister.",
      cast: ["Tanjiro Kamado", "Nezuko Kamado", "Zenitsu Agatsuma", "Inosuke Hashibira"],
      creator: "Koyoharu Gotouge",
      director: "Haruo Sotozaki",
      studio: "ufotable",
      crunchyrollUrl: "https://www.crunchyroll.com/series/GY5P48XEY/demon-slayer-kimetsu-no-yaiba",
      duration: "24 min",
      language: "Sub | Dub"
  },
  {
      id: 18,
      title: "Dragon Ball Super",
      year: 2015,
      genre: ["Animation", "Action", "Adventure", "Comedy", "Family", "Fantasy", "Sci-Fi"],
      rating: 8.3,
      poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21175-EH06qlfF8TnB.jpg",
      trailer: "https://www.imdb.com/title/tt4644488/",
      description: "Goku and friends face gods, warriors, and multiverse threats in epic battles.",
      cast: ["Goku", "Vegeta", "Beerus", "Whis"],
      creator: "Akira Toriyama",
      director: "Kimitoshi Chioka",
      studio: "Toei Animation",
      crunchyrollUrl: "https://www.crunchyroll.com/series/G63VGG2MY/dragon-ball-super",
      duration: "24 min",
      language: "Sub | Dub"
  },
  {
      id: 19,
      title: "Gintama",
      year: 2005,
      genre: ["Animation", "Action", "Comedy", "Sci-Fi"],
      rating: 8.7,
      poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx918-iOaeBVUn4uK7.jpg",
      trailer: "https://www.imdb.com/title/tt0988818/",
      description: "A comedic samurai navigates absurd adventures in an alternate Edo with aliens and odd jobs.",
      cast: ["Gintoki Sakata", "Shinpachi Shimura", "Kagura", "Tae Shimura"],
      creator: "Hideaki Sorachi",
      director: "Yasuhiro Yoshiura",
      studio: "Sunrise",
      crunchyrollUrl: "https://www.crunchyroll.com/series/GY2P9EDR6/gintama",
      duration: "25 min",
      language: "Sub | Dub"
  },
  {
      id: 20,
      title: "Your Lie in April",
      year: 2014,
      genre: ["Animation", "Comedy", "Drama", "Music", "Romance"],
      rating: 8.5,
      poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20665-TLgkL8T8IRFd.png",
      trailer: "https://www.imdb.com/title/tt3895150/",
      description: "A piano prodigy rediscovers life and music after meeting a spirited violinist.",
      cast: ["Kousei Arima", "Kaori Miyazono", "Tsubaki Sawabe"],
      creator: "Naoshi Arakawa",
      director: "Kyōhei Ishiguro",
      studio: "A-1 Pictures",
      crunchyrollUrl: "https://www.crunchyroll.com/series/G63VGG25Y/your-lie-in-april",
      duration: "23 min",
      language: "Sub | Dub"
  },
  {
    id: 21,
    title: "Mob Psycho 100",
    year: 2016,
    genre: ["Animation", "Action", "Comedy", "Drama", "Fantasy", "Horror", "Sci-Fi"],
    rating: 8.5,
    poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21507-6YUSbh2m0N1p.jpg",
    trailer: "https://www.imdb.com/title/tt5897304/",
    description: "A young psychic struggles with emotions, powers, and everyday life challenges.",
    cast: ["Shigeo 'Mob' Kageyama", "Reigen Arataka", "Ritsu Kageyama"],
    creator: "ONE",
    director: "Yuzuru Tachikawa",
    studio: "Bones",
    crunchyrollUrl: "https://www.crunchyroll.com/series/GRGG9798R/mob-psycho-100",
    duration: "24 min",
    language: "Sub | Dub"
},
{
    id: 22,
    title: "Erased",
    year: 2016,
    genre: ["Animation", "Crime", "Drama", "Fantasy", "Mystery", "Sci-Fi", "Thriller"],
    rating: 8.4,
    poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21234-XmqW39aQ9o7O.jpg",
    trailer: "https://www.imdb.com/title/tt5249462/",
    description: "A man travels back in time to prevent childhood tragedies and solve a murder mystery.",
    cast: ["Satoru Fujinuma", "Kayo Hinazuki", "Airi Katagiri"],
    creator: "Kei Sanbe",
    director: "Tomohiko Itō",
    studio: "A-1 Pictures",
    crunchyrollUrl: "https://www.crunchyroll.com/series/GRJQV73GR/erased",
    duration: "22 min",
    language: "Sub | Dub"
},
{
    id: 23,
    title: "One Punch Man",
    year: 2015,
    genre: ["Animation", "Action", "Comedy", "Fantasy", "Sci-Fi"],
    rating: 8.6,
    poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21087-B5DHjqZ3kW4b.jpg",
    trailer: "https://www.imdb.com/title/tt4508902/",
    description: "A hero defeats all foes with one punch while seeking a worthy challenge.",
    cast: ["Saitama", "Genos", "Speed-o'-Sound Sonic"],
    creator: "ONE",
    director: "Shingo Natsume",
    studio: "Madhouse",
    crunchyrollUrl: "https://www.crunchyroll.com/series/G63VGG2DY/one-punch-man",
    duration: "24 min",
    language: "Sub | Dub"
},
{
    id: 24,
    title: "Bleach",
    year: 2004,
    genre: ["Animation", "Action", "Adventure", "Fantasy"],
    rating: 8.2,
    poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx269-d2GmRkJbMopq.png",
    trailer: "https://www.imdb.com/title/tt0434665/",
    description: "A teenager gains Soul Reaper powers to protect the living and guide spirits to the afterlife.",
    cast: ["Ichigo Kurosaki", "Rukia Kuchiki", "Orihime Inoue", "Uryu Ishida"],
    creator: "Tite Kubo",
    director: "Noriyuki Abe",
    studio: "Pierrot",
    crunchyrollUrl: "https://www.crunchyroll.com/series/G63VGG2NY/bleach",
    duration: "24 min",
    language: "Sub | Dub"
},
{
    id: 25,
    title: "My Hero Academia",
    year: 2016,
    genre: ["Animation", "Action", "Adventure", "Fantasy", "Sci-Fi"],
    rating: 8.2,
    poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21459-nYh85uj2Fuwr.jpg",
    trailer: "https://www.imdb.com/title/tt5626028/",
    description: "In a world of superheroes, a powerless boy dreams of becoming the greatest hero.",
    cast: ["Izuku Midoriya", "Katsuki Bakugo", "Shoto Todoroki", "All Might"],
    creator: "Kōhei Horikoshi",
    director: "Kenji Nagasaki",
    studio: "Bones",
    crunchyrollUrl: "https://www.crunchyroll.com/series/G6NQ5DWZ6/my-hero-academia",
    duration: "24 min",
    language: "Sub | Dub"
},
{
    id: 26,
    title: "Kaguya-sama: Love is War",
    year: 2019,
    genre: ["Animation", "Comedy", "Romance"],
    rating: 8.5,
    poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx101921-ufrjLzhSz7L1.jpg",
    trailer: "https://www.imdb.com/title/tt9522300/",
    description: "Two elite students engage in mind games to make the other confess first.",
    cast: ["Kaguya Shinomiya", "Miyuki Shirogane", "Chika Fujiwara"],
    creator: "Aka Akasaka",
    director: "Shinichi Omata",
    studio: "A-1 Pictures",
    crunchyrollUrl: "https://www.crunchyroll.com/series/G63VGG2MR/kaguya-sama-love-is-war",
    duration: "24 min",
    language: "Sub | Dub"
},
{
    id: 27,
    title: "Clannad",
    year: 2007,
    genre: ["Animation", "Comedy", "Drama", "Fantasy", "Romance"],
    rating: 8.2,
    poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx2167-pSDBcyc0vjej.jpg",
    trailer: "https://www.imdb.com/title/tt1118804/",
    description: "A delinquent boy’s life changes after forming deep bonds with his classmates.",
    cast: ["Tomoya Okazaki", "Nagisa Furukawa", "Kyou Fujibayashi"],
    creator: "Key / Jun Maeda",
    director: "Tatsuya Ishihara",
    studio: "Kyoto Animation",
    crunchyrollUrl: "https://www.crunchyroll.com/series/G6Q4V3DGR/clannad",
    duration: "24 min",
    language: "Sub | Dub"
},
{
    id: 28,
    title: "Anohana: The Flower We Saw That Day",
    year: 2011,
    genre: ["Animation", "Adventure", "Drama", "Fantasy", "Mystery", "Romance"],
    rating: 8.1,
    poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx9989-hImMg6kCMm6I.jpg",
    trailer: "https://www.imdb.com/title/tt1913273/",
    description: "Childhood friends reunite to confront the death of a friend they never overcame.",
    cast: ["Jinta Yadomi", "Meiko 'Menma' Honma", "Naruko Anjou"],
    creator: "Mari Okada",
    director: "Tatsuyuki Nagai",
    studio: "A-1 Pictures",
    crunchyrollUrl: "https://www.crunchyroll.com/series/G6M5950RR/anohana-the-flower-we-saw-that-day",
    duration: "23 min",
    language: "Sub | Dub"
},
{
    id: 29,
    title: "Made in Abyss",
    year: 2017,
    genre: ["Animation", "Action", "Adventure", "Drama", "Fantasy", "Horror", "Mystery", "Sci-Fi"],
    rating: 8.3,
    poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx97986-TQ7dCgbS3y5s.jpg",
    trailer: "https://www.imdb.com/title/tt7222086/",
    description: "A girl descends into a mysterious and deadly chasm in search of her mother.",
    cast: ["Riko", "Reg", "Nanachi"],
    creator: "Akihito Tsukushi",
    director: "Masayuki Kojima",
    studio: "Kinema Citrus",
    crunchyrollUrl: "https://www.crunchyroll.com/series/GYVNXQ95R/made-in-abyss",
    duration: "24 min",
    language: "Sub | Dub"
},
{
    id: 30,
    title: "Mushoku Tensei: Jobless Reincarnation",
    year: 2021,
    genre: ["Animation", "Action", "Adventure", "Drama", "Fantasy"],
    rating: 8.2,
    poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx108465-1ANspF1EWyFx.jpg",
    trailer: "https://www.imdb.com/title/tt13293588/",
    description: "A man reincarnates in a magical world, aiming to live a meaningful life.",
    cast: ["Rudeus Greyrat", "Eris Boreas Greyrat", "Roxy Migurdia"],
    creator: "Rifujin na Magonote",
    director: "Manabu Okamoto",
    studio: "Studio Bind",
    crunchyrollUrl: "https://www.crunchyroll.com/series/G24H7Z2XE/mushoku-tensei-jobless-reincarnation",
    duration: "24 min",
    language: "Sub | Dub"
},
{
  id: 31,
  title: "Spy x Family",
  year: 2022,
  genre: ["Animation", "Action", "Comedy", "Thriller"],
  rating: 8.2,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx140960-Kb6R5nYQfjmP.jpg",
  trailer: "https://www.imdb.com/title/tt13706018/",
  description: "A spy, an assassin, and a telepathic child form a fake family while hiding secrets.",
  cast: ["Loid Forger", "Yor Forger", "Anya Forger"],
  creator: "Tatsuya Endo",
  director: "Kazuhiro Furuhashi",
  studio: "Wit Studio & CloverWorks",
  crunchyrollUrl: "https://www.crunchyroll.com/series/G4PH0WEKE/spy-x-family",
  duration: "24 min",
  language: "Sub | Dub"
},
{
  id: 32,
  title: "Black Clover",
  year: 2017,
  genre: ["Animation", "Action", "Adventure", "Comedy", "Drama", "Family", "Fantasy", "Sci-Fi", "Thriller"],
  rating: 8.2,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx97940-fyh8o7gNbha0.png",
  trailer: "https://www.imdb.com/title/tt7441658/",
  description: "Two orphans strive to become the Wizard King in a world full of magic and rivalry.",
  cast: ["Asta", "Yuno", "Noelle Silva"],
  creator: "Yūki Tabata",
  director: "Tatsuya Yoshihara",
  studio: "Pierrot",
  crunchyrollUrl: "https://www.crunchyroll.com/series/GVDHX8QNW/black-clover",
  duration: "24 min",
  language: "Sub | Dub"
},
{
  id: 33,
  title: "The Apothecary Diaries",
  year: 2023,
  genre: ["Animation", "Drama", "History", "Mystery", "Romance"],
  rating: 8.6,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx161645-QLbzHXiYRgV2.jpg",
  trailer: "https://www.imdb.com/title/tt26743760/",
  description: "A smart maid unravels mysteries in an imperial court using her medical knowledge.",
  cast: ["Maomao", "Jinshi", "Yang Guifei"],
  creator: "Natsu Hyūga",
  director: "Norihiro Naganuma",
  studio: "OLM & TOHO animation STUDIO",
  crunchyrollUrl: "https://www.crunchyroll.com/series/GXJHM3WEQ/the-apothecary-diaries",
  duration: "23 min",
  language: "Sub | Dub"
},
{
  id: 34,
  title: "Violet Evergarden",
  year: 2018,
  genre: ["Animation", "Drama", "Fantasy", "Romance", "Sci-Fi"],
  rating: 8.4,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21827-ubzq619ZA2E9.png",
  trailer: "https://www.imdb.com/title/tt7078180/",
  description: "A former soldier learns the meaning of emotions while helping others express theirs.",
  cast: ["Violet Evergarden", "Gilbert Bougainvillea", "Claudia Hodgins"],
  creator: "Kana Akatsuki",
  director: "Taichi Ishidate",
  studio: "Kyoto Animation",
  crunchyrollUrl: null,
  duration: "24 min",
  language: "Sub | Dub"
},
{
  id: 35,
  title: "Samurai Champloo",
  year: 2004,
  genre: ["Animation", "Action", "Adventure", "Comedy", "Drama", "Thriller"],
  rating: 8.5,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx205-7tHVFu6dPBm9.png",
  trailer: "https://www.imdb.com/title/tt0423731/",
  description: "Three eccentric travelers embark on an adventurous journey in Edo-era Japan.",
  cast: ["Mugen", "Jin", "Fuu"],
  creator: "Shinichirō Watanabe",
  director: "Shinichirō Watanabe",
  studio: "Manglobe",
  crunchyrollUrl: "https://www.crunchyroll.com/series/GY8VEQ85Y/samurai-champloo",
  duration: "24 min",
  language: "Sub | Dub"
},
{
  id: 36,
  title: "Parasyte: The Maxim",
  year: 2014,
  genre: ["Animation", "Action", "Drama", "Horror", "Sci-Fi", "Thriller"],
  rating: 8.2,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20623-dUARfggnNDOe.jpg",
  trailer: "https://www.imdb.com/title/tt3358020/",
  description: "A teen fights alien parasites that take over human bodies to survive.",
  cast: ["Shinichi Izumi", "Migi", "Satomi Murano"],
  creator: "Hitoshi Iwaaki",
  director: "Kenichi Shimizu",
  studio: "Madhouse",
  crunchyrollUrl: "https://www.crunchyroll.com/series/GY190DKQR/parasyte-the-maxim",
  duration: "22 min",
  language: "Sub | Dub"
},
{
  id: 37,
  title: "Gurren Lagann",
  year: 2007,
  genre: ["Animation", "Action", "Adventure", "Comedy", "Drama", "Sci-Fi"],
  rating: 8.3,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx2001-XwRnjzGeFWRQ.png",
  trailer: "https://www.imdb.com/title/tt0948103/",
  description: "Underground humans rise against oppression with giant robots and sheer willpower.",
  cast: ["Simon", "Kamina", "Yoko Littner"],
  creator: "Kazuki Nakashima",
  director: "Hiroyuki Imaishi",
  studio: "Gainax",
  crunchyrollUrl: "https://www.crunchyroll.com/series/GY190C9PR/gurren-lagann",
  duration: "24 min",
  language: "Sub | Dub"
},
{
  id: 38,
  title: "Dr. Stone",
  year: 2019,
  genre: ["Animation", "Action", "Adventure", "Sci-Fi"],
  rating: 8.1,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-GybuoSoOZfpH.jpg",
  trailer: "https://www.imdb.com/title/tt9679542/",
  description: "A scientific genius rebuilds civilization after humanity is petrified for millennia.",
  cast: ["Senku Ishigami", "Taiju Oki", "Yuzuriha Ogawa"],
  creator: "Riichiro Inagaki & Boichi",
  director: "Shinya Iino",
  studio: "TMS Entertainment",
  crunchyrollUrl: "https://www.crunchyroll.com/series/GYEXQ95MY/dr-stone",
  duration: "24 min",
  language: "Sub | Dub"
},
{
  id: 39,
  title: "Horimiya",
  year: 2021,
  genre: ["Animation", "Comedy", "Drama", "Romance"],
  rating: 8.0,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124080-oeviACzGv5Vx.jpg",
  trailer: "https://www.imdb.com/title/tt13103134/",
  description: "Two high school students discover each other’s hidden sides and develop a heartwarming romance.",
  cast: ["Kyoko Hori", "Izumi Miyamura", "Yuki Yoshikawa"],
  creator: "HERO & Daisuke Hagiwara",
  director: "Masashi Ishihama",
  studio: "CloverWorks",
  crunchyrollUrl: "https://www.crunchyroll.com/series/GYEXQ2Q7R/horimiya",
  duration: "24 min",
  language: "Sub | Dub"
},
{
  id: 40,
  title: "Ranking of Kings",
  year: 2021,
  genre: ["Animation", "Action", "Adventure", "Comedy", "Drama", "Fantasy"],
  rating: 8.4,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx113717-9sNnN8WRgK15.jpg",
  trailer: "https://www.imdb.com/title/tt13409432/",
  description: "A deaf, powerless prince strives to become a great king despite societal doubt.",
  cast: ["Bojji", "Kage", "Daida"],
  creator: "Sōsuke Tōka",
  director: "Yosuke Hatta",
  studio: "Wit Studio",
  crunchyrollUrl: "https://www.crunchyroll.com/series/G0XHWM3V0/ranking-of-kings",
  duration: "23 min",
  language: "Sub | Dub"
},
{
  id: 41,
  title: "Dandadan",
  year: 2024,
  genre: ["Animation", "Action", "Adventure", "Comedy", "Fantasy", "Romance", "Sci-Fi", "Thriller"],
  rating: 8.3,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx171018-60q1B6GK2Ghb.jpg",
  trailer: "https://www.imdb.com/title/tt30217403/",
  description: "A quirky mix of supernatural battles and teen romance with unexpected twists.",
  cast: ["Momo Ayase", "Okarun", "Rika Kawai"],
  creator: "Yukinobu Tatsu",
  director: "Yūzō Satō",
  studio: "Science SARU",
  crunchyrollUrl: "https://www.crunchyroll.com/series/GZJH3D12R/dandadan",
  duration: "24 min",
  language: "Sub | Dub"
},
{
  id: 42,
  title: "Chainsaw Man",
  year: 2022,
  genre: ["Animation", "Action", "Comedy", "Fantasy"],
  rating: 8.3,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx127230-DdP4vAdssLoz.png",
  trailer: "https://www.imdb.com/title/tt13616990/",
  description: "A boy merges with a demon and battles other devils for survival and revenge.",
  cast: ["Denji", "Power", "Aki Hayakawa", "Makima"],
  creator: "Tatsuki Fujimoto",
  director: "Ryu Nakayama",
  studio: "MAPPA",
  crunchyrollUrl: "https://www.crunchyroll.com/series/GVDHX8QNW/chainsaw-man",
  duration: "24 min",
  language: "Sub | Dub"
},
{
  id: 43,
  title: "The Promised Neverland",
  year: 2019,
  genre: ["Animation", "Action", "Adventure", "Drama", "Fantasy", "Horror", "Mystery", "Sci-Fi", "Thriller"],
  rating: 8.1,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx101759-8UR7r9MNVpz2.jpg",
  trailer: "https://www.imdb.com/title/tt8788458/",
  description: "Orphaned children uncover a dark secret and plan a daring escape.",
  cast: ["Emma", "Ray", "Norman"],
  creator: "Kaiu Shirai & Posuka Demizu",
  director: "Mamoru Kanbe",
  studio: "CloverWorks",
  crunchyrollUrl: "https://www.crunchyroll.com/series/G63VGG2GR/the-promised-neverland",
  duration: "23 min",
  language: "Sub | Dub"
},
{
  id: 44,
  title: "Pluto",
  year: 2023,
  genre: ["Animation", "Action", "Drama", "Mystery", "Sci-Fi", "Thriller"],
  rating: 8.1,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx99088-LTJskMD1wbbQ.png",
  trailer: "https://www.imdb.com/title/tt26737616/",
  description: "A sci-fi thriller where a detective robot investigates a string of robot and human deaths.",
  cast: ["Atom", "Gesicht", "Dr. Tenma"],
  creator: "Naoki Urasawa (based on Osamu Tezuka’s work)",
  director: "Yasuhiro Irie",
  studio: "Studio M2",
  crunchyrollUrl: null,
  duration: "62 min",
  language: "Sub | Dub"
},
{
  id: 45,
  title: "Kaiju No. 8",
  year: 2024,
  genre: ["Animation", "Action", "Adventure", "Sci-Fi"],
  rating: 8.2,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx153288-25FBfFJzEQ5O.jpg",
  trailer: "https://www.imdb.com/title/tt21975436/",
  description: "A man gains kaiju powers and fights giant monsters threatening humanity.",
  cast: ["Kafka Hibino", "Reno", "Mina Ashiro"],
  creator: "Naoya Matsumoto",
  director: "Hirotaka Mori, Shigeyuki Miya",
  studio: "Production I.G",
  crunchyrollUrl: "https://www.crunchyroll.com/series/GG5H5XQVR/kaiju-no-8",
  duration: "24 min",
  language: "Sub | Dub"
},
{
  id: 46,
  title: "Oshi No Ko",
  year: 2023,
  genre: ["Animation", "Drama", "Fantasy", "Music", "Mystery", "Thriller"],
  rating: 8.2,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx150672-WqmmwZ4nMzAy.png",
  trailer: "https://www.imdb.com/title/tt21030032/",
  description: "A story exploring the dark, complex side of the idol industry and reincarnation.",
  cast: ["Ai Hoshino", "Aqua Hoshino", "Ruby Hoshino"],
  creator: "Aka Akasaka & Mengo Yokoyari",
  director: "Daisuke Hiramaki",
  studio: "Doga Kobo",
  crunchyrollUrl: "https://www.crunchyroll.com/series/GDKHZEJ0K/oshi-no-ko",
  duration: "24 min",
  language: "Sub | Dub"
},
{
  id: 47,
  title: "Cyberpunk: Edgerunners",
  year: 2022,
  genre: ["Animation", "Action", "Adventure", "Crime", "Drama", "Sci-Fi", "Thriller"],
  rating: 8.3,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx120377-ayZPoxiWt4Li.jpg",
  trailer: "https://www.imdb.com/title/tt12590266/",
  description: "A street kid navigates the dangers of a cyberpunk city chasing survival and ambition.",
  cast: ["David Martinez", "Lucy", "Rebecca"],
  creator: "CD Projekt Red & Studio Trigger",
  director: "Hiroyuki Imaishi",
  studio: "Studio Trigger",
  crunchyrollUrl: null,
  duration: "24 min",
  language: "Sub | Dub"
},
{
  id: 48,
  title: "Hell's Paradise: Jigokuraku",
  year: 2023,
  genre: ["Animation", "Action", "Adventure", "Drama", "Fantasy", "Thriller"],
  rating: 8.1,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx128893-Gc2t8b8M0mVu.jpg",
  trailer: "https://www.imdb.com/title/tt13911284/",
  description: "Ninjas and criminals explore a deadly island seeking immortality.",
  cast: ["Gabimaru", "Sagiri", "Yamada Asaemon"],
  creator: "Yūji Kaku",
  director: "Kaori Makita",
  studio: "MAPPA",
  crunchyrollUrl: "https://www.crunchyroll.com/series/GG5H5XQ8R/hells-paradise",
  duration: "25 min",
  language: "Sub | Dub"
},
{
  id: 49,
  title: "Toradora!",
  year: 2008,
  genre: ["Animation", "Comedy", "Drama", "Romance"],
  rating: 7.9,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx4224-PXVMBLNwy2aF.jpg",
  trailer: "https://www.imdb.com/title/tt1279024/",
  description: "Two high schoolers team up to help each other with their crushes, forming an unexpected bond.",
  cast: ["Ryuuji Takasu", "Taiga Aisaka", "Minori Kushieda"],
  creator: "Yuyuko Takemiya",
  director: "Tatsuya Ishihara",
  studio: "J.C.Staff",
  crunchyrollUrl: "https://www.crunchyroll.com/series/G63VGG2Z6/toradora",
  duration: "24 min",
  language: "Sub | Dub"
},
{
  id: 50,
  title: "Inuyasha",
  year: 2000,
  genre: ["Animation", "Action", "Adventure", "Comedy", "Drama", "Fantasy", "Romance"],
  rating: 7.9,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx249-jVBkyLnBvnRE.png",
  trailer: "https://www.imdb.com/title/tt0290223/",
  description: "A modern girl travels back in time to feudal Japan, teaming with a half-demon to collect shards of a powerful jewel.",
  cast: ["Inuyasha", "Kagome Higurashi", "Miroku", "Sango"],
  creator: "Rumiko Takahashi",
  director: "Yasuhito Kikuchi",
  studio: "Sunrise",
  crunchyrollUrl: "https://www.crunchyroll.com/series/G63VGG2KR/inuyasha",
  duration: "22 min",
  language: "Sub | Dub"
},
{
  id: 51,
  title: "Assassination Classroom",
  year: 2013,
  genre: ["Animation", "Action", "Comedy", "Fantasy", "Sci-Fi"],
  rating: 7.9,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20755-dWrhs569YGUO.jpg",
  trailer: "https://www.imdb.com/title/tt3837246/",
  description: "Students attempt to kill their super-powered teacher before he destroys the world.",
  cast: ["Koro-sensei", "Nagisa Shiota", "Karma Akabane"],
  creator: "Yūsei Matsui",
  director: "Seiji Kishi",
  studio: "Lerche",
  crunchyrollUrl: "https://www.crunchyroll.com/series/GYQ43ZQZR/assassination-classroom",
  duration: "23 min",
  language: "Sub | Dub"
},
{
  id: 52,
  title: "Bocchi the Rock!",
  year: 2022,
  genre: ["Animation", "Comedy", "Drama", "Music"],
  rating: 8.3,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx130003-HTDmeL4RGeJ4.png",
  trailer: "https://www.imdb.com/title/tt17158756/",
  description: "A shy girl finds confidence and friendship through her journey in a band.",
  cast: ["Hitori 'Bocchi' Gotou", "Nijika Ijichi", "Ryo Yamada"],
  creator: "Aki Hamaji",
  director: "Kazuya Iwata",
  studio: "CloverWorks",
  crunchyrollUrl: "https://www.crunchyroll.com/series/GZJH3D1QY/bocchi-the-rock",
  duration: "24 min",
  language: "Sub | Dub"
},
{
  id: 53,
  title: "Kuroko's Basketball",
  year: 2012,
  genre: ["Animation", "Comedy", "Sport"],
  rating: 8.2,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx11771-uvr44RAwRxPw.jpg",
  trailer: "https://www.imdb.com/title/tt2348803/",
  description: "A mysterious player aids his team in high-stakes basketball competitions.",
  cast: ["Tetsuya Kuroko", "Taiga Kagami", "Daiki Aomine", "Shintarou Midorima"],
  creator: "Tadatoshi Fujimaki",
  director: "Shunsuke Tada",
  studio: "Production I.G",
  crunchyrollUrl: "https://www.crunchyroll.com/series/G6Q4V3NGR/kurokos-basketball",
  duration: "24 min",
  language: "Sub | Dub"
},
{
  id: 54,
  title: "My Dress-Up Darling",
  year: 2022,
  genre: ["Animation", "Comedy", "Romance"],
  rating: 7.9,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx132405-qP7FQYGmNI3d.jpg",
  trailer: "https://www.imdb.com/title/tt15765670/",
  description: "A boy helps a girl fulfill her cosplay dreams, leading to friendship and romance.",
  cast: ["Wakana Gojo", "Marin Kitagawa", "Sajuna Inui"],
  creator: "Shinichi Fukuda",
  director: "Keisuke Shinohara",
  studio: "CloverWorks",
  crunchyrollUrl: "https://www.crunchyroll.com/series/G4PH0WEKE/my-dress-up-darling",
  duration: "24 min",
  language: "Sub | Dub"
},
{
  id: 55,
  title: "Psycho-Pass",
  year: 2012,
  genre: ["Animation", "Action", "Crime", "Mystery", "Sci-Fi", "Thriller"],
  rating: 8.1,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx13601-i42VFuHpqEOJ.jpg",
  trailer: "https://www.imdb.com/title/tt2379308/",
  description: "In a dystopian future, law enforcers monitor mental states to prevent crimes before they happen.",
  cast: ["Akane Tsunemori", "Shinya Kogami", "Shogo Makishima"],
  creator: "Gen Urobuchi",
  director: "Naoyoshi Shiotani",
  studio: "Production I.G",
  crunchyrollUrl: "https://www.crunchyroll.com/series/GY8V7Q5GR/psycho-pass",
  duration: "25 min",
  language: "Sub | Dub"
},
{
  id: 56,
  title: "Komi Can't Communicate",
  year: 2021,
  genre: ["Animation", "Comedy", "Drama", "Romance"],
  rating: 7.7,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx142984-nv2MWVWZ1yYH.jpg",
  trailer: "https://www.imdb.com/title/tt14626352/",
  description: "A socially anxious girl struggles to make friends, with the help of a classmate.",
  cast: ["Shouko Komi", "Hitohito Tadano", "Najimi Osana"],
  creator: "Tomohito Oda",
  director: "Ayumu Watanabe",
  studio: "OLM",
  crunchyrollUrl: null,
  duration: "24 min",
  language: "Sub | Dub"
},
{
  id: 57,
  title: "Food Wars: Shokugeki no Soma",
  year: 2015,
  genre: ["Animation", "Comedy", "Drama", "Fantasy", "Thriller"],
  rating: 8.0,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21691-9RejHe6U6vLK.jpg",
  trailer: "https://www.imdb.com/title/tt4731072/",
  description: "A talented chef competes in outrageous cooking battles to prove his skills.",
  cast: ["Soma Yukihira", "Erina Nakiri", "Takumi Aldini"],
  creator: "Yūto Tsukuda & Shun Saeki",
  director: "Yoshitomo Yonetani",
  studio: "J.C.Staff",
  crunchyrollUrl: "https://www.crunchyroll.com/series/GRDV0012R/food-wars-shokugeki-no-soma",
  duration: "24 min",
  language: "Sub | Dub"
},
{
  id: 58,
  title: "Summer Time Rendering",
  year: 2022,
  genre: ["Animation", "Drama", "Fantasy", "Mystery", "Thriller"],
  rating: 8.2,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx129201-HJBauga2be8I.png",
  trailer: "https://www.imdb.com/title/tt15686254/",
  description: "A man returns home for a funeral but uncovers a time-looping mystery.",
  cast: ["Shinpei Ajiro", "Ushio Kofune", "Mio Kofune"],
  creator: "Yasuki Tanaka",
  director: "Ayumu Watanabe",
  studio: "OLM",
  crunchyrollUrl: null,
  duration: "25 min",
  language: "Sub | Dub"
},
{
  id: 59,
  title: "Tokyo Ghoul",
  year: 2014,
  genre: ["Animation", "Action", "Drama", "Fantasy", "Horror", "Thriller"],
  rating: 7.7,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b20605-k665mVkSug8D.jpg",
  trailer: "https://www.imdb.com/title/tt3741634/",
  description: "A student becomes half-ghoul and struggles to survive in a world of predators and humans.",
  cast: ["Ken Kaneki", "Touka Kirishima", "Nishiki Nishio", "Renji Yomo"],
  creator: "Sui Ishida",
  director: "Shūhei Morita",
  studio: "Pierrot",
  crunchyrollUrl: "https://www.crunchyroll.com/series/GYE5K3GMR/tokyo-ghoul",
  duration: "24 min",
  language: "Sub | Dub"
},
{
  id: 60,
  title: "Devilman Crybaby",
  year: 2018,
  genre: ["Animation", "Action", "Drama", "Fantasy", "Horror"],
  rating: 7.6,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx98460-bLtH2c3jd6sV.png",
  trailer: "https://www.imdb.com/title/tt6660498/",
  description: "A boy merges with a demon to protect humanity from apocalyptic threats.",
  cast: ["Akira Fudo", "Ryo Asuka", "Miki Makimura"],
  creator: "Go Nagai",
  director: "Masaaki Yuasa",
  studio: "Science SARU",
  crunchyrollUrl: null,
  duration: "25 min",
  language: "Sub | Dub"
},
{
  id: 61,
  title: "Death Parade",
  year: 2015,
  genre: ["Animation", "Drama", "Mystery", "Thriller"],
  rating: 7.8,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx20931-bktYqOcxPERi.jpg",
  trailer: "https://www.imdb.com/title/tt4279012/",
  description: "Deceased individuals face judgment games that reveal the true nature of their souls.",
  cast: ["Decim", "Chiyuki", "Ginti"],
  creator: "Yuzuru Tachikawa",
  director: "Yuzuru Tachikawa",
  studio: "Madhouse",
  crunchyrollUrl: "https://www.crunchyroll.com/series/G63VGG2YR/death-parade",
  duration: "23 min",
  language: "Sub | Dub"
},
{
  id: 62,
  title: "Akame ga Kill!",
  year: 2014,
  genre: ["Animation", "Action", "Comedy", "Drama", "Fantasy", "Horror", "Thriller"],
  rating: 7.7,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20613-HXHpec4bemk5.jpg",
  trailer: "https://www.imdb.com/title/tt3742982/",
  description: "A young warrior joins assassins fighting against a corrupt empire.",
  cast: ["Tatsumi", "Akame", "Leone", "Mine"],
  creator: "Takahiro & Tetsuya Tashiro",
  director: "Takahiro Ōmori",
  studio: "White Fox",
  crunchyrollUrl: "https://www.crunchyroll.com/series/G6Q4V3NWR/akame-ga-kill",
  duration: "24 min",
  language: "Sub | Dub"
},
{
  id: 63,
  title: "Another",
  year: 2012,
  genre: ["Animation", "Drama", "Fantasy", "Horror", "Mystery", "Thriller"],
  rating: 7.5,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx11111-gvvE5bBYsyFo.png",
  trailer: "https://www.imdb.com/title/tt2176165/",
  description: "A cursed class faces a series of mysterious, deadly accidents.",
  cast: ["Kouichi Sakakibara", "Mei Misaki", "Izumi Akazawa"],
  creator: "Yukito Ayatsuji",
  director: "Tsutomu Mizushima",
  studio: "P.A. Works",
  crunchyrollUrl: "https://www.crunchyroll.com/series/G6Q4V3JWR/another",
  duration: "22 min",
  language: "Sub | Dub"
},
{
  id: 64,
  title: "KILL la KILL",
  year: 2013,
  genre: ["Animation", "Action", "Comedy", "Drama", "Fantasy", "Sci-Fi"],
  rating: 7.8,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b18679-lbkq7iYESoFW.png",
  trailer: "https://www.imdb.com/title/tt3114390/",
  description: "A girl seeks revenge against a school ruled by powerful, clothing-based abilities.",
  cast: ["Ryuko Matoi", "Satsuki Kiryuin", "Mako Mankanshoku"],
  creator: "Kazuki Nakashima & Hiroyuki Imaishi",
  director: "Hiroyuki Imaishi",
  studio: "Trigger",
  crunchyrollUrl: "https://www.crunchyroll.com/series/G63VGG2WR/kill-la-kill",
  duration: "25 min",
  language: "Sub | Dub"
},
{
  id: 65,
  title: "Re:Zero - Starting Life in Another World",
  year: 2016,
  genre: ["Animation", "Adventure", "Drama", "Fantasy", "Horror", "Mystery", "Romance", "Thriller"],
  rating: 8.1,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21355-wRVUrGxpvIQQ.jpg",
  trailer: "https://www.imdb.com/title/tt5607616/",
  description: "A boy dies repeatedly in a fantasy world, learning to change fate.",
  cast: ["Subaru Natsuki", "Emilia", "Rem", "Ram"],
  creator: "Tappei Nagatsuki",
  director: "Masaharu Watanabe",
  studio: "White Fox",
  crunchyrollUrl: "https://www.crunchyroll.com/series/G63VGG25R/rezero-starting-life-in-another-world",
  duration: "24 min",
  language: "Sub | Dub"
},
{
  id: 66,
  title: "Tokyo Revengers",
  year: 2021,
  genre: ["Animation", "Action", "Drama"],
  rating: 7.7,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx120120-cWDmnmeEntSe.jpg",
  trailer: "https://www.imdb.com/title/tt13196080/",
  description: "A man travels back in time to save his friends and alter gang-related tragedies.",
  cast: ["Takemichi Hanagaki", "Mikey", "Draken"],
  creator: "Ken Wakui",
  director: "Koichi Hatsumi",
  studio: "Liden Films",
  crunchyrollUrl: "https://www.crunchyroll.com/series/G6Q4V3M8R/tokyo-revengers",
  duration: "24 min",
  language: "Sub | Dub"
},
{
  id: 67,
  title: "Soul Eater",
  year: 2008,
  genre: ["Animation", "Action", "Adventure", "Comedy", "Fantasy", "Horror"],
  rating: 7.7,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx3588-fSMggQoFSbUI.png",
  trailer: "https://www.imdb.com/title/tt1214085/",
  description: "Students wield weapons that can transform into humans while battling evil souls.",
  cast: ["Maka Albarn", "Soul Eater", "Death the Kid"],
  creator: "Atsushi Ōkubo",
  director: "Takuya Igarashi",
  studio: "Bones",
  crunchyrollUrl: "https://www.crunchyroll.com/series/G63VGG2MR/soul-eater",
  duration: "24 min",
  language: "Sub | Dub"
},
{
  id: 68,
  title: "Noragami",
  year: 2014,
  genre: ["Animation", "Action", "Adventure", "Comedy", "Fantasy"],
  rating: 7.8,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20447-EoQXeygHaVCK.jpg",
  trailer: "https://www.imdb.com/title/tt3225270/",
  description: "A minor god struggles for recognition while helping humans and fighting phantoms.",
  cast: ["Yato", "Hiyori Iki", "Yukine"],
  creator: "Adachitoka",
  director: "Kotaro Tamura",
  studio: "Bones",
  crunchyrollUrl: "https://www.crunchyroll.com/series/G63VGG2LR/noragami",
  duration: "24 min",
  language: "Sub | Dub"
},
{
  id: 69,
  title: "Sword Art Online",
  year: 2012,
  genre: ["Animation", "Action", "Adventure", "Fantasy", "Romance", "Sci-Fi", "Thriller"],
  rating: 7.5,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx11757-SxYDUzdr9rh2.jpg",
  trailer: "https://www.imdb.com/title/tt2250192/",
  description: "Players get trapped in a VR game where dying in-game means dying in real life.",
  cast: ["Kirito", "Asuna", "Sinon", "Klein"],
  creator: "Reki Kawahara",
  director: "Tomohiko Itō",
  studio: "A-1 Pictures",
  crunchyrollUrl: "https://www.crunchyroll.com/series/GYQ43ZQGR/sword-art-online",
  duration: "24 min",
  language: "Sub | Dub"
},
{
  id: 70,
  title: "Fairy Tail",
  year: 2009,
  genre: ["Animation", "Action", "Adventure", "Comedy", "Family", "Fantasy"],
  rating: 7.9,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b6702-KI4qgSMyI8Pm.png",
  trailer: "https://www.imdb.com/title/tt1528406/",
  description: "A guild of wizards embarks on magical adventures, forming strong bonds of friendship.",
  cast: ["Natsu Dragneel", "Lucy Heartfilia", "Gray Fullbuster", "Erza Scarlet"],
  creator: "Hiro Mashima",
  director: "Shinji Ishihara",
  studio: "A-1 Pictures & Satelight",
  crunchyrollUrl: "https://www.crunchyroll.com/series/G63VGG2RR/fairy-tail",
  duration: "24 min",
  language: "Sub | Dub"
},
{
  id: 71,
  title: "Angel Beats!",
  year: 2010,
  genre: ["Animation", "Action", "Comedy", "Drama", "Family", "Fantasy"],
  rating: 7.6,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx6547-SYexAn5aFyss.png",
  trailer: "https://www.imdb.com/title/tt1639109/",
  description: "Students in the afterlife fight to reconcile regrets and find peace.",
  cast: ["Otonashi", "Yuri", "Kanade Tachibana"],
  creator: "Jun Maeda & Na-Ga (Key)",
  director: "Seiji Kishi",
  studio: "P.A. Works",
  crunchyrollUrl: "https://www.crunchyroll.com/series/GY8VEQJ4Y/angel-beats",
  duration: "25 min",
  language: "Sub | Dub"
},
{
  id: 72,
  title: "The Disastrous Life of Saiki K.",
  year: 2016,
  genre: ["Animation", "Comedy", "Fantasy"],
  rating: 8.3,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21804-As6tDLAvEvNY.jpg",
  trailer: "https://www.imdb.com/title/tt6354518/",
  description: "A psychic teen tries to live a normal life despite his overwhelming powers.",
  cast: ["Saiki Kusuo", "Nendou Riki", "Teruhashi Kokomi"],
  creator: "Shūichi Asō",
  director: "Hiroshi Kimura",
  studio: "J.C.STAFF",
  crunchyrollUrl: "https://www.crunchyroll.com/series/GYQ4MKWDY/the-disastrous-life-of-saiki-k",
  duration: "24 min",
  language: "Sub | Dub"
},
{
  id: 73,
  title: "Dororo",
  year: 2019,
  genre: ["Animation", "Action", "Adventure", "Fantasy", "Horror"],
  rating: 8.2,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx101347-TGaDwEYqLfm1.jpg",
  trailer: "https://www.imdb.com/title/tt9458304/",
  description: "A boy born from demons seeks to reclaim his stolen body parts with his companion.",
  cast: ["Hyakkimaru", "Dororo", "Tahomaru"],
  creator: "Osamu Tezuka",
  director: "Kazuhiro Furuhashi",
  studio: "MAPPA & Tezuka Productions",
  crunchyrollUrl: "https://www.crunchyroll.com/series/GY1909Z1R/dororo",
  duration: "30 min",
  language: "Sub | Dub"
},
{
  id: 74,
  title: "Yuri!!! On Ice",
  year: 2016,
  genre: ["Animation", "Comedy", "Drama", "Romance", "Sport"],
  rating: 8.2,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21709-aqPBDxJPruYR.png",
  trailer: "https://www.imdb.com/title/tt6112556/",
  description: "A figure skater aims for redemption and love while competing at the top level.",
  cast: ["Yuuri Katsuki", "Victor Nikiforov", "Yuri Plisetsky"],
  creator: "Mitsurō Kubo & Sayo Yamamoto",
  director: "Sayo Yamamoto",
  studio: "MAPPA",
  crunchyrollUrl: null,
  duration: "20 min",
  language: "Sub | Dub"
},
{
  id: 75,
  title: "Baccano!",
  year: 2007,
  genre: ["Animation", "Action", "Adventure", "Comedy", "Crime", "Fantasy", "History", "Mystery", "Thriller"],
  rating: 8.2,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx2251-tTQoWxVy4472.jpg",
  trailer: "https://www.imdb.com/title/tt1334722/",
  description: "Immortal alchemists, gangsters, and chaos intertwine in a non-linear crime saga.",
  cast: ["Isaac Dian", "Miria Harvent", "Firo Prochainezo", "Claire Stanfield"],
  creator: "Ryohgo Narita",
  director: "Takahiro Omori",
  studio: "Brain's Base",
  crunchyrollUrl: "https://www.crunchyroll.com/series/G6KHEV3NR/baccano",
  duration: "24 min",
  language: "Sub | Dub"
},
{
  id: 76,
  title: "Mushi-Shi",
  year: 2005,
  genre: ["Animation", "Drama", "Fantasy", "Horror", "Mystery", "Thriller"],
  rating: 8.5,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx457-l6cTtNgI9Bi6.png",
  trailer: "https://www.imdb.com/title/tt0807832/",
  description: "A traveling man studies mysterious creatures called Mushi and helps those affected.",
  cast: ["Ginko", "Tanyu", "Nui"],
  creator: "Yuki Urushibara",
  director: "Hiroshi Nagahama",
  studio: "Artland",
  crunchyrollUrl: null,
  duration: "25 min",
  language: "Sub | Dub"
},
{
  id: 77,
  title: "Bakemonogatari",
  year: 2009,
  genre: ["Animation", "Action", "Comedy", "Drama", "Fantasy", "Mystery", "Romance", "Thriller"],
  rating: 8.0,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx5081-9GocceQ5Z865.jpg",
  trailer: "https://www.imdb.com/title/tt1480925/",
  description: "A boy encounters girls cursed by oddities and helps them unravel supernatural mysteries.",
  cast: ["Koyomi Araragi", "Hitagi Senjougahara", "Tsubasa Hanekawa"],
  creator: "Nisio Isin & VOFAN",
  director: "Akiyuki Shinbo",
  studio: "Shaft",
  crunchyrollUrl: null,
  duration: "24 min",
  language: "Sub | Dub"
},
{
  id: 78,
  title: "Fate/Zero",
  year: 2011,
  genre: ["Animation", "Action", "Adventure", "Drama", "Fantasy", "Thriller"],
  rating: 8.2,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx10087-M4Hd9qrHGrXk.png",
  trailer: "https://www.imdb.com/title/tt2051178/",
  description: "Seven mages fight for the Holy Grail in a deadly battle royale of heroes and legends.",
  cast: ["Kiritsugu Emiya", "Saber", "Kirei Kotomine"],
  creator: "Gen Urobuchi (Type-Moon)",
  director: "Ei Aoki",
  studio: "ufotable",
  crunchyrollUrl: null,
  duration: "24 min",
  language: "Sub | Dub"
},
{
  id: 79,
  title: "Kaiji: Ultimate Survivor",
  year: 2007,
  genre: ["Animation", "Action", "Thriller"],
  rating: 8.2,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx3002-BExanPfxp888.jpg",
  trailer: "https://www.imdb.com/title/tt1202625/",
  description: "A man risks his life in high-stakes gambling games to escape debt.",
  cast: ["Kaiji Itou", "Tonegawa", "Endou"],
  creator: "Nobuyuki Fukumoto",
  director: "Yūzō Satō",
  studio: "Madhouse",
  crunchyrollUrl: null,
  duration: "23 min",
  language: "Sub | Dub"
},
{
  id: 80,
  title: "Puella Magi Madoka Magica",
  year: 2011,
  genre: ["Animation", "Action", "Adventure", "Drama", "Fantasy", "Horror", "Mystery", "Thriller"],
  rating: 8.2,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx9756-QnUGwlwwnsuN.jpg",
  trailer: "https://www.imdb.com/title/tt1773185/",
  description: "Young girls make magical contracts with dark, unforeseen consequences.",
  cast: ["Madoka Kaname", "Homura Akemi", "Sayaka Miki", "Mami Tomoe"],
  creator: "Magica Quartet",
  director: "Akiyuki Shinbo",
  studio: "Shaft",
  crunchyrollUrl: null,
  duration: "24 min",
  language: "Sub | Dub"
},
{
  id: 81,
  title: "Hellsing Ultimate",
  year: 2006,
  genre: ["Animation", "Action", "Fantasy", "Horror"],
  rating: 8.2,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx777-F6547pSAR2Zd.jpg",
  trailer: "https://www.imdb.com/title/tt0495212/",
  description: "A vampire organization battles supernatural threats in modern England.",
  cast: ["Alucard", "Integra Hellsing", "Seras Victoria"],
  creator: "Kouta Hirano",
  director: "Tomokazu Tokoro",
  studio: "Satelight & Madhouse",
  crunchyrollUrl: "https://www.crunchyroll.com/series/G6Q4V3KMR/hellsing-ultimate",
  duration: "50 min",
  language: "Sub | Dub"
},
{
  id: 82,
  title: "Laid-Back Camp",
  year: 2018,
  genre: ["Animation", "Adventure", "Comedy"],
  rating: 8.1,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx98444-Vzysp1EsrzgD.jpg",
  trailer: "https://www.imdb.com/title/tt7742120/",
  description: "Girls enjoy peaceful, cozy camping adventures in Japan’s scenic spots.",
  cast: ["Nadeshiko Kagamihara", "Rin Shima", "Ena Saito"],
  creator: "Afro",
  director: "Yoshiaki Kyogoku",
  studio: "C-Station",
  crunchyrollUrl: "https://www.crunchyroll.com/series/G63VGG24R/laid-back-camp",
  duration: "24 min",
  language: "Sub | Dub"
},
{
  id: 83,
  title: "Showa Genroku Rakugo Shinju",
  year: 2016,
  genre: ["Animation", "Comedy", "Drama"],
  rating: 8.3,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20972-95dyLz6lkCZ8.jpg",
  trailer: "https://www.imdb.com/title/tt5419278/",
  description: "A story of love, art, and tragedy in the world of Japanese storytelling.",
  cast: ["Yakumo Yurakutei", "Sukeroku", "Miyokichi"],
  creator: "Haruko Kumota",
  director: "Mamoru Hatakeyama",
  studio: "Studio Deen",
  crunchyrollUrl: "https://www.crunchyroll.com/series/G63VGG2Z6/showa-genroku-rakugo-shinju",
  duration: "26 min",
  language: "Sub | Dub"
},
{
  id: 84,
  title: "When They Cry",
  year: 2006,
  genre: ["Animation", "Drama", "Horror", "Mystery", "Thriller"],
  rating: 7.8,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx934-wjMlVEl4CWwg.jpg",
  trailer: "https://www.imdb.com/title/tt0845738/",
  description: "A mysterious town hides dark secrets, leading to murders and suspenseful revelations.",
  cast: ["Keiichi Maebara", "Rena Ryugu", "Mion Sonozaki"],
  creator: "Ryukishi07",
  director: "Chiaki Kon",
  studio: "Studio Deen",
  crunchyrollUrl: "https://www.crunchyroll.com/series/GY8V7Q3Z6/higurashi-when-they-cry",
  duration: "24 min",
  language: "Sub | Dub"
},
{
  id: 85,
  title: "Odd Taxi",
  year: 2021,
  genre: ["Animation", "Comedy", "Crime", "Drama", "Mystery", "Thriller"],
  rating: 8.4,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx128547-nNekWTKqmvEi.jpg",
  trailer: "https://www.imdb.com/title/tt14134550/",
  description: "A taxi driver gets entangled in a criminal mystery through unusual encounters.",
  cast: ["Odokawa", "Shirakawa", "Dobu"],
  creator: "Kazuya Konomoto",
  director: "Baku Kinoshita",
  studio: "OLM & P.I.C.S.",
  crunchyrollUrl: "https://www.crunchyroll.com/series/G63VGG2Y6/odd-taxi",
  duration: "23 min",
  language: "Sub | Dub"
},
{
  id: 86,
  title: "Konosuba: God's Blessing on This Wonderful World!",
  year: 2016,
  genre: ["Animation", "Adventure", "Comedy", "Fantasy"],
  rating: 7.8,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21574-CTRsdAGe4mDp.png",
  trailer: "https://www.imdb.com/title/tt5370118/",
  description: "A boy dies and is sent to a fantasy world with eccentric companions.",
  cast: ["Kazuma Satou", "Aqua", "Megumin", "Darkness"],
  creator: "Natsume Akatsuki",
  director: "Takaomi Kanasaki",
  studio: "Studio Deen",
  crunchyrollUrl: "https://www.crunchyroll.com/series/G63VGG2ZK/konosuba-gods-blessing-on-this-wonderful-world",
  duration: "24 min",
  language: "Sub | Dub"
},
{
  id: 87,
  title: "Ping Pong the Animation",
  year: 2014,
  genre: ["Animation", "Drama", "Sport"],
  rating: 8.6,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20607-fIOxVISIl0HY.jpg",
  trailer: "https://www.imdb.com/title/tt3592032/",
  description: "Two friends pursue competitive table tennis while facing personal growth.",
  cast: ["Peco", "Smile", "Dragon"],
  creator: "Taiyo Matsumoto",
  director: "Masaaki Yuasa",
  studio: "Tatsunoko Production",
  crunchyrollUrl: null,
  duration: "23 min",
  language: "Sub | Dub"
},
{
  id: 88,
  title: "March Comes in Like a Lion",
  year: 2016,
  genre: ["Animation", "Comedy", "Drama", "Romance"],
  rating: 8.2,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21366-0wrYK0kjKeFn.jpg",
  trailer: "https://www.imdb.com/title/tt6074794/",
  description: "A young shogi prodigy navigates depression, relationships, and self-discovery.",
  cast: ["Rei Kiriyama", "Akari Kawamoto", "Kyoko Kawamoto"],
  creator: "Chica Umino",
  director: "Akiyuki Shinbo",
  studio: "Shaft",
  crunchyrollUrl: "https://www.crunchyroll.com/series/G63VGG25Y/march-comes-in-like-a-lion",
  duration: "25 min",
  language: "Sub | Dub"
},
{
  id: 89,
  title: "Welcome to the N.H.K.",
  year: 2006,
  genre: ["Animation", "Comedy", "Drama", "Romance", "Thriller"],
  rating: 8.2,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1210-2XotjcgqdcaX.jpg",
  trailer: "https://www.imdb.com/title/tt0857297/",
  description: "A recluse believes in conspiracies while facing social anxiety and self-delusion.",
  cast: ["Tatsuhiro Satou", "Misaki Nakahara", "Kaoru Yamazaki"],
  creator: "Tatsuhiko Takimoto",
  director: "Yusuke Yamamoto",
  studio: "Gonzo",
  crunchyrollUrl: null,
  duration: "24 min",
  language: "Sub | Dub"
},
{
  id: 90,
  title: "The Melancholy of Haruhi Suzumiya",
  year: 2006,
  genre: ["Animation", "Comedy", "Drama", "Fantasy", "Sci-Fi"],
  rating: 7.7,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx849-wQM3GqLvl62P.png",
  trailer: "https://www.imdb.com/title/tt0816407/",
  description: "A high school girl unknowingly alters reality with her whims.",
  cast: ["Haruhi Suzumiya", "Kyon", "Yuki Nagato", "Mikuru Asahina"],
  creator: "Nagaru Tanigawa",
  director: "Tatsuya Ishihara",
  studio: "Kyoto Animation",
  crunchyrollUrl: "https://www.crunchyroll.com/series/G63VGG29R/the-melancholy-of-haruhi-suzumiya",
  duration: "24 min",
  language: "Sub | Dub"
},
{
  id: 91,
  title: "The Tatami Galaxy",
  year: 2010,
  genre: ["Animation", "Comedy", "Drama", "Mystery", "Romance"],
  rating: 8.4,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx7785-aTjIhsYva8cJ.jpg",
  trailer: "https://www.imdb.com/title/tt1847445/",
  description: "A college student explores alternate life paths through surreal and humorous scenarios.",
  cast: ["Watashi", "Ozu", "Akashi", "Higuchi"],
  creator: "Tomihiko Morimi",
  director: "Masaaki Yuasa",
  studio: "Madhouse",
  crunchyrollUrl: "https://www.crunchyroll.com/series/GY8VJ3V2Y/the-tatami-galaxy",
  duration: "23 min",
  language: "Sub | Dub"
},
{
  id: 92,
  title: "A Place Further Than the Universe",
  year: 2018,
  genre: ["Animation", "Adventure", "Comedy", "Drama"],
  rating: 8.1,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx99426-ti5BL69Ip3kZ.png",
  trailer: "https://www.imdb.com/title/tt8366884/",
  description: "Girls embark on a journey to Antarctica in search of adventure and meaning.",
  cast: ["Mari Tamaki", "Shirase Kobuchizawa", "Hinata Kuraue"],
  creator: "Jukki Hanada (original concept)",
  director: "Atsuko Ishizuka",
  studio: "Madhouse",
  crunchyrollUrl: "https://www.crunchyroll.com/series/G6Q4V38PR/a-place-further-than-the-universe",
  duration: "23 min",
  language: "Sub | Dub"
},
{
  id: 93,
  title: "Fruits Basket",
  year: 2019,
  genre: ["Animation", "Comedy", "Drama", "Fantasy", "Romance"],
  rating: 8.5,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105334-AZwEdMu4KFtV.jpg",
  trailer: "https://www.imdb.com/title/tt9304350/",
  description: "A modern reboot that faithfully adapts the entire manga with updated animation.",
  cast: ["Tohru Honda", "Kyo Sohma", "Yuki Sohma", "Shigure Sohma"],
  creator: "Natsuki Takaya",
  director: "Yoshihide Ibata",
  studio: "TMS Entertainment",
  crunchyrollUrl: "https://www.crunchyroll.com/series/GY8VM8N9Y/fruits-basket",
  duration: "24 min",
  language: "Sub | Dub"
},
{
  id: 94,
  title: "Fruits Basket",
  year: 2001,
  genre: ["Animation", "Comedy", "Drama", "Fantasy", "Romance"],
  rating: 7.8,
  poster: "https://cdn.myanimelist.net/images/anime/4/75204.jpg",
  trailer: "https://www.imdb.com/title/tt0328738/",
  description: "The original adaptation with a shorter, different ending than the manga.",
  cast: ["Tohru Honda", "Kyo Sohma", "Yuki Sohma"],
  creator: "Natsuki Takaya",
  director: "Akitaro Daichi",
  studio: "Studio Deen",
  crunchyrollUrl: "https://www.crunchyroll.com/series/GY8VJ3J2R/fruits-basket-2001",
  duration: "24 min",
  language: "Sub | Dub"
},
{
  id: 95,
  title: "Hyouka",
  year: 2012,
  genre: ["Animation", "Comedy", "Drama", "Family", "Mystery"],
  rating: 7.7,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx12189-zj5AWUYO53Fv.jpg",
  trailer: "https://www.imdb.com/title/tt2340841/",
  description: "A boy solves everyday mysteries at school, uncovering deeper human stories.",
  cast: ["Houtarou Oreki", "Eru Chitanda", "Satoshi Fukube", "Mayaka Ibara"],
  creator: "Honobu Yonezawa",
  director: "Yasuhiro Takemoto",
  studio: "Kyoto Animation",
  crunchyrollUrl: null,
  duration: "24 min",
  language: "Sub | Dub"
},
{
  id: 96,
  title: "86",
  year: 2021,
  genre: ["Animation", "Action", "Drama", "Sci-Fi", "War"],
  rating: 8.2,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx116589-qT34qzsZtk9V.jpg",
  trailer: "https://www.imdb.com/title/tt13718450/",
  description: "Soldiers fight in unmanned mechas while uncovering government injustice and prejudice.",
  cast: ["Shinei Nouzen", "Vladilena Milizé", "Raiden Shuga"],
  creator: "Asato Asato",
  director: "Toshimasa Ishii",
  studio: "A-1 Pictures",
  crunchyrollUrl: "https://www.crunchyroll.com/series/GQWH0M73M/86-eighty-six",
  duration: "24 min",
  language: "Sub | Dub"
},
{
  id: 97,
  title: "Bungo Stray Dogs",
  year: 2016,
  genre: ["Animation", "Action", "Comedy", "Crime", "Fantasy", "Mystery", "Thriller"],
  rating: 7.8,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21311-hAXyT8Yoh6G9.jpg",
  trailer: "https://www.imdb.com/title/tt5679720/",
  description: "Detective agency members with literary-inspired powers solve supernatural cases.",
  cast: ["Atsushi Nakajima", "Osamu Dazai", "Doppo Kunikida", "Ranpo Edogawa"],
  creator: "Kafka Asagiri",
  director: "Takuya Igarashi",
  studio: "Bones",
  crunchyrollUrl: "https://www.crunchyroll.com/series/GR75Q73MR/bungo-stray-dogs",
  duration: "24 min",
  language: "Sub | Dub"
},
{
  id: 98,
  title: "Bunny Drop",
  year: 2011,
  genre: ["Animation", "Comedy", "Drama"],
  rating: 8.2,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx10162-w4SG5oQSQwMn.jpg",
  trailer: "https://www.imdb.com/title/tt2061551/",
  description: "A man adopts his grandfather’s illegitimate daughter, learning the joys and struggles of parenthood.",
  cast: ["Daikichi Kawachi", "Rin Kaga"],
  creator: "Yumi Unita",
  director: "Kanta Kamei",
  studio: "Production I.G",
  crunchyrollUrl: null,
  duration: "24 min",
  language: "Sub | Dub"
},
{
  id: 99,
  title: "That Time I Got Reincarnated as a Slime",
  year: 2018,
  genre: ["Animation", "Action", "Adventure", "Comedy", "Fantasy"],
  rating: 8.0,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx101280-tDxCVJm714nt.jpg",
  trailer: "https://www.imdb.com/title/tt9054364/",
  description: "A man is reincarnated as a powerful slime in a fantasy world and builds a nation.",
  cast: ["Rimuru Tempest", "Shizu", "Benimaru", "Shion"],
  creator: "Fuse",
  director: "Yasuhito Kikuchi",
  studio: "8bit",
  crunchyrollUrl: "https://www.crunchyroll.com/series/GYZJ43JMR/that-time-i-got-reincarnated-as-a-slime",
  duration: "25 min",
  language: "Sub | Dub"
},
{
  id: 100,
  title: "Vivy: Fluorite Eye's Song",
  year: 2021,
  genre: ["Animation", "Action", "Adventure", "Drama", "Music", "Sci-Fi", "Thriller"],
  rating: 7.9,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx128546-UIwyhuhjxmL0.jpg",
  trailer: "https://www.imdb.com/title/tt13851958/",
  description: "An AI singer fights to prevent a war between humans and AIs.",
  cast: ["Vivy", "Matsumoto", "Elizabeth"],
  creator: "Tappei Nagatsuki & Eiji Umehara",
  director: "Shinpei Ezaki",
  studio: "Wit Studio",
  crunchyrollUrl: "https://www.crunchyroll.com/series/GG5H5XQ5R/vivy-fluorite-eyes-song",
  duration: "25 min",
  language: "Sub | Dub"
},
{
  id: 101,
  title: "Black Lagoon",
  year: 2006,
  genre: ["Animation", "Action", "Adventure", "Crime", "Drama", "Thriller"],
  rating: 7.9,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx889-4S7N2ciq2cwA.png",
  trailer: "https://www.imdb.com/title/tt0962826/",
  description: "Mercenaries navigate crime, piracy, and danger in Southeast Asia.",
  cast: ["Rock", "Revy", "Dutch", "Benny"],
  creator: "Rei Hiroe",
  director: "Sunao Katabuchi",
  studio: "Madhouse",
  crunchyrollUrl: "https://www.crunchyroll.com/series/G6Q4V3N0R/black-lagoon",
  duration: "25 min",
  language: "Sub | Dub"
},
{
  id: 102,
  title: "Nichijou: My Ordinary Life",
  year: 2011,
  genre: ["Animation", "Comedy", "Sci-Fi"],
  rating: 8.3,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx10165-tw8Cz7K9tfVJ.png",
  trailer: "https://www.imdb.com/title/tt2098380/",
  description: "A slice-of-life comedy about absurd, everyday happenings in a normal town.",
  cast: ["Yuuko Aioi", "Mio Naganohara", "Mai Minakami", "Nano Shinonome"],
  creator: "Keiichi Arawi",
  director: "Tatsuya Ishihara",
  studio: "Kyoto Animation",
  crunchyrollUrl: "https://www.crunchyroll.com/series/G6Q4V3N3R/nichijou-my-ordinary-life",
  duration: "24 min",
  language: "Sub | Dub"
},
{
  id: 103,
  title: "Mononoke",
  year: 2007,
  genre: ["Animation", "Fantasy", "Horror", "Mystery"],
  rating: 8.1,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx2246-WHkSkgyuxfgD.jpg",
  trailer: "https://www.imdb.com/title/tt1992935/",
  description: "A medicine seller exorcises spirits by uncovering their tragic pasts.",
  cast: ["Medicine Seller", "Kusuriuri", "Kubei"],
  creator: "Original Work",
  director: "Kenji Nakamura",
  studio: "Toei Animation",
  crunchyrollUrl: null,
  duration: "25 min",
  language: "Sub | Dub"
},
{
  id: 104,
  title: "Golden Kamuy",
  year: 2018,
  genre: ["Animation", "Action", "Adventure", "History", "Western"],
  rating: 8.0,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx99699-mBCjpoWpAVGX.jpg",
  trailer: "https://www.imdb.com/title/tt8220524/",
  description: "A war veteran and an Ainu girl search for hidden gold in harsh wilderness.",
  cast: ["Saichi Sugimoto", "Asirpa", "Hyakunosuke Ogata"],
  creator: "Satoru Noda",
  director: "Hitoshi Nanba",
  studio: "Geno Studio",
  crunchyrollUrl: "https://www.crunchyroll.com/series/GYQWNXPWY/golden-kamuy",
  duration: "24 min",
  language: "Sub | Dub"
},
{
  id: 105,
  title: "FLCL",
  year: 2000,
  genre: ["Animation", "Action", "Comedy", "Drama", "Sci-Fi"],
  rating: 8.1,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx227-qOB9ZhVvNnqO.jpg",
  trailer: "https://www.imdb.com/title/tt0279077/",
  description: "A boy’s life is turned upside down when a mysterious girl arrives on a Vespa.",
  cast: ["Naota Nandaba", "Haruko Haruhara", "Mamimi Samejima"],
  creator: "Gainax & Production I.G",
  director: "Kazuya Tsurumaki",
  studio: "Gainax / Production I.G",
  crunchyrollUrl: null,
  duration: "30 min",
  language: "Sub | Dub"
},
{
  id: 106,
  title: "Ouran High School Host Club",
  year: 2006,
  genre: ["Animation", "Comedy", "Romance"],
  rating: 8.1,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx853-fiUtW8yohsSF.jpg",
  trailer: "https://www.imdb.com/title/tt0816397/",
  description: "A scholarship student navigates the eccentricities of a school host club.",
  cast: ["Haruhi Fujioka", "Tamaki Suoh", "Kyoya Ootori", "Hikaru Hitachiin"],
  creator: "Bisco Hatori",
  director: "Takuya Igarashi",
  studio: "Bones",
  crunchyrollUrl: "https://www.crunchyroll.com/series/GY8V7Q4MR/ouran-high-school-host-club",
  duration: "24 min",
  language: "Sub | Dub"
},
{
  id: 107,
  title: "Rascal Does Not Dream of Bunny Girl Senpai",
  year: 2018,
  genre: ["Animation", "Drama", "Fantasy", "Mystery", "Romance", "Thriller"],
  rating: 8.0,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx101291-wfEdgPqtfU0l.jpg",
  trailer: "https://www.imdb.com/title/tt8939398/",
  description: "A boy helps girls affected by strange “adolescent syndrome” phenomena.",
  cast: ["Sakuta Azusagawa", "Mai Sakurajima", "Kaede Azusagawa"],
  creator: "Hajime Kamoshida",
  director: "Sōichi Masui",
  studio: "CloverWorks",
  crunchyrollUrl: "https://www.crunchyroll.com/series/GY2P9EN26/rascal-does-not-dream-of-bunny-girl-senpai",
  duration: "24 min",
  language: "Sub | Dub"
},
{
  id: 108,
  title: "Solo Leveling",
  year: 2024,
  genre: ["Animation", "Action", "Adventure", "Fantasy"],
  rating: 8.6,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx151807-it355ZgzquUd.png",
  trailer: "https://www.imdb.com/title/tt21029876/",
  description: "A weak hunter gains immense power and faces monsters threatening humanity.",
  cast: ["Sung Jin-Woo", "Cha Hae-In", "Thomas Andre"],
  creator: "Chugong",
  director: "Shunsuke Nakashige",
  studio: "A-1 Pictures",
  crunchyrollUrl: "https://www.crunchyroll.com/series/GQWH0M7N1/solo-leveling",
  duration: "24 min",
  language: "Sub | Dub"
},
{
  id: 109,
  title: "My Teen Romantic Comedy SNAFU",
  year: 2013,
  genre: ["Animation", "Comedy", "Drama", "Romance"],
  rating: 7.9,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx14813-3mNvcKNEQcDs.jpg",
  trailer: "https://www.imdb.com/title/tt2730720/",
  description: "A cynical teen navigates friendships and romantic entanglements.",
  cast: ["Hachiman Hikigaya", "Yukino Yukinoshita", "Yui Yuigahama"],
  creator: "Wataru Watari",
  director: "Ai Yoshimura",
  studio: "Brain's Base",
  crunchyrollUrl: "https://www.crunchyroll.com/series/GY8VJ3G3R/my-teen-romantic-comedy-snafu",
  duration: "24 min",
  language: "Sub | Dub"
},
{
  id: 110,
  title: "Fire Force",
  year: 2019,
  genre: ["Animation", "Action", "Drama", "Fantasy"],
  rating: 7.6,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105310-2PKUvoaA6fTn.jpg",
  trailer: "https://www.imdb.com/title/tt9307686/",
  description: "Firefighters with pyrokinetic powers combat spontaneous human combustions.",
  cast: ["Shinra Kusakabe", "Arthur Boyle", "Tamaki Kotatsu", "Maki Oze"],
  creator: "Atsushi Ōkubo",
  director: "Yuki Yase",
  studio: "David Production",
  crunchyrollUrl: "https://www.crunchyroll.com/series/GYQWNXP36/fire-force",
  duration: "23 min",
  language: "Sub | Dub"
},
{
  id: 111,
  title: "Overlord",
  year: 2015,
  genre: ["Animation", "Action", "Adventure", "Fantasy", "Sci-Fi"],
  rating: 7.6,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20832-vUNm5zrYWifc.jpg",
  trailer: "https://www.imdb.com/title/tt4869896/",
  description: "A gamer is trapped in a game world, ruling as an all-powerful overlord.",
  cast: ["Ainz Ooal Gown", "Albedo", "Shalltear Bloodfallen", "Demiurge"],
  creator: "Kugane Maruyama",
  director: "Naoyuki Itou",
  studio: "Madhouse",
  crunchyrollUrl: "https://www.crunchyroll.com/series/G6NQ5DWM6/overlord",
  duration: "30 min",
  language: "Sub | Dub"
},
{
  id: 112,
  title: "Durarara!!",
  year: 2010,
  genre: ["Animation", "Comedy", "Crime", "Drama", "Thriller"],
  rating: 7.8,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx6746-3LTwM95Uqeoa.png",
  trailer: "https://www.imdb.com/title/tt1584000/",
  description: "Strange events and eccentric characters intertwine in modern-day Ikebukuro.",
  cast: ["Mikado Ryuugamine", "Anri Sonohara", "Izaya Orihara", "Shizuo Heiwajima"],
  creator: "Ryohgo Narita",
  director: "Takahiro Omori",
  studio: "Brain's Base",
  crunchyrollUrl: "https://www.crunchyroll.com/series/GY1907N0Y/durarara",
  duration: "24 min",
  language: "Sub | Dub"
},
{
  id: 113,
  title: "Baki",
  year: 2016,
  genre: ["Animation", "Action", "Drama", "Sport"],
  rating: 6.8,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx97888-tdZ1r7qN1DRs.jpg",
  trailer: "https://www.imdb.com/title/tt6357658/",
  description: "Fighters engage in intense, brutal martial arts battles for supremacy.",
  cast: ["Baki Hanma", "Yujiro Hanma", "Kaioh Retsu", "Biscuit Oliva"],
  creator: "Keisuke Itagaki",
  director: "Toshiki Hirano",
  studio: "TMS Entertainment",
  crunchyrollUrl: null,
  duration: "45 min",
  language: "Sub | Dub"
},
{
  id: 114,
  title: "Nisekoi",
  year: 2014,
  genre: ["Animation", "Comedy", "Romance"],
  rating: 7.2,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx18897-G2Fx2ZACsXBU.jpg",
  trailer: "https://www.imdb.com/title/tt3115338/",
  description: "A fake romance between heirs of rival gangs complicates high school life.",
  cast: ["Raku Ichijou", "Chitoge Kirisaki", "Kosaki Onodera", "Marika Tachibana"],
  creator: "Naoshi Komi",
  director: "Akiyuki Shinbo",
  studio: "Shaft",
  crunchyrollUrl: "https://www.crunchyroll.com/series/GY8V7Q3ER/nisekoi",
  duration: "25 min",
  language: "Sub | Dub"
},
{
  id: 115,
  title: "Mashle: Magic and Muscles",
  year: 2023,
  genre: ["Animation", "Action", "Adventure", "Comedy", "Fantasy"],
  rating: 7.5,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx151801-XxVf22Le6C8o.png",
  trailer: "https://www.imdb.com/title/tt21209804/",
  description: "A magic-less boy uses raw strength to succeed in a magical academy.",
  cast: ["Mash Burnedead", "Finn Ames", "Lemon Irvine"],
  creator: "Hajime Kōmoto",
  director: "Tomonori Tanaka",
  studio: "A-1 Pictures",
  crunchyrollUrl: "https://www.crunchyroll.com/series/GG5H5XQJ8/mashle-magic-and-muscles",
  duration: "23 min",
  language: "Sub | Dub"
},
{
  id: 116,
  title: "Tomo-chan Is a Girl!",
  year: 2023,
  genre: ["Animation", "Comedy", "Drama", "Romance"],
  rating: 7.5,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx151806-IAMi2ctI5xJI.jpg",
  trailer: "https://www.imdb.com/title/tt21210326/",
  description: "A tomboyish girl struggles to get her crush to recognize her feelings.",
  cast: ["Tomo Aizawa", "Junichirou Kubota", "Misuzu Gundo"],
  creator: "Fumita Yanagida",
  director: "Shin Oonuma",
  studio: "Lay-duce",
  crunchyrollUrl: null,
  duration: "23 min",
  language: "Sub | Dub"
},
{
  id: 117,
  title: "Darker Than Black",
  year: 2007,
  genre: ["Animation", "Action", "Crime", "Drama", "Fantasy", "Horror", "Mystery", "Sci-Fi", "Thriller"],
  rating: 7.7,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b2025-ZKVteVzUyFLH.png",
  trailer: "https://www.imdb.com/title/tt0995941/",
  description: "Contractors with supernatural powers undertake covert missions in a dangerous world.",
  cast: ["Hei", "Yin", "Mao"],
  creator: "Tensai Okamura",
  director: "Tensai Okamura",
  studio: "Bones",
  crunchyrollUrl: null,
  duration: "24 min",
  language: "Sub | Dub"
},
{
  id: 118,
  title: "Astra Lost in Space",
  year: 2019,
  genre: ["Animation", "Adventure", "Mystery", "Sci-Fi"],
  rating: 7.9,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx107663-gfIpy1h36kUL.jpg",
  trailer: "https://www.imdb.com/title/tt10483250/",
  description: "Teens struggle to survive while drifting across space after a mysterious accident.",
  cast: ["Kanata Hoshijima", "Aries Spring", "Quitterie Raffaëlli"],
  creator: "Kenta Shinohara",
  director: "Masaomi Andō",
  studio: "Lerche",
  crunchyrollUrl: null,
  duration: "23 min",
  language: "Sub | Dub"
},
{
  id: 119,
  title: "Beyblade",
  year: 2001,
  genre: ["Animation", "Action", "Family", "Fantasy", "Sci-Fi", "Sport", "Thriller"],
  rating: 6.9,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b288-QLBdXz8n34yP.png",
  trailer: "https://www.imdb.com/title/tt0328783/",
  description: "Kids battle in high-stakes spinning top tournaments with competitive spirit.",
  cast: ["Tyson Granger", "Kai Hiwatari", "Max Tate", "Ray Kon"],
  creator: "Takao Aoki",
  director: "Kunihisa Sugishima",
  studio: "Madhouse",
  crunchyrollUrl: null,
  duration: "30 min",
  language: "Sub | Dub"
},
{
  id: 120,
  title: "Rent-a-Girlfriend",
  year: 2020,
  genre: ["Animation", "Comedy", "Romance"],
  rating: 6.8,
  poster: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx113813-SnljeXpU3Pw7.jpg",
  trailer: "https://www.imdb.com/title/tt11448214/",
  description: "A college student rents a girlfriend, leading to complicated romantic entanglements.",
  cast: ["Kazuya Kinoshita", "Chizuru Mizuhara", "Ruka Sarashina", "Sumi Sakurasawa"],
  creator: "Reiji Miyajima",
  director: "Kazuomi Koga",
  studio: "TMS Entertainment",
  crunchyrollUrl: null,
  duration: "24 min",
  language: "Sub | Dub"
},
{
  id: 121,
  title: "Demon Slayer: Infinity Castle Arc",
  year: 2025,
  genre: ["Animation", "Action", "Adventure", "Fantasy", "Thriller"],
  rating: 8.6,
  poster: "https://preview.redd.it/demon-slayer-infinity-castle-movie-releases-on-september-12-v0-akpwvtjdowme1.jpeg?width=1080&crop=smart&auto=webp&s=2958785026bcee1b57458ac9337626a97c68bda0",
  trailer: "https://www.imdb.com/title/tt32820897/",
  description: "In the Infinity Castle Arc, Tanjiro and his allies face their greatest battle yet against Muzan and the Twelve Kizuki.",
  cast: ["Tanjiro Kamado", "Nezuko Kamado", "Zenitsu Agatsuma", "Inosuke Hashibira"],
  creator: "Koyoharu Gotouge",
  director: "Haruo Sotozaki",
  studio: "ufotable",
  crunchyrollUrl: "https://www.crunchyroll.com/series/GY5P48XEY/demon-slayer-kimetsu-no-yaiba",
  duration: "25 min",
  language: "Sub | Dub"
}
];

// Initialize anime database from localStorage
function initializeAnimeDatabase() {
    const savedAnime = localStorage.getItem('animeDatabase');
    if (savedAnime) {
        // Load the complete saved database
        animeDatabase = JSON.parse(savedAnime);
        console.log(`Loaded complete anime database from localStorage: ${animeDatabase.length} anime`);
    } else {
        // First time - save default anime to localStorage
        localStorage.setItem('animeDatabase', JSON.stringify(animeDatabase));
        console.log('Initialized anime database in localStorage');
    }
}

// Function to refresh database from localStorage (for debugging)
function refreshDatabaseFromStorage() {
    const savedAnime = localStorage.getItem('animeDatabase');
    if (savedAnime) {
        animeDatabase = JSON.parse(savedAnime);
        console.log('Database refreshed from localStorage:', animeDatabase.length, 'anime');
        loadAnimeGrid();
        loadAdminAnimeList();
    }
}

// Test function to manually add anime (for debugging)
function testAddAnime() {
    const testAnime = {
        id: Math.max(...animeDatabase.map(a => a.id)) + 1,
        title: "Test Anime",
        year: 2024,
        genre: ["Test", "Action"],
        rating: 8.5,
        poster: "https://via.placeholder.com/300x400",
        trailer: "https://www.youtube.com/watch?v=test",
        description: "This is a test anime for debugging purposes",
        cast: ["Test Character 1", "Test Character 2"],
        creator: "Test Creator",
        director: "Test Director",
        studio: "Test Studio",
        duration: "24 min",
        language: "Sub | Dub",
        crunchyrollUrl: "https://www.crunchyroll.com/"
    };
    
    console.log('Adding test anime:', testAnime);
    animeDatabase.push(testAnime);
    localStorage.setItem('animeDatabase', JSON.stringify(animeDatabase));
    loadAnimeGrid();
    loadAdminAnimeList();
    showNotification('Test anime added successfully!', 'success');
}

// Simple test function to check if form is working
function testFormSubmission() {
    console.log('Testing form submission...');
    
    // Fill form with test data
    const titleField = document.getElementById('animeTitle');
    const yearField = document.getElementById('animeYear');
    const genresField = document.getElementById('animeGenres');
    const ratingField = document.getElementById('animeRating');
    const posterField = document.getElementById('animePoster');
    const trailerField = document.getElementById('animeTrailer');
    const descriptionField = document.getElementById('animeDescription');
    
    if (titleField) titleField.value = "Test Anime " + Date.now();
    if (yearField) yearField.value = "2024";
    if (genresField) genresField.value = "Action, Adventure";
    if (ratingField) ratingField.value = "8.5";
    if (posterField) posterField.value = "https://via.placeholder.com/300x400";
    if (trailerField) trailerField.value = "https://www.youtube.com/watch?v=test";
    if (descriptionField) descriptionField.value = "This is a test anime";
    
    console.log('Form filled with test data');
    
    // Try to submit the form
    const form = document.getElementById('addAnimeForm');
    if (form) {
        console.log('Form found, attempting submission...');
        form.dispatchEvent(new Event('submit'));
    } else {
        console.error('Form not found!');
    }
}

// Test function for user deletion
function testDeleteUser() {
    console.log('Testing user deletion...');
    console.log('Current users:', users);
    
    if (users.length > 0) {
        const testUserId = users[0].id;
        console.log('Testing deletion of user with ID:', testUserId);
        deleteUser(testUserId);
    } else {
        console.log('No users to delete');
        showNotification('No users available to delete', 'info');
    }
}

// Test function to add a test user
function testAddUser() {
    const testUser = {
        id: Date.now(),
        username: 'testuser' + Date.now(),
        email: 'test@example.com',
        password: 'test123',
        isAdmin: false
    };
    
    users.push(testUser);
    localStorage.setItem('users', JSON.stringify(users));
    loadAdminUserList();
    showNotification('Test user added successfully!', 'success');
    console.log('Test user added:', testUser);
}

// User Management
let currentUser = null;
let users = JSON.parse(localStorage.getItem('users')) || [];
let watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];

// Notification System
let notifications = JSON.parse(localStorage.getItem('notifications')) || [];

// Create default admin account if it doesn't exist
if (!users.find(u => u.username === 'admin')) {
    const defaultAdmin = {
        id: 1,
        username: 'admin',
        email: 'admin@weebly.com',
        password: 'admin123',
        isAdmin: true
    };
    users.push(defaultAdmin);
    localStorage.setItem('users', JSON.stringify(users));
    console.log('Default admin account created');
} else {
    console.log('Admin account already exists');
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimeDatabase();
    initializeApp();
    setupEventListeners();
    loadHeroCarousel();
    loadAnimeGrid();
    loadRecentlyViewed();
    loadSimulcastCarousel();
    initializeAdminPanel();
    initializeNotificationSystem();
    
    // Make test functions globally available
    window.testAddAnime = testAddAnime;
    window.testFormSubmission = testFormSubmission;
    window.testDeleteUser = testDeleteUser;
    window.testAddUser = testAddUser;
    window.refreshDatabaseFromStorage = refreshDatabaseFromStorage;
    window.showAddAnimeForm = showAddAnimeForm;
});

function initializeApp() {
    // Check if user is logged in
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateUserInterface();
    }
}

function updateUserInterface() {
    console.log('Updating user interface, currentUser:', currentUser);
    
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const adminBtn = document.getElementById('adminBtn');
    const userBtn = document.getElementById('userBtn');

    if (currentUser) {
        console.log('User is logged in, hiding login/signup buttons');
        loginBtn.style.display = 'none';
        signupBtn.style.display = 'none';
        logoutBtn.style.display = 'block';
        
        if (currentUser.isAdmin) {
            console.log('User is admin, showing admin button');
            adminBtn.style.display = 'block';
        } else {
            adminBtn.style.display = 'none';
        }
        
        userBtn.innerHTML = `<i class="fas fa-user"></i> ${currentUser.username}`;
    } else {
        console.log('No user logged in, showing login/signup buttons');
        loginBtn.style.display = 'block';
        signupBtn.style.display = 'block';
        logoutBtn.style.display = 'none';
        adminBtn.style.display = 'none';
        userBtn.innerHTML = '<i class="fas fa-user"></i>';
    }
}

// Modal Management
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        console.log(`Closed modal: ${modalId}`); // Debug log
    }
}

// Genre Filtering Functionality
function filterByGenre(genre) {
    const filteredAnime = animeDatabase.filter(anime => 
        anime.genre.some(g => g.toLowerCase().includes(genre.toLowerCase()))
    );
    
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <div class="genre-results-container">
            <h2>${genre.charAt(0).toUpperCase() + genre.slice(1)} Anime</h2>
            <p class="results-count">Found ${filteredAnime.length} anime in this genre</p>
            <div class="anime-grid">
                ${filteredAnime.map(anime => createAnimeCard(anime)).join('')}
            </div>
        </div>
    `;
    
    openModal('animeModal');
}

// Show All Anime (A-Z)
function showAllAnime() {
    const sortedAnime = [...animeDatabase].sort((a, b) => a.title.localeCompare(b.title));
    
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <div class="genre-results-container">
            <h2>All Anime (A-Z)</h2>
            <p class="results-count">Browse all ${sortedAnime.length} anime titles</p>
            <div class="anime-grid">
                ${sortedAnime.map(anime => createAnimeCard(anime)).join('')}
            </div>
        </div>
    `;
    
    openModal('animeModal');
}

// Show Release Calendar
function showReleaseCalendar() {
    const currentYear = new Date().getFullYear();
    const animeByYear = {};
    
    animeDatabase.forEach(anime => {
        const year = anime.year;
        if (!animeByYear[year]) {
            animeByYear[year] = [];
        }
        animeByYear[year].push(anime);
    });
    
    const sortedYears = Object.keys(animeByYear).sort((a, b) => b - a);
    
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <div class="release-calendar-container">
            <h2>Release Calendar</h2>
            <p class="results-count">Anime releases by year</p>
            <div class="year-sections">
                ${sortedYears.map(year => `
                    <div class="year-section">
                        <h3 class="year-title">${year}</h3>
                        <div class="anime-grid">
                            ${animeByYear[year].map(anime => createAnimeCard(anime)).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    openModal('animeModal');
}

// Year Filtering Functions
function filterByYear(yearFilter) {
    let filteredAnime;
    
    if (yearFilter === 'all') {
        filteredAnime = animeDatabase;
    } else {
        const [startYear, endYear] = yearFilter.split('-').map(Number);
        filteredAnime = animeDatabase.filter(anime => 
            anime.year >= startYear && anime.year <= endYear
        );
    }
    
    // Update the anime grid
    const animeGrid = document.getElementById('animeGrid');
    animeGrid.innerHTML = filteredAnime.map(anime => createAnimeCard(anime)).join('');
}

function setActiveFilter(activeButton) {
    // Remove active class from all filter buttons
    document.querySelectorAll('.filter-tab').forEach(button => {
        button.classList.remove('active');
    });
    
    // Add active class to clicked button
    activeButton.classList.add('active');
}

// Navigation Functions
function showNewAnime() {
    // Show anime from recent years (2020-2025)
    const newAnime = animeDatabase.filter(anime => anime.year >= 2020);
    const sortedNewAnime = newAnime.sort((a, b) => b.year - a.year);
    
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <div class="genre-results-container">
            <h2>New Anime</h2>
            <p class="results-count">Latest anime releases (2020-2025) - ${sortedNewAnime.length} titles</p>
            <div class="anime-grid">
                ${sortedNewAnime.map(anime => createAnimeCard(anime)).join('')}
            </div>
        </div>
    `;
    
    openModal('animeModal');
}

function showPopularAnime() {
    // Show anime sorted by rating (highest first)
    const popularAnime = [...animeDatabase].sort((a, b) => b.rating - a.rating);
    
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <div class="genre-results-container">
            <h2>Popular Anime</h2>
            <p class="results-count">Top-rated anime by IMDb score - ${popularAnime.length} titles</p>
            <div class="anime-grid">
                ${popularAnime.map(anime => createAnimeCard(anime)).join('')}
            </div>
        </div>
    `;
    
    openModal('animeModal');
}

function showSimulcastAnime() {
    // Show anime that are currently airing or recently finished (2023-2025)
    const simulcastAnime = animeDatabase.filter(anime => anime.year >= 2023);
    const sortedSimulcast = simulcastAnime.sort((a, b) => b.year - a.year);
    
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <div class="genre-results-container">
            <h2>Simulcast Anime</h2>
            <p class="results-count">Currently airing and recent anime (2023-2025) - ${sortedSimulcast.length} titles</p>
            <div class="anime-grid">
                ${sortedSimulcast.map(anime => createAnimeCard(anime)).join('')}
            </div>
        </div>
    `;
    
    openModal('animeModal');
}

function setActiveNav(activeId) {
    // Remove active class from all nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    // Add active class to clicked link
    document.getElementById(activeId).classList.add('active');
}

// Search Functionality
function setupEventListeners() {
    // Search
    document.getElementById('searchBtn').addEventListener('click', openSearch);
    document.getElementById('searchOverlay').addEventListener('click', closeSearch);
    document.getElementById('searchInput').addEventListener('input', handleSearch);
    document.getElementById('searchInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // Modals
    document.getElementById('loginBtn').addEventListener('click', () => openModal('loginModal'));
    document.getElementById('signupBtn').addEventListener('click', () => openModal('signupModal'));
    document.getElementById('adminBtn').addEventListener('click', () => openModal('adminModal'));

    // Auth switch links
    document.getElementById('switchToSignup').addEventListener('click', (e) => {
        e.preventDefault();
        closeModal('loginModal');
        setTimeout(() => openModal('signupModal'), 100);
    });
    
    document.getElementById('switchToLogin').addEventListener('click', (e) => {
        e.preventDefault();
        closeModal('signupModal');
        setTimeout(() => openModal('loginModal'), 100);
    });

    // Close modals
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', (e) => {
            closeModal(e.target.closest('.modal').id);
        });
    });

    // Specific close button handlers
    const modalClose = document.getElementById('modalClose');
    const videoClose = document.getElementById('videoClose');
    const loginClose = document.getElementById('loginClose');
    const signupClose = document.getElementById('signupClose');
    const adminClose = document.getElementById('adminClose');

    if (modalClose) modalClose.addEventListener('click', () => closeModal('animeModal'));
    if (videoClose) videoClose.addEventListener('click', () => closeModal('videoModal'));
    if (loginClose) loginClose.addEventListener('click', () => closeModal('loginModal'));
    if (signupClose) signupClose.addEventListener('click', () => closeModal('signupModal'));
    if (adminClose) adminClose.addEventListener('click', () => closeModal('adminModal'));

    // User dropdown
    document.getElementById('userBtn').addEventListener('click', toggleUserDropdown);
    document.getElementById('logoutBtn').addEventListener('click', handleLogout);

    // Watchlist
    document.getElementById('watchlistBtn').addEventListener('click', showWatchlist);
    
    // Favorites
    document.getElementById('favoritesBtn').addEventListener('click', showFavorites);
    
    // Recently Viewed
    document.getElementById('recentBtn').addEventListener('click', showRecentlyViewed);
    
    // Random Anime
    document.getElementById('randomBtn').addEventListener('click', getRandomAnime);
    
    // Notification Bell
    document.getElementById('notificationBtn').addEventListener('click', toggleNotificationDropdown);
    document.getElementById('clearNotifications').addEventListener('click', clearAllNotifications);

    // Navigation functionality
    document.getElementById('newLink').addEventListener('click', (e) => {
        e.preventDefault();
        showNewAnime();
        setActiveNav('newLink');
    });

    document.getElementById('popularLink').addEventListener('click', (e) => {
        e.preventDefault();
        showPopularAnime();
        setActiveNav('popularLink');
    });

    document.getElementById('simulcastLink').addEventListener('click', (e) => {
        e.preventDefault();
        showSimulcastAnime();
        setActiveNav('simulcastLink');
    });

    // Genre filtering
    document.querySelectorAll('[data-genre]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const genre = e.target.getAttribute('data-genre');
            filterByGenre(genre);
        });
    });

    // Year filter buttons
    document.querySelectorAll('.filter-tab').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const filter = e.target.getAttribute('data-filter');
            filterByYear(filter);
            setActiveFilter(e.target);
        });
    });

    // Browse All (A-Z) functionality
    const browseAllLink = document.querySelector('.dropdown-content a[href="#"]:first-child');
    if (browseAllLink) {
        browseAllLink.addEventListener('click', (e) => {
            e.preventDefault();
            showAllAnime();
        });
    }

    // Release Calendar functionality
    const releaseCalendarLink = document.querySelector('.dropdown-content a[href="#"]:nth-child(2)');
    if (releaseCalendarLink) {
        releaseCalendarLink.addEventListener('click', (e) => {
            e.preventDefault();
            showReleaseCalendar();
        });
    }

    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            closeModal(e.target.id);
        }
    });

    // Additional close functionality - click outside modal content to close
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            const modalId = e.target.id;
            closeModal(modalId);
        }
    });

    // Login and Signup forms
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
    document.getElementById('signupForm').addEventListener('submit', handleSignup);
}

function openSearch() {
    document.getElementById('searchOverlay').style.display = 'flex';
    document.getElementById('searchInput').focus();
}

function closeSearch() {
    document.getElementById('searchOverlay').style.display = 'none';
    document.getElementById('searchInput').value = '';
    document.getElementById('searchResults').innerHTML = '';
}

function handleSearch() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    if (query.length < 2) {
        document.getElementById('searchResults').innerHTML = '';
        return;
    }

    const results = animeDatabase.filter(anime => 
        anime.title.toLowerCase().includes(query) ||
        anime.genre.some(g => g.toLowerCase().includes(query)) ||
        anime.cast.some(c => c.toLowerCase().includes(query)) ||
        anime.creator.toLowerCase().includes(query)
    );

    displaySearchResults(results);
}

function performSearch() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    if (query.length < 2) return;

    const results = animeDatabase.filter(anime => 
        anime.title.toLowerCase().includes(query) ||
        anime.genre.some(g => g.toLowerCase().includes(query)) ||
        anime.cast.some(c => c.toLowerCase().includes(query)) ||
        anime.creator.toLowerCase().includes(query)
    );

    if (results.length > 0) {
        showAnimeDetails(results[0].id);
        closeSearch();
    }
}

function displaySearchResults(results) {
    const container = document.getElementById('searchResults');
    
    if (results.length === 0) {
        container.innerHTML = '<p class="no-results">No anime found matching your search.</p>';
        return;
    }

    container.innerHTML = results.slice(0, 5).map(anime => `
        <div class="search-result" onclick="showAnimeDetails(${anime.id}); closeSearch();">
            <img src="${anime.poster}" alt="${anime.title}">
            <div class="search-result-info">
                <h3>${anime.title}</h3>
                <p>${anime.year} • ${anime.genre.join(', ')}</p>
            </div>
        </div>
    `).join('');
}

// User Authentication
function handleLogin(e) {
    e.preventDefault();
    console.log('Login form submitted');
    
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    
    console.log('Login attempt:', username, password);
    console.log('Available users:', users);

    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        updateUserInterface();
        closeModal('loginModal');
        showNotification('Login successful!', 'success');
        console.log('Login successful for user:', user);
    } else {
        showNotification('Invalid username or password', 'error');
        console.log('Login failed - user not found');
    }
}

function handleSignup(e) {
    e.preventDefault();
    console.log('Signup form submitted');
    
    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    console.log('Signup attempt:', username, email);

    if (users.find(u => u.username === username)) {
        showNotification('Username already exists', 'error');
        return;
    }

    const newUser = {
        id: Date.now(),
        username,
        email,
        password,
        isAdmin: username === 'admin' && password === 'admin123'
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    currentUser = newUser;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    updateUserInterface();
    closeModal('signupModal');
    showNotification('Account created successfully!', 'success');
    console.log('Signup successful for user:', newUser);
}

function handleLogout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    updateUserInterface();
    showNotification('Logged out successfully', 'info');
}

function toggleUserDropdown() {
    const dropdown = document.getElementById('userDropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Notification Bell System
function initializeNotificationSystem() {
    updateNotificationBadge();
    updateNotificationList();
    console.log('Notification system initialized');
}

function addAnimeNotification(anime) {
    const notification = {
        id: Date.now(),
        type: 'new_anime',
        title: anime.title,
        text: `New anime "${anime.title}" has been added!`,
        poster: anime.poster,
        animeId: anime.id,
        timestamp: new Date().toISOString(),
        read: false
    };
    
    notifications.unshift(notification); // Add to beginning of array
    localStorage.setItem('notifications', JSON.stringify(notifications));
    updateNotificationBadge();
    updateNotificationList();
}

function updateNotificationBadge() {
    const unreadCount = notifications.filter(n => !n.read).length;
    const badge = document.getElementById('notificationBadge');
    
    if (!badge) return; // Exit if badge element doesn't exist yet
    
    if (unreadCount > 0) {
        badge.textContent = unreadCount;
        badge.style.display = 'flex';
    } else {
        badge.style.display = 'none';
    }
}

function updateNotificationList() {
    const notificationList = document.getElementById('notificationList');
    if (!notificationList) return;
    
    if (notifications.length === 0) {
        notificationList.innerHTML = '<div class="no-notifications">No new notifications</div>';
        return;
    }
    
    notificationList.innerHTML = notifications.map(notification => `
        <div class="notification-item ${notification.read ? 'read' : 'unread'}" onclick="openNotificationAnime(${notification.animeId})">
            <img src="${notification.poster}" alt="${notification.title}" class="notification-poster">
            <div class="notification-content">
                <div class="notification-title">${notification.title}</div>
                <div class="notification-text">${notification.text}</div>
                <div class="notification-time">${formatNotificationTime(notification.timestamp)}</div>
            </div>
        </div>
    `).join('');
}

function formatNotificationTime(timestamp) {
    const now = new Date();
    const notificationTime = new Date(timestamp);
    const diffInMinutes = Math.floor((now - notificationTime) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return notificationTime.toLocaleDateString();
}

function openNotificationAnime(animeId) {
    // Mark notification as read
    const notification = notifications.find(n => n.animeId === animeId);
    if (notification) {
        notification.read = true;
        localStorage.setItem('notifications', JSON.stringify(notifications));
        updateNotificationBadge();
        updateNotificationList();
    }
    
    // Close notification dropdown
    closeNotificationDropdown();
    
    // Open anime details
    showAnimeDetails(animeId);
}

function clearAllNotifications() {
    notifications = [];
    localStorage.setItem('notifications', JSON.stringify(notifications));
    updateNotificationBadge();
    updateNotificationList();
}

function toggleNotificationDropdown() {
    const dropdown = document.getElementById('notificationDropdown');
    if (dropdown.classList.contains('show')) {
        closeNotificationDropdown();
    } else {
        openNotificationDropdown();
    }
}

function openNotificationDropdown() {
    const dropdown = document.getElementById('notificationDropdown');
    dropdown.classList.add('show');
    
    // Mark all notifications as read when opened
    notifications.forEach(notification => {
        notification.read = true;
    });
    localStorage.setItem('notifications', JSON.stringify(notifications));
    updateNotificationBadge();
}

function closeNotificationDropdown() {
    const dropdown = document.getElementById('notificationDropdown');
    dropdown.classList.remove('show');
}

// Close notification dropdown when clicking outside
document.addEventListener('click', function(event) {
    const notificationBell = document.querySelector('.notification-bell');
    const dropdown = document.getElementById('notificationDropdown');
    
    if (notificationBell && !notificationBell.contains(event.target) && dropdown.classList.contains('show')) {
        closeNotificationDropdown();
    }
});

// Anime Display Functions
function loadAnimeGrid() {
    const container = document.getElementById('animeGrid');
    console.log('Loading anime grid with', animeDatabase.length, 'anime');
    container.innerHTML = animeDatabase.map(anime => createAnimeCard(anime)).join('');
    console.log('Anime grid loaded successfully');
}

function createAnimeCard(anime) {
    return `
        <div class="anime-card" onclick="showAnimeDetails(${anime.id})">
            <img src="${anime.poster}" alt="${anime.title}" class="anime-poster">
            <div class="anime-info">
                <h3 class="anime-title">${anime.title}</h3>
                <div class="anime-meta">
                    <span class="anime-rating">${anime.rating}/10</span>
                    <span class="anime-year">${anime.year}</span>
                </div>
                <p class="anime-genres">${anime.genre.join(', ')}</p>
            </div>
            <div class="anime-actions">
                <button class="action-btn" onclick="event.stopPropagation(); playTrailer(${anime.id})" title="Play Trailer">
                    <i class="fas fa-play"></i>
                </button>
                <button class="action-btn" onclick="event.stopPropagation(); addToWatchlist(${anime.id})" title="Add to Watchlist">
                    <i class="fas fa-bookmark"></i>
                </button>
                <button class="action-btn" onclick="event.stopPropagation(); addToFavorites(${anime.id})" title="Add to Favorites">
                    <i class="fas fa-heart"></i>
                </button>
            </div>
        </div>
    `;
}

function showAnimeDetails(animeId) {
    const anime = animeDatabase.find(a => a.id === animeId);
    if (!anime) return;

    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <div class="anime-details">
            <div class="anime-details-poster">
                <img src="${anime.poster}" alt="${anime.title}">
            </div>
            <div class="anime-details-info">
                <h1 class="anime-details-title">${anime.title}</h1>
                <div class="anime-details-meta">
                    <span class="rating">${anime.rating}/10</span>
                    <span class="year">${anime.year}</span>
                    <span class="duration">${anime.duration}</span>
                    <span class="language">${anime.language}</span>
                </div>
                <p class="anime-details-description">${anime.description}</p>
                
                <div class="anime-details-cast">
                    <h3>Cast</h3>
                    <p>${anime.cast.join(', ')}</p>
                </div>
                
                <div class="anime-details-creator">
                    <h3>Creator/Director</h3>
                    <p>${anime.creator} (${anime.director})</p>
                </div>
                
                <div class="anime-details-studio">
                    <h3>Studio</h3>
                    <p>${anime.studio}</p>
                </div>
                
                <div class="anime-details-actions">
                    <button class="btn-primary" onclick="playTrailer(${anime.id})">
                        <i class="fas fa-play"></i> Watch Trailer
                    </button>
                    ${watchlist.includes(anime.id) ? 
                        `<button class="btn-outline" onclick="removeFromWatchlist(${anime.id})">
                            <i class="fas fa-minus"></i> Remove from Watchlist
                        </button>` :
                        `<button class="btn-outline" onclick="addToWatchlist(${anime.id})">
                            <i class="fas fa-bookmark"></i> Add to Watchlist
                        </button>`
                    }
                    ${(JSON.parse(localStorage.getItem('favorites')) || []).includes(anime.id) ? 
                        `<button class="btn-outline" onclick="removeFromFavorites(${anime.id})">
                            <i class="fas fa-heart-broken"></i> Remove from Favorites
                        </button>` :
                        `<button class="btn-outline" onclick="addToFavorites(${anime.id})">
                            <i class="fas fa-heart"></i> Add to Favorites
                        </button>`
                    }
                    <a href="${anime.crunchyrollUrl}" target="_blank" class="btn-outline">
                        <i class="fas fa-external-link-alt"></i> Watch on Crunchyroll
                    </a>
                </div>
            </div>
        </div>
    `;
    
    openModal('animeModal');
}

// Function to check if URL is embeddable
function isEmbeddableUrl(url) {
    return url.includes('youtube.com/embed/') || url.includes('vimeo.com/');
}

// Function to handle IMDb trailer opening
function openImdbTrailer(imdbUrl) {
    // Open IMDb page in new tab/window
    window.open(imdbUrl, '_blank', 'width=1200,height=800,scrollbars=yes,resizable=yes');
}

function playTrailer(animeId) {
    const anime = animeDatabase.find(a => a.id === animeId);
    if (!anime) return;

    const modalBody = document.getElementById('modalBody');
    
    let videoContent;
    
    // Check if it's an IMDb URL
    if (anime.trailer.includes('imdb.com')) {
        videoContent = `
            <div class="trailer-imdb-container">
                <div class="imdb-trailer-content">
                    <div class="imdb-icon">
                        <i class="fab fa-imdb" style="font-size: 4rem; color: #f5c518; margin-bottom: 1rem;"></i>
                    </div>
                    <h3>Watch Trailer on IMDb</h3>
                    <p>Click the button below to open the official IMDb trailer in a new window.</p>
                    <div class="imdb-trailer-preview">
                        <div class="imdb-preview-image">
                            <img src="${anime.poster}" alt="${anime.title}" style="width: 200px; height: 300px; object-fit: cover; border-radius: 8px; margin-bottom: 1rem;">
                        </div>
                        <div class="imdb-preview-info">
                            <h4>${anime.title}</h4>
                            <p><strong>Year:</strong> ${anime.year}</p>
                            <p><strong>Rating:</strong> ${anime.rating}/10</p>
                            <p><strong>Genre:</strong> ${anime.genre.join(', ')}</p>
                        </div>
                    </div>
                    <button class="btn-primary imdb-trailer-btn" onclick="openImdbTrailer('${anime.trailer}')">
                        <i class="fas fa-play"></i> Watch IMDb Trailer
                    </button>
                    <p class="imdb-note">The trailer will open in a new window on IMDb.com</p>
                </div>
            </div>
        `;
    } else if (isEmbeddableUrl(anime.trailer)) {
        // Handle embeddable URLs (YouTube, Vimeo)
        videoContent = `
            <div class="trailer-video">
                <iframe src="${anime.trailer}" frameborder="0" allowfullscreen></iframe>
            </div>
        `;
    } else {
        // Fallback for other URLs
        videoContent = `
            <div class="trailer-fallback">
                <div class="fallback-content">
                    <i class="fas fa-video" style="font-size: 3rem; color: #ff6b35; margin-bottom: 1rem;"></i>
                    <h3>Trailer Not Available</h3>
                    <p>This trailer cannot be embedded. Please visit the official source:</p>
                    <a href="${anime.trailer}" target="_blank" class="btn-primary">
                        <i class="fas fa-external-link-alt"></i> Watch Trailer
                    </a>
                </div>
            </div>
        `;
    }

    modalBody.innerHTML = `
        <div class="trailer-container">
            <h2>${anime.title} - Trailer</h2>
            ${videoContent}
            <div class="trailer-info">
                <p><strong>Year:</strong> ${anime.year}</p>
                <p><strong>Genre:</strong> ${anime.genre.join(', ')}</p>
                <p><strong>Rating:</strong> ${anime.rating}/10</p>
                <p><strong>Duration:</strong> ${anime.duration}</p>
            </div>
            <div class="trailer-actions">
                <button class="btn-primary" onclick="addToWatchlist(${anime.id})">
                    <i class="fas fa-bookmark"></i> Add to Watchlist
                </button>
                <button class="btn-outline" onclick="addToFavorites(${anime.id})">
                    <i class="fas fa-heart"></i> Add to Favorites
                </button>
                <a href="${anime.crunchyrollUrl}" target="_blank" class="btn-primary">
                    <i class="fas fa-external-link-alt"></i> Watch on Crunchyroll
                </a>
            </div>
        </div>
    `;
    
    openModal('animeModal');
}

// Watchlist Management
function addToWatchlist(animeId) {
    if (!currentUser) {
        showNotification('Please login to add to watchlist', 'error');
        openModal('loginModal');
        return;
    }

    if (!watchlist.includes(animeId)) {
        watchlist.push(animeId);
        localStorage.setItem('watchlist', JSON.stringify(watchlist));
        showNotification('Added to watchlist!', 'success');
    } else {
        showNotification('Already in watchlist', 'info');
    }
}

function removeFromWatchlist(animeId) {
    if (!currentUser) {
        showNotification('Please login to manage watchlist', 'error');
        return;
    }

    const index = watchlist.indexOf(animeId);
    if (index > -1) {
        watchlist.splice(index, 1);
        localStorage.setItem('watchlist', JSON.stringify(watchlist));
        showNotification('Removed from watchlist!', 'success');
        // Refresh the watchlist view if it's currently open
        if (document.getElementById('modalBody').innerHTML.includes('watchlist-container')) {
            showWatchlist();
        }
    } else {
        showNotification('Not in watchlist', 'info');
    }
}

function showWatchlist() {
    if (!currentUser) {
        showNotification('Please login to view watchlist', 'error');
        openModal('loginModal');
        return;
    }

    const watchlistAnime = animeDatabase.filter(anime => watchlist.includes(anime.id));
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <div class="watchlist-container">
            <h2>My Watchlist (${watchlistAnime.length} items)</h2>
            <div class="anime-grid">
                ${watchlistAnime.map(anime => `
                    <div class="anime-card">
                        <div class="anime-poster">
                            <img src="${anime.poster}" alt="${anime.title}" loading="lazy">
                            <div class="anime-actions">
                                <button class="action-btn" onclick="event.stopPropagation(); removeFromWatchlist(${anime.id})" title="Remove from Watchlist">
                                    <i class="fas fa-minus"></i>
                                </button>
                                <button class="action-btn" onclick="event.stopPropagation(); playTrailer(${anime.id})" title="Watch Trailer">
                                    <i class="fas fa-play"></i>
                                </button>
                            </div>
                        </div>
                        <div class="anime-info">
                            <h3>${anime.title}</h3>
                            <div class="anime-meta">
                                <span class="rating">⭐ ${anime.rating}</span>
                                <span class="genre">${anime.genre.join(', ')}</span>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    openModal('animeModal');
}

// Hero Carousel
function loadHeroCarousel() {
    const container = document.getElementById('heroSlider');
    const indicatorsContainer = document.getElementById('heroIndicators');

    // Custom hero anime with landscape posters
    const heroAnime = [
        {
            id: 121,
            title: "Demon Slayer: Infinity Castle",
            rating: 9.2,
            language: "Sub | Dub",
            genre: ["Animation", "Action", "Adventure", "Fantasy", "Supernatural"],
            description: "Tanjiro and his allies face their greatest battle yet against Muzan and the Twelve Kizuki in the Infinity Castle.",
            landscapePoster: "https://4kwallpapers.com/images/walls/thumbs_3t/23615.jpg",
            trailer: "https://www.imdb.com/title/tt32820897/"
        },
        {
            id: 41,
            title: "Dandadan",
            rating: 8.8,
            language: "Sub | Dub",
            genre: ["Animation", "Action", "Comedy", "Supernatural", "Romance"],
            description: "A supernatural adventure following Momo and Okarun as they navigate bizarre encounters with ghosts and aliens.",
            landscapePoster: "https://a.storyblok.com/f/178900/1920x1080/fc9956de7a/dandadan-key-art-wide.png/m/1200x0/filters:quality(95)format(webp)",
            trailer: "https://www.imdb.com/title/tt30217403/"
        },
        {
            id: 1,
            title: "Attack on Titan: The Final Season",
            rating: 9.1,
            language: "Sub | Dub",
            genre: ["Animation", "Action", "Drama", "Fantasy", "Horror"],
            description: "Humanity fights for survival against giant humanoid Titans in a dark, post-apocalyptic world.",
            landscapePoster: "https://wallpapercat.com/w/full/7/1/9/210867-1920x1132-desktop-hd-attack-on-titan-the-final-season-wallpaper-photo.jpg",
            trailer: "https://www.imdb.com/title/tt2560140/"
        },
        {
            id: 42,
            title: "Chainsaw Man",
            rating: 8.7,
            language: "Sub | Dub",
            genre: ["Animation", "Action", "Horror", "Supernatural", "Drama"],
            description: "Denji merges with a devil dog and battles other devils for survival and revenge in this dark supernatural series.",
            landscapePoster: "https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2025/09/chainsawman-reze-header.jpg?w=1280&ssl=1",
            trailer: "https://www.imdb.com/title/tt13616990/"
        }
    ];

    // Create hero slides
    container.innerHTML = heroAnime.map((anime, index) => `
        <div class="hero-slide ${index === 0 ? 'active' : ''}">
            <div class="hero-background">
                <img src="${anime.landscapePoster}" alt="${anime.title}">
            </div>
            <div class="hero-content">
                <div class="hero-info">
                    <h1 class="hero-title">${anime.title}</h1>
                    <div class="hero-meta">
                        <span class="rating">${anime.rating}/10</span>
                        <span class="language">${anime.language}</span>
                        <span class="genres">${anime.genre.join(', ')}</span>
                    </div>
                    <p class="hero-description">${anime.description}</p>
                    <div class="hero-actions">
                        <button class="btn-primary" onclick="playTrailer(${anime.id})">
                            <i class="fas fa-play"></i> WATCH TRAILER
                        </button>
                        <button class="btn-secondary" onclick="addToWatchlist(${anime.id})">
                            <i class="fas fa-bookmark"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    // Create indicators
    indicatorsContainer.innerHTML = heroAnime.map((_, index) => `
        <span class="indicator ${index === 0 ? 'active' : ''}" onclick="goToSlide(${index})"></span>
    `).join('');
}

// Recently viewed section
function loadRecentlyViewed() {
    const recentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed')) || [];
    const recentAnime = animeDatabase.filter(anime => recentlyViewed.includes(anime.id));
    const section = document.getElementById('recentlyViewedSection');
    const container = document.getElementById('recentlyViewedGrid');
    
    if (recentAnime.length > 0) {
        section.style.display = 'block';
        container.innerHTML = recentAnime.slice(0, 6).map(anime => createAnimeCard(anime)).join('');
    } else {
        section.style.display = 'none';
    }
}

// Simulcast carousel
function loadSimulcastCarousel() {
    const container = document.getElementById('simulcastCarousel');
    const simulcastAnime = animeDatabase.slice(0, 8); // Show first 8 as simulcasts
    
    container.innerHTML = simulcastAnime.map(anime => `
        <div class="carousel-item">
            <div class="anime-card" onclick="showAnimeDetails(${anime.id})">
                <img src="${anime.poster}" alt="${anime.title}" class="anime-poster">
                <div class="anime-info">
                    <h3 class="anime-title">${anime.title}</h3>
                    <p class="anime-language">${anime.language}</p>
                </div>
            </div>
        </div>
    `).join('');
}

// Hero carousel
let currentSlide = 0;
let totalSlides = 4;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.hero-slide');
    const indicators = document.querySelectorAll('.indicator');
    
    slides[currentSlide].classList.remove('active');
    indicators[currentSlide].classList.remove('active');
    
    currentSlide += direction;
    
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    
    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
}

function goToSlide(index) {
    const slides = document.querySelectorAll('.hero-slide');
    const indicators = document.querySelectorAll('.indicator');
    
    slides[currentSlide].classList.remove('active');
    indicators[currentSlide].classList.remove('active');
    
    currentSlide = index;
    
    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
}

// Auto-advance hero carousel
setTimeout(() => {
    setInterval(() => changeSlide(1), 5000);
}, 1000); // Start auto-advance after 1 second delay

// Admin Panel Functions
function initializeAdminPanel() {
    console.log('Initializing admin panel');
    
    // Add admin panel event listeners
    document.querySelectorAll('.admin-tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            const tabName = e.target.getAttribute('data-tab');
            console.log('Admin tab clicked:', tabName);
            switchAdminTab(tabName);
        });
    });
    
    // Load admin data
    loadAdminDashboard();
    loadAdminAnimeList();
    loadAdminUserList();
    
    console.log('Admin panel initialized');
}

function switchAdminTab(tabName) {
    // Remove active class from all tabs and content
    document.querySelectorAll('.admin-tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.admin-tab-content').forEach(content => content.classList.remove('active'));
    
    // Add active class to selected tab and content
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    document.getElementById(`${tabName}Tab`).classList.add('active');
    
    // Load specific tab data
    if (tabName === 'anime') {
        loadAdminAnimeList();
    } else if (tabName === 'users') {
        loadAdminUserList();
    } else if (tabName === 'dashboard') {
        loadAdminDashboard();
    }
}

function loadAdminDashboard() {
    // This function is called but there's no dashboard tab in the current HTML structure
    // Statistics are now displayed in the anime and users tabs
    console.log('Admin dashboard loaded - Anime count:', animeDatabase.length, 'Users count:', users.length);
}

function loadAdminAnimeList() {
    const tbody = document.getElementById('animeTableBody');
    if (!tbody) return;
    
    // Update statistics
    const totalAnimeElement = document.getElementById('totalAnimeCount');
    const totalUsersElement = document.getElementById('totalUsersCount');
    if (totalAnimeElement) totalAnimeElement.textContent = animeDatabase.length;
    if (totalUsersElement) totalUsersElement.textContent = users.length;
    
    tbody.innerHTML = animeDatabase.map(anime => `
        <tr>
            <td>${anime.title}</td>
            <td>${anime.year}</td>
            <td>${Array.isArray(anime.genre) ? anime.genre.join(', ') : anime.genre}</td>
            <td>${anime.rating}/10</td>
            <td>
                <button class="btn-small btn-danger" onclick="deleteAnime(${anime.id})">
                    <i class="fas fa-trash"></i> Delete
                </button>
                <button class="btn-small btn-secondary" onclick="editAnime(${anime.id})">
                    <i class="fas fa-edit"></i> Edit
                </button>
            </td>
        </tr>
    `).join('');
}

function loadAdminUserList() {
    const tbody = document.getElementById('usersTableBody');
    if (!tbody) return;
    
    console.log('Loading admin user list with', users.length, 'users');
    
    // Update statistics
    const totalAnimeElement = document.getElementById('totalAnimeCount');
    const totalUsersElement = document.getElementById('totalUsersCount');
    if (totalAnimeElement) totalAnimeElement.textContent = animeDatabase.length;
    if (totalUsersElement) totalUsersElement.textContent = users.length;
    
    tbody.innerHTML = users.map(user => {
        console.log('Rendering user:', user);
        return `
            <tr>
                <td>${user.username}</td>
                <td>${user.email}</td>
                <td>${new Date(user.id).toLocaleDateString()}</td>
                <td>
                    <button class="btn-small btn-danger" onclick="deleteUser(${user.id})" data-user-id="${user.id}">
                        <i class="fas fa-trash"></i> Delete
                    </button>
                </td>
            </tr>
        `;
    }).join('');
    
    console.log('User list rendered successfully');
}

function showAddAnimeForm() {
    console.log('showAddAnimeForm called');
    
    // Remove any existing modal first
    const existingModal = document.getElementById('addAnimeModal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Create a modal for adding anime
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'addAnimeModal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="modal-close" onclick="closeModal('addAnimeModal')">&times;</span>
            <h2>Add New Anime</h2>
            <form id="addAnimeForm">
                <div class="form-group">
                    <input type="text" id="animeTitle" placeholder="Anime Title" required>
                </div>
                <div class="form-group">
                    <input type="number" id="animeYear" placeholder="Year" min="2000" max="2025" required>
                </div>
                <div class="form-group">
                    <input type="text" id="animeGenres" placeholder="Genres (comma separated)" required>
                </div>
                <div class="form-group">
                    <input type="number" id="animeRating" placeholder="Rating (0-10)" min="0" max="10" step="0.1" required>
                </div>
                <div class="form-group">
                    <input type="url" id="animePoster" placeholder="Poster URL" required>
                </div>
                <div class="form-group">
                    <input type="url" id="animeTrailer" placeholder="Trailer URL" required>
                </div>
                <div class="form-group">
                    <textarea id="animeDescription" placeholder="Description" required></textarea>
                </div>
                <div class="form-group">
                    <input type="text" id="animeCast" placeholder="Cast (comma separated)">
                </div>
                <div class="form-group">
                    <input type="text" id="animeCreator" placeholder="Creator">
                </div>
                <div class="form-group">
                    <input type="text" id="animeDirector" placeholder="Director">
                </div>
                <div class="form-group">
                    <input type="text" id="animeStudio" placeholder="Studio">
                </div>
                <button type="submit" class="btn-primary">Add Anime</button>
            </form>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'flex';
    
    // Wait a bit for DOM to update, then add event handler
    setTimeout(() => {
        const form = document.getElementById('addAnimeForm');
        console.log('Looking for form:', form);
        if (form) {
            form.addEventListener('submit', addNewAnime);
            console.log('Form submit handler added successfully');
            
            // Also add click handler to button as backup
            const submitBtn = form.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    console.log('Button clicked directly');
                    addNewAnime(e);
                });
                console.log('Button click handler added as backup');
            }
        } else {
            console.error('Form not found after timeout!');
        }
    }, 100);
}

function addNewAnime(e) {
    e.preventDefault();
    console.log('addNewAnime function called!');
    
    // Get form values
    const title = document.getElementById('animeTitle').value;
    const year = parseInt(document.getElementById('animeYear').value);
    const genres = document.getElementById('animeGenres').value;
    const rating = parseFloat(document.getElementById('animeRating').value);
    const poster = document.getElementById('animePoster').value;
    const trailer = document.getElementById('animeTrailer').value;
    const description = document.getElementById('animeDescription').value;
    const cast = document.getElementById('animeCast').value;
    const creator = document.getElementById('animeCreator').value;
    const director = document.getElementById('animeDirector').value;
    const studio = document.getElementById('animeStudio').value;
    
    console.log('Form values:', { title, year, genres, rating, poster, trailer, description, cast, creator, director, studio });
    
    // Validate required fields
    if (!title || !year || !genres || !rating || !poster || !trailer || !description) {
        console.error('Missing required fields');
        showNotification('Please fill in all required fields', 'error');
        return;
    }
    
    const newAnime = {
        id: Math.max(...animeDatabase.map(a => a.id)) + 1,
        title: title,
        year: year,
        genre: genres.split(',').map(g => g.trim()),
        rating: rating,
        poster: poster,
        trailer: trailer,
        description: description,
        cast: cast.split(',').map(c => c.trim()),
        creator: creator,
        director: director,
        studio: studio,
        duration: "24 min",
        language: "Sub | Dub",
        crunchyrollUrl: "https://www.crunchyroll.com/"
    };
    
    console.log('Adding new anime:', newAnime);
    animeDatabase.push(newAnime);
    localStorage.setItem('animeDatabase', JSON.stringify(animeDatabase));
    console.log('Anime database updated. Total anime:', animeDatabase.length);
    
    // Add notification for new anime
    addAnimeNotification(newAnime);
    
    closeModal('addAnimeModal');
    loadAdminAnimeList();
    loadAnimeGrid(); // Refresh main anime grid
    showNotification('Anime added successfully!', 'success');
}

function deleteAnime(animeId) {
    console.log('Delete function called with ID:', animeId);
    if (confirm('Are you sure you want to delete this anime?')) {
        const index = animeDatabase.findIndex(a => a.id === animeId);
        console.log('Found anime at index:', index);
        if (index > -1) {
            animeDatabase.splice(index, 1);
            localStorage.setItem('animeDatabase', JSON.stringify(animeDatabase));
            loadAdminAnimeList();
            loadAnimeGrid(); // Refresh main anime grid
            showNotification('Anime deleted successfully!', 'success');
            console.log('Anime deleted successfully');
        } else {
            console.log('Anime not found');
        }
    }
}

function editAnime(animeId) {
    console.log('Edit function called with ID:', animeId);
    const anime = animeDatabase.find(a => a.id === animeId);
    console.log('Found anime:', anime);
    if (!anime) {
        console.log('Anime not found for editing');
        return;
    }
    
    // Create edit modal similar to add modal but pre-filled
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'editAnimeModal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="modal-close" onclick="closeModal('editAnimeModal')">&times;</span>
            <h2>Edit Anime</h2>
            <form id="editAnimeForm">
                <div class="form-group">
                    <input type="text" id="editAnimeTitle" value="${anime.title}" required>
                </div>
                <div class="form-group">
                    <input type="number" id="editAnimeYear" value="${anime.year}" min="2000" max="2025" required>
                </div>
                <div class="form-group">
                    <input type="text" id="editAnimeGenres" value="${Array.isArray(anime.genre) ? anime.genre.join(', ') : anime.genre}" required>
                </div>
                <div class="form-group">
                    <input type="number" id="editAnimeRating" value="${anime.rating}" min="0" max="10" step="0.1" required>
                </div>
                <div class="form-group">
                    <input type="url" id="editAnimePoster" value="${anime.poster}" required>
                </div>
                <div class="form-group">
                    <input type="url" id="editAnimeTrailer" value="${anime.trailer}" required>
                </div>
                <div class="form-group">
                    <textarea id="editAnimeDescription" required>${anime.description}</textarea>
                </div>
                <div class="form-group">
                    <input type="text" id="editAnimeCast" value="${Array.isArray(anime.cast) ? anime.cast.join(', ') : anime.cast || ''}">
                </div>
                <div class="form-group">
                    <input type="text" id="editAnimeCreator" value="${anime.creator || ''}">
                </div>
                <div class="form-group">
                    <input type="text" id="editAnimeDirector" value="${anime.director || ''}">
                </div>
                <div class="form-group">
                    <input type="text" id="editAnimeStudio" value="${anime.studio || ''}">
                </div>
                <button type="submit" class="btn-primary">Update Anime</button>
            </form>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'flex';
    
    // Add form submit handler
    document.getElementById('editAnimeForm').addEventListener('submit', (e) => updateAnime(e, animeId));
}

function updateAnime(e, animeId) {
    e.preventDefault();
    console.log('Update anime called for ID:', animeId);
    
    const index = animeDatabase.findIndex(a => a.id === animeId);
    console.log('Found anime at index:', index);
    if (index > -1) {
        animeDatabase[index] = {
            ...animeDatabase[index],
            title: document.getElementById('editAnimeTitle').value,
            year: parseInt(document.getElementById('editAnimeYear').value),
            genre: document.getElementById('editAnimeGenres').value.split(',').map(g => g.trim()),
            rating: parseFloat(document.getElementById('editAnimeRating').value),
            poster: document.getElementById('editAnimePoster').value,
            trailer: document.getElementById('editAnimeTrailer').value,
            description: document.getElementById('editAnimeDescription').value,
            cast: document.getElementById('editAnimeCast').value.split(',').map(c => c.trim()),
            creator: document.getElementById('editAnimeCreator').value,
            director: document.getElementById('editAnimeDirector').value,
            studio: document.getElementById('editAnimeStudio').value
        };
        
        localStorage.setItem('animeDatabase', JSON.stringify(animeDatabase));
        console.log('Anime updated and saved to localStorage');
        closeModal('editAnimeModal');
        loadAdminAnimeList();
        loadAnimeGrid(); // Refresh main anime grid
        showNotification('Anime updated successfully!', 'success');
    }
}

function deleteUser(userId) {
    console.log('Delete user function called with ID:', userId);
    console.log('Current users:', users);
    
    if (confirm('Are you sure you want to delete this user?')) {
        const index = users.findIndex(u => u.id === userId);
        console.log('Found user at index:', index);
        
        if (index > -1) {
            const deletedUser = users[index];
            console.log('Deleting user:', deletedUser);
            
            users.splice(index, 1);
            localStorage.setItem('users', JSON.stringify(users));
            console.log('User deleted and saved to localStorage');
            console.log('Remaining users:', users);
            
            loadAdminUserList();
            showNotification('User deleted successfully!', 'success');
        } else {
            console.error('User not found with ID:', userId);
            showNotification('User not found!', 'error');
        }
    }
}

// Additional Features
function addToFavorites(animeId) {
    if (!currentUser) {
        showNotification('Please login to add to favorites', 'error');
        openModal('loginModal');
        return;
    }

    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.includes(animeId)) {
        favorites.push(animeId);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        showNotification('Added to favorites!', 'success');
    } else {
        showNotification('Already in favorites', 'info');
    }
}

function removeFromFavorites(animeId) {
    if (!currentUser) {
        showNotification('Please login to manage favorites', 'error');
        return;
    }

    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const index = favorites.indexOf(animeId);
    if (index > -1) {
        favorites.splice(index, 1);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        showNotification('Removed from favorites!', 'success');
        // Refresh the favorites view if it's currently open
        if (document.getElementById('modalBody').innerHTML.includes('favorites-container')) {
            showFavorites();
        }
    } else {
        showNotification('Not in favorites', 'info');
    }
}

function showFavorites() {
    if (!currentUser) {
        showNotification('Please login to view favorites', 'error');
        openModal('loginModal');
        return;
    }

    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const favoriteAnime = animeDatabase.filter(anime => favorites.includes(anime.id));
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <div class="favorites-container">
            <h2>My Favorites (${favoriteAnime.length} items)</h2>
            <div class="anime-grid">
                ${favoriteAnime.map(anime => `
                    <div class="anime-card">
                        <div class="anime-poster">
                            <img src="${anime.poster}" alt="${anime.title}" loading="lazy">
                            <div class="anime-actions">
                                <button class="action-btn" onclick="event.stopPropagation(); removeFromFavorites(${anime.id})" title="Remove from Favorites">
                                    <i class="fas fa-heart-broken"></i>
                                </button>
                                <button class="action-btn" onclick="event.stopPropagation(); playTrailer(${anime.id})" title="Watch Trailer">
                                    <i class="fas fa-play"></i>
                                </button>
                            </div>
                        </div>
                        <div class="anime-info">
                            <h3>${anime.title}</h3>
                            <div class="anime-meta">
                                <span class="rating">⭐ ${anime.rating}</span>
                                <span class="genre">${anime.genre.join(', ')}</span>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    openModal('animeModal');
}

// Random anime recommendation
function getRandomAnime() {
    const randomIndex = Math.floor(Math.random() * animeDatabase.length);
    const randomAnime = animeDatabase[randomIndex];
    showAnimeDetails(randomAnime.id);
    showNotification(`Random recommendation: ${randomAnime.title}`, 'info');
}

// Recently viewed anime
function addToRecentlyViewed(animeId) {
    let recentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed')) || [];
    recentlyViewed = recentlyViewed.filter(id => id !== animeId);
    recentlyViewed.unshift(animeId);
    recentlyViewed = recentlyViewed.slice(0, 10); // Keep only last 10
    localStorage.setItem('recentlyViewed', JSON.stringify(recentlyViewed));
}

function showRecentlyViewed() {
    const recentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed')) || [];
    const recentAnime = animeDatabase.filter(anime => recentlyViewed.includes(anime.id));
    const modalBody = document.getElementById('modalBody');
    
    if (recentAnime.length === 0) {
        modalBody.innerHTML = `
            <div class="recently-viewed-container">
                <h2>Recently Viewed</h2>
                <p class="no-results">No recently viewed anime. Start browsing to see your history!</p>
            </div>
        `;
    } else {
        modalBody.innerHTML = `
            <div class="recently-viewed-container">
                <h2>Recently Viewed</h2>
                <div class="anime-grid">
                    ${recentAnime.map(anime => createAnimeCard(anime)).join('')}
                </div>
            </div>
        `;
    }
    
    openModal('animeModal');
}

// Update showAnimeDetails to track recently viewed
const originalShowAnimeDetails = showAnimeDetails;
showAnimeDetails = function(animeId) {
    addToRecentlyViewed(animeId);
    originalShowAnimeDetails(animeId);
};

// Admin functionality
function switchAdminTab(tabName) {
    document.querySelectorAll('.admin-tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.admin-tab-content').forEach(content => content.classList.remove('active'));
    
    document.getElementById(tabName + 'Tab').classList.add('active');
    document.getElementById(tabName + 'Content').classList.add('active');
}

function loadAdminData() {
    loadAnimeAdmin();
    loadUsersAdmin();
}

function loadAnimeAdmin() {
    const container = document.getElementById('animeAdminContent');
    container.innerHTML = `
        <div class="admin-section">
            <h3>Anime Management</h3>
            <button class="btn-primary" onclick="addAnime()">Add New Anime</button>
            <div class="admin-table">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Year</th>
                            <th>Rating</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${animeDatabase.map(anime => `
                            <tr>
                                <td>${anime.id}</td>
                                <td>${anime.title}</td>
                                <td>${anime.year}</td>
                                <td>${anime.rating}</td>
                                <td>
                                    <button class="btn-small btn-secondary" onclick="editAnime(${anime.id})">
                                        <i class="fas fa-edit"></i> Edit
                                    </button>
                                    <button class="btn-small btn-danger" onclick="deleteAnime(${anime.id})">
                                        <i class="fas fa-trash"></i> Delete
                                    </button>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

function loadUsersAdmin() {
    const container = document.getElementById('usersAdminContent');
    container.innerHTML = `
        <div class="admin-section">
            <h3>User Management</h3>
            <div class="admin-table">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${users.map(user => `
                            <tr>
                                <td>${user.id}</td>
                                <td>${user.username}</td>
                                <td>${user.email}</td>
                                <td>${user.isAdmin ? 'Yes' : 'No'}</td>
                                <td>
                                    <button class="btn-danger" onclick="deleteUser(${user.id})">Delete</button>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}




// Add dynamic styles
const style = document.createElement('style');
style.textContent = `
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 2rem;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        animation: slideIn 0.3s ease;
    }
    
    .notification-success {
        background: #4CAF50;
    }
    
    .notification-error {
        background: #f44336;
    }
    
    .notification-info {
        background: #2196F3;
    }
    
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    .user-dropdown {
        position: absolute;
        top: 100%;
        right: 0;
        background: rgba(0, 0, 0, 0.9);
        border-radius: 8px;
        padding: 1rem;
        min-width: 150px;
        display: none;
        z-index: 1000;
    }
    
    .user-dropdown a {
        display: block;
        color: white;
        text-decoration: none;
        padding: 0.5rem 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .user-dropdown a:last-child {
        border-bottom: none;
    }
    
    .user-dropdown a:hover {
        color: #ff6b35;
    }
    
    .search-result {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        cursor: pointer;
        transition: background 0.3s ease;
    }
    
    .search-result:hover {
        background: rgba(255, 255, 255, 0.1);
    }
    
    .search-result img {
        width: 60px;
        height: 80px;
        object-fit: cover;
        border-radius: 4px;
    }
    
    .search-result-info h3 {
        margin: 0 0 0.5rem 0;
        color: #ff6b35;
    }
    
    .search-result-info p {
        margin: 0;
        color: #ccc;
        font-size: 0.9rem;
    }
    
    .no-results {
        text-align: center;
        color: #ccc;
        padding: 2rem;
    }
    
    .trailer-container {
        text-align: center;
    }
    
    .trailer-video {
        position: relative;
        width: 100%;
        height: 0;
        padding-bottom: 56.25%;
        margin: 2rem 0;
    }
    
    .trailer-video iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 8px;
    }
    
    .trailer-fallback {
        position: relative;
        width: 100%;
        height: 0;
        padding-bottom: 56.25%;
        margin: 2rem 0;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .fallback-content {
        text-align: center;
        padding: 2rem;
        color: #e0e0e0;
    }
    
    .fallback-content h3 {
        color: #ff6b35;
        margin-bottom: 1rem;
    }
    
    .fallback-content p {
        margin-bottom: 1.5rem;
        color: #ccc;
    }
    
    .trailer-imdb-container {
        position: relative;
        width: 100%;
        margin: 2rem 0;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 12px;
        padding: 2rem;
        border: 2px solid #f5c518;
    }
    
    .imdb-trailer-content {
        text-align: center;
        color: #e0e0e0;
    }
    
    .imdb-trailer-content h3 {
        color: #f5c518;
        margin-bottom: 1rem;
        font-size: 1.5rem;
    }
    
    .imdb-trailer-content p {
        margin-bottom: 1.5rem;
        color: #ccc;
        font-size: 1rem;
    }
    
    .imdb-trailer-preview {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        margin: 2rem 0;
        padding: 1.5rem;
        background: rgba(0, 0, 0, 0.3);
        border-radius: 8px;
        border: 1px solid rgba(245, 197, 24, 0.3);
    }
    
    .imdb-preview-info {
        text-align: left;
    }
    
    .imdb-preview-info h4 {
        color: #f5c518;
        margin-bottom: 0.5rem;
        font-size: 1.2rem;
    }
    
    .imdb-preview-info p {
        margin: 0.3rem 0;
        color: #e0e0e0;
        font-size: 0.9rem;
    }
    
    .imdb-trailer-btn {
        background: linear-gradient(45deg, #f5c518, #f7d94c);
        color: #000;
        font-weight: 600;
        padding: 1rem 2rem;
        font-size: 1.1rem;
        margin: 1rem 0;
        border: none;
        border-radius: 50px;
        cursor: pointer;
        transition: all 0.3s ease;
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .imdb-trailer-btn:hover {
        background: linear-gradient(45deg, #f7d94c, #f5c518);
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(245, 197, 24, 0.4);
    }
    
    .imdb-note {
        font-size: 0.8rem;
        color: #999;
        font-style: italic;
        margin-top: 1rem;
    }
    
    @media (max-width: 768px) {
        .imdb-trailer-preview {
            flex-direction: column;
            text-align: center;
        }
        
    .imdb-preview-info {
        text-align: center;
    }
}

.genre-results-container {
    padding: 2rem;
}

.genre-results-container h2 {
    color: #ff6b35;
    margin-bottom: 1rem;
    font-size: 2rem;
    text-align: center;
}

.results-count {
    color: #ccc;
    text-align: center;
    margin-bottom: 2rem;
    font-size: 1.1rem;
}

.genre-results-container .anime-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
}

.release-calendar-container {
    padding: 2rem;
}

.release-calendar-container h2 {
    color: #ff6b35;
    margin-bottom: 1rem;
    font-size: 2rem;
    text-align: center;
}

.year-sections {
    margin-top: 2rem;
}

.year-section {
    margin-bottom: 3rem;
}

.year-title {
    color: #ff6b35;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #ff6b35;
}

.year-section .anime-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1.5rem;
}
    
    .trailer-info {
        text-align: left;
        margin: 2rem 0;
    }
    
    .trailer-info p {
        margin: 0.5rem 0;
        color: #ccc;
    }
    
    .trailer-actions {
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
    }
    
    .anime-details {
        display: flex;
        gap: 2rem;
        align-items: flex-start;
    }
    
    .anime-details-poster img {
        width: 300px;
        height: 450px;
        object-fit: cover;
        border-radius: 8px;
    }
    
    .anime-details-info {
        flex: 1;
    }
    
    .anime-details-title {
        font-size: 2.5rem;
        margin-bottom: 1rem;
        color: #ff6b35;
    }
    
    .anime-details-meta {
        display: flex;
        gap: 1rem;
        margin-bottom: 1.5rem;
        flex-wrap: wrap;
    }
    
    .anime-details-meta span {
        background: rgba(255, 255, 255, 0.1);
        padding: 0.5rem 1rem;
        border-radius: 20px;
        font-size: 0.9rem;
    }
    
    .anime-details-description {
        font-size: 1.1rem;
        line-height: 1.6;
        margin-bottom: 2rem;
        color: #e0e0e0;
    }
    
    .anime-details-cast,
    .anime-details-creator,
    .anime-details-studio {
        margin-bottom: 1.5rem;
    }
    
    .anime-details-cast h3,
    .anime-details-creator h3,
    .anime-details-studio h3 {
        color: #ff6b35;
        margin-bottom: 0.5rem;
    }
    
    .anime-details-actions {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        align-items: center;
    }
    
    .anime-details-actions .btn-primary,
    .anime-details-actions .btn-outline {
        flex: 1;
        min-width: 200px;
        justify-content: center;
    }
    
    .anime-details-actions .btn-outline {
        background: rgba(255, 255, 255, 0.1);
        border: 2px solid rgba(255, 255, 255, 0.3);
        color: #ffffff;
        padding: 0.8rem 1.5rem;
        border-radius: 50px;
        font-size: 1rem;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        text-decoration: none;
    }
    
    .anime-details-actions .btn-outline:hover {
        background: rgba(255, 107, 53, 0.2);
        border-color: #ff6b35;
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(255, 107, 53, 0.2);
    }
    
    .btn-danger {
        background: #f44336;
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 4px;
        cursor: pointer;
        font-size: 0.9rem;
    }
    
    .btn-danger:hover {
        background: #d32f2f;
    }
    
    .admin-tab {
        background: rgba(255, 255, 255, 0.1);
        color: white;
        border: none;
        padding: 1rem 2rem;
        cursor: pointer;
        border-radius: 8px 8px 0 0;
        margin-right: 0.5rem;
    }
    
    .admin-tab.active {
        background: #ff6b35;
    }
    
    .admin-tab-content {
        display: none;
        padding: 2rem;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 0 8px 8px 8px;
    }
    
    .admin-tab-content.active {
        display: block;
    }
    
    .admin-table {
        overflow-x: auto;
        margin-top: 1rem;
    }
    
    .admin-table table {
        width: 100%;
        border-collapse: collapse;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 8px;
        overflow: hidden;
    }
    
    .admin-table th,
    .admin-table td {
        padding: 1rem;
        text-align: left;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .admin-table th {
        background: rgba(255, 107, 53, 0.2);
        color: #ff6b35;
        font-weight: 600;
    }
    
    .admin-form {
        max-width: 600px;
        margin: 0 auto;
    }
    
    .admin-form input,
    .admin-form textarea {
        width: 100%;
        padding: 1rem;
        margin-bottom: 1rem;
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 8px;
        color: white;
        font-size: 1rem;
    }
    
    .admin-form input::placeholder,
    .admin-form textarea::placeholder {
        color: #ccc;
    }
    
    .admin-form textarea {
        height: 100px;
        resize: vertical;
    }
    
    @media (max-width: 768px) {
        .anime-details {
            flex-direction: column;
        }
        
        .anime-details-poster img {
            width: 100%;
            height: 400px;
        }
        
        .anime-details-actions {
            flex-direction: column;
        }
        
        .anime-details-actions .btn-primary,
        .anime-details-actions .btn-outline {
            min-width: 100%;
            width: 100%;
        }
    }
`;
document.head.appendChild(style);