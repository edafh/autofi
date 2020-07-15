'use strict'

// define the angular app
angular.module('autoFi', [])

// define the main controller
class MainController {
  // inject the postService
  constructor (postService) {
    // fetch the post list from the express API
    postService.getPosts().then(data => this.posts = data.data)
  }
}

// register the main controller
angular.module('autoFi').controller('mainController', MainController)
