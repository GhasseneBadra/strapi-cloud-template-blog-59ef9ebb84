'use strict';

/**
 * attorney service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::attorney.attorney');
