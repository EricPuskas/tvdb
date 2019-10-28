const rp = require("request-promise-native");
const configureOptions = require("../utils/configureOptions");

exports.getShow = async (req, res) => {
  try {
    // Build response
    let result = {
      show: {},
      poster: {},
      episodes: {
        links: {},
        data: []
      }
    };

    // Configure request options
    const showOptions = configureOptions(
      // GET the general info about the series
      `https://api.thetvdb.com/series/${req.params.id}`,
      "GET",
      req
    );
    const posterOptions = configureOptions(
      // GET posters of the series
      `https://api.thetvdb.com/series/${req.params.id}/images/query?keyType=poster`,
      "GET",
      req
    );
    const episodeOptions = configureOptions(
      // GET the first page of episodes (limit 100 ep / page )
      `https://api.thetvdb.com/series/${req.params.id}/episodes/query?page=1`,
      "GET",
      req
    );

    // Make async requests
    let show = await rp(showOptions);
    let poster = await rp(posterOptions);
    let episodes = await rp(episodeOptions);

    // save the links object to see how many pages there are in total
    result.episodes.links = episodes.links;

    // Select only the data we need
    episodes.data.forEach(ep => {
      result.episodes.data.push({
        id: ep.id,
        airedSeason: ep.airedSeason,
        airedEpisodeNumber: ep.airedEpisodeNumber,
        firstAired: ep.firstAired,
        overview: ep.overview,
        episodeName: ep.episodeName,
        filename: ep.filename,
        director: ep.director,
        siteRating: ep.siteRating,
        siteRatingCount: ep.siteRatingCount
      });
    });

    // If there is more than 1 page, loop until we get all episodes
    if (episodes.links.last > 1) {
      // Start at page 2
      for (let i = 2; i <= episodes.links.last; i++) {
        let ep = await rp(
          configureOptions(
            `https://api.thetvdb.com/series/${req.params.id}/episodes/query?page=${i}`,
            "GET",
            req
          )
        );
        // For Each episode, select only the data we need
        ep.data.forEach(ep => {
          result.episodes.data.push({
            id: ep.id,
            airedSeason: ep.airedSeason,
            airedEpisodeNumber: ep.airedEpisodeNumber,
            firstAired: ep.firstAired,
            overview: ep.overview,
            episodeName: ep.episodeName,
            filename: ep.filename,
            director: ep.director,
            siteRating: ep.siteRating,
            siteRatingCount: ep.siteRatingCount
          });
        });
      }
    }

    // Save the basic info about the series
    result.show = show;

    // Save one poster
    result.poster = poster.data[0];

    return res.json(result);
  } catch (err) {
    if (err.error.Error === "Not authorized") {
      return res
        .status(err.statusCode)
        .json(
          "Oops! Your token might have expired. Please try refreshing the page to get a new token."
        );
    }
    return res.status(err.statusCode).json(err.error.Error);
  }
};

module.exports = exports;
