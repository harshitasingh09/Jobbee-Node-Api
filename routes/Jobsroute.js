const express = require ('express');
const router = express.Router();
const {getJobs,newJob,updateJob,deleteJob,getJobSlug}= require('../controllers/jobsController')


router.route('/jobs').get(getJobs);
router.route('/jobs/:id/:slug').get(getJobSlug);
router.route("/job/new").post(newJob);
router.route("/job/:id").put(updateJob).delete(deleteJob);






module.exports= router;