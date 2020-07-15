'use strict'

// define the service/singleton used for querying the express API
class PostService {
  // inject the angular $http library for use
  constructor ($http) {
    this.$http = $http
  }

  /**
   * PostService.getPosts - get a list of posts from the API
   *
   * @returns {promise}
   * @public
   */
  getPosts () {
    return this.$http.get('/posts')
  }

  /**
   * PostService.getComments - get a list of posts from the API
   *
   * @param {string/number} [postId] which post ID to get comments for
   * @returns {promise}
   * @public
   */
  getComments (postId) {
    return this.$http.get(`/comments?postId=${postId}`)
  }
}

// register the service
angular.module('autoFi')
  .service('postService', PostService)
