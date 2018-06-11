const router = require('express').Router()
const userData = []
let counter = 0

  
  router.post('/api/exercise/new-user', (req, res) => {
    if (!req.body.username) {
      res.send({error: 'No data provided'})
    }
  
    for(data of userData) {
      if (data.username == req.body.username) {
        return res.send('username already registered')
        
      }
    }
    var indx = userData.push({
      id: counter++,
      username: req.body.username
    })
    res.send(userData[indx - 1])
  })
  
  router.post('/api/exercise/add', (req, res) => {
    let isFalse = true
    const fieldsToFilter = ['userId', 'description', 'duration']
    for (field of fieldsToFilter) {
      if (!req.body[field]) {
        isFalse = false
        break
      }
    }
    if (isFalse) {
        res.status(406).send('Not accepeted parameters')
    }
  })

module.exports = router