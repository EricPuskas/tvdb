import getGenres from "./getGenres";
import tvShows from "./tvShows";
import replaceImage from "./replaceImage";
import groupEpisodes from "./groupEpisodes";
import escapeRegex from "./escapeRegex";
import createSuggestions from "./createSuggestions";

import React from "react";

describe("Utilities", () => {
  describe("getGenres", () => {
    it("Should return null if no data provided", () => {
      const result = getGenres();
      expect(result).toBe(null);
    });

    it("Should return proper JSX if provided with valid data", () => {
      const genres = ["Drama", "Action", "Horror"];
      const result = getGenres(genres);
      expect(result[0].props.children.props.className).toBe("tag");
      expect(result.length).toBe(3);
      expect(result[0].type).toBe("li");
      expect(typeof result[0].$$typeof).toBe("symbol");
    });
  });
  describe("tvShows", () => {
    it("Should be an array", () => {
      expect(Array.isArray(tvShows)).toBe(true);
    });
  });
  describe("replaceImage", () => {
    it("Should replace image on error", () => {
      const replacement = "/replaced.png";
      const ev = {
        target: {
          src: "#"
        }
      };

      const mockImage = <img src={ev.target.src} alt="Some alt text" />;
      const expectedResult = (
        <img src={replaceImage(ev, replacement)} alt="Some alt text" />
      );

      expect(mockImage.props.src).not.toEqual(expectedResult.props.src);
    });
  });
  describe("groupEpisodes", () => {
    it("Should group episodes into seasons", () => {
      const array = [
        { airedSeason: 1, episode: "1" },
        { airedSeason: 1, episode: "2" },
        { airedSeason: 2, episode: "1" },
        { airedSeason: 2, episode: "2" },
        { airedSeason: 3, episode: "1" },
        { airedSeason: 3, episode: "2" }
      ];

      let result = groupEpisodes(array);
      let expectedResult = [
        [{ airedSeason: 1, episode: "1" }, { airedSeason: 1, episode: "2" }],
        [{ airedSeason: 2, episode: "1" }, { airedSeason: 2, episode: "2" }],
        [{ airedSeason: 3, episode: "1" }, { airedSeason: 3, episode: "2" }]
      ];
      expect(result.length).toEqual(3);
      expect(result).toEqual(expectedResult);
    });
    it("Should filter out empty values", () => {
      const array = [
        {},
        { airedSeason: 0, episode: "1" },
        { airedSeason: 1, episode: "1" },
        { airedSeason: 1, episode: "2" }
      ];
      let result = groupEpisodes(array);
      let expectedResult = [
        [{ airedSeason: 0, episode: "1" }],
        [{ airedSeason: 1, episode: "1" }, { airedSeason: 1, episode: "2" }]
      ];

      expect(result.length).toEqual(2);
      expect(result).toEqual(expectedResult);
    });
    describe("escapeRegex", () => {
      it("Should replace all white space with +", () => {
        let result = escapeRegex("Test String");
        expect(result).toEqual("Test+String");
      });
    });
    describe("createSuggestions", () => {
      it("Should provide a suggestion based on input", () => {
        let array = ["apple", "banana", "oranges"];
        let result = createSuggestions("app", array);
        expect(result[0]).toEqual(array[0]);
      });
    });
  });
});
