// define the Post component controller
class PostCtrl {
  // inject the postService
  constructor (postService) {
    this.postService = postService
    this.showComments = false
    this.comments = []
  }

  // on initialization of component, fetch related comments
  $onInit () {
    this.postService.getComments(this.post.id).then(data => this.comments = data.data)
  }

  // show comment count to user
  get commentCount () {
    return this.comments.length
  }
}

// define the Post component
class Post {
  static get bindings () {
    return {
      text: '@',
      post: '<'
    }
  }

  static get controller () { return PostCtrl }

  static get template () {
    return `
    <div class="post">
      <div class="post-header">
        <div class="post-title" ng-bind="$ctrl.post.title"></div>
        <div class="show-comment" ng-click="$ctrl.showComments = !$ctrl.showComments">comments ({{$ctrl.commentCount}})</div>
      </div>
      <div ng-bind="$ctrl.post.body"></div>
    </div>

    <div class="comment-container">
      <comment ng-repeat="comment in $ctrl.comments" comment="comment" ng-if="$ctrl.showComments"></comment>
    </div>
    `
  }
}

// register the Post component
angular.module('autoFi').component('post', Post)
