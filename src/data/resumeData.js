// Build resume using classes from resumeClasses
import {
  Profile,
  Name,
  Address,
  Contact,
  Experience,
  Position,
  Location,
  Employer,
  TimeFrame,
  PositionDate
} from './resumeClasses'

const RESUME_DATA = {}

RESUME_DATA.experienceArr = [
  new Experience(
    new Position(
      'Information Security Software Engineer',
      new Employer('Thomson Reuters', 'http://www.thomsonreuters.com'),
      new Location('Richmond', 'VA')
    ),
    false,
    new TimeFrame(
      new PositionDate(12, 2018),
      'Present'
    ),
    [
      'Develop software for teams in the Information Security department'
    ]
  ),
  new Experience(
    new Position(
      'Developer Intern - Security Software Engineering',
      new Employer('Thomson Reuters', 'http://www.thomsonreuters.com'),
      new Location('Richmond', 'VA')
    ),
    false,
    new TimeFrame(
      new PositionDate(6, 2018),
      new PositionDate(12, 2018)
    ),
    [
      'Build a full-stack cloud security metrics application using a serverless architecture, Go, Vue, and TypeScript',
      'Participate in the Security Software Engineering team’s sprint planning and daily stand-ups'
    ]
  ),
  new Experience(
    new Position(
      'Teaching Assistant',
      new Employer('Coding Bootcamp', 'http://www.thomsonreuters.com'),
      new Location('University of Richmond', 'VA')
    ),
    true,
    new TimeFrame(
      new PositionDate(4, 2018),
      'Present'
    ),
    [
      'Provide instructional support and guidance for participants in UR’s full-stack web development bootcamp',
      'Review, grade, and provide feedback on weekly homework and projects'
    ]
  ),
  new Experience(
    new Position(
      'Risk Management Developer/Analyst',
      new Employer('Capital One', 'http://www.capitalone.com'),
      new Location('Richmond', 'VA')
    ),
    true,
    new TimeFrame(
      new PositionDate(10, 2017),
      new PositionDate(5, 2018)
    ),
    [
      'Built a web app with a Vue front-end to enable convenient querying and insights across numerous and disparate risk data sources',
      'Developed analytical and workflow automation solutions for internal clients based on requirements and needs, using Vue, Python, SQL, JavaScript, CSS, HTML, and UNIX Shell Scripts'
    ]
  ),
  new Experience(
    new Position(
      'Developer Intern',
      new Employer('Think of Us', 'http://www.thinkof-us.org'),
      new Location('Richmond', 'VA')
    ),
    true,
    new TimeFrame(
      new PositionDate(9, 2017),
      new PositionDate(1, 2018)
    ),
    [
      'Contributed to the front-end development of the Think of Us web app using Knockout.js',
      'Used git for collaboration and version management'
    ]
  ),
  new Experience(
    new Position(
      'Paralegal',
      new Employer('McGuireWoods LLP', 'http://www.mcguirewoods.com'),
      new Location('Richmond', 'VA')
    ),
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
  ),
  new Experience(
    new Position(
      'GIS Technician',
      new Employer('Department of Geography and the Environment', 'http://www.richmond.edu'),
      new Location('University of Richmond', 'VA')
    ),
    false,
    new TimeFrame(
      new PositionDate(9, 2015),
      new PositionDate(10, 2015)
    ),
    [
      'Conducted spatial analyses and composed maps for research on women’s empowerment in rural Uganda.',
      'Supported faculty and staff with GIS classes and other research'
    ]
  )
]

RESUME_DATA.skills = [{
    name: 'Platforms & Frameworks',
    items: ['Vue', 'Node.js', 'Serverless', 'Jenkins', 'Git', 'ArcGIS']
  },
  {
    name: 'Programming Languages',
    items: ['JavaScript', 'TypeScript', 'Go', 'Python', 'Java', 'C', 'SQL', 'Sass']
  },
  {
    name: 'Foreign Languages',
    items: ['Arabic', 'French']
  }
]

RESUME_DATA.education = [{
    name: 'Virginia Commonwealth University',
    location: new Location('Richmond', 'VA'),
    degree: 'Post-baccalaureate Certificate',
    specialization: 'Computer Science',
    gradDate: 'DEC 2018',
    isAbroad: false
  },
  {
    name: 'University of Richmond',
    location: new Location('Richmond', 'VA'),
    degree: 'B.A.',
    specialization: 'International Studies: World Politics & Diplomacy, Arabic Studies (double major); French (minor)',
    gradDate: 'MAY 2015',
    gpa: 3.86,
    honors: ['Phi Beta Kappa', 'Outstanding Major – Modern Literatures & Cultures', 'Bonner Scholar'],
    isAbroad: false
  },
  {
    name: 'IES Abroad',
    location: new Location('Rabat', 'Morocco'),
    description: 'Spring Semester',
    gradDate: 'MAY 2013',
    isAbroad: true
  },
  {
    name: 'Jordan University of Science and Technology',
    location: new Location('Irbid', 'Jordan'),
    description: '8-week Intensive Intermediate Arabic Program',
    gradDate: 'JULY 2012',
    isAbroad: true
  }
]

RESUME_DATA.profile = new Profile(
  new Name('Andrew', 'Zachary', 'Talbot'),
  new Address(
    null,
    new Location('Richmond', 'VA'),
    23226
  ),
  new Contact(
    'andrew.talbot@richmond.edu',
    'talbota@mymail.vcu.edu',
    '(516) 306-0235'
  )
)

RESUME_DATA.summary = `
  I am an aspiring full-stack developer currently working at Thomson Reuters 
  on a team building applications to support the cyber security department.
  I actively try to learn new technologies, and I enjoy helping others learn.
  Mainly, I build front-ends in Vue.js and write server-side code in Go, but
  I am also experienced in Node.js and Python.
`

export default RESUME_DATA
