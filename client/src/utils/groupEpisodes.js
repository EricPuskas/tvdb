const groupEpisodes = data => {
  let seasons = [];
  for (let i = 0; i < data.length; i++) {
    if (!seasons[data[i].airedSeason]) {
      seasons[data[i].airedSeason] = [];
    }
    seasons[data[i].airedSeason].push({
      ...data[i]
    });
  }
  return seasons.filter(e => e.length);
};

export default groupEpisodes;
