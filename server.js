const express = require('express');
const app = express();

const postsRoute = require('./routes/Posts');
app.use('/posts', postsRoute)

app.listen(4000, () => {
    console.log('Listening on port 4000')
})

/*//POSTS
app.get('/posts', (req, res) => {
    res.send('GET POSTS')
})

app.post('/posts', (req, res) => {
    res.send('POST POSTS')
})

app.put('/posts', (req, res) => {
    res.send('PUT POSTS')
})

app.delete('/posts', (req, res) => {
    res.send('DELETE POSTS')
})

//COMMENTS

app.get('/comments', (req, res) => {
    res.send('GET comments')
})

app.post('/comments', (req, res) => {
    res.send('POST comments')
})

app.put('/comments', (req, res) => {
    res.send('PUT comments')
})

app.delete('/comments', (req, res) => {
    res.send('DELETE comments')
})

//LIKES

app.get('/likes', (req, res) => {
    res.send('GET likes')
})

app.post('/likes', (req, res) => {
    res.send('POST likes')
})

app.put('/likes', (req, res) => {
    res.send('PUT likes')
})

app.delete('/likes', (req, res) => {
    res.send('DELETE likes')
})

//STORIES

app.get('/stories', (req, res) => {
    res.send('GET stories')
})

app.post('/stories', (req, res) => {
    res.send('POST stories')
})

app.put('/stories', (req, res) => {
    res.send('PUT stories')
})

app.delete('/stories', (req, res) => {
    res.send('DELETE stories')
})*/


app.listen(4000, () => {
    console.log('Listening on port 4000')
})