"use strict";

/**
 * hero-slider controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::hero-slider.hero-slider",
  ({ strapi }) => ({
    async find(ctx) {
      // Get all hero sliders, ordered by the order field
      const { data, meta } = await super.find(ctx);

      // Transform the data to include the full image URL
      const transformedData = data.map((item) => {
        const transformed = { ...item };

        // Add full URL for background image
        if (transformed.backgroundImage && transformed.backgroundImage.url) {
          if (!transformed.backgroundImage.url.startsWith("http")) {
            transformed.backgroundImage.url = `${process.env.STRAPI_URL || "http://localhost:1337"}${transformed.backgroundImage.url}`;
          }
        }

        return transformed;
      });

      return { data: transformedData, meta };
    },
  })
);
