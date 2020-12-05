# React-Redux Readable App built with react-hooks

This is the solution for the final assessment project for Udacity's Redux course where you're required to build a content and comment web app. Users will be able to post content to predefined categories, comment on their posts and other users' posts, and vote on posts and comments. Users will also be able to edit and delete posts and comments.  

## Why this project?

Most application state is managed by the Redux store. State-based props are mapped from the store rather than stored as component state.Updates are triggered by dispatching action creators to reducers.Reducers and actions are written properly and correctly return updated state to the store
```
## Run backend server

* Install and start the API server
    - `cd api-server`
    - `npm install`
    - `node server`
```
``` 
## Run frontend server

* In another terminal window,
    - `cd ui`
    - `npm install`
    - `npm start`
```

## Screenshots

# HOME PAGE

Listed posts are displayed with the following:
1) Title
2) Author
3) Number of comments
4) Current score
5) Voting mechanism to upvote or downvote the post
6) Buttons or links for editing or deleting that post

The comment count, edit/delete buttons or links, and upvote/downvote features are required on this page in order to enable the user to manage the posts without navigating away.

The voting mechanism works and correctly displays the new vote score after clicking.

List posts link to the detail page for that post.

All posts are listed at the root.

All posts for a category are listed at /:category

List pages include a button to add a new post.

All available categories are visible in any list view.

![Home](https://github.com/amarav/Readable/blob/master/images/home.gif)

# READ POST

Post detail is available at /:category/:post_id

Post is displayed with the following:
1) Title
2) Body
3) Author
4) Number of comments
5) Current score
6) Voting mechanism to upvote or downvote the post
7) Buttons or links for editing or deleting that post


![ReadPost](https://github.com/amarav/Readable/blob/master/images/readPost.gif)

# LIKE POST

The voting mechanism works and correctly displays the new vote score after clicking for both the post and comments.

![LikePost](https://github.com/amarav/Readable/blob/master/images/likePost.gif)

# EDIT POST 

Edit buttons for posts/comments open a form with existing data pre-populated. Submitting the form correctly updates the data for the comment/post.

![editPost](https://github.com/amarav/Readable/blob/master/images/editPost.gif)

# NEW POST

Application has a form for creating a new post. Submitting the form properly adds the post to the correct category.

![newPost](https://github.com/amarav/Readable/blob/master/images/newPost.gif)

# COMMENTS

Listed comments are displayed with the following:
1) Author
2) Current score
3) Voting mechanism to upvote or downvote the comment
4) Buttons or links for editing or deleting that comment

![comments](https://github.com/amarav/Readable/blob/master/images/comments.gif)

# ADD COMMENT

Application has a form for adding comments to a post. Submitting the form properly adds the comment to the correct post.

# DELETE COMMENT

A mechanism for deleting posts and comments exists. Clicking the button/link correctly removes the post/comment from list view and makes post inaccessible at its URL. When a user goes to a deleted post’s URL, a 404 page is displayed.