/////////////////////////
//// JSON BIO OBJECT ////
/////////////////////////

var bio = {
    "name": "David Payne PA-C",
    "role": "Director and Associate Professor, RMUoHP PA Program",
    "contacts": {
        "mobile": "8017346789",
        "email": "david.payne.pac@gmail.com",
        "github": "davidpaynepac",
        "twitter": "@DavidAPaynePAC",
        "location": "Provo, UT"
    },
    "welcomeMessage": "Welcome to my javascript-generated resume project page! Having fun working through the Javascript Basics course from Udacity!",
    "skills": [
        "teaching",
        "medicine",
        "technology",
        "leadership",
        "collaboration"
    ],
    "biopic": "images/david-payne-410.jpg",
    "display": ""   
}
    
//////////////////////////////
//// BIO DISPLAY FUNCTION ////
//////////////////////////////

// Encapsulate display() within the bio object
bio.display = function(){
    // HTMLheaderName declared in helper.js
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    // HTMLheaderRole declared in helper.js
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    // Include all 'contacts' and append each to topContacts section,
    // Associated variables declared in helper.js
    var contactMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(contactMobile);
    $("#footerContacts").append(contactMobile);
    var contactEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(contactEmail);
    $("#footerContacts").append(contactEmail);
    var contactGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(contactGithub);
    $("#footerContacts").append(contactGithub);
    var contactTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(contactTwitter);
    $("#footerContacts").append(contactTwitter);
    var contactLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(contactLocation);
    $("#footerContacts").append(contactLocation);
    // Add biopic, HTMLbioPic declared in helper.js
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedBioPic);
    // Add welcome message, HTMLWelcomeMsg declared in helper.js
    var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMsg);
    // Determine if any skills are included and if so, begin skills content section
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
    }
    // Iterate through skills array to list out skills via HTMLskills var declared in helper.js
    for (skill in bio.skills) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#header").append(formattedSkill);
    }
}

// Call function to display on html page
bio.display();    
    
// REMNANTS FROM COURSE EXERCISES

/*
    for (var i=0; i<bio.skills.length; i++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
    }

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formattedSkill);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formattedSkill);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formattedSkill);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
        $("#skills").append(formattedSkill);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
        $("#skills").append(formattedSkill);
    };
*/

///////////////////////////////
//// JSON EDUCATION OBJECT ////
///////////////////////////////

var education = {
    "schools": [
        {
            "name": "University of St Francis",
            "location": "Albuquerque, NM, US",
            "degree": "MPAS",
            "majors": [
                "Physician Assistant Studies"
            ],
            "dates": 2005,
            "url": "http://www.stfrancis.edu/academics/physician-assistant-studies"
        },
        {
            "name": "Arizona State University",
            "location": "Tempe, AZ, US",
            "degree": "BS",
            "majors": [
                "Psychology"
            ],
            "dates": 2000,
            "url": "http://www.asu.edu"
        }
    ],
    "onlineCourses": [
        {
            "title": "JavaScript Basics",
            "school": "Udacity",
            "date": 2015,
            "url": "https://www.udacity.com/course/ud804"
        },
        {
            "title": "Intro to HTML and CSS",
            "school": "Udacity",
            "date": 2014,
            "url": "https://www.udacity.com/course/ud304"
        }
    ],
    "function": ""
}

////////////////////////////////////
//// EDUCATION DISPLAY FUNCTION ////
////////////////////////////////////

// Encapsulate display() within the education object
education.display = function(){
    // Include div for education section
    $("#education").append(HTMLschoolStart);
    // Iterate through each school object
    for (school in education.schools) {
        // Include name of each school
        var schoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        // Ensure each school is linked with appropriate URL
        schoolName = schoolName.replace("#",education.schools[school].url);
        var schoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        // Combine schoolName and schoolDegree prior to appending to ensure proper formatting
        var schoolNameAndDegree = schoolName + schoolDegree;
        $(".education-entry:last").append(schoolNameAndDegree);
        // Add graduation date
        var schoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(schoolDates);
        // Add location
        var schoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(schoolLocation);
        // Add major
        var schoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        $(".education-entry:last").append(schoolMajor);
    }
    // Include header for online courses
    $(".education-entry:last").append(HTMLonlineClasses);
    // Iterate through each online course
    for (course in education.onlineCourses) {
        // Include title of each course
        var onlineCourseTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
        // Setup online school name
        var onlineSchoolName = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        // Ensure each course is linked with appropriate URL
        onlineCourseTitle = onlineCourseTitle.replace("#", education.onlineCourses[course].url);
        // Connect course, name, and url into single variable
        var onlineCourseSchoolUrl = onlineCourseTitle + onlineSchoolName;
        $(".education-entry:last").append(onlineCourseSchoolUrl);
        // Add dates
        var onlineCourseDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
        $(".education-entry:last").append(onlineCourseDates);
    }
}

// Call function to display on html page
education.display(); 

//////////////////////////
//// JSON WORK OBJECT ////
//////////////////////////

var work = {
    "jobs": [
        {
            "employer": "Rocky Mountain Unviersity of Health Professions",
            "title": "Founding Program Director, Physician Assistant Program",
            "location": "Provo, UT",
            "dates": "2014-2015",
            "description": "Founding chair in the design, development, and implementation of developing physician assistant program; provide inspirational leadership and vision in the development and implementation of innovative medical education curricula including applied basic medical science content, synthesized clinical medicine modules, and high fidelity experiential learning through standardized patient simulation; development and implementation of critical administrative processes including thorough and persistent program self-assessment and improvement as well as budget analysis and management; establishment of robust faculty development and mentoring system including peer-review process and competencies tracking system; mentor, instruct, and evaluate students within areas of expertise and interest"
        },
        {
            "employer": "University of Charleston",
            "title": "Founding Program Director, Physician Assistant Program",
            "location": "Charleston, WV",
            "dates": "2011-2014",
            "description": "Founding chair in the design, development, and implementation of new physician assistant program; successfully established ‘Accreditation-Provisional’ status with zero areas of non-compliance"
        },
        {
            "employer": "University of Wisconsin—Madison",
            "title": "Academic Director, Physician Assistant Program",
            "location": "Madison, WI",
            "dates": "2009-2011",
            "description": "Oversight of curriculum planning, development, implementation, and assessment, including transition of Bachelor's degree program to Master's degree program; leadership in continuous program review and analysis; course director and instructor for Fundamentals of Clinical Medicine (including core content in Pharmacology, Medical Physiology, Pathophysiology, and Laboratory Medicine), History and Physical Exam, Clinical Medicine I, Clinical Medicine II, Pediatrics, ECG-EKG, and Professional Seminar courses (including core content in Epidemiology, Biostatistics, and Evidence-Based Medicine); clinical skills and case-based learning instruction"
        },
        {
            "employer": "Rocky Mountain College",
            "title": "Associate Program Director",
            "location": "Billings, MT",
            "dates": "2007-2009",
            "description": "Fulfilled administrative duties as delegated by program director; leadership in continuous program review and analysis; developed, modified, and maintained schedule of instruction; curriculum planning, development, and implementation; management of didactic curriculum including coordination of core and adjunct faculty; instruction in areas of expertise and interest; management of hybrid-based curricular delivery system"
        },
        {
            "employer": "Northeast Family Medical Center",
            "title": "Physician Assistant—Certified, Acute Care Medicine",
            "location": "Madison, WI",
            "dates": "2009-2011",
            "description": "Provided direct acute patient-centered care, including evaluation, diagnosis, and management of illness and injury, prescribing of medications and other therapeutic modalities/regimens, performance of diagnostic and therapeutic office procedures, and providing thorough patient education and counseling accordingly"
        },
        {
            "employer": "Kaplan Family Care Center",
            "title": "Physician Assistant—Certified, Family Medicine",
            "location": "Sierra Vista, AZ",
            "dates": "2006-2007",
            "description": "Provided direct acute and chronic patient-centered care, including evaluation, diagnosis, and management of illness and injury, prescribing of medications and other therapeutic modalities/regimens, performance of diagnostic and therapeutic office procedures, and providing thorough patient education and counseling accordingly; served as primary care practitioner for my own patient panel"
        },
        {
            "employer": "White Sands Family Practice",
            "title": "Physician Assistant—Certified, Family and Acute Care Medicine",
            "location": "Alamogordo, NM",
            "dates": "2005-2006",
            "description": "Provided direct acute and chronic patient-centered care, including evaluation, diagnosis, and management of illness and injury, prescribing of medications and other therapeutic modalities/regimens, performance of diagnostic and therapeutic office procedures, and providing thorough patient education and counseling accordingly; served as primary care practitioner for my own patient panel"
        }
    ],
    "display": ""
}

///////////////////////////////
//// WORK DISPLAY FUNCTION ////
///////////////////////////////

// Encapsulate display() within the work object
work.display = function() {
    for (job in work.jobs){
        // Include div for each listed job
        $("#workExperience").append(HTMLworkStart);
        // List employer and job title for each job
        var jobEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var jobTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var jobFullTitle = jobEmployer + jobTitle;
        // Include remaining job entry information for each job
        var jobDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var jobLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var jobDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        var jobFullEntry = jobFullTitle + jobDates + jobLocation + jobDescription;
        $(".work-entry:last").append(jobFullEntry);
    }
}

// Call function to display on html page
work.display();

//////////////////////////////
//// JSON PROJECTS OBJECT ////
//////////////////////////////

var projects = {
    "projects": [
        {
            "title": "Rocky Mountain University of Health Professions (RMUoHP) Physician Assistant (PA) Program Feasibility Study Report",
            "dates": "2014",
            "description": "Formal report submitted to authorized accreditation agency of comprehensive evaluation of the healthcare needs of the local community and Utah, market demand for Physician Assistant (PA) education, as well as the University's suitability and preparedness to develop and sustain an accredited PA program harmonious with institutional mission, vision, and goals. Snapshots of the report included below:",
            "images": [
                "images/feasibility-study-01.png",
                "images/feasibility-study-02.png",
                "images/feasibility-study-03.png"
            ]
        },
        {
            "title": "Physician Assistant Education Association (PAEA) National Conference Presentation—\"Starting up a New Program? Been There, Done That, and Happy to Share Some Words of Wisdom\"",
            "dates": "2013",
            "description": "Collaborated with three additional Physician Assistant (PA) education colleagues to present on strategies for developing new PA programs; my area of responsibility was \"Essential Self-Assessment Processes.\" Sample slides are included below:",
            "images": [
                "images/paea-assessment-01.png",
                "images/paea-assessment-02.png",
                "images/paea-assessment-03.png"
            ]
        },
        {
            "title": "EDTech.Ninja Logo and Favicon Design",
            "dates": "2014",
            "description": "Utilized Sketches (iOS), Adobe Illustrator (OS X) and iDraw (OS X) softwares to design vector-based website logo and favicon. Logo, folders icon, and favicon are included below:",
            "images": [
                "images/ninja-logo-favicon-01.png",
                "images/ninja-logo-favicon-02.png",
                "images/ninja-logo-favicon-03.png"
            ]
        }
    ],
    "display": ""   
}

///////////////////////////////////
//// PROJECTS DISPLAY FUNCTION ////
///////////////////////////////////

// Encapsulate display() within the projects object
projects.display = function(){
    for (project in projects.projects){
        // include div for each listed project
        $("#projects").append(HTMLprojectStart);
        // list title, dates, and description for each project
        var projectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        var projectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        var projectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        var projectTitleDatesDescription = projectTitle + projectDates + projectDescription;
        $(".project-entry:last").append(projectTitleDatesDescription);
        // display images if present
        if (projects.projects[project].images.length>0){
            for (image in projects.projects[project].images){
                var projectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(projectImage);
            }
        }
    }
}

// Call function to display on html page
projects.display();

// Include Google Map
$("#mapDiv").append(googleMap);

// REMNANTS FROM PRELIMINARY COURSE EXERCISES

/*

// dot notation for 'work' object

var work = {};
work.currentJobPosition = "Program Director";
work.currentEmployer = "Rocky Mountain University of Health Professions";
work.currentYearsWorked = 1;
work.currentEmploymentCity = "Provo, UT";

$("#main").append(work.currentJobPosition);
$("#main").append(work.currentEmployer);
$("#main").append(work.currentYearsWorked);
$("#main").append(work.currentEmploymentCity);

// bracket notation for 'education' object

var education = {};
education["lastSchoolAttended"] = "University of St Francis";
education["yearsAttended"] = "2003-2005";
education["schoolCity"] = "Albuquerque, NM";

$("#main").append(education["lastSchoolAttended"]);
$("#main").append(education["yearsAttended"]);
$("#main").append(education["schoolCity"]);

*/