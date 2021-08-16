import { Router } from 'express';
var router = Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(0 ?? 1);
  res.render('index', { title: 'Express' });
});

export default router;
