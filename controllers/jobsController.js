const Job = require("../models/jobsModel");

exports.getJobs = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "the router is created successfully... hopefully u are enjoying",
  });
};

exports.newJob = async (req, res, next) => {
  const jobs = await Job.create(req.body);
  res.status(200).json({
    success: true,
    message: jobs.length,
    data: jobs,
  });
};
// updating job by id
exports.updateJob = async (req, res, next) => {
  let job = await Job.findById(req.params.id);

  if (!job) {
    res.status(404).json({
      success: true,
      message: "Job not found",
    });
  }

  job = await Job.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    message: "Job is updated.",
    data: job,
  });
};

// deleting job
exports.deleteJob = async (req, res, next) => {
  let job = await Job.findById(req.params.id);

  if (!job) {
    res.status(404).json({
      success: true,
      message: "Job not found",
    });
  }

  job = await Job.findByIdAndDelete(req.params.id);
  res.status(200).json({
    success: true,
    message:"Job deleted"
  });
};

//find by id and slug
exports.getJobSlug = async (req, res, next) => {

    const job = await Job.find({ $and: [{ _id: req.params.id }, { slug: req.params.slug }] })

    if (!job || job.length == 0) {
        res.status(404).json({
            success: true,
            message: 'Job not found'
        });
    }

    res.status(200).json({
        success: true,
        data: job
    });
};