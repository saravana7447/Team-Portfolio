import { Injectable } from '@angular/core';
import { Member } from '../models/member.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private members: Member[] = [
    {
      id: 1,
      name: 'Saravana Kumar B',
      role: 'Pre-Final Year CSE Undergraduate',
      image: 'saravana2.jpg',
      bio:'Pre-final year Computer Science Engineering student  with a strong interest in problem-solving, software development and emerging technologies. Currently exploring Java. Always curious and eager to learn new things every day and solve real world problems using clean and efficient code.',
      skills: ['React', 'Node.js', 'HTML/CSS', 'JavaScript', 'DSA','C','C++','Java (Learning)','MySQL','OOPS', 'Express'],
      education: 'B.E Computer Science and Engineering, College of Engineering Guindy, Anna University (2023-2027) - CGPA: 8.93',
      experience: [
      "HR Coordinator, CEG Tech Forum (CTF) - Managed participant engagement and communication for a sea-themed quiz event. Coordinated the collection of sea-related images used to create interactive quiz content. Facilitated event logistics and team collaboration, enhancing community involvement.",
      "Volunteer, Kurukshetra (CEG's Annual Tech Fest) - Contributed to organizing and managing one of the largest technical events at College of Engineering Guindy. Supported event logistics, coordination, and participant management."
      ],
      projects: [
    {
      title: "Curated News Platform",
      description: "Built a full-stack app with secure authentication. Integrated external news APIs and AI summarization. Developed RESTful APIs for frontend-backend communication.",
      technologies: ["React", "Node.js", "Express", "MongoDB" , "JWT" , "News APIs", "OpenAl"]
    },
    {
      title: "Student Management System",
      description: "Designed a normalized database schema using advanced SQL features.Developed an interface supporting CRUD operations and reporting.Implemented robust error handling for data integrity.",
      technologies: ["MySQL" , "Triggers", "React", "Node.js", "Express", "JWT"]
    },
    {
      title: "Weather App",
      description: "Created a React app showing longitude and latitude of any location. Displays current weather worldwide with a responsive UI.",
      technologies: ["React" , "Weather APIs" ]
    }
  ],
      contact: {
        email: 's4tech1234@gmail.com',
        linkedin: 'linkedin.com/in/saravanakumar7447',
        github: 'https://github.com/saravana7447',
        leetcode: 'https://leetcode.com/u/s4tech1234/'
      }
    },
    {
      id: 2,
      name: 'Sasi Kiruthik P',
      role: '3rd Year CSE Undergraduate',
      image: 'Sasi.png',
      bio: 'A passionate Computer Science student at CEG with strong problem-solving skills and experience in building full-stack applications. Interested in web development, database systems, and scalable solutions.',
      skills: [
      'Data Structures & Algorithms (DSA)',
      'Java',
      'C++',
      'C',
      'Python',
      'HTML',
      'CSS',
      'JavaScript',
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Angular',
      'DBMS',
      'SQL',
      'PostgreSQL'
    ],
      education: 'B.E Computer Science and Engineering, College of Engineering Guindy, Anna University (2023-2027) - CGPA: 8.93',
      experience: [
        'Public Relations Officer at CEG Spartanz (2025 - Present)',
        'Member of NSS (2023 - Present)',
        'Member of CSEA (2023 - Present)'
      ],
      projects: [
        {
          title: 'AskNFix',
          description: 'Centralized platform for students to raise queries related to hostel, academics, and appliances with role-based access.',
          technologies: ['DBMS', 'JavaScript', 'MySQL']
        },
        {
          title: 'GetPaws',
          description: 'Pet e-commerce and adoption platform with medical assistance and vet booking features.',
          technologies: ['Node.js', 'Express.js', 'JavaScript', 'MongoDB']
        },
        {
          title: 'HackXplore',
          description: 'Hackathon discovery and posting platform with interactive UI and real-time updates.',
          technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Vaadin UI']
        }
      ],
      contact: {
        email: 'kiruthiksasi2408@gmail.com',
        linkedin: 'https://www.linkedin.com/in/sasi-kiruthik',
        github: 'https://github.com/SasiKiruthik',
        leetcode: 'https://leetcode.com/u/SasiKiruthik/'
      }
    },
    {
      id: 3,
      name: 'Dilshan Chinnappan A',
    role: '3rd Year CSE Undergraduate',
    image: 'Dilshan.png',
    bio: 'An enthusiastic Computer Science student at CEG with a strong passion for problem-solving and full-stack development. Dedicated to continuous learning and building impactful web applications.',
    skills: [
      'C',
      'C++',
      'Java',
      'Python',
      'JavaScript',
      'HTML',
      'CSS',
      'SQL',
      'React',
      'Express.js',
      'Tailwind CSS',
      'Node.js',
      'MongoDB',
      'MySQL'
    ],
    education: 'B.E Computer Science and Engineering, College of Engineering Guindy, Anna University (2023-2027) - CGPA: 9.15',
    experience: [
      'TechOps Coordinator at CEG Tech Forum (CTF) - Contributed to frontend development of WallStreet Wolverine, a stock trading simulation web app'
    ],
    projects: [
      {
        title: 'EnrollEase',
        description: 'Role-based course registration platform with personalized dashboards for admins, faculty, and students.',
        technologies: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MySQL'],
        link: 'https://github.com/Dilshan-03/EnrollEase.git'
      },
      {
        title: 'NewsNexus',
        description: 'MERN stack news platform with curated browsing, audio playback, and mini-blog features.',
        technologies: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
        link: 'https://github.com/Dilshan-03/NewsNexus.git'
      }
    ],
    certifications: [
      'Data Structures and Algorithms – NPTEL'
    ],
    contact: {
      email: 'dilshanchinnappan2006@gmail.com',
      linkedin: 'https://linkedin.com/in/dilshan-chinnappan',
      github: 'https://github.com/Dilshan-03'
    },
    },
    {
      id: 4,
      name: 'Nishal S',
      role: '3rd Year CSE Undergraduate',
      image: 'Nishal.png',
      bio: 'Computer Science undergraduate at CEG with a passion for programming, full-stack development, and problem-solving. Skilled in databases, frontend technologies, and collaborative projects with experience in both academic and community service activities.',
      skills: [
        'Java',
        'C',
        'C++',
        'HTML',
        'JavaScript',
        'React',
        'Node.js',
        'Express.js',
        'MongoDB',
        'MySQL',
        'Data Structures & Algorithms',
        'OOP in C++',
        'Operating Systems',
        'VS Code',
        'MS Office'
      ],
      education: 'B.E Computer Science and Engineering, College of Engineering Guindy, Anna University (2023 - Present) - CGPA: 7.8',
      experience: [
        'NSS Volunteer - Organized NSS and medical camps, contributed to social welfare, health awareness, and community engagement initiatives'
      ],
      projects: [
        {
          title: '2D Function Plotter',
          description: 'GUI-based Java application for visualizing 2D mathematical functions with custom parsing and analysis features.',
          technologies: ['Java', 'AWT', 'Swing']
        },
        {
          title: 'Wildlife Census Management System',
          description: 'Full-stack web app for managing wildlife census data with CRUD operations and data visualization. Built with two versions: MongoDB (NoSQL) and MySQL (SQL).',
          technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'MySQL']
        }
      ],
      contact: {
        email: 'nishalking17@gmail.com',
        linkedin: 'http://www.linkedin.com/in/nishal17',
        github: 'https://github.com/nishal-s'
      }

    },
    {
      id: 5,
      name: 'Mathivanan S',
      role: '3rd Year CSE Undergraduate',
      image: 'mathi.jpg',
      bio: 'Passionate Computer Science student at CEG with strong interests in full-stack development and cloud computing. Experienced in building scalable web applications and implementing efficient solutions.',
      skills: [
        'Java',
        'Python',
        'JavaScript',
        'HTML/CSS',
        'React.js',
        'Node.js',
        'Express.js',
        'MongoDB',
        'MySQL',
        'AWS',
        'Docker',
        'Git',
        'Data Structures & Algorithms'
      ],
      education: 'B.E Computer Science and Engineering, College of Engineering Guindy, Anna University (2023-2027) - CGPA: 7.58',
      experience: [
        'Worked with team collaboratively as a Technical Team Lead at CEG Tech Forum, overseeing project development and ensuring timely delivery of features.'      ],
      projects: [
        {
          title: 'Flashcard Revision App',
          description: 'Developed a console-based ATM simulation using Java, implementing key banking functionalities such as user authentication, balance inquiry, deposit, withdrawal, and transaction history.',
          technologies: ['React', 'Node.js', 'Express.js', 'MongoDB'],
        },
        {
          title: 'Introduction to Programming with Python – HarvardX /CS50P',
          description: 'Completed a foundational course covering core programming concepts such as variables, loops, conditionals, functions, file I/O, and object-oriented programming using Python.',
          technologies: ['React', 'Python', 'TensorFlow', 'MongoDB', 'Express.js'],
        }
      ],
      certifications: [
        'Introduction to programming with python HarvardX(completed)',
        'Introduction to AI with Python – HarvardX (edX), Ongoing',
        'Python for Data Science, NPTEL Swayam ,Ongoing'
      ],
      contact: {
        email: 'mathivananshanmugam01@gmail.com',
        linkedin: 'https://linkedin.com/in/gowtham-krishnan',
        github: 'https://github.com/gowtham-k',
        portfolio: 'https://gowtham-k.dev'
      }
    }
  ];

  getMembers(): Observable<Member[]> {
    return of(this.members);
  }

  getMemberById(id: number): Observable<Member | undefined> {
    const member = this.members.find(m => m.id === id);
    return of(member);
  }

  searchMembers(query: string): Observable<Member[]> {
    query = query.toLowerCase().trim();
    const filteredMembers = this.members.filter(member => 
      member.name.toLowerCase().includes(query) ||
      member.role.toLowerCase().includes(query) ||
      member.bio.toLowerCase().includes(query) ||
      member.skills.some(skill => skill.toLowerCase().includes(query)) ||
      member.education.toLowerCase().includes(query) ||
      member.experience.some(exp => exp.toLowerCase().includes(query)) ||
      member.projects.some(project => 
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.technologies.some(tech => tech.toLowerCase().includes(query))
      )
    );
    return of(filteredMembers);
  }
}