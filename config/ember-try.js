/*jshint node:true*/
module.exports = {
  scenarios: [
    {
      name: 'default',
      dependencies: {
        'ember': '2.2.0'
      },
      resolutions: {
        'ember': '2.2.0'
      }
    },
    {
      name: 'ember-release',
      dependencies: {
        'ember': 'components/ember#release'
      },
      resolutions: {
        'ember': 'release'
      }
    },
    {
      name: 'ember-beta',
      dependencies: {
        'ember': 'components/ember#beta'
      },
      resolutions: {
        'ember': 'beta'
      }
    },
    {
      name: 'ember-canary',
      dependencies: {
        'ember': 'components/ember#canary'
      },
      resolutions: {
        'ember': 'canary'
      }
    },
    {
      name: '1.10',
      dependencies: {
        'ember': '~1.10.0'
      }
    },
    {
      name: '1.11',
      dependencies: {
        'ember': '~1.11.0'
      }
    },
    {
      name: '1.12',
      dependencies: {
        'ember': '~1.12.0'
      }
    }
  ]
};
