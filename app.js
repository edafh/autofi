const express = require('express')
const app = express()
const fetch = require('node-fetch')

// start the express server on this port
const listenPort = 6789

// set static content
app.use(express.static('public'))

// variable to hold post list
// dummy length of 100 for the unit test since
let posts = new Array(100)

// variable to hold the comment list
const commentMap = new Map()

// pre-fetch the data and serve it locally to reduce latency and improve performance
// also store the comments in a map, with postId as key for fast/easy querying
async function prefetchData () {
  let data = await fetch('https://jsonplaceholder.typicode.com/posts')
  posts = await data.json()
  data = await fetch('https://jsonplaceholder.typicode.com/comments')
  let comments = await data.json()

  comments.forEach(comment => {
    // convert post ID to string because the GET request for the comments API will come in as a string
    let postId = comment.postId.toString()
    if (commentMap.has(postId)) {
      let commentArr = commentMap.get(postId)
      commentArr.push(comment)
      commentMap.set(postId, commentArr)
    } else {
      commentMap.set(postId, [comment])
    }
  })
}
prefetchData()

/**
 * "posts" API: fetch lists of posts
 *
 * @parameter {string} "ingredient_name" the name of the ingredient to search for
 */
app.get('/posts', (request, response) => {
  // wrap the func in a try/catch block for graceful error handling
  try {
    response.send(posts)
  } catch (err) {
    // for now just return an empty array on error
    response.send([])
  }
})

/**
 * "comments" API: fetch comments for a specific post
 *
 * @parameter {string} "postId" the post ID to return comments for
 */
app.get('/comments', (request, response) => {
  // wrap the func in a try/catch block for graceful error handling
  try {
    let comments = commentMap.get(request.query.postId) || []
    response.send(comments)
  } catch (err) {
    // for now just return an empty array on error
    response.send([])
  }
})

console.log('Server starting @ http://localhost:' + listenPort)

module.exports = app.listen(listenPort)
