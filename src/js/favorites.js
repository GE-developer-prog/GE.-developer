// ============================================================================
//  FAVORITE ANIME, GAMES & CHARACTERS (shown on the About page) - edit this file.
//
//  Anime and games - each item has:
//    name    the title
//    image   the picture file name WITHOUT .webp, saved in public/images/favorites/
//            e.g. image: 'my-anime'  ->  public/images/favorites/my-anime.webp
//    genre   the genre, e.g. 'Action / Adventure' or 'RPG'
//    why     why it is your best (your own words)
//    about   a short description of it
//
//  Characters - each item has:
//    name, image (saved in public/images/characters/), anime (which anime they are in),
//    abilities (a list inside [ ]), about (description), why (why they are your favorite)
//
//  Copy a whole { ... }, line to add another one, or delete a line to remove one.
//  Until a picture file exists, the card shows an "Add picture" box.
// ============================================================================


export const ANIME = [

  { name: 'Naruto', image: 'naruto', genre: 'Action / Adventure / Shonen',
    why: 'I love Naruto’s determination, character growth, friendships, and the way he never gives up on his dream.',
    about: 'Naruto follows a young ninja who dreams of becoming Hokage and earning the respect of everyone around him.' },

  { name: 'Naruto Shippuden', image: 'naruto-shippuden', genre: 'Action / Adventure / Shonen',
    why: 'I love the deeper story, powerful characters, emotional moments, and legendary battles.',
    about: 'Naruto Shippuden continues Naruto’s journey as he grows stronger and faces greater threats to his friends and village.' },

  { name: 'The Eminence in Shadow', image: 'the-eminence-in-shadow', genre: 'Action / Fantasy / Isekai',
    why: 'I love Shadow’s confidence, mysterious style, overwhelming power, and the comedy behind his character.',
    about: 'Cid Kagenou lives his dream of becoming a mysterious mastermind while secretly leading the powerful Shadow Garden.' },

  { name: 'Spy X Family', image: 'spy-x-family', genre: 'Action / Comedy / Family',
    why: 'I love the funny family moments, action, unique characters, and the balance between comedy and serious scenes.',
    about: 'A spy, an assassin, and a telepath form a fake family while each secretly hides their true identity.' },

  { name: 'Jujutsu Kaisen', image: 'jujutsu-kaisen', genre: 'Action / Dark Fantasy / Supernatural',
    why: 'I love the intense fights, unique abilities, character designs, and amazing visual style.',
    about: 'Yuji Itadori enters the world of jujutsu sorcerers and fights dangerous cursed spirits.' },

  { name: 'Solo Leveling', image: 'solo-leveling', genre: 'Action / Fantasy / Adventure',
    why: 'I love Sung Jinwoo’s growth, powerful moments, visual effects, and the satisfying level-up system.',
    about: 'Sung Jinwoo starts as a weak hunter but gains a mysterious system that allows him to become incredibly powerful.' },

  { name: 'Sakamoto Days', image: 'sakamoto-days', genre: 'Action / Comedy / Martial Arts',
    why: 'I love the creative fights, funny characters, and the way comedy and serious action work together.',
    about: 'Taro Sakamoto is a legendary retired hitman who is forced back into action while protecting his family.' },

  { name: 'Ninja Kamui', image: 'ninja-kamui', genre: 'Action / Sci-Fi / Martial Arts',
    why: 'I love the dark ninja style, brutal action, futuristic technology, and impressive fights.',
    about: 'A former ninja returns to his violent past after his family is attacked by enemies from his old life.' },

  { name: 'Black Clover', image: 'black-clover', genre: 'Action / Fantasy / Shonen',
    why: 'I love Asta’s determination, rivalry, teamwork, and constant growth despite starting without magic.',
    about: 'Asta is a boy without magic who works hard to become the Wizard King in a world controlled by magic.' },

  { name: 'Demon Slayer', image: 'demon-slayer', genre: 'Action / Dark Fantasy',
    why: 'I love the beautiful animation, emotional story, character designs, and incredible sword fights.',
    about: 'Tanjiro becomes a demon slayer after his family is attacked and his sister is turned into a demon.' },

  { name: 'Rurouni Kenshin', image: 'ruroni-kenshin', genre: 'Action / Samurai / Historical',
    why: 'I love the samurai atmosphere, swordsmanship, character development, and Kenshin’s story.',
    about: 'Kenshin is a former assassin who chooses to protect people while refusing to kill again.' },

  { name: 'Fire Force', image: 'fire-force', genre: 'Action / Supernatural / Fantasy',
    why: 'I love the fire abilities, visual effects, character designs, and unique supernatural world.',
    about: 'Special Fire Force soldiers fight mysterious creatures called Infernals while investigating their origin.' },

  { name: 'Classroom of the Elite', image: 'classroom-of-the-elite', genre: 'Psychological / School / Drama',
    why: 'I love the strategy, intelligence, manipulation, and psychological battles between the characters.',
    about: 'Students compete in an elite school where intelligence, strategy, and social skills determine success.' },

  { name: 'Death Note', image: 'death-note', genre: 'Psychological / Thriller / Supernatural',
    why: 'I love the mind games, intelligence, strategy, and battle of wits between Light and L.',
    about: 'Light Yagami discovers a mysterious notebook that can kill anyone whose name is written inside it.' },

  { name: 'Zom 100', image: 'zom-100', genre: 'Comedy / Horror / Action',
    why: 'I love its colorful style, comedy, creativity, and the positive way it approaches a zombie apocalypse.',
    about: 'Akira finally feels free when a zombie apocalypse begins and decides to complete his bucket list.' },

  { name: 'That Time I Got Reincarnated as a Slime', image: 'that-time-i-got-reincarnated-as-a-slime', genre: 'Isekai / Fantasy / Adventure',
    why: 'I love Rimuru’s growth, powerful abilities, world-building, and the way he builds his own nation.',
    about: 'Rimuru is reincarnated as a slime and uses his abilities to build a powerful and peaceful nation.' },

  { name: 'Netflix Devil May Cry', image: 'devil-may-cry', genre: 'Cartoon Version /Action / Dark Fantasy / Supernatural',
    why: 'I love Dante’s personality, stylish combat, demons, weapons, and the dark atmosphere.',
    about: 'Dante is a powerful demon hunter who takes on dangerous supernatural enemies and missions.' },

  { name: 'Devil May Cry 2007', image: 'devil-may-cry-2007', genre: 'Anime Version /Action / Dark Fantasy / Supernatural',
    why: 'I love the classic Devil May Cry atmosphere, Dante’s style, and the supernatural action.',
    about: 'The 2007 anime follows Dante as he takes on different demon-hunting missions and supernatural threats.' },

  { name: 'Kaiju No. 8', image: 'kaiju-no-8', genre: 'Action / Sci-Fi / Kaiju',
    why: 'I love Kafka’s determination, the monster battles, military setting, comedy, and his transformation.',
    about: 'Kafka gains the ability to transform into a powerful kaiju while trying to join the Defense Force.' },

  { name: 'Chainsaw Man', image: 'chainsaw-man', genre: 'Action / Dark Fantasy / Horror',
    why: 'I love its unpredictable story, unique characters, dark humor, and unusual visual style.',
    about: 'Denji becomes a devil hunter after merging with his chains.' },

  {
    name: 'The Apothecary Diaries',
    image: 'the-apothecary-diaries',
    genre: 'Mystery / Historical / Drama',
    why: 'I love Maomao’s intelligence, curiosity, and the way she solves difficult mysteries.',
    about: 'Maomao uses her knowledge of medicine and sharp mind to solve mysteries inside the imperial palace.'
  },

  {
    name: 'The Misfit of Demon King Academy',
    image: 'the-misfit-of-demon-king-academy',
    genre: 'Action / Fantasy / Magic',
    why: 'I love Anos’ confidence, overwhelming power, and the way he stays calm in difficult situations.',
    about: 'Anos Voldigoad is the reincarnated Demon King who returns to a world that no longer remembers his true power.'
  },

  {
    name: 'Kakegurui',
    image: 'kakegurui',
    genre: 'Psychological / Gambling / Drama',
    why: 'I love the mind games, unpredictable characters, and intense psychological battles.',
    about: 'Students at an elite academy compete through high-stakes gambling where everything is on the line.'
  },

  {
    name: 'The Greatest Demon Lord Is Reborn as a Typical Nobody',
    image: 'the-greatest-demon-lord-is-reborn-as-a-typical-nobody',
    genre: 'Action / Fantasy / Magic',
    why: 'I love Ard’s hidden power, confidence, and the contrast between his strength and his normal life.',
    about: 'The Demon Lord Varvatos is reincarnated as Ard Meteor and tries to live an ordinary life.'
  },

  {
    name: 'Scissor Seven',
    image: 'scissor-seven',
    genre: 'Action / Comedy / Martial Arts',
    why: 'I love its comedy, unique animation, characters, and unexpected serious moments.',
    about: 'Seven is a goofy but skilled assassin who takes on different jobs while trying to recover his memories.'
  },

  {
    name: 'The Daily Life of the Immortal King',
    image: 'the-daily-life-of-the-immortal-king',
    genre: 'Action / Comedy / Fantasy',
    why: 'I love Wang Ling’s ridiculous power, calm personality, comedy, and creative abilities.',
    about: 'Wang Ling is an incredibly powerful cultivator who tries to live a normal school life.'
  },

  {
    name: "Hell's Paradise",
    image: 'hells-paradise',
    genre: 'Action / Dark Fantasy / Adventure',
    why: 'I love the mysterious world, dangerous creatures, unique abilities, and intense battles.',
    about: 'Gabimaru and other criminals are sent to a mysterious island to search for the secret of immortality.'
  },

  {
    name: 'Super Cube',
    image: 'super-cube',
    genre: 'Action / Fantasy / Supernatural',
    why: 'I love the power system, character growth, and the way the story becomes more intense.',
    about: 'A mysterious cube gives its user extraordinary abilities and changes the course of his life.'
  },

  {
    name: 'The Legend of Hei',
    image: 'the-legend-of-hei',
    genre: 'Fantasy / Adventure / Action',
    why: 'I love the beautiful animation, peaceful atmosphere, characters, and creative fantasy world.',
    about: 'Hei is a small spirit who begins an adventure that introduces him to a world filled with humans and spirits.'
  },

  {
    name: 'Spider-Man: Into the Spider-Verse',
    image: 'spider-man-into-the-spider-verse',
    genre: 'Action / Animation / Superhero',
    why: 'I love the unique animation, visual style, characters, and creative Spider-Man story.',
    about: 'Miles Morales becomes Spider-Man and meets other Spider-People from different dimensions.'
  },

  {
    name: 'Spider-Man: Across the Spider-Verse',
    image: 'spider-man-across-the-spider-verse',
    genre: 'Action / Animation / Superhero',
    why: 'I love the incredible visuals, different Spider-People, emotional story, and creative world-building.',
    about: 'Miles Morales travels across different dimensions and faces new challenges alongside other Spider-People.'
  },

  {
    name: 'Witch Hat Atelier',
    image: 'witch-hat-atelier',
    genre: 'Fantasy / Magic / Adventure',
    why: 'I love the beautiful artwork, creative magic system, and artistic world.',
    about: 'Coco discovers the secrets of magic and begins learning the mysterious art of witchcraft.'
  },

  {
    name: 'Mashle: Magic and Muscles',
    image: 'mashle-magic-and-muscles',
    genre: 'Action / Comedy / Fantasy',
    why: 'I love Mash’s strength, comedy, determination, and the funny way he challenges a world built around magic.',
    about: 'Mash has no magic in a magical world, so he relies on his incredible physical strength to survive.'
  },

  {
    name: 'Elena of Avalor',
    image: 'elena-of-avalor',
    genre: 'Adventure / Fantasy / Family',
    why: 'I love the colorful world, characters, adventures, and magical atmosphere.',
    about: 'Elena is a young princess who learns to rule her kingdom while facing magical and royal challenges.'
  },

  {
    name: 'Avatar: The Last Airbender',
    image: 'avatar-the-last-airbender',
    genre: 'Action / Fantasy / Adventure',
    why: 'I love the world-building, characters, bending abilities, humor, and emotional story.',
    about: 'Aang must master the four elements and restore balance to a world affected by war.'
  },

  {
    name: 'Ponyo',
    image: 'ponyo',
    genre: 'Fantasy / Adventure / Family',
    why: 'I love the beautiful animation, simple story, colorful world, and peaceful feeling.',
    about: 'Ponyo is a magical fish who dreams of becoming human after meeting a young boy named Sosuke.'
  },

  {
    name: 'Princess Mononoke',
    image: 'princess-mononoke',
    genre: 'Fantasy / Adventure / Drama',
    why: 'I love the powerful story, beautiful world, strong characters, and themes of nature and humanity.',
    about: 'Ashitaka becomes involved in a conflict between humans and the spirits protecting the forest.'
  },

  {
    name: 'Blue Lock',
    image: 'blue-lock',
    genre: 'Sports / Action / Competition',
    why: 'I love the competitive mindset, intense matches, character growth, and unique abilities.',
    about: 'Talented young football players compete in a ruthless program designed to create Japan’s ultimate striker.'
  },

  {
    name: 'Vinland Saga',
    image: 'vinland-saga',
    genre: 'Action / Historical / Drama',
    why: 'I love the character development, emotional story, battles, and powerful themes.',
    about: 'Thorfinn’s journey takes him through war, revenge, and a search for a better life.'
  },

  {
    name: 'Astra Lost in Space',
    image: 'astra-lost-in-space',
    genre: 'Sci-Fi / Adventure / Mystery',
    why: 'I love the space setting, mystery, teamwork, and the way the characters solve problems together.',
    about: 'A group of students becomes stranded in space and must work together to find their way home.'
  },

  {
    name: 'The Boondocks',
    image: 'the-boondocks',
    genre: 'Comedy / Satire / Animation',
    why: 'I love the humor, unique characters, bold storytelling, and social commentary.',
    about: 'The Freeman family experiences life in a suburban community while dealing with culture, society, and family conflicts.'
  },

  {
    name: 'Winx Club',
    image: 'winx-club',
    genre: 'Fantasy / Magic / Adventure',
    why: 'I love the magical world, transformations, characters, colorful designs, and adventures.',
    about: 'Bloom discovers that she has magical powers and joins the Winx Club to learn more about her abilities.'
  },

  {
    name: 'The Simpsons',
    image: 'the-simpsons',
    genre: 'Comedy / Family / Animation',
    why: 'I love the humor, memorable characters, creativity, and endless funny situations.',
    about: 'The Simpsons follows the everyday life and adventures of the Simpson family in Springfield.'
  },

  {
    name: 'Monster High',
    image: 'monster-high',
    genre: 'Comedy / Fantasy / Animation',
    why: 'I love the unique characters, colorful designs, fashion, and fun supernatural world.',
    about: 'Monster High follows a group of teenage monsters as they deal with friendship, school, and everyday adventures.'
  },

  {
    name: 'Heavenly Delusion',
    image: 'heavenly-delusion',
    genre: 'Mystery / Sci-Fi / Adventure',
    why: 'I love the mystery, unique world, characters, and unpredictable story.',
    about: 'Two teenagers travel through a dangerous world while searching for answers about their past.'
  },

  {
    name: 'Pantheon',
    image: 'pantheon',
    genre: 'Sci-Fi / Drama / Thriller',
    why: 'I love the technology, futuristic ideas, and questions about artificial intelligence.',
    about: 'Pantheon explores uploaded intelligence and the future of humanity and technology.'
  },

  {
    name: 'Castlevania',
    image: 'castlevania',
    genre: 'Action / Dark Fantasy / Horror',
    why: 'I love the dark atmosphere, powerful characters, animation, and brutal action.',
    about: 'Trevor Belmont and his allies fight supernatural forces threatening humanity.'
  },

  {
    name: 'Invincible',
    image: 'invincible',
    genre: 'Action / Superhero / Drama',
    why: 'I love the action, character development, powers, and unexpected story moments.',
    about: 'Mark Grayson discovers his superhero abilities while learning the truth about his powerful father.'
  },

  {
    name: 'Rooster Fighter',
    image: 'rooster-fighter',
    genre: 'Action / Comedy / Supernatural',
    why: 'I love how ridiculous, funny, and surprisingly intense the fights can be.',
    about: 'Keiji the rooster travels around fighting mysterious monsters to protect humanity.'
  },

  {
    name: 'Ragna Crimson',
    image: 'ragna-crimson',
    genre: 'Action / Dark Fantasy',
    why: 'I love the dark atmosphere, powerful abilities, and intense dragon battles.',
    about: 'Ragna joins Crimson to fight powerful dragons threatening humanity.'
  },

  {
    name: 'We Bare Bears',
    image: 'we-bare-bears',
    genre: 'Comedy / Family / Animation',
    why: 'I love the humor, friendship, simple stories, and personalities of the three bears.',
    about: 'Grizzly, Panda, and Ice Bear try to fit into human society while going on different adventures.'
  },

  {
    name: 'Ratatouille',
    image: 'ratatouille',
    genre: 'Comedy / Family / Animation',
    why: 'I love the creativity, animation, characters, and message about following your passion.',
    about: 'Remy is a rat who dreams of becoming a great chef despite the challenges around him.'
  },

  {
    name: 'Dragon Ball',
    image: 'dragon-ball',
    genre: 'Action / Adventure / Martial Arts',
    why: 'I love the characters, transformations, battles, training, and legendary moments.',
    about: 'Goku grows from a young martial artist into one of the strongest fighters in the universe.'
  },

  {
    name: 'Ben 10',
    image: 'ben-10',
    genre: 'Action / Sci-Fi / Adventure',
    why: 'I love the alien transformations, creative powers, characters, and adventures.',
    about: 'Ben Tennyson discovers the Omnitrix, allowing him to transform into different alien heroes.'
  },

  {
    name: 'Teen Titans',
    image: 'teen-titans',
    genre: 'Action / Superhero / Animation',
    why: 'I love the characters, teamwork, humor, powers, and emotional stories.',
    about: 'A group of young superheroes works together to protect their city from dangerous threats.'
  },

  {
    name: 'Looney Tunes',
    image: 'looney-tunes',
    genre: 'Comedy / Animation',
    why: 'I love the classic humor, memorable characters, and creative cartoon situations.',
    about: 'Looney Tunes follows iconic characters through funny and chaotic adventures.'
  },

  {
    name: 'Danny Phantom',
    image: 'danny-phantom',
    genre: 'Action / Supernatural / Comedy',
    why: 'I love the ghost powers, characters, humor, and supernatural adventures.',
    about: 'Danny gains ghost powers and secretly protects his town from supernatural threats.'
  },

  {
    name: 'Family Guy',
    image: 'family-guy',
    genre: 'Comedy / Animation / Sitcom',
    why: 'I love the humor, crazy situations, memorable characters, and unpredictable jokes.',
    about: 'Family Guy follows the Griffin family through their strange and often chaotic life.'
  },

  {
    name: 'Brave',
    image: 'brave',
    genre: 'Fantasy / Adventure / Animation',
    why: 'I love the beautiful animation, strong characters, and message about family and courage.',
    about: 'Princess Merida challenges tradition and tries to change her fate while repairing her relationship with her mother.'
  },

  {
    name: 'Arcane',
    image: 'arcane',
    genre: 'Action / Fantasy / Drama',
    why: 'I love the incredible animation, visual design, characters, and emotional storytelling.',
    about: 'Arcane follows the conflict between Piltover and Zaun through the stories of several powerful characters.'
  },

  {
    name: 'Hellsing Ultimate',
    image: 'hellsing-ultimate',
    genre: 'Action / Horror / Supernatural',
    why: 'I love the dark atmosphere, powerful characters, brutal action, and unique style.',
    about: 'The Hellsing Organization fights supernatural enemies with the help of the powerful vampire Alucard.'
  },

  {
    name: 'Justice League Unlimited',
    image: 'justice-league',
    genre: 'Action / Superhero / Animation',
    why: 'I love the heroes, teamwork, powers, stories, and the DC universe. Have watched lots of Justice League movies but I will use this to represent all of them',
    about: 'The Justice League expands its team to protect Earth from powerful threats.'
  },

  {
    name: 'Grand Blue Dreaming',
    image: 'grand-blue-dreaming',
    genre: 'Comedy / Slice of Life',
    why: 'I love the crazy comedy, friendships, characters, and ridiculous situations.',
    about: 'Iori joins a diving club and finds himself caught in a world of friendship, diving, and endless chaos.'
  },


{
  name: 'Tomb Raider King',
  image: 'tomb-raider-king',
  genre: 'Action / Adventure / Fantasy',
  why: 'I love the treasure hunting, powerful artifacts, strategy, and Jin Taehoon’s growth.',
  about: 'Jin Taehoon gains the power to control ancient relics and uses his knowledge to become the ultimate tomb raider.'
},


  {
    name: 'Wind Breaker',
    image: 'wind-breaker',
    genre: 'Action / School / Delinquent',
    why: 'I love the fights, characters, teamwork, and strong sense of rivalry.',
    about: 'Haruka Sakura joins Furin High and becomes involved with students who protect their town.'
  },

  {
    name: 'Bleach',
    image: 'bleach',
    genre: 'Action / Supernatural / Shonen',
    why: 'I love the characters, sword fights, transformations, abilities, and long-running story.',
    about: 'Ichigo Kurosaki becomes a Soul Reaper and fights dangerous supernatural enemies.'
  },

  {
    name: 'Hyouka',
    image: 'hyouka',
    genre: 'Mystery / School / Slice of Life',
    why: 'I love the mystery, calm atmosphere, smart characters, and beautiful visuals.',
    about: 'Houtarou Oreki solves small mysteries with his classmates while discovering more about the world around him.'
  },

  {
    name: 'Gachiakuta',
    image: 'gachiakuta',
    genre: 'Action / Fantasy / Shonen',
    why: 'I love the unique art style, characters, powers, and creative world.',
    about: 'Rudo is thrown into a dangerous world where he discovers strange powers and fights to uncover the truth.'
  },

  {
    name: 'Big Hero 6',
    image: 'big-hero-6',
    genre: 'Action / Sci-Fi / Animation',
    why: 'I love the technology, robotics, characters, and superhero design.',
    about: 'Hiro and Baymax join a team of heroes to protect their city from a dangerous threat.'
  },

  {
    name: 'Black Torch',
    image: 'black-torch',
    genre: 'Action / Supernatural / Shonen',
    why: 'I love the supernatural abilities, action, characters, and unique fighting styles.',
    about: 'Jiro is pulled into a hidden supernatural world where humans and strange creatures collide.'
  },

  {
    name: 'Hotel Transylvania',
    image: 'hotel-transylvania',
    genre: 'Comedy / Fantasy / Animation',
    why: 'I love the comedy, colorful characters, animation, and fun monster world.',
    about: 'Dracula runs a hotel where monsters can relax away from humans and their problems.'
  },

  {
    name: 'Dandadan',
    image: 'dandadan',
    genre: 'Action / Supernatural / Comedy',
    why: 'I love the crazy humor, supernatural powers, aliens, ghosts, and unpredictable action.',
    about: 'Momo and Okarun become involved in strange events involving aliens, ghosts, and supernatural powers.'
  },

  {
    name: 'Ben 10: Alien Force',
    image: 'ben-10-alien-force',
    genre: 'Action / Sci-Fi / Adventure',
    why: 'I love the more mature story, alien powers, characters, and stronger threats.',
    about: 'A teenage Ben returns to action with new aliens while facing dangerous threats across the galaxy.'
  },

  {
    name: 'Mulan',
    image: 'mulan',
    genre: 'Action / Adventure / Animation',
    why: 'I love Mulan’s courage, determination, character growth, and strong story.',
    about: 'Mulan disguises herself as a soldier to protect her family and serve her country.'
  },

  {
    name: 'The Princess and the Frog',
    image: 'the-princess-and-the-frog',
    genre: 'Fantasy / Romance / Animation',
    why: 'I love the animation, music, characters, and message about dreams and hard work.',
    about: 'Tiana’s life changes after meeting a prince who has been transformed into a frog.'
  },

  {
    name: 'Cyberpunk: Edgerunners',
    image: 'cyberpunk-edgerunners',
    genre: 'Action / Sci-Fi / Cyberpunk',
    why: 'I love the futuristic world, animation, characters, technology, and emotional story.',
    about: 'David becomes an edgerunner in Night City and gets pulled into a dangerous world of technology and crime.'
  },

  {
    name: 'PAW Patrol',
    image: 'paw-patrol',
    genre: 'Adventure / Comedy / Family',
    why: 'I love the characters, teamwork, colorful animation, and fun adventures.',
    about: 'A team of rescue pups works together to help people and animals in Adventure Bay.'
  },

  {
    name: 'Harley Quinn',
    image: 'harley-quinn',
    genre: 'Comedy / Action / Superhero',
    why: 'I love the humor, chaotic energy, characters, and colorful DC style.',
    about: 'Harley Quinn leaves the Joker and builds her own life while becoming a major force in Gotham.'
  },

  {
    name: 'PJ Masks',
    image: 'pj-masks',
    genre: 'Action / Superhero / Animation',
    why: 'I love the superhero concept, characters, teamwork, and colorful world.',
    about: 'Three children become superheroes at night and work together to stop villains.'
  },


  {
    name: 'Regular Show',
    image: 'regular-show',
    genre: 'Comedy / Adventure / Animation',
    why: 'I love the weird humor, characters, unexpected adventures, and creative situations.',
    about: 'Mordecai and Rigby turn simple everyday tasks into completely ridiculous adventures.'
  },

  {
    name: 'Terminator Zero',
    image: 'terminator-zero',
    genre: 'Action / Sci-Fi / Thriller',
    why: 'I love the futuristic technology, dark atmosphere, action, and AI themes.',
    about: 'A group of survivors fights against machines while trying to prevent a future controlled by artificial intelligence.'
  },



  {
    name: 'Blood of Zeus',
    image: 'blood-of-zeus',
    genre: 'Action / Fantasy / Mythology',
    why: 'I love the Greek mythology, animation, battles, powers, and dramatic story.',
    about: 'Heron discovers his divine heritage and must fight powerful forces threatening the gods and humanity.'
  },

  {
    name: 'Super Mario',
    image: 'super-mario',
    genre: 'Adventure / Comedy / Animation',
    why: 'I love the characters, colorful worlds, adventures, and gaming nostalgia.',
    about: 'Mario and his friends go on adventures through imaginative worlds while facing different enemies.'
  },

  {
    name: 'Star vs. the Forces of Evil',
    image: 'star-vs-the-forces-of-evil',
    genre: 'Fantasy / Comedy / Adventure',
    why: 'I love the magic, colorful world, characters, humor, and creative adventures.',
    about: 'Star Butterfly travels between dimensions while learning to control her magical powers.'
  },

  {
    name: 'The Loud House',
    image: 'the-loud-house',
    genre: 'Comedy / Family / Animation',
    why: 'I love the humor, family dynamics, characters, and everyday chaos.',
    about: 'Lincoln Loud lives with his ten sisters and finds creative ways to survive life in a huge family.'
  },

  {
    name: 'Zootopia',
    image: 'zootopia',
    genre: 'Comedy / Adventure / Animation',
    why: 'I love the creative world, characters, animation, humor, and mystery.',
    about: 'Judy Hopps becomes a police officer and works with Nick Wilde to solve a mysterious case.'
  },

  {
    name: 'The Amazing World of Gumball',
    image: 'the-amazing-world-of-gumball',
    genre: 'Comedy / Animation / Family',
    why: 'I love the crazy humor, unique animation, characters, and unpredictable stories.',
    about: 'Gumball and Darwin experience strange and hilarious adventures in the unusual town of Elmore.'
  },

  {
    name: 'The Daemon of the Realms',
    image: 'the-daemon-of-the-realms',
    genre: 'Fantasy / Action / Supernatural',
    why: 'I love the dark fantasy atmosphere, supernatural themes, and mysterious world.',
    about: 'A mysterious story centered around powerful supernatural forces and a dangerous world.'
  },

  {
    name: 'Akudama Drive',
    image: 'akudama-drive',
    genre: 'Action / Sci-Fi / Cyberpunk',
    why: 'I love the futuristic city, animation, action, characters, and cyberpunk atmosphere.',
    about: 'A group of criminals known as Akudama are brought together for a dangerous mission.'
  },

  {
    name: 'My Hero Academia',
    image: 'my-hero-academia',
    genre: 'Action / Superhero / Shonen',
    why: 'I love the characters, unique powers, hero designs, battles, and character growth.',
    about: 'Izuku Midoriya dreams of becoming a hero and enters a school where young heroes train their abilities.'
  },

  {
    name: 'Sofia the First',
    image: 'sofia-the-first',
    genre: 'Fantasy / Family / Animation',
    why: 'I love the magical world, characters, lessons, and colorful animation.',
    about: 'Sofia becomes a princess and learns about kindness, friendship, responsibility, and magic.'
  },

  {
    name: 'The God of High School',
    image: 'the-god-of-high-school',
    genre: 'Action / Martial Arts / Fantasy',
    why: 'I love the fast fights, martial arts, powers, animation, and competitive energy.',
    about: 'Mori Jin enters a martial arts tournament where fighters compete using incredible abilities.'
  },

  {
    name: 'SpongeBob SquarePants',
    image: 'spongebob-squarepants',
    genre: 'Comedy / Animation / Family',
    why: 'I love the humor, memorable characters, weird situations, and endless creativity.',
    about: 'SpongeBob lives in Bikini Bottom and goes on hilarious adventures with his friends.'
  },

  {
    name: 'Teenage Mutant Ninja Turtles',
    image: 'tmnt',
    genre: 'Action / Superhero / Adventure',
    why: 'I love the teamwork, martial arts, characters, weapons, and superhero-style action.',
    about: 'Four mutant turtles trained in ninjutsu protect New York City from dangerous enemies.'
  },

  {
    name: 'Pokémon',
    image: 'pokemon',
    genre: 'Adventure / Fantasy / Action',
    why: 'I love the creatures, adventures, battles, characters, and huge world.',
    about: 'Trainers travel the Pokémon world, catching creatures and battling to become stronger.'
  },

  {
    name: 'Lycoris Recoil',
    image: 'lycoris-recoil',
    genre: 'Action / Comedy / Slice of Life',
    why: 'I love the characters, action, animation, friendship, and balance between comedy and serious moments.',
    about: 'Chisato and Takina work as skilled agents while handling dangerous missions and everyday life.'
  },

  {
    name: 'Sailor Moon',
    image: 'sailor-moon',
    genre: 'Fantasy / Magical Girl / Romance',
    why: 'I love the transformations, characters, magical abilities, and classic animation style.',
    about: 'Usagi becomes Sailor Moon and joins other guardians to protect Earth from evil forces.'
  },

  {
    name: 'Soul Eater',
    image: 'soul-eater',
    genre: 'Action / Fantasy / Supernatural',
    why: 'I love the unique art style, characters, weapons, powers, and dark humor.',
    about: 'Students at the Death Weapon Meister Academy train to fight dangerous supernatural threats.'
  },

  {
    name: 'A Silent Voice',
    image: 'a-silent-voice',
    genre: 'Drama / Romance / School',
    why: 'I love the emotional story, beautiful animation, character growth, and meaningful themes.',
    about: 'Shoya tries to make amends with Shoko after bullying her when they were younger.'
  },

  {
    name: 'Howl’s Moving Castle',
    image: 'howls-moving-castle',
    genre: 'Fantasy / Adventure / Romance',
    why: 'I love the magical world, beautiful animation, characters, and imaginative designs.',
    about: 'Sophie is cursed and finds herself living in a magical moving castle with the wizard Howl.'
  },

  {
    name: 'Call of the Night',
    image: 'call-of-the-night',
    genre: 'Supernatural / Romance / Comedy',
    why: 'I love the nighttime atmosphere, visual style, characters, and unique supernatural world.',
    about: 'Ko explores the night and meets the vampire Nazuna while discovering a new way of life.'
  },

  {
    name: 'Sonic',
    image: 'sonic',
    genre: 'Action / Adventure / Comedy',
    why: 'I love Sonic’s speed, personality, characters, adventures, and gaming history.',
    about: 'Sonic the Hedgehog uses his incredible speed to fight enemies and protect his friends.'
  },

  {
    name: 'Dino Squad',
    image: 'dino-squad',
    genre: 'Action / Adventure / Sci-Fi',
    why: 'I love the dinosaur transformations, unique abilities, and exciting adventures.',
    about: 'A group of teenagers gains the power to transform into dinosaurs and protect the world from danger.'
  },
  {
    name: 'Trollhunters: Tales of Arcadia',
    image: 'trollhunters-tales-of-arcadia',
    genre: 'Fantasy / Action / Adventure',
    why: 'I love the magical world, powerful armor, characters, and epic battles.',
    about: 'Jim Lake discovers a magical amulet that makes him the first human Trollhunter.'
  },
  {
    name: 'The Heroic Quest of the Valiant Prince Ivandoe',
    image: 'the-heroic-quest-of-the-valiant-prince-ivandoe',
    genre: 'Comedy / Adventure / Fantasy',
    why: 'I love the funny characters, creative adventures, and colorful fantasy world.',
    about: 'Prince Ivandoe travels across the forest on a quest to find the legendary Golden Feather.'
  },
  {
    name: 'Jade Armor',
    image: 'jade-armor',
    genre: 'Action / Fantasy / Martial Arts',
    why: 'I love the magical armor, martial arts, character designs, and action.',
    about: 'Lan Jun discovers a magical bracelet that gives her special armor and the duty to protect her city.'
  },
  {
    name: 'DC Super Hero Girls',
    image: 'dc-super-hero-girls',
    genre: 'Action / Comedy / Superhero',
    why: 'I love the superhero powers, character designs, humor, and DC universe.',
    about: 'Wonder Woman, Supergirl, Batgirl, and their friends balance school life with superhero adventures.'
  },
  {
    name: 'Unikitty!',
    image: 'unikitty',
    genre: 'Comedy / Fantasy / Animation',
    why: 'I love the bright colors, funny characters, chaotic energy, and creative animation.',
    about: 'Unikitty and her friends protect their kingdom while turning everyday problems into wild adventures.'
  },
  {
    name: 'Generator Rex',
    image: 'generator-rex',
    genre: 'Action / Sci-Fi / Adventure',
    why: 'I love Rex’s mechanical powers, futuristic technology, and creative action scenes.',
    about: 'Rex uses his ability to create powerful machines from his body to fight dangerous mutated creatures.'
  },
  {
    name: 'Avatar: Seven Havens',
    image: 'avatar-seven-havens',
    genre: 'Fantasy / Action / Adventure',
    why: 'I love the Avatar universe, elemental powers, world-building, and martial arts.',
    about: 'A new Avatar story explores a world recovering from a devastating catastrophe.'
  },
  {
    name: 'Turbo',
    image: 'turbo',
    genre: 'Comedy / Adventure / Animation',
    why: 'I love the racing, funny characters, determination, and exciting competition.',
    about: 'A garden snail gains incredible speed and pursues his dream of competing in the Indianapolis 500.'
  },
  {
    name: 'Captain Underpants: The First Epic Movie',
    image: 'captain-underpants-the-first-epic-movie',
    genre: 'Comedy / Adventure / Animation',
    why: 'I love the silly humor, creative animation, and ridiculous superhero adventures.',
    about: 'Two school friends hypnotize their principal into believing he is the superhero Captain Underpants.'
  },
  {
    name: 'Cloudy with a Chance of Meatballs 2',
    image: 'cloudy-with-a-chance-of-meatballs-2',
    genre: 'Comedy / Sci-Fi / Adventure',
    why: 'I love the imaginative food creatures, colorful world, and crazy comedy.',
    about: 'Flint returns to his invention-filled island and discovers that food has evolved into living creatures.'
  },
  {
    name: 'Horton Hears a Who!',
    image: 'horton-hears-a-who',
    genre: 'Comedy / Family / Adventure',
    why: 'I love Horton’s kindness, the imaginative world, and the message about helping others.',
    about: 'Horton the elephant protects a tiny community living on a speck of dust.'
  },
  {
    name: 'Free Birds',
    image: 'free-birds',
    genre: 'Comedy / Adventure / Animation',
    why: 'I love the time-travel concept, funny characters, and unusual adventure.',
    about: 'Two turkeys travel back in time to change the tradition of eating turkey at Thanksgiving.'
  },
  {
    name: 'The Son of Bigfoot',
    image: 'the-son-of-bigfoot',
    genre: 'Comedy / Adventure / Fantasy',
    why: 'I love the family story, animal characters, funny moments, and adventure.',
    about: 'A teenager discovers that his missing father is Bigfoot and sets out to find him.'
  },
  {
    name: 'Astro Boy',
    image: 'astro-boy',
    genre: 'Action / Sci-Fi / Adventure',
    why: 'I love the robotics, futuristic world, powerful abilities, and emotional story.',
    about: 'A young robot with extraordinary powers searches for his place in a world shared by humans and machines.'
  },
  {
    name: 'Spies in Disguise',
    image: 'spies-in-disguise',
    genre: 'Action / Comedy / Spy',
    why: 'I love the spy gadgets, technology, comedy, and creative action scenes.',
    about: 'A skilled spy is accidentally transformed into a pigeon and must work with a young inventor to save the day.'
  },
  {
    name: 'Madagascar',
    image: 'madagascar',
    genre: 'Comedy / Adventure / Animation',
    why: 'I love the funny personalities, animal characters, and chaotic adventures.',
    about: 'Four zoo animals find themselves in the wild after an unexpected journey away from New York.'
  },
  {
    name: 'Astro Boy (2nd poster)',
    image: 'astro-boy-alt',
    genre: 'Action / Sci-Fi / Adventure',
    why: 'I love Astro Boy’s robotic design, futuristic setting, and heroic personality.',
    about: 'Astro Boy uses his advanced abilities to protect others and discover what it means to be human.'
  },
  {
    name: 'The Jungle Book',
    image: 'the-jungle-book',
    genre: 'Adventure / Family / Animation',
    why: 'I love the jungle setting, animal characters, and Mowgli’s journey.',
    about: 'Mowgli grows up among wolves and learns important lessons from the animals of the jungle.'
  },
  {
    name: 'Tarzan',
    image: 'tarzan',
    genre: 'Action / Adventure / Animation',
    why: 'I love Tarzan’s agility, jungle adventures, animal friendships, and action.',
    about: 'Raised by gorillas, Tarzan discovers the human world and learns where he belongs.'
  },
  {
    name: 'Hercules',
    image: 'hercules',
    genre: 'Fantasy / Comedy / Mythology',
    why: 'I love the Greek mythology, superhuman strength, humor, and heroic journey.',
    about: 'Hercules trains to become a true hero and earn his place among the gods of Mount Olympus.'
  },
  {
    name: 'The Addams Family',
    image: 'the-addams-family',
    genre: 'Comedy / Family / Supernatural',
    why: 'I love the unusual characters, dark humor, gothic style, and family dynamics.',
    about: 'The mysterious Addams family faces the outside world while staying true to their strange way of life.'
  },
  {
    name: 'The Patrick Star Show',
    image: 'the-patrick-star-show',
    genre: 'Comedy / Animation / Family',
    why: 'I love Patrick’s ridiculous humor, strange ideas, and unpredictable adventures.',
    about: 'Patrick Star hosts his own unusual television show from his family’s home in Bikini Bottom.'
  },
  {
    name: 'Dora the Explorer',
    image: 'dora-the-explorer',
    genre: 'Adventure / Family / Educational',
    why: 'I love the exploration, puzzles, colorful world, and interactive adventures.',
    about: 'Dora and her friends travel through different places while solving problems and helping others.'
  },
  {
    name: 'Barbie: Life in the Dreamhouse',
    image: 'barbie-life-in-the-dreamhouse',
    genre: 'Comedy / Family / Animation',
    why: 'I love the colorful designs, playful humor, and entertaining character interactions.',
    about: 'Barbie and her friends experience funny everyday situations in their glamorous Dreamhouse world.'
  },
  {
    name: 'Mr. Bean: The Animated Series',
    image: 'mr-bean-the-animated-series',
    genre: 'Comedy / Family / Animation',
    why: 'I love the physical comedy, clever mishaps, and Mr. Bean’s unusual personality.',
    about: 'Mr. Bean turns ordinary daily activities into hilarious situations through his unusual behavior.'
  },
  {
    name: 'Apple & Onion',
    image: 'apple-and-onion',
    genre: 'Comedy / Adventure / Animation',
    why: 'I love the friendship, silly humor, unique characters, and colorful style.',
    about: 'Apple and Onion are two best friends learning to navigate life in a city full of food characters.'
  },
  {
    name: 'Craig of the Creek',
    image: 'craig-of-the-creek',
    genre: 'Adventure / Comedy / Family',
    why: 'I love the imaginative adventures, teamwork, friendships, and creative world.',
    about: 'Craig and his friends explore a huge creek that feels like a world of its own.'
  },
  {
    name: 'American Dad!',
    image: 'american-dad',
    genre: 'Comedy / Adult Animation / Sitcom',
    why: 'I love the absurd humor, unusual characters, and unpredictable situations.',
    about: 'CIA agent Stan Smith and his eccentric family get caught up in strange and often chaotic situations.'
  },
  {
    name: 'Aladdin',
    image: 'aladdin',
    genre: 'Fantasy / Adventure / Romance',
    why: 'I love the magical world, Genie’s humor, memorable characters, and adventure.',
    about: 'Aladdin discovers a magic lamp and uses its powerful genie to change his life.'
  },
  {
    name: 'Lady and the Tramp',
    image: 'lady-and-the-tramp',
    genre: 'Romance / Family / Animation',
    why: 'I love the charming characters, beautiful animation, and heartwarming story.',
    about: 'Lady, a pampered dog, develops a friendship with Tramp, a streetwise dog who shows her a different world.'
  },
  {
    name: 'Up',
    image: 'up',
    genre: 'Adventure / Comedy / Drama',
    why: 'I love the emotional storytelling, colorful adventure, and meaningful characters.',
    about: 'Carl attaches balloons to his house and travels to South America with an unexpected young companion.'
  },
  {
    name: 'Turbo (2nd poster)',
    image: 'turbo-alt',
    genre: 'Comedy / Adventure / Animation',
    why: 'I love the racing theme, determination, and fun visual style.',
    about: 'Turbo, a speedy snail, follows his dream of racing against the fastest competitors.'
  },
  {
    name: 'Home',
    image: 'home',
    genre: 'Sci-Fi / Comedy / Adventure',
    why: 'I love the alien technology, colorful characters, humor, and friendship.',
    about: 'A lonely girl and a clumsy alien become friends while trying to save the world from trouble.'
  },
  {
    name: 'Cloudy with a Chance of Meatballs',
    image: 'cloudy-with-a-chance-of-meatballs',
    genre: 'Comedy / Sci-Fi / Animation',
    why: 'I love the creative inventions, food-themed chaos, and imaginative animation.',
    about: 'Inventor Flint Lockwood creates a machine that makes food fall from the sky.'
  },
  {
    name: 'Mr. Peabody & Sherman',
    image: 'mr-peabody-and-sherman',
    genre: 'Comedy / Sci-Fi / Adventure',
    why: 'I love the time travel, historical characters, clever humor, and technology.',
    about: 'A genius dog and his adopted son travel through history using a time machine.'
  },
  {
    name: 'Shark Tale',
    image: 'shark-tale',
    genre: 'Comedy / Adventure / Animation',
    why: 'I love the underwater world, funny characters, and unusual story.',
    about: 'A small fish becomes famous after taking credit for defeating a shark.'
  },
  {
    name: 'Fanboy & Chum Chum',
    image: 'fanboy-and-chum-chum',
    genre: 'Comedy / Adventure / Animation',
    why: 'I love the wild imagination, silly humor, and energetic characters.',
    about: 'Two enthusiastic best friends turn everyday life into bizarre and funny adventures.'
  },
  {
    name: 'Jimmy Neutron: Boy Genius',
    image: 'jimmy-neutron-boy-genius',
    genre: 'Sci-Fi / Comedy / Adventure',
    why: 'I love the inventions, futuristic gadgets, scientific ideas, and funny experiments.',
    about: 'Jimmy Neutron is a young genius whose inventions often lead him and his friends into trouble.'
  },
  {
    name: 'Johnny Bravo',
    image: 'johnny-bravo',
    genre: 'Comedy / Animation',
    why: 'I love the exaggerated personality, classic cartoon humor, and ridiculous situations.',
    about: 'Johnny Bravo is a muscular, self-confident man whose attempts to impress others usually fail.'
  },
  {
    name: 'Tom and Jerry',
    image: 'tom-and-jerry',
    genre: 'Comedy / Slapstick / Animation',
    why: 'I love the clever chases, physical comedy, and timeless cartoon rivalry.',
    about: 'Tom the cat and Jerry the mouse constantly compete in hilarious battles and pranks.'
  },
  {
    name: 'Tom and Jerry (2nd poster)',
    image: 'tom-and-jerry-alt',
    genre: 'Comedy / Slapstick / Animation',
    why: 'I love the classic animation, funny chases, and creative ways they outsmart each other.',
    about: 'Tom and Jerry turn their everyday rivalry into endless comedic adventures.'
  },
  {
    name: 'Maya the Bee',
    image: 'maya-the-bee',
    genre: 'Adventure / Family / Animation',
    why: 'I love the nature setting, friendly characters, and adventurous spirit.',
    about: 'Maya is a curious young bee who explores the world and makes friends with other insects.'
  },
  {
    name: 'Kamp Koral: SpongeBob’s Under Years',
    image: 'kamp-koral-spongebobs-under-years',
    genre: 'Comedy / Family / Animation',
    why: 'I love the younger versions of the characters, silly humor, and summer-camp adventures.',
    about: 'Young SpongeBob and his friends spend their summer at an underwater camp filled with fun and chaos.'
  },
  {
    name: 'Mickey Mouse Clubhouse+',
    image: 'mickey-mouse-clubhouse-plus',
    genre: 'Comedy / Family / Educational',
    why: 'I love the familiar characters, colorful world, and playful problem-solving.',
    about: 'Mickey and his friends use the Clubhouse and teamwork to solve problems and enjoy adventures.'
  },
  {
    name: 'Cinderella',
    image: 'cinderella',
    genre: 'Fantasy / Romance / Family',
    why: 'I love the magical transformation, classic story, and beautiful character designs.',
    about: 'Cinderella receives magical help to attend a royal ball and change her future.'
  },
  {
    name: 'InuYasha',
    image: 'inuyasha',
    genre: 'Action / Fantasy / Romance',
    why: 'I love the sword fights, supernatural powers, characters, and adventure.',
    about: 'Kagome travels to a past era and joins the half-demon Inuyasha on a quest for powerful jewel shards.'
  },
  {
    name: 'Alvinnn!!! and the Chipmunks',
    image: 'alvinnn-and-the-chipmunks',
    genre: 'Comedy / Music / Family',
    why: 'I love the music, funny personalities, and entertaining sibling rivalry.',
    about: 'Alvin, Simon, Theodore, and the Chipettes navigate school, music, and everyday adventures.'
  },
  {
    name: 'Harvey Beaks',
    image: 'harvey-beaks',
    genre: 'Comedy / Adventure / Family',
    why: 'I love the colorful forest world, friendships, humor, and imaginative stories.',
    about: 'Harvey and his two best friends explore the forest and discover new things about life.'
  },
  {
    name: '44 Cats',
    image: '44-cats',
    genre: 'Comedy / Music / Family',
    why: 'I love the musical moments, cute characters, and teamwork.',
    about: 'The Buffycats are a band of friendly cats who help others and go on fun adventures.'
  },
  {
    name: 'Puppy Dog Pals',
    image: 'puppy-dog-pals',
    genre: 'Adventure / Comedy / Family',
    why: 'I love the cute puppies, teamwork, and fun missions around the world.',
    about: 'Puppy brothers Bingo and Rolly travel on exciting missions to help their owner and friends.'
  },
  {
    name: 'Fancy Nancy',
    image: 'fancy-nancy',
    genre: 'Comedy / Family / Animation',
    why: 'I love the colorful designs, imagination, and creative way Nancy expresses herself.',
    about: 'Nancy enjoys turning everyday life into something fancy through imagination and creativity.'
  },
  {
    name: 'Vampirina',
    image: 'vampirina',
    genre: 'Fantasy / Comedy / Family',
    why: 'I love the supernatural characters, colorful style, music, and friendly monster world.',
    about: 'Vampirina and her family move from Transylvania to Pennsylvania and learn to fit into their new community.'
  },
  {
    name: 'Doc McStuffins',
    image: 'doc-mcstuffins',
    genre: 'Family / Fantasy / Educational',
    why: 'I love the caring characters, imaginative stories, and creative problem-solving.',
    about: 'A young girl who can talk to toys uses her skills to help them feel better.'
  },
  {
    name: 'The Boss Baby',
    image: 'the-boss-baby',
    genre: 'Comedy / Family / Animation',
    why: 'I love the funny concept, expressive characters, and unusual family adventures.',
    about: 'A baby in a business suit teams up with his older brother to handle a secret corporate mission.'
  },
  {
    name: 'Elemental',
    image: 'elemental',
    genre: 'Fantasy / Romance / Adventure',
    why: 'I love the elemental powers, creative city design, colorful visuals, and emotional story.',
    about: 'Ember, a fire element, forms an unexpected friendship with Wade, a water element, in Element City.'
  },
  {
    name: 'Tangled',
    image: 'tangled',
    genre: 'Fantasy / Adventure / Comedy',
    why: 'I love Rapunzel’s magical hair, the character designs, humor, and adventurous story.',
    about: 'Rapunzel leaves her tower for the first time and discovers the world beyond it with Flynn Rider.'
  },
  {
    name: 'The Lion Guard',
    image: 'the-lion-guard',
    genre: 'Action / Adventure / Family',
    why: 'I love the animal characters, teamwork, unique abilities, and exciting adventures.',
    about: 'Kion leads a team of animals responsible for protecting the Pride Lands.'
  },
  {
    name: 'Toy Story 3',
    image: 'toy-story-3',
    genre: 'Adventure / Comedy / Drama',
    why: 'I love the emotional story, memorable characters, and themes of friendship and loyalty.',
    about: 'Woody, Buzz, and their friends face an uncertain future when Andy prepares to leave for college.'
  },
  {
    name: 'The Lion King',
    image: 'the-lion-king',
    genre: 'Adventure / Drama / Family',
    why: 'I love the powerful story, memorable music, animal characters, and emotional moments.',
    about: 'Simba must overcome his past and accept his responsibility as the future king of the Pride Lands.'
  },
  {
    name: 'Moana',
    image: 'moana',
    genre: 'Adventure / Fantasy / Musical',
    why: 'I love Moana’s courage, ocean visuals, mythology, and inspiring journey.',
    about: 'Moana sails across the ocean with Maui to restore balance to her island.'
  },
  {
    name: 'Tangled (2nd poster)',
    image: 'tangled-alt',
    genre: 'Fantasy / Adventure / Comedy',
    why: 'I love Rapunzel’s adventurous spirit, magical hair, and beautiful animation.',
    about: 'Rapunzel discovers life beyond her tower and sets out on an unforgettable journey.'
  },
  {
    name: 'Beauty and the Beast',
    image: 'beauty-and-the-beast',
    genre: 'Fantasy / Romance / Musical',
    why: 'I love the enchanted setting, memorable music, and message about looking beyond appearances.',
    about: 'Belle discovers an enchanted castle and forms an unexpected bond with the Beast.'
  },
  {
    name: 'Jake and the Never Land Pirates',
    image: 'jake-and-the-never-land-pirates',
    genre: 'Adventure / Fantasy / Family',
    why: 'I love the pirate adventures, teamwork, treasure hunts, and colorful characters.',
    about: 'Jake and his crew search for treasure and outsmart Captain Hook in Never Land.'
  },
  {
    name: 'How to Train Your Dragon',
    image: 'how-to-train-your-dragon',
    genre: 'Fantasy / Action / Adventure',
    why: 'I love the dragons, flight scenes, character growth, and friendship between Hiccup and Toothless.',
    about: 'Hiccup befriends a dragon named Toothless and changes how his village sees dragons.'
  },
  {
    name: 'The Croods',
    image: 'the-croods',
    genre: 'Comedy / Adventure / Family',
    why: 'I love the creative prehistoric world, funny family moments, and wild adventures.',
    about: 'The Crood family travels through a dangerous new world while learning to adapt and work together.'
  },
  {
    name: 'The Good Dinosaur',
    image: 'the-good-dinosaur',
    genre: 'Adventure / Family / Drama',
    why: 'I love the beautiful landscapes, emotional story, and friendship between Arlo and Spot.',
    about: 'A young dinosaur named Arlo becomes friends with a human child while trying to find his way home.'
  },
  {
    name: 'Cars',
    image: 'cars',
    genre: 'Comedy / Sports / Adventure',
    why: 'I love the racing, vehicle designs, memorable characters, and message about friendship.',
    about: 'Lightning McQueen learns valuable lessons about life and friendship after getting stuck in Radiator Springs.'
  },
  {
    name: 'The Penguins of Madagascar',
    image: 'the-penguins-of-madagascar',
    genre: 'Action / Comedy / Adventure',
    why: 'I love the spy missions, clever plans, funny personalities, and teamwork.',
    about: 'Skipper, Kowalski, Rico, and Private carry out secret missions filled with action and comedy.'
  },
  {
    name: 'Rio 2',
    image: 'rio-2',
    genre: 'Comedy / Adventure / Musical',
    why: 'I love the colorful rainforest, music, animal characters, and lively animation.',
    about: 'Blu and Jewel travel to the Amazon with their family and discover a hidden community of blue macaws.'
  },
  {
    name: 'Ice Age',
    image: 'ice-age',
    genre: 'Comedy / Adventure / Family',
    why: 'I love the funny characters, prehistoric setting, and friendship between the unlikely group.',
    about: 'Manny, Sid, and Diego journey across an icy world while helping a human baby return to his family.'
  },
  {
    name: 'Shrek',
    image: 'shrek',
    genre: 'Comedy / Fantasy / Adventure',
    why: 'I love the hilarious humor, fairy-tale twists, and memorable characters.',
    about: 'Shrek sets out to rescue Princess Fiona and unexpectedly discovers the value of friendship and love.'
  },
  {
    name: 'Kung Fu Panda',
    image: 'kung-fu-panda',
    genre: 'Action / Comedy / Martial Arts',
    why: 'I love the martial arts, creative fighting styles, humor, and Po’s growth.',
    about: 'Po becomes the Dragon Warrior and trains to protect his home from dangerous enemies.'
  },
  {
    name: 'Inside Out 2',
    image: 'inside-out-2',
    genre: 'Comedy / Family / Animation',
    why: 'I love the creative emotions, colorful designs, humor, and clever storytelling.',
    about: 'Riley enters her teenage years as new emotions arrive and change how she understands herself.'
  },
  {
    name: 'The Incredibles',
    image: 'the-incredibles',
    genre: 'Action / Superhero / Family',
    why: 'I love the superhero abilities, family teamwork, action scenes, and character designs.',
    about: 'The Parr family secretly uses their superpowers to stop a dangerous threat while protecting their identity.'
  },
  {
    name: '009 Re:Cyborg',
    image: '009-re-cyborg',
    genre: 'Action / Sci-Fi / Anime',
    why: 'I love the cybernetic abilities, futuristic technology, and team-based action.',
    about: 'A group of enhanced cyborgs reunites to investigate a mysterious threat against humanity.'
  },
  {
    name: 'Jack-of-All-Trades, Party of None',
    image: 'jack-of-all-trades-party-of-none',
    genre: 'Fantasy / Action / Adventure',
    why: 'I love the fantasy abilities, character growth, and journey of proving oneself.',
    about: 'An adventurer who has mastered several skills sets out to find his own path after leaving his former party.'
  },
  {
    name: 'The Casagrandes',
    image: 'the-casagrandes',
    genre: 'Comedy / Family / Animation',
    why: 'I love the lively family, funny situations, and colorful neighborhood setting.',
    about: 'Ronnie Anne and her extended family experience everyday adventures in a busy city neighborhood.'
  },
  {
    name: 'Adventure Time',
    image: 'adventure-time',
    genre: 'Fantasy / Comedy / Adventure',
    why: 'I love the imaginative world, strange characters, creative powers, and unexpected stories.',
    about: 'Finn and Jake explore the Land of Ooo, meeting unusual creatures and facing magical challenges.'
  },
  {
    name: 'Attack on Titan',
    image: 'attack-on-titan',
    genre: 'Action / Dark Fantasy / Anime',
    why: 'I love the intense battles, mystery, character development, and dramatic twists.',
    about: 'Eren Yeager joins the fight against giant Titans while uncovering dark secrets about his world.'
  },
  {
    name: 'Supa Strikas',
    image: 'supa-strikas',
    genre: 'Sports / Action / Adventure',
    why: 'I love the football skills, rivalries, teamwork, and competitive matches.',
    about: 'The Supa Strikas football team travels around the world to compete against powerful rivals.'
  },
  {
    name: 'DC Super Hero Girls (2nd poster)',
    image: 'dc-super-hero-girls-alt',
    genre: 'Action / Comedy / Superhero',
    why: 'I love the superhero designs, powers, friendship, and fun DC adventures.',
    about: 'Young DC heroines balance school, friendship, and their responsibilities as superheroes.'
  },
  {
    name: 'The Batman',
    image: 'the-batman',
    genre: 'Action / Crime / Superhero',
    why: 'I love Batman’s intelligence, detective skills, dark style, and advanced gadgets.',
    about: 'Batman protects Gotham City by investigating crimes and fighting dangerous villains.'
  },
  {
    name: 'Ben 10: Omniverse',
    image: 'ben-10-omniverse',
    genre: 'Action / Sci-Fi / Adventure',
    why: 'I love the alien transformations, creative powers, futuristic designs, and action.',
    about: 'Ben Tennyson teams up with a new partner and faces threats using the power of the Omnitrix.'
  },
  {
    name: 'Max Steel',
    image: 'max-steel',
    genre: 'Action / Sci-Fi / Superhero',
    why: 'I love the advanced armor, energy powers, technology, and futuristic battles.',
    about: 'Max McGrath teams up with the alien technology companion Steel to control his powerful energy abilities.'
  },
  {
    name: 'Sanjay and Craig',
    image: 'sanjay-and-craig',
    genre: 'Comedy / Adventure / Animation',
    why: 'I love the bizarre humor, wild imagination, and funny friendship between the characters.',
    about: 'Sanjay and his talking pet snake Craig get into strange and hilarious situations.'
  },
  {
    name: 'Pig Goat Banana Cricket',
    image: 'pig-goat-banana-cricket',
    genre: 'Comedy / Surreal / Animation',
    why: 'I love the weird humor, unusual characters, and unpredictable cartoon situations.',
    about: 'Pig, Goat, Banana, and Cricket share a home and experience surreal adventures in their unusual city.'
  },

{
  name: 'Totally Spies!',
  image: 'totally-spies',
  genre: 'Action / Comedy / Spy',
  why: 'I love the spy gadgets, stylish characters, creative missions, and fun action scenes.',
  about: 'Sam, Clover, and Alex balance their everyday lives with secret missions as international spies.'
},

{
  name: 'Frieren: Beyond Journey’s End',
  image: 'frieren-beyond-journeys-end',
  genre: 'Fantasy / Adventure / Drama',
  why: 'I love the beautiful world, powerful magic, calm atmosphere, and emotional storytelling.',
  about: 'After defeating the Demon King, the elf mage Frieren begins a journey to understand humans and the meaning of life.'
},

{
  name: 'Pony',
  image: 'pony',
  genre: 'Comedy / Adventure / Animation',
  why: 'I love the funny characters, imaginative situations, and playful cartoon style.',
  about: 'A pony and his young human friend get caught up in unusual everyday adventures.'
},

{
  name: 'My Adventures with Superman',
  image: 'my-adventures-with-superman',
  genre: 'Action / Superhero / Romance',
  why: 'I love Superman’s powers, modern character designs, exciting action, and the relationship between Clark and Lois.',
  about: 'Clark Kent discovers his powers while working as a reporter with Lois Lane and Jimmy Olsen.'
},

{
  name: 'Bunsen Is a Beast',
  image: 'bunsen-is-a-beast',
  genre: 'Comedy / Fantasy / Animation',
  why: 'I love Bunsen’s funny personality, unusual abilities, and the chaos he brings to everyday life.',
  about: 'Bunsen is a friendly beast who attends school in the human world with his best friend, Mikey.'
},

{
  name: 'ToonMarty',
  image: 'toonmarty',
  genre: 'Comedy / Adventure / Animation',
  why: 'I love the cartoon humor, exaggerated characters, and crazy adventures.',
  about: 'Marty is a lively cartoon character who gets into funny situations with his friends.'
},

{
  name: 'Power Players',
  image: 'power-players',
  genre: 'Action / Adventure / Superhero',
  why: 'I love the toy-sized battles, creative gadgets, unique characters, and teamwork.',
  about: 'A boy named Axel transforms into an action figure and teams up with living toys to fight villains.'
},

{
  name: 'T.U.F.F. Puppy',
  image: 'tuff-puppy',
  genre: 'Action / Comedy / Spy',
  why: 'I love the spy gadgets, funny missions, action scenes, and Dudley’s hilarious personality.',
  about: 'Dudley Puppy works with his partner Kitty Katswell to protect Petropolis as an agent of T.U.F.F.'
},

{
  name: 'T.O.T.S.',
  image: 'tots',
  genre: 'Adventure / Comedy / Family',
  why: 'I love the cute animal characters, teamwork, colorful animation, and heartwarming adventures.',
  about: 'Pip the penguin and Freddy the flamingo work as junior flyers, delivering baby animals to their forever families.'
},

{
  name: 'Welcome to the Wayne',
  image: 'welcome-to-the-wayne',
  genre: 'Comedy / Mystery / Adventure',
  why: 'I love the strange building, hidden secrets, unique characters, and mysterious adventures.',
  about: 'Olly and Ansi explore their unusual apartment building and uncover its many secrets.'
},

{
  name: 'Chop Chop Ninja',
  image: 'chop-chop-ninja',
  genre: 'Action / Comedy / Martial Arts',
  why: 'I love the ninja action, funny characters, and entertaining martial arts adventures.',
  about: 'A young ninja and his friends train and take on challenges while learning the skills of ninjutsu.'
},

{
  name: 'Team Umizoomi',
  image: 'team-umizoomi',
  genre: 'Adventure / Educational / Animation',
  why: 'I love the colorful characters, teamwork, and creative ways they solve problems.',
  about: 'Milli, Geo, and Bot use their special math powers to help people solve everyday problems.'
},

{
  name: 'Super Why!',
  image: 'super-why',
  genre: 'Adventure / Educational / Fantasy',
  why: 'I love the magical stories, colorful characters, and creative approach to reading.',
  about: 'Whyatt and his friends enter storybooks and use reading skills to solve problems.'
},

{
  name: 'Frozen',
  image: 'frozen',
  genre: 'Fantasy / Adventure / Musical',
  why: 'I love the ice powers, magical setting, memorable songs, and bond between the sisters.',
  about: 'Anna sets out to find Elsa and save their kingdom after Elsa’s magical powers trap it in eternal winter.'
},

{
  name: 'Teen Titans Go!',
  image: 'teen-titans-go',
  genre: 'Comedy / Superhero / Animation',
  why: 'I love the crazy humor, superhero characters, silly adventures, and unexpected jokes.',
  about: 'Robin, Starfire, Raven, Beast Boy, and Cyborg balance superhero life with hilarious everyday chaos.'
},

  {
    name: '101 Dalmatians',
    image: '101-dalmatians',
    genre: 'Comedy / Adventure / Family',
    why: 'I love the adorable dogs, funny moments, and exciting family adventures.',
    about: 'Pongo and Perdita try to protect their puppies from Cruella de Vil, who wants to turn them into fur coats.'
  },
  {
    name: 'Abominable',
    image: 'abominable',
    genre: 'Fantasy / Adventure / Family',
    why: 'I love the beautiful scenery, magical journey, and friendship between the characters.',
    about: 'A teenage girl and her friends help a young yeti return to his family across China.'
  },
  {
    name: 'Alpha and Omega',
    image: 'alpha-and-omega',
    genre: 'Adventure / Comedy / Romance',
    why: 'I love the wolf characters, funny moments, and adventurous journey.',
    about: 'Two wolves from different social groups must work together to find their way home.'
  },
  {
    name: 'Avatar: The Legend of Korra',
    image: 'avatar-the-legend-of-korra',
    genre: 'Action / Fantasy / Adventure',
    why: 'I love the elemental bending, martial arts, powerful characters, and world-building.',
    about: 'Korra, the new Avatar, learns to master the elements while facing threats to balance and peace.'
  },
  {
    name: 'Avengers Assemble',
    image: 'avengers-assemble',
    genre: 'Action / Superhero / Sci-Fi',
    why: 'I love the superhero abilities, teamwork, villains, and Marvel action.',
    about: 'Iron Man, Captain America, Thor, Hulk, and other heroes unite to protect the world.'
  },
  {
    name: 'Ballerina',
    image: 'ballerina',
    genre: 'Animation / Adventure / Musical',
    why: 'I love the graceful animation, determination, and inspiring journey.',
    about: 'Félicie dreams of becoming a ballerina and travels to Paris to pursue her passion.'
  },
  {
    name: 'Batman vs. Teenage Mutant Ninja Turtles',
    image: 'batman-vs-teenage-mutant-ninja-turtles',
    genre: 'Action / Superhero / Martial Arts',
    why: 'I love the crossover, ninja fighting styles, gadgets, and teamwork.',
    about: 'Batman and the Teenage Mutant Ninja Turtles join forces against dangerous enemies in Gotham City.'
  },
  {
    name: 'Blaze and the Monster Machines',
    image: 'blaze-and-the-monster-machines',
    genre: 'Action / Adventure / Educational',
    why: 'I love the racing, transforming vehicles, teamwork, and creative problem-solving.',
    about: 'Blaze and his driver AJ take on exciting challenges while exploring science and engineering.'
  },
  {
    name: 'Bluey',
    image: 'bluey',
    genre: 'Comedy / Family / Animation',
    why: 'I love the playful imagination, family moments, and creative everyday adventures.',
    about: 'Bluey, a playful Blue Heeler puppy, enjoys imaginative games with her family and friends.'
  },
  {
    name: 'Clone High',
    image: 'clone-high',
    genre: 'Comedy / School / Sci-Fi',
    why: 'I love the unusual concept, exaggerated characters, and unpredictable humor.',
    about: 'Historical figures are cloned and raised as teenagers at a modern high school.'
  },
  {
    name: 'David',
    image: 'david',
    genre: 'Musical / Drama / Biblical',
    why: 'I love the inspiring story, music, courage, and themes of faith and determination.',
    about: 'David rises from being a young shepherd to facing Goliath and discovering his purpose.'
  },
  {
    name: 'DC League of Super-Pets',
    image: 'dc-league-of-super-pets',
    genre: 'Comedy / Action / Superhero',
    why: 'I love the animal superheroes, funny personalities, and creative powers.',
    about: 'Krypto and a team of newly empowered pets work together to rescue the Justice League.'
  },
  {
    name: 'Despicable Me',
    image: 'despicable-me',
    genre: 'Comedy / Family / Animation',
    why: 'I love the Minions, clever inventions, funny moments, and character development.',
    about: 'A supervillain named Gru adopts three girls, changing his life in unexpected ways.'
  },
  {
    name: 'Epic',
    image: 'epic',
    genre: 'Fantasy / Action / Adventure',
    why: 'I love the miniature fantasy world, imaginative creatures, and beautiful visuals.',
    about: 'A teenage girl is magically transported into a hidden forest kingdom caught in a battle between good and evil.'
  },
  {
    name: 'Fireman Sam',
    image: 'fireman-sam',
    genre: 'Adventure / Family / Educational',
    why: 'I love the rescue missions, teamwork, and stories about helping others.',
    about: 'Fireman Sam and his team respond to emergencies and keep the community of Pontypandy safe.'
  },
  {
    name: 'Gangsta.',
    image: 'gangsta',
    genre: 'Action / Crime / Drama',
    why: 'I love the gritty atmosphere, complex characters, and intense combat.',
    about: 'Two handymen known as the Handymen take on dangerous jobs in a crime-filled city.'
  },
  {
    name: 'Gnome Alone',
    image: 'gnome-alone',
    genre: 'Comedy / Fantasy / Adventure',
    why: 'I love the magical creatures, colorful animation, and unexpected action.',
    about: 'A teenage girl discovers that garden gnomes are secretly protecting her home from creatures called Troggs.'
  },
  {
    name: 'Gnomeo & Juliet',
    image: 'gnomeo-and-juliet',
    genre: 'Comedy / Romance / Animation',
    why: 'I love the garden gnomes, funny rivalry, and creative twist on a classic love story.',
    about: 'Two garden gnomes from rival families fall in love and try to overcome their differences.'
  },
  {
    name: 'GOAT',
    image: 'goat',
    genre: 'Sports / Comedy / Animation',
    why: 'I love the underdog theme, competitive action, and colorful animated world.',
    about: 'A small goat pursues a big dream in the competitive world of professional sports.'
  },
  {
    name: 'God Eater',
    image: 'god-eater',
    genre: 'Action / Sci-Fi / Anime',
    why: 'I love the monster battles, powerful weapons, dark atmosphere, and character designs.',
    about: 'Special fighters use powerful weapons called God Arcs to defend humanity from monstrous Aragami.'
  },
  {
    name: 'Goldie & Bear',
    image: 'goldie-and-bear',
    genre: 'Fantasy / Comedy / Family',
    why: 'I love the fairy-tale characters, colorful world, and playful adventures.',
    about: 'Goldilocks and Bear become friends and explore a world filled with familiar fairy-tale characters.'
  },
  {
    name: 'Green Lantern: First Flight',
    image: 'green-lantern-first-flight',
    genre: 'Action / Sci-Fi / Superhero',
    why: 'I love the cosmic setting, energy constructs, alien characters, and superhero action.',
    about: 'Hal Jordan becomes a Green Lantern and learns about the intergalactic corps while facing a dangerous threat.'
  },
  {
    name: 'Hey Arnold!',
    image: 'hey-arnold',
    genre: 'Comedy / Family / Slice of Life',
    why: 'I love the memorable characters, city atmosphere, humor, and meaningful stories.',
    about: 'Arnold and his friends navigate school, friendships, and everyday life in their city neighborhood.'
  },
  {
    name: 'Joseph: King of Dreams',
    image: 'joseph-king-of-dreams',
    genre: 'Musical / Drama / Biblical',
    why: 'I love the emotional story, music, and message about forgiveness and perseverance.',
    about: 'Joseph is sold into slavery by his brothers but eventually rises to power in Egypt through his ability to interpret dreams.'
  },
  {
    name: 'Justice League: The Flashpoint Paradox',
    image: 'justice-league-the-flashpoint-paradox',
    genre: 'Action / Sci-Fi / Superhero',
    why: 'I love the alternate timeline, intense battles, and darker take on the DC universe.',
    about: 'The Flash wakes up in a changed reality and must find a way to restore the timeline.'
  },
  {
    name: 'KPop Demon Hunters',
    image: 'kpop-demon-hunters',
    genre: 'Action / Fantasy / Musical',
    why: 'I love the music, stylish characters, supernatural action, and colorful animation.',
    about: 'A K-pop girl group secretly protects their fans and the world from supernatural demons.'
  },
  {
    name: 'Lazarus',
    image: 'lazarus',
    genre: 'Action / Sci-Fi / Thriller',
    why: 'I love the futuristic setting, stylish action, mystery, and thought-provoking story.',
    about: 'A team of agents races against time to investigate a drug that threatens humanity.'
  },
  {
    name: 'Legends of Oz: Dorothy’s Return',
    image: 'legends-of-oz-dorothys-return',
    genre: 'Fantasy / Musical / Adventure',
    why: 'I love the colorful fantasy world, magical characters, and musical adventure.',
    about: 'Dorothy returns to Oz to help her friends save the kingdom from a new threat.'
  },
  {
    name: 'LEGO DC Super Heroes: Aquaman — Rage of Atlantis',
    image: 'lego-dc-aquaman-rage-of-atlantis',
    genre: 'Action / Comedy / Superhero',
    why: 'I love the LEGO humor, underwater battles, and DC superhero teamwork.',
    about: 'Aquaman and the Justice League face an Atlantean threat that puts the world in danger.'
  },
  {
    name: 'LEGO DC Super Heroes: Justice League — Attack of the Legion of Doom!',
    image: 'lego-dc-justice-league-attack-of-the-legion-of-doom',
    genre: 'Action / Comedy / Superhero',
    why: 'I love the superhero team-ups, LEGO comedy, and creative battles.',
    about: 'The Justice League faces the Legion of Doom in a battle to protect the world.'
  },
  {
    name: 'LEGO Ninjago: Masters of Spinjitzu',
    image: 'lego-ninjago-masters-of-spinjitzu',
    genre: 'Action / Fantasy / Martial Arts',
    why: 'I love the elemental powers, ninja skills, weapons, and team battles.',
    about: 'A team of young ninjas trains in Spinjitzu and protects Ninjago from powerful enemies.'
  },
  {
    name: 'Luca',
    image: 'luca',
    genre: 'Fantasy / Comedy / Adventure',
    why: 'I love the seaside setting, colorful visuals, friendship, and sense of adventure.',
    about: 'Luca, a young sea monster, explores life on the Italian coast with his new human friend.'
  },
  {
    name: 'Miles from Tomorrowland',
    image: 'miles-from-tomorrowland',
    genre: 'Sci-Fi / Adventure / Family',
    why: 'I love the space exploration, futuristic gadgets, and exciting family missions.',
    about: 'Miles and his family explore space and discover new worlds while completing missions.'
  },
  {
    name: 'Minions',
    image: 'minions',
    genre: 'Comedy / Adventure / Animation',
    why: 'I love the silly humor, funny characters, and chaotic adventures.',
    about: 'The Minions travel through history searching for a villain to serve.'
  },
  {
    name: 'Mira, Royal Detective',
    image: 'mira-royal-detective',
    genre: 'Mystery / Adventure / Family',
    why: 'I love the mysteries, clever investigations, colorful setting, and teamwork.',
    about: 'Mira solves mysteries throughout the kingdom of Jalpur with help from her friends.'
  },
  {
    name: 'Monsters, Inc.',
    image: 'monsters-inc',
    genre: 'Comedy / Fantasy / Family',
    why: 'I love the creative monster world, funny characters, and heartwarming friendship.',
    about: 'Monsters Sulley and Mike work at a factory that collects children’s screams until a human girl changes their lives.'
  },
  {
    name: 'Mortal Kombat Legends: Battle of the Realms',
    image: 'mortal-kombat-legends-battle-of-the-realms',
    genre: 'Action / Fantasy / Martial Arts',
    why: 'I love the intense fights, powerful warriors, special abilities, and dramatic battles.',
    about: 'Earthrealm’s champions fight to protect their world in a dangerous tournament against powerful enemies.'
  },
  {
    name: 'Mune: Guardian of the Moon',
    image: 'mune-guardian-of-the-moon',
    genre: 'Fantasy / Adventure / Animation',
    why: 'I love the imaginative world, magical creatures, and beautiful visual design.',
    about: 'Mune, a young guardian of the Moon, must restore balance after darkness threatens his world.'
  },
  {
    name: 'Nella the Princess Knight',
    image: 'nella-the-princess-knight',
    genre: 'Fantasy / Adventure / Family',
    why: 'I love the brave heroine, magical adventures, and positive messages.',
    about: 'Princess Nella becomes a knight who protects her kingdom and helps those in need.'
  },
  {
    name: 'Nezha',
    image: 'nezha',
    genre: 'Action / Fantasy / Mythology',
    why: 'I love the powerful abilities, Chinese mythology, stunning action, and character growth.',
    about: 'Nezha challenges his destiny and fights powerful forces while trying to protect the people he cares about.'
  },
  {
    name: 'Peppa Pig',
    image: 'peppa-pig',
    genre: 'Comedy / Family / Animation',
    why: 'I love the simple humor, playful characters, and everyday family adventures.',
    about: 'Peppa Pig enjoys fun activities and little adventures with her family and friends.'
  },
  {
    name: 'Planet 51',
    image: 'planet-51',
    genre: 'Sci-Fi / Comedy / Adventure',
    why: 'I love the alien world, funny misunderstandings, and creative science-fiction setting.',
    about: 'An astronaut lands on a planet inhabited by aliens and discovers that he is the one they fear.'
  },
  {
    name: 'Rango',
    image: 'rango',
    genre: 'Adventure / Comedy / Western',
    why: 'I love the unusual characters, wild-west setting, and distinctive animation style.',
    about: 'A pet chameleon becomes the unlikely sheriff of a desert town facing a water crisis.'
  },
  {
    name: 'Raya and the Last Dragon',
    image: 'raya-and-the-last-dragon',
    genre: 'Fantasy / Action / Adventure',
    why: 'I love the martial arts, dragon mythology, beautiful world, and themes of trust.',
    about: 'Raya searches for the last dragon to help reunite a divided land and stop an ancient threat.'
  },
  {
    name: 'Samurai Rabbit: The Usagi Chronicles',
    image: 'samurai-rabbit-the-usagi-chronicles',
    genre: 'Action / Sci-Fi / Adventure',
    why: 'I love the samurai action, futuristic setting, unusual creatures, and teamwork.',
    about: 'Teenage rabbit samurai Yuichi Usagi protects Neo Edo alongside a team of unusual companions.'
  },
  {
    name: 'Sheriff Callie’s Wild West',
    image: 'sheriff-callies-wild-west',
    genre: 'Comedy / Western / Family',
    why: 'I love the western setting, friendly characters, and stories about helping others.',
    about: 'Sheriff Callie keeps her frontier town peaceful while teaching its residents to be kind and fair.'
  },
  {
    name: 'Sing',
    image: 'sing',
    genre: 'Comedy / Musical / Animation',
    why: 'I love the music, different personalities, performances, and inspiring stories.',
    about: 'A koala organizes a singing competition to save his struggling theater and give performers a chance to shine.'
  },
  {
    name: 'Sleeping Beauty',
    image: 'sleeping-beauty',
    genre: 'Fantasy / Romance / Musical',
    why: 'I love the magical kingdom, memorable characters, and classic fairy-tale atmosphere.',
    about: 'Princess Aurora falls under a curse and can only awaken through true love’s kiss.'
  },
  {
    name: 'Snow White and the Seven Dwarfs',
    image: 'snow-white-and-the-seven-dwarfs',
    genre: 'Fantasy / Musical / Family',
    why: 'I love the classic animation, charming characters, and magical fairy-tale story.',
    about: 'Snow White finds refuge with seven dwarfs while escaping a jealous queen.'
  },
  {
    name: 'Spidey and His Amazing Friends',
    image: 'spidey-and-his-amazing-friends',
    genre: 'Action / Superhero / Family',
    why: 'I love the superhero teamwork, creative powers, and fun adventures.',
    about: 'Spidey, Ghost-Spider, and Spin work together to help others and stop villains.'
  },
  {
    name: 'The Angry Birds Movie 2',
    image: 'the-angry-birds-movie-2',
    genre: 'Comedy / Action / Adventure',
    why: 'I love the crazy humor, colorful characters, and unexpected team-ups.',
    about: 'Red and his friends team up with their rivals, the pigs, to stop a new threat to their islands.'
  },
  {
    name: 'The Chicken Squad',
    image: 'the-chicken-squad',
    genre: 'Comedy / Adventure / Family',
    why: 'I love the animal heroes, teamwork, funny mysteries, and playful adventures.',
    about: 'A group of young chickens and their dog friend solve problems and help their neighbors.'
  },
  {
    name: 'The Death of Superman',
    image: 'the-death-of-superman',
    genre: 'Action / Superhero / Sci-Fi',
    why: 'I love Superman’s strength, emotional moments, and intense battles.',
    about: 'Superman and the Justice League face Doomsday, a powerful creature threatening Metropolis.'
  },
  {
    name: 'The Emoji Movie',
    image: 'the-emoji-movie',
    genre: 'Comedy / Adventure / Animation',
    why: 'I love the colorful digital world, playful characters, and imaginative concept.',
    about: 'Gene, an emoji with multiple expressions, travels through a smartphone to find a way to fit in.'
  },
  {
    name: 'The LEGO Batman Movie',
    image: 'the-lego-batman-movie',
    genre: 'Action / Comedy / Superhero',
    why: 'I love Batman’s gadgets, LEGO humor, action scenes, and DC characters.',
    about: 'Batman must learn to work with others to stop the Joker from taking over Gotham City.'
  },
  {
    name: 'The LEGO Movie',
    image: 'the-lego-movie',
    genre: 'Comedy / Adventure / Animation',
    why: 'I love the creative LEGO world, clever jokes, and imaginative action.',
    about: 'An ordinary LEGO figure is mistaken for a special hero and joins a quest to save his world.'
  },
  {
    name: 'The Little Mermaid',
    image: 'the-little-mermaid',
    genre: 'Fantasy / Romance / Musical',
    why: 'I love the underwater world, music, magical characters, and beautiful animation.',
    about: 'Ariel, a mermaid princess, dreams of living on land and makes a risky deal to become human.'
  },
  {
    name: 'The Prince of Egypt',
    image: 'the-prince-of-egypt',
    genre: 'Drama / Musical / Biblical',
    why: 'I love the powerful music, emotional storytelling, and themes of courage and freedom.',
    about: 'Moses discovers his true heritage and leads the Hebrew people toward freedom from slavery in Egypt.'
  },
  {
    name: 'The Rocketeer',
    image: 'the-rocketeer',
    genre: 'Action / Adventure / Superhero',
    why: 'I love the rocket technology, retro design, daring stunts, and heroic action.',
    about: 'A young pilot discovers a rocket-powered device and becomes a masked hero fighting dangerous enemies.'
  },
  {
    name: 'The Sea Beast',
    image: 'the-sea-beast',
    genre: 'Fantasy / Action / Adventure',
    why: 'I love the giant sea creatures, ocean adventures, and beautiful animation.',
    about: 'A legendary sea monster hunter and a young girl discover that the creatures they hunt may not be what they seem.'
  },
  {
    name: 'The Smurfs',
    image: 'the-smurfs',
    genre: 'Comedy / Fantasy / Family',
    why: 'I love the tiny characters, colorful village, and fun magical adventures.',
    about: 'The Smurfs live together in a hidden village while avoiding the schemes of the wizard Gargamel.'
  },
  {
    name: 'The Snow Queen',
    image: 'the-snow-queen',
    genre: 'Fantasy / Adventure / Family',
    why: 'I love the icy magic, fairy-tale setting, and journey through a frozen world.',
    about: 'A brave young girl sets out to rescue someone she cares about from the Snow Queen’s icy realm.'
  },
  {
    name: 'The Tiger’s Apprentice',
    image: 'the-tigers-apprentice',
    genre: 'Fantasy / Action / Adventure',
    why: 'I love the mythical creatures, magical powers, and Chinese-inspired fantasy world.',
    about: 'A teenager discovers his connection to ancient magic and trains with a tiger guardian to protect a powerful artifact.'
  },
  {
    name: 'Tinker Bell and the Pirate Fairy',
    image: 'tinker-bell-and-the-pirate-fairy',
    genre: 'Fantasy / Adventure / Family',
    why: 'I love the fairy magic, imaginative designs, and adventurous story.',
    about: 'Tinker Bell and her friends pursue a fairy who has stolen magical pixie dust and joined pirates.'
  },
  {
    name: 'Top Wing',
    image: 'top-wing',
    genre: 'Action / Adventure / Family',
    why: 'I love the rescue missions, teamwork, vehicles, and adventurous characters.',
    about: 'A team of young bird cadets trains to become rescue heroes on Big Swirl Island.'
  },
  {
    name: 'Turning Red',
    image: 'turning-red',
    genre: 'Comedy / Fantasy / Family',
    why: 'I love the expressive animation, funny moments, and themes of family and growing up.',
    about: 'Mei discovers that strong emotions can turn her into a giant red panda.'
  },
  {
    name: 'Ultimate Spider-Man',
    image: 'ultimate-spider-man',
    genre: 'Action / Superhero / Comedy',
    why: 'I love Spider-Man’s humor, web-slinging action, gadgets, and superhero team-ups.',
    about: 'Peter Parker trains with S.H.I.E.L.D. while learning to become a better hero and working with other young superheroes.'
  },
  {
    name: 'X-Men: Evolution',
    image: 'x-men-evolution',
    genre: 'Action / Sci-Fi / Superhero',
    why: 'I love the mutant powers, character designs, team battles, and personal struggles.',
    about: 'Teenage mutants learn to control their abilities while facing prejudice and dangerous enemies.'
  },
  {
    name: 'Zack & Quack',
    image: 'zack-and-quack',
    genre: 'Adventure / Comedy / Family',
    why: 'I love the creative pop-up world, colorful designs, and imaginative adventures.',
    about: 'Zack and his duck friend Quack explore a pop-up book world filled with surprises and playful challenges.'
  }


]


export const GAMES = [
  {
    name: 'Call Of Duty: Mobile',
    image: 'call-of-duty-mobile',
    genre: 'FPS / Action / Multiplayer',
    why: 'I love the fast gameplay, competitive matches, weapons, and the challenge of improving my skills.',
    about: 'Call of Duty: Mobile is a fast-paced shooter with multiplayer, battle royale, and different competitive game modes.'
  },

  {
    name: 'PlayStation Games',
    image: 'playstation-games',
    genre: 'Action / Adventure / RPG',
    why: 'I love PlayStation games because of their stories, graphics, characters, and immersive worlds.',
    about: 'PlayStation gives me access to many different games, from action and adventure to racing, RPGs, and story-driven experiences.'
  },


];


export const CHARACTERS = [

  {
    name: 'Shadow (Cid Kagenou)',
    image: 'shadow-cid-kagenou',
    anime: 'The Eminence in Shadow',
    abilities: ['Magic', 'I AM ATOMIC', 'Swordsmanship', 'Shadow Garden', 'Martial Art'],
    about: 'Cid Kagenou is a powerful character who secretly lives as Shadow, the mysterious leader of Shadow Garden.',
    why: 'I love his confidence, mysterious personality, intelligence, overwhelming power, background character act and dramatic entry style.'
  },

  {
    name: 'L (Lawliet)',
    image: 'l-lawliet',
    anime: 'Death Note',
    abilities: ['Genius Intelligence', 'Deduction', 'Investigation', 'Strategy'],
    about: 'L is a brilliant detective who uses logic and deduction to solve difficult cases.',
    why: 'I love his intelligence, unique personality, and the way he thinks differently. I was Sad when he die in the series'
  },

  {
    name: 'Shikamaru Nara',
    image: 'shikamaru-nara',
    anime: 'Naruto',
    abilities: ['Shadow Possession', 'Intelligence', 'Strategy', 'Tactical Thinking'],
    about: 'Shikamaru is a highly intelligent ninja known for his calm personality and strategic mind.',
    why: 'I love how smart and calm he is, especially when facing difficult situations. Despite his laziness, bro thinks strategy that solve problems with no flaws like is in his palm'
  },

  {
    name: 'Kiyotaka Ayanokoji',
    image: 'kiyotaka-ayanokoji',
    anime: 'Classroom of the Elite',
    abilities: ['Intelligence', 'Manipulation', 'Martial Arts', 'Strategy'],
    about: 'Ayanokoji is a quiet and highly intelligent student who hides his true abilities.',
    why: 'I love his calm nature, intelligence, hidden strength, and mysterious personality. He manipulate and use people like they are in his palm'
  },

  {
    name: 'Rimuru Tempest',
    image: 'rimuru-tempest',
    anime: 'That Time I Got Reincarnated as a Slime',
    abilities: ['Predator', 'Great Sage', 'Magic', 'Regeneration', 'Multiversal Power'],
    about: 'Rimuru is a multiversal powerful slime who builds a nation while protecting the people around him and possess multiversal power.',
    why: 'I love his power, intelligence, leadership, and constant growth.'
  },

  {
    name: 'Shinmon Benimaru',
    image: 'shinmon-benimaru',
    anime: 'Fire Force',
    abilities: ['Fire Manipulation', 'Martial Arts', 'Combat', 'Leadership'],
    about: 'Benimaru is the powerful captain of Special Fire Force Company 7 and a skilled fighter.',
    why: 'I love his strength, confidence, fighting style, and natural leadership.'
  },

  {
    name: 'Zenitsu Agatsuma',
    image: 'zenitsu-agatsuma',
    anime: 'Demon Slayer',
    abilities: ['Thunder Breathing', 'Lightning Speed', 'Enhanced Hearing', 'Swordsmanship'],
    about: 'Zenitsu is a Demon Slayer who becomes incredibly powerful when he enters his focused state.',
    why: 'I love his funny personality and how powerful he becomes when things get serious.'
  },

  {
    name: 'Ms. Makima',
    image: 'ms-makima',
    anime: 'Chainsaw Man',
    abilities: ['Control', 'Manipulation', 'Intelligence', 'Devil Powers'],
    about: 'Makima is a mysterious and powerful character who has great influence over others.',
    why: 'I love her calm presence, intelligence, mystery, and ability to control situations.'
  },

  {
    name: 'Ryomen Sukuna',
    image: 'ryomen-sukuna',
    anime: 'Jujutsu Kaisen',
    abilities: ['Cursed Energy', 'Domain Expansion', 'Cleave', 'Dismantle'],
    about: 'Sukuna is one of the strongest and most feared cursed beings in Jujutsu Kaisen.',
    why: 'I love his overwhelming power, confidence, personality, and terrifying presence.'
  },

  {
    name: 'Hiromi Higuruma',
    image: 'hiromi-higuruma',
    anime: 'Jujutsu Kaisen',
    abilities: ['Judgeman', 'Deadly Sentencing', 'Domain Expansion', 'Cursed Energy'],
    about: 'Higuruma is a former lawyer who becomes a powerful jujutsu sorcerer with a unique technique.',
    why: 'I love his intelligence, serious personality, unique abilities, and fighting style.'
  },

  {
    name: 'Reze',
    image: 'reze',
    anime: 'Chainsaw Man: Reze Arc Movie',
    abilities: ['Bomb Devil', 'Explosive Power', 'Speed', 'Regeneration'],
    about: 'Reze is a mysterious character whose true identity makes her extremely dangerous.',
    why: 'I love her mysterious personality, unique powers, and unexpected character.'
  },

  {
    name: 'Osaragi',
    image: 'osaragi',
    anime: 'Sakamoto Days',
    abilities: ['Superhuman Strength', 'Speed', 'Combat', 'Weapon Mastery'],
    about: 'Osaragi is a powerful member of the Order with an unusual personality and incredible combat skills.',
    why: 'I love her calm and funny personality and how dangerous she becomes in battle.'
  },

  {
    name: 'Diablo',
    image: 'diablo',
    anime: 'That Time I Got Reincarnated as a Slime',
    abilities: ['Demon Magic', 'Black Flame', 'Primordial Demon', 'Combat'],
    about: 'Diablo is a powerful primordial demon who becomes one of Rimuru’s most loyal and dangerous followers.',
    why: 'I love his confidence, intelligence, loyalty, and calm but intimidating personality.'
  },

  {
    name: 'Levi Ackerman',
    image: 'levi-ackerman',
    anime: 'Attack on Titan',
    abilities: ['Ackerman Power', 'Swordsmanship', 'ODM Gear', 'Combat'],
    about: 'Levi Ackerman is one of humanity’s strongest soldiers, known for his incredible speed, skill, and discipline.',
    why: 'I love his calm personality, precision, discipline, and insane combat skills.'
  },

  {
    name: 'Sakamoto Tato',
    image: 'taro-sakamoto',
    anime: 'Sakamoto Days',
    abilities: ['Superhuman Strength', 'Combat', 'Tactical Thinking', 'Weapon Mastery'],
    about: 'Taro Sakamoto is a legendary retired hitman who uses his experience and skills to protect his family.',
    why: 'I love how calm and funny he is while still being extremely skilled and dangerous when necessary.'
  },

  {
    name: 'Asta',
    image: 'asta',
    anime: 'Black Clover',
    abilities: ['Anti-Magic', 'Swordsmanship', 'Physical Strength', 'Ki Detection'],
    about: 'Asta is a determined young mage who has no magic but uses anti-magic and relentless effort to become stronger.',
    why: 'I love his determination, energy, hard work, and refusal to give up no matter how difficult things become.'
  },

  {
    name: 'Nagumo',
    image: 'nagumo',
    anime: 'Sakamoto Days',
    abilities: ['Disguise', 'Weapon Mastery', 'Combat', 'Speed'],
    about: 'Nagumo is a highly skilled member of the Order who combines incredible combat ability with a playful and unpredictable personality.',
    why: 'I love his relaxed attitude, creativity, intelligence, and how unpredictable he can be in a fight.'
  },

  {
    name: 'Kenshin himura',
    image: 'himura-kenshin',
    anime: 'Rurouni Kenshin',
    abilities: ['Hiten Mitsurugi-ryu', 'Swordsmanship', 'Speed', 'Reflexes'],
    about: 'Himura Kenshin is a former legendary assassin who chooses to protect people while refusing to take another life.',
    why: 'I love his swordsmanship, calm personality, character development, and strong sense of purpose.'
  },


];

