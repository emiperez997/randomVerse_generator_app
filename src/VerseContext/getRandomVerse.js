async function getRandomVerse() {
  try {
    let response = await fetch(
      "https://ajphchgh0i.execute-api.us-west-2.amazonaws.com/dev/api/books"
    );

    const dataBooks = await response.json();

    const randomBook = dataBooks[Math.floor(Math.random() * dataBooks.length)];

    const randomChapter =
      randomBook.chapters[
        Math.floor(Math.random() * randomBook.chapters.length)
      ];

    response = await fetch(
      `https://ajphchgh0i.execute-api.us-west-2.amazonaws.com/dev/api/books/${randomBook.id}/verses/${randomChapter.chapter}`
    );

    const dataVerses = await response.json();

    const randomVerse =
      dataVerses[Math.floor(Math.random() * dataVerses.length)];

    const verse = randomVerse.cleanText.replace(/[0-9]/g, "").trim();

    return {
      verse,
      verseInfo: randomVerse.reference,
    };
  } catch (error) {
    console.error(error);
    return error;
  }
}

export { getRandomVerse };
