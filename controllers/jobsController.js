const Job= require('../models/jobsModel')

exports.getJobs = (req,res, next)=>{
    res.status(200).json({
        success: true,
        message:"the router is created successfully... hopefully u are enjoying"
    })
}

exports.newJob =async (req,res, next)=>{
    const jobs = await Job.create(req.body)
    res.status(200).json(
        {
            success: true,
            message: jobs.length,
            data: jobs,
        }
    )

}
// updating job by id
exports.updateJob = async (req, res, next) => {
    let job = await Job.findById(req.params.id);

    if (!job) {
        res.status(404).json({
            success: true,
            message: 'Job not found'
        });
    }

    job = await Job.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.status(200).json({
        success: true,
        message: 'Job is updated.',
        data: job
    });
};