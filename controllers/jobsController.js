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