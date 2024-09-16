require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const githubData = {
    "login": "SammarGeu",
    "id": 112872978,
    "node_id": "U_kgDOBrpOEg",
    "avatar_url": "https://avatars.githubusercontent.com/u/112872978?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/SammarGeu",
    "html_url": "https://github.com/SammarGeu",
    "followers_url": "https://api.github.com/users/SammarGeu/followers",
    "following_url": "https://api.github.com/users/SammarGeu/following{/other_user}",
    "gists_url": "https://api.github.com/users/SammarGeu/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/SammarGeu/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/SammarGeu/subscriptions",
    "organizations_url": "https://api.github.com/users/SammarGeu/orgs",
    "repos_url": "https://api.github.com/users/SammarGeu/repos",
    "events_url": "https://api.github.com/users/SammarGeu/events{/privacy}",
    "received_events_url": "https://api.github.com/users/SammarGeu/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 6,
    "public_gists": 0,
    "followers": 1,
    "following": 5,
    "created_at": "2022-09-05T12:25:26Z",
    "updated_at": "2024-09-04T14:20:18Z"
  }
app.get('/', (req, res) => {
  res.send('Hello World!')
}) 
app.get('/login',(req,res)=>{
    res.send('<h1>Welcome to the website.Please enter your login credentials')
})
app.get('/github',(req,res)=>{
    res.json(githubData)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})