'use strict';

//jobs service used for communicating with the jobs REST endpoints
angular.module('jobs').factory('Jobs', ['$resource',
  function ($resource) {
    return $resource('api/jobs/:jobId', {
      jobId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);
