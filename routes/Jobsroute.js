const express = require ('express');
const router = express.Router();
const {getJobs,newJob,updateJob,deleteJob}= require('../controllers/jobsController')


router.route('/jobs').get(getJobs);
router.route("/job/new").post(newJob);
router.route("/job/:id").put(updateJob).delete(deleteJob);





module.exports= router;