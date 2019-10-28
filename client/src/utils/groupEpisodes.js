const groupEpisodes = data => {
  // Create a parent array that will hold the seasons sub arrays
  let seasons = [];
  for (let i = 0; i < data.length; i++) {
    // If the season number is not an element of the parent, initialize it
    if (!seasons[data[i].airedSeason]) {
      seasons[data[i].airedSeason] = [];
    }
    // Add the season and it's array of episodes
    seasons[data[i].airedSeason].push({
      ...data[i]
    });
  }
  // Filter out empty values
  return seasons.filter(e => e.length);
};

export default groupEpisodes;
