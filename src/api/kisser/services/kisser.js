'use strict';

/**
 * kisser service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::kisser.kisser');
