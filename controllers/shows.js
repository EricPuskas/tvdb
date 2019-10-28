const rp = require("request-promise-native");
const configureOptions = require("../utils/configureOptions");
/*
https://www.thetvdb.com/banners/episodes/290853/5105118.jpg
https://www.thetvdb.com/banners/posters/290853-5.jpg
*/

exports.getShow = async (req, res) => {
  try {
    let result = {
      show: {},
      poster: {},
      episodes: {
        links: {},
        data: []
      }
    };

    const showOptions = configureOptions(
      `https://api.thetvdb.com/series/${req.params.id}`,
      "GET",
      req
    );
    const posterOptions = configureOptions(
      `https://api.thetvdb.com/series/${req.params.id}/images/query?keyType=poster`,
      "GET",
      req
    );
    const episodeOptions = configureOptions(
      `https://api.thetvdb.com/series/${req.params.id}/episodes/query?page=1`,
      "GET",
      req
    );

    let show = await rp(showOptions);
    let poster = await rp(posterOptions);
    let episodes = await rp(episodeOptions);

    result.episodes.links = episodes.links;
    episodes.data.forEach(ep => {
      result.episodes.data.push({
        id: ep.id,
        airedSeason: ep.airedSeason,
        airedEpisodeNumber: ep.airedEpisodeNumber,
        overview: ep.overview,
        episodeName: ep.episodeName,
        filename: ep.filename
      });
    });
    if (episodes.links.last > 1) {
      for (let i = 2; i <= episodes.links.last; i++) {
        let ep = await rp(
          configureOptions(
            `https://api.thetvdb.com/series/${req.params.id}/episodes/query?page=${i}`,
            "GET",
            req
          )
        );
        ep.data.forEach(ep => {
          result.episodes.data.push({
            id: ep.id,
            airedSeason: ep.airedSeason,
            airedEpisodeNumber: ep.airedEpisodeNumber,
            overview: ep.overview,
            episodeName: ep.episodeName,
            filename: ep.filename
          });
        });
      }
    }
    result.show = show;
    result.poster = poster.data[0];

    return res.json(result);
  } catch (err) {
    console.log(err);
  }
};

module.exports = exports;
