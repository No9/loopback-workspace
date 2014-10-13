/**
 * The api-server component template.
 */

var template = module.exports;

template.package = {
  "version": "1.0.0",
  "scripts": {
    "pretest": "jshint ."
  },
  "main": "index.js",
  "dependencies": {
  },
  // LoopBack component MUST have a "loopback-component" keyword
  "keywords": [
    "loopback-component"
  ],
  // Information about the component
  "loopback-component": {
    // Component dependencies
    "dependencies": {
    }
  }
};

template.common = {
};

template.server = {
  facet: {
    modelsMetadata: {
      sources: ['../common/models', './models']
    }
  },

  config: [
  ],

  modelConfigs: [
  ],
  datasources: [
  ]
};

template.client = null;