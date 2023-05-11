// Esercizio 1
// Sulla base della lezione del giorno, costruire una array di oggetti, in cui ognuno di essi debba avere almeno un id e un titolo come chiavi. La seguente lista deve essere renderizzata sul DOM e non su console.log. Attenzione: non scrivere in modo statico alcun elemento (il body della pagina HTML sarà vuoto)

const togBooks = [
  {
    title: "The Assassin's Blade",
    id: 0,
    read: true,
    pages: 464,
    plot: "A collection of 5 stories set prior to the Throne of Glass series, including four novellas previously published in e-book format: The Assassin and the Pirate Lord, The Assassin and the Desert, The Assassin and the Underworld, and The Assassin and the Empire, as well as The Assassin and the Healer. It follows Celaena Sardothien in her adventures traveling around Erilea with her companion Sam Cortland.",
  },
  {
    title: "Throne of Glass",
    id: 1,
    read: true,
    pages: 432,
    plot: "After a year of slavery, an infamous teenage assassin named Celaena is given the chance to become the tyrannical king's personal assassin/King's Champion by representing Prince Dorian in a competition against the most gifted thieves and assassins in the land. She must survive every test and trial in order to proceed to the final, in which she has to fight her remaining opponents. As candidates are found dead in the castle, their bodies ruptured, Celaena finds herself delving deep into mysteries concerning not only her, but her very own ancestors and the creatures of darkness that dwell deep beneath the castle.",
  },
  {
    title: "Crown of Midnight",
    id: 2,
    read: true,
    pages: 448,
    plot: "Celaena, the King's Champion, must win her freedom by butchering every person the king asks her to, but she cannot bear to kill for the crown. With every death she fakes, she puts her close friends at risk. Celaena must choose between a captain and a prince, and must battle forces more threatening than the king. She also reunites with an old colleague, becomes obsessed with a rebel movement, and learns more about the king's source of power.",
  },
  {
    title: "Heir of Fire",
    id: 3,
    read: true,
    pages: 592,
    plot: "Celaena travels to Wendlyn, a land where magic is still free, to undergo Fae training with the powerful and cold immortal Fae warrior Rowan Whitethorn. Tensions high between them, the pair must work together to stop evil forces wreaking havoc, and Celaena learns to accept herself as the Queen of Terrasen. Meanwhile, in Adarlan, Chaol teams up with General Aedion Ashryver to rebel against the King, and Dorian struggles to understand his growing powers. Manon Blackbeak, an immortal Ironteeth witch, competes in a competition against other witches in order to become the official Wing Leader of the clan.",
  },
  {
    title: "Queen of Shadows",
    id: 4,
    read: true,
    pages: 672,
    plot: "Stronger than ever, Aelin Galathynius (aka Celaena Sardothien) returns to Rifthold, this time as a free woman. Upon her return, she learns that much has changed since she left, including the capture of her long-lost cousin Aedion and the possession of her friend Dorian at the hands of a Valg Prince. Aelin teams up with Chaol's team of rebels and her former master, King of Assassins Arobynn Hamel, determined to get her revenge for over ten years of pain, by freeing magic, killing the King of Adarlan, and rescuing Dorian. Across Adarlan in Morath, Manon is forced to use her witches to produce evil monsters as weapons. As she struggles between her duties and growing morals, she befriends Elide Lochan, a servant girl who is the rightful lady of Perranth, and daughter of Aelin's nursemaid as a child.",
  },
  {
    title: "Empire of Storms",
    id: 5,
    read: true,
    pages: 720,
    plot: "Aelin is determined to never turn her back on her kingdom again. Cashing in debts to raise an army, Aelin and her court travel around Erilea in an attempt to stop Lord Erawan of the Valg, a demon-like race, from destroying the world, but with so many sworn enemies in want of revenge, including Queen Maeve of the Fae, survival seems unlikely. Aelin begins to realize that there are events in her life which may not have happened by coincidence; in fact, many have been pulling strings in the background long before she was born, and that she was destined for something far greater than she thought.",
  },
  {
    title: "Tower of Dawn",
    id: 6,
    read: false,
    pages: 688,
    plot: "Taking place during the events of Empire of Storms, Chaol Westfall travels to the Southern Continent with Nesryn Faliq to seek treatment from the gifted healers there, and persuade the Southern Continent to ally with him and his friends in the brewing war against Erawan. Yrene Towers' attempts of healing him lead to her becoming entangled in Chaol's past, despite her own reservations against his loyalty to the very nation that prosecuted her family. Meanwhile, Nesryn improves relations with her family during her stay, and befriends Prince Sartaq.",
  },
  {
    title: "Kingdom of Ash",
    id: 7,
    read: false,
    pages: 992,
    plot: "After being locked in an iron coffin for months by Maeve, Aelin resists torture in hopes of returning to her kingdom. Rowan searches with his cadre and Elide to find Aelin, his mate and wife. At the same time, Aedion and Lysandra continue to defend Terrasen with the armies that Aelin gathered before she was captured, from forces that would seek to destroy it: Erawan. After successfully allying with the Southern Continent, Chaol and his group race to reach his friends before it's too late. Manon and Dorian grow closer as they travel in search of the Crochan witches to raise an army, the final Wyrdkey, and answers to their role in the war and as leaders of their respective kingdoms. In the final battle, Aelin and her friends succeed in destroying both Maeve and Erawan once and for all, bringing peace to the land.",
  },
];

// genera elementi della lista
const togBooksGen = (bookData) => {
  const bookEl = document.createElement("li");
  bookEl.textContent = bookData.title;
  bookEl.className = "book";
  bookEl.id = bookData.id;

  if (bookData.read) {
    bookEl.classList.add("read");
  } else {
    bookEl.classList.add("notRead");
  }

  return bookEl;
};

// crea elementi da visualizzare in pagina
const pageTitleEl = document.createElement("h2");
const bookListEl = document.createElement("ol");

// modifica elementi
pageTitleEl.className = "pageTitle";
pageTitleEl.textContent = "Throne of Glass series";
bookListEl.className = "bookList";
bookListEl.setAttribute("start", 0);

// crea lista
togBooks.forEach((bookData) => bookListEl.append(togBooksGen(bookData)));

// renderizza lista
document.body.append(pageTitleEl, bookListEl);
