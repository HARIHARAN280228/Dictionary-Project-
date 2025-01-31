const dictionary = {
    "apple": "A round fruit with red, green, or yellow skin and a whitish interior.",
    "banana": "A long curved fruit that has a thick yellow skin and soft sweet flesh.",
    "grape": "A small round fruit, typically green or purple, that grows in clusters.",
    "orange": "A round citrus fruit with a tough skin and juicy interior.",
    "cherry": "A small, round, red or black fruit with a pit, often eaten fresh or used in desserts.",
    "dog": "A domesticated carnivorous mammal, typically kept as a pet or for work.",
    "cat": "A small domesticated carnivorous mammal with soft fur, a short snout, and retractable claws.",
    "elephant": "A large herbivorous mammal with a trunk, native to Africa and Asia.",
    "computer": "An electronic device for storing and processing data.",
    "keyboard": "A panel of keys used to operate a computer or typewriter.",
    "phone": "A device used for making calls and sending messages, often mobile.",
    "car": "A road vehicle, typically with four wheels, powered by an internal combustion engine.",
    "house": "A building for human habitation, typically one with rooms on one or more floors.",
    "book": "A set of written, printed, or blank pages fastened together and bound in covers.",
    "airplane": "A powered flying vehicle with fixed wings and a weight greater than that of the air it displaces.",
    "school": "An institution for educating children or a place for learning.",
    "music": "Vocal or instrumental sounds combined to produce harmony, melody, or rhythm.",
    "science": "The systematic study of the structure and behavior of the physical and natural world.",
    "language": "A system of communication consisting of sounds, words, and grammar.",
    "health": "The state of being free from illness or injury.",
    "friend": "A person with whom one has a bond of mutual affection, typically exclusive of sexual or family relations."
  };
  
  // Event listener for the search button
  document.getElementById('searchButton').addEventListener('click', function () {
    const word = document.getElementById('wordInput').value.toLowerCase();
    const resultSection = document.getElementById('resultSection');
    const meaningOutput = document.getElementById('meaningOutput');
  
    if (word === "") {
      meaningOutput.textContent = "Please enter a word to search.";
    } else if (dictionary[word]) {
      meaningOutput.textContent = dictionary[word];
    } else {
      meaningOutput.textContent = `Sorry, the word "${word}" is not found in the dictionary.`;
    }
  
    resultSection.style.display = 'block';
    
  });
  
// const apiKey = ;  
// const apiId =;   

// // Function to fetch word
// async function fetchMeaning(word) {
//   const url =;

//   const options = {
//     method: 'GET',
//     headers: {
//       'Accept': 'application/json',
//       'app_id': apiId,
//       'app_key': apiKey
//     }
//   };

//   try {
//     const response = await fetch(url, options);
//     const data = await response.json();

//     if (response.ok) {
//       const meaning = data.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0];
//       return meaning;
//     } else {
//       return `Sorry, no definition found for "${word}".`;
//     }
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     return 'There was an error fetching the word definition. Please try again later.';
//   }
// }

// // Event listener for the search button
// document.getElementById('searchButton').addEventListener('click', async function () {
//   const word = document.getElementById('wordInput').value.trim();
//   const resultSection = document.getElementById('resultSection');
//   const meaningOutput = document.getElementById('meaningOutput');

//   if (word === "") {
//     meaningOutput.textContent = "Please enter a word to search.";
//   } else {
//     // Fetch meaning using the API
//     const meaning = await fetchMeaning(word);
//     meaningOutput.textContent = meaning;
//   }

//   resultSection.style.display = 'block';
// });

  