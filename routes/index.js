const express = require('express');
const router = express.Router();
const hawkerController = require('../controllers/hawkerController')
// Do work here
router.get('/', (req, res) => {
  res.send('Hey! It works!');
});

router.get('/hawkerview', hawkerController.hawkerView);
router.get('/hawkerview/add', hawkerController.addHawker);
router.post('/hawkerview/add', hawkerController.createHawker);
router.get('/hawkerview/:hawker_id', hawkerController.editHawker);
// router.get('/hawkerview/:slug', hwkerController.editHawkerSlug);
router.put('/hawkerview/:hawker_id', hawkerController.updateHawker);

module.exports = router;
