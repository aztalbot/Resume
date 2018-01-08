// Build resume using classes from resumeClasses
import { Profile, Name, Address, Contact, Experience, Position, Location, Employer, TimeFrame, PositionDate } from './resumeClasses';

const RESUME_DATA = {};
addProfile();
addExperience();
addSkills();
addEducation();

function addProfile() {
  let myName = new Name('Andrew', 'Zachary', 'Talbot');

  let myAddress = new Address(
    '1716 Wake Forest Dr.',
    new Location('Richmond', 'VA'),
    23226
  );

  let myContact = new Contact(
    'andrew.talbot@richmond.edu',
    'talbota@mymail.vcu.edu',
    '(516) 306-0235'
  );

  RESUME_DATA.profile = new Profile(myName, myAddress, myContact);
};


RESUME_DATA.summary = `
  I have a broad and growing set of skills that I employ to solve problems and improve existing workflows.
  Currently, I am a student pursuing a post-baccalaureate certificate in Computer Science. I am also a part-time
  developer/analyst at Capital One, where I build internal web apps, workflow automation scripts, and analytical
  solutions. I write code in JavaScript and Python on a daily basis, and I love building web apps with Vue. In fact,
  this resume is built with Vue!
`;

function addExperience() {
  // POSITION 1
  let position1 = new Position(
    'Risk Management Developer/Analyst',
    new Employer('Capital One', 'http://www.capitalone.com'),
    new Location('Richmond', 'VA')
  );
  let entry1 = new Experience(
     position1,
     true,
     new TimeFrame(
       new PositionDate(10, 2017),
       'Present'
     ),
     [
       'Develop web apps, automation scripts, and analytical solutions for internal clients based on requirements',
       'Use git for managing versions on all projects'
     ]
  );
  // POSITION 2
  let position2 = new Position(
    'Developer Intern',
    new Employer('Think of Us', 'http://www.thinkof-us.org'),
    new Location('Richmond', 'VA')
  );
  let entry2 = new Experience(
     position2,
     true,
     new TimeFrame(
       new PositionDate(9, 2017),
       'Present'
     ),
     [
       'Contribute to the front-end development of the Think of Us web app using Knockout.js',
       'Use git for collaboration and managing versions on all projects'
     ]
  );
  // POSITION 3
  let position3 = new Position(
    'Paralegal',
    new Employer('McGuireWoods LLP', 'http://www.mcguirewoods.com'),
    new Location('Richmond', 'VA')
  );
  let entry3 = new Experience(
     position3,
     false,
     new TimeFrame(
       new PositionDate(10, 2015),
       new PositionDate(9, 2017)
     ),
     [
       'Supported a team of 14 attorneys representing major energy utility companies in state regulatory matters',
       'Completed large and complex projects in connection with ongoing litigation, including two multi-billion dollar ' +
       'utility company mergers and 10+ evidentiary hearings',
       'Provided technical support and creative solutions for the regulatory team, including tools written in JavaScript ' +
       'that provide court document search and automated notification capabilities that were not previously available'
     ]
  );
  // POSITION 4
  let position4 = new Position(
    'GIS Technician',
    new Employer('Department of Geography and the Environment', 'http://www.richmond.edu'),
    new Location('University of Richmond', 'VA')
  );
  let entry4 = new Experience(
     position4,
     false,
     new TimeFrame(
       new PositionDate(9, 2015),
       new PositionDate(10, 2015)
     ),
     [
       'Conducted spatial analyses and composed maps for research on women’s empowerment in rural Uganda.',
       'Supported faculty and staff with GIS classes and other research'
     ]
  );
  // POSITION 5
  let position5 = new Position(
    'Bonner Scholar/Student Coordinator',
    new Employer('Bonner Center for Civic Engagement', 'http://www.richmond.edu'),
    new Location('University of Richmond', 'VA')
  );
  let entry5 = new Experience(
     position5,
     false,
     new TimeFrame(
       new PositionDate(9, 2011),
       new PositionDate(6, 2015)
     ),
     [
       'Edited and published 26 student presentation videos and an additional compilation video for the Center',
       'Served as a Senior Intern for the Bonner Scholars Program and led all 13 communications projects',
       'Designed and launched a website to educate students about city government and participation',
       'Developed a revamped curriculum for the Bonner Scholars program focused on social justice and citizenship',
       'Organized and promoted civic engagement and social justice-themed events in downtown Richmond'
     ]
  );
  RESUME_DATA.experienceArr = [entry1, entry2, entry3, entry4, entry5]
}

function addSkills() {
  let skillset1 = {
    name: 'Software & Frameworks',
    items: ['Vue.js', 'Knockout.js', 'ASP.Net Core', 'Git', 'ArcGIS', 'Carto', 'Mapbox', 'MS Excel', 'iMovie']
  }
  let skillset2 = {
    name: 'Programming Languages',
    items: ['Java', 'JavaScript', 'Python', 'SQL', 'HTML', 'CSS', 'UNIX Shell Scripts', 'Google Apps Script']
  }
  let skillset3 = {
    name: 'Foreign Languages',
    items: ['Arabic', 'French']
  }
  RESUME_DATA.skills = [skillset1, skillset2, skillset3];
}

function addEducation() {
  let school1 = {
    name: 'Virginia Commonwealth University',
    location: new Location('Richmond', 'VA'),
    degree: 'Post-baccalaureate Certificate',
    specialization: 'Computer Science',
    gradDate: 'MAY 2019',
    isAbroad: false
  }
  let school2 = {
    name: 'University of Richmond',
    location: new Location('Richmond', 'VA'),
    degree: 'B.A.',
    specialization: 'International Studies: World Politics & Diplomacy, Arabic Studies (double major); French (minor)',
    gradDate: 'MAY 2015',
    gpa: 3.86,
    honors: ['Phi Beta Kappa', 'Outstanding Major – Modern Literatures & Cultures', 'Bonner Scholar'],
    isAbroad: false
  }
  let school3 = {
    name: 'Jordan University of Science and Technology',
    location: new Location('Irbid', 'Jordan'),
    description: '8-week Intensive Intermediate Arabic Program',
    gradDate: 'MAY 2013',
    isAbroad: true
  }
  let school4 = {
    name: 'IES Abroad',
    location: new Location('Rabat', 'Morocco'),
    description: 'Spring Semester',
    gradDate: 'JULY 2012',
    isAbroad: true
  }
  RESUME_DATA.education = [school1, school2, school3, school4];
}

export default RESUME_DATA;
