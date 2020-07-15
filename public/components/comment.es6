// define the Comment component controller
class CommentCtrl {
  // generate the combined header of the comment (email and name/title)
  get commentHeader () {
    return `${this.comment.name} (${this.comment.email})`
  }
}

// define the Comment component
class Comment {
  static get bindings () {
    return {
      text: '@',
      comment: '<'
    }
  }

  static get controller () { return CommentCtrl }

  static get template () {
    return `
    <div class="comment-name" ng-bind="$ctrl.commentHeader"></span></div>
    <div ng-bind="$ctrl.comment.body"></div>
    `
  }
}

// register the Comment component
angular.module('autoFi').component('comment', Comment)
