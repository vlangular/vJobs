'use strict';

// Configuring the jobs module
angular.module('jobs').run(['Menus',
  function (Menus) {
    // Add the jobs dropdown item
    Menus.addMenuItem('topbar', {
      title: 'Jobs',
      state: 'jobs',
      type: 'dropdown',
      roles: ['*'],
      position: 1
    });

    // Add the dropdown list item
    Menus.addSubMenuItem('topbar', 'jobs', {
      title: 'Open jobs',
      state: 'jobs.list'
    });

    // Add the dropdown create item
    Menus.addSubMenuItem('topbar', 'jobs', {
      title: 'Post a job',
      state: 'jobs.create',
      roles: ['user']
    });
  }
]);
