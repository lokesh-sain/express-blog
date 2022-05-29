const router = require('express').Router();

const availCourses = require('../data/coursesCategory');

router.get("/",(req,res)=>{
    res.render('index',{title:"Welcome to coder's",availCourses});
});



router.get("/:slug",(req,res)=>{
    courseCategory = availCourses.filter((e)=>{
      return e.slug==req.params.slug
    });
    courseCategory = courseCategory[0];
    if(courseCategory){
        const fetchedCourse = require(`../data/${req.params.slug}`);
        res.render("subCourse",{title:`Learn ${req.params.slug}`,subTitle:req.params.slug,fetchedCourse})
    }else{
        res.statusCode=404;
        res.render('error404',{title:"404 Page Not Found"});
    }
});

router.get("/learn/:course",(req,res)=>{
    const fetchedCourse = require('../data/availableCourse');
    fetchResult = fetchedCourse.filter((e)=>{
        return e.slug==req.params.course
    });
    fetchResult = fetchResult[0];
    if(fetchResult){
        const threads = require(`../data/courses/${fetchResult.table}`);
        res.render("learn",{title:`Learn ${req.params.course}`,subTitle:req.params.course,threads});
    }
});

router.get("/posts/:threads",(req,res)=>{
    const fetchedThreads = require('../data/courses/html');
    fetchResult = fetchedThreads.filter((e)=>{
        return e.slug==req.params.threads
    });
    fetchResult = fetchResult[0];
    if(fetchResult){
        res.render("readmore",{title:fetchResult.title,fetchResult});
    }
});



module.exports=router;