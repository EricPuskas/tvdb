const groupEpisodes = data => {
  let seasons = [];
  for (let i = 0; i < data.length; i++) {
    if (!seasons[data[i].airedSeason]) seasons[data[i].airedSeason] = [];
    seasons[data[i].airedSeason].push({
      id: data[i].id,
      season: data[i].airedSeason,
      episode: data[i].airedEpisodeNumber,
      title: data[i].episodeName
    });
  }
  return seasons;
};

export default groupEpisodes;
