import React, { useState, useEffect } from 'react';

// ==========================================
// MAHMOUD ORABY ILP PORTFOLIO CONFIGURATION
// Easily update your bio, courses, Google Drive links, and YouTube videos below.
// ==========================================
const portfolioConfig = {
  student: {
    name: "Mahmoud Oraby",
    degree: "Bachelor of Science in Computer Science (Online)",
    university: "California State University, Monterey Bay",
    tagline: "Building scalable software systems, cloud infrastructure, and impactful web solutions.",
    bio: "I’m currently pursuing a Bachelor of Science in Computer Science through the online program at California State University, Monterey Bay. My focus areas include software development, backend systems, data science, and cloud technologies. I'm passionate about building systems that solve real-world problems and plan to enter the tech industry as a software engineer.",
    quote: "What led me to the amazing field of Computer Science was an event that occurred to me when I was a kid. My father bought our first family PC with Windows 95 installed on it. He had been using Microsoft Excel for a while and it was lunch time. We all ate lunch and when I went to look at the computer I saw the morphing cube screensaver. I was amazed, I stared at it for a few minutes, always changing shape moving so smooth so incredible. I had to know how this was possible, how it worked and how to make one.",
    avatar: "https://sites.google.com/sitesv-images-rt/AMxu72vLPTlFvfyVpiidwtIoQquPTicXRAMOkHrImpixd8Kg5oFJRo1zH1xs_Vkn41sGsjILW0DKWPetztDXpbzMqA6geb4EFd8vV7eY2zWMhc6Yi-xx9E9R8QjmRkn9y--ormW4jKXGpvJhDkS6MJUGIwQOoTuev6wqifzDahdbvTXsXUn2O-i0SNXIHf0T6FuePgOtfcKlgc1yuQWd1QpXIk9YVajyd9-XciNQSKue=w1280",
    email: "moraby@csumb.edu",
    github: "https://github.com",
    linkedin: "https://linkedin.com"
  },
  goals: {
    academic: "Finish core CS courses, graduate in May 2027 with honors.",
    career: "Become a software engineer, contribute to open-source initiatives and cloud infrastructure.",
    growth: "Master full-stack development, machine learning pipeline integration, and distributed cloud computing."
  },
  courses: {
    "CST 300": {
      code: "CST 300",
      title: "Major ProSeminar",
      description: "Helps students identify and articulate personal, professional, and social goals. Provides an integrated overview of the computer science and communication design majors and their requirements. Students develop a plan for their learning goals. Students learn writing, presentation, research and critical-thinking skills within the diversified fields of information technology and communication design. Students learn how to analyze, predict, and articulate trends in the academic, public service.",
      samples: [
        {
          type: "pdf",
          title: "Final Ethics Essay: Ethical Challenges in AI Development",
          summary: "This essay analyzes the ethical responsibilities of software engineers, particularly in the development of AI systems. It uses frameworks from ACM and IEEE codes of ethics to evaluate accountability in real-world tech decisions.",
          url: "https://drive.google.com/file/d/1cNxIsWcOc_sFh6x7TCAJIjICFxX9-d7R/preview"
        },
        {
          type: "video",
          title: "General Public Audience Video: Algorithmic Bias in AI",
          summary: "This team-based video was designed to explain the concept of algorithmic bias in AI hiring tools to a general audience. I helped with research and scriptwriting to ensure the content was accessible, engaging, and informative.",
          url: "https://www.youtube.com/embed/mFnKT4luCDE"
        },
        {
          type: "video",
          title: "Professional Audience Video: Technical Risks of Algorithmic Bias",
          summary: "This version of the video targets a professional audience, providing deeper insight into the ethical implications and technical risks associated with algorithmic bias in AI hiring systems.",
          url: "https://www.youtube.com/embed/Vm3Dgmx_PVI"
        }
      ],
      ilp: {
        academicGoals: "Establish strong foundations in technical writing and professional ethics.",
        careerGoals: "Align technical communication skills with software engineering industry expectations.",
        growthPlan: "Regularly update the ILP portfolio to showcase milestone projects."
      }
    },
    "CST 311": {
      code: "CST 311",
      title: "Introduction to Computer Networks",
      description: "An overview of data communication and computer networking principles, focusing on the design and implementation of layered network protocols. Topics include LANs, TCP/IP, routing, switching, and network security.",
      samples: [
        {
          type: "video",
          title: "Mininet Programming Assignment",
          summary: "",
          url: "https://www.youtube.com/embed/hBRWP4JhDNA"
        },
        {
          type: "video",
          title: "Mininet Extra Credit PA",
          summary: "Extra Credit",
          url: "https://www.youtube.com/embed/bm-z-_ptAYU"
        }
      ],
      ilp: {
        academicGoals: "Master OSI and TCP/IP network layers.",
        careerGoals: "Apply networking concepts to secure distributed backend applications.",
        growthPlan: "Explore cloud VPC configurations and secure network tunneling."
      }
    },
    "CST 328": {
      code: "CST 328",
      title: "Digital Art and Design	",
      description: "CST328 Digital Art and Design course is a survey that combines the study of technology, design, and aesthetic principles as they apply to the 21st century visual media. Students learn how to apply the fundamental concepts of art and design into a broad range of commercial, expressive, and entertainment forms. Students also study the democratization of the creative process through digital media, using current technology to produce sophisticated and expressive examples of creative digital design.",
      samples: [
        {
          type: "pdf",
          title: "Chat App Redesign Prototype",
          summary: "",
          url: "https://drive.google.com/file/d/1qmYx0wJ4NNAhmerja5D9ApT0k2DSTfTB/preview"
        },
        {
          type: "pdf",
          title: "CineFlow Content Audit",
          summary: "",
          url: "https://drive.google.com/file/d/1rjBno3t95cMhqxTV17TjW03jW1cQGMQb/preview"
        },
        {
          type: "video",
          title: "Final project Presentation of Chat App Redesign",
          summary: "",
          url: "https://www.youtube.com/embed/tkkcYqPliTU"
        }
      ],
      ilp: {
        academicGoals: "Understand and apply fundamental principles of visual design, including color theory, typography, composition, balance, and visual hierarchy, to create effective digital media.",
        careerGoals: "Develop the ability to design intuitive, visually appealing user interfaces and digital experiences that complement my software engineering skills.",
        growthPlan: "Build a portfolio of digital design projects, practice using modern design tools, and apply user-centered design principles to improve the usability and visual quality of my software projects."
      }
    },
    "CST 329": {
      code: "CST 329",
      title: "Reasoning with Logic",
      description: "Introduces formal logic and critical reasoning, focusing on translating arguments expressed in natural language into propositional and first-order logic, constructing and verifying logical proofs, evaluating argument validity, and understanding the limitations of formal logic in representing human reasoning.",
      samples: [
        {
          type: "pdf",
          title: "DeMorgan's Law Explanation and Proof",
          summary: "",
          url: "https://drive.google.com/file/d/1pM64ecyyJtI4z29RqO7omtvqGsm9qLX8/preview"
        },
        {
          type: "pdf",
          title: "Practice Problems 3",
          summary: "",
          url: "https://drive.google.com/file/d/1w92r6WGvMbKJkhx2nzcPxooAvFzfl7x4/preview"
        }
      ],
      ilp: {
        academicGoals: "Develop proficiency in propositional and first-order logic, translate natural-language arguments into formal expressions, and construct and verify logical proofs.",
        careerGoals: "Apply logical reasoning and argument validation to problem-solving, algorithm design, and the development of reliable software systems.",
        growthPlan: "Practice formal proofs and logical argument analysis, strengthen critical thinking skills, and apply structured reasoning to complex programming and software engineering problems."
      }
    },
    "CST 336": {
      code: "CST 336",
      title: "Internet Programming",
      description: "This course is designed to provide students with dynamic web application development skills, focusing on both frontend and backend development. Coverage includes the Internet architecture, HTML, CSS, JavaScript, Web APIs, programming with Node.js., Express MVC Framework, and MySQL integration.",
      samples: [
        {
          type: "pdf",
          title: "Full-Stack E-Commerce Web Application Project",
          summary: "Built a responsive online marketplace with user authentication, shopping cart state management, and secure payment gateway integration.",
          url: "https://drive.google.com/file/d/1xGCUKFiRIv6W38YEXl4UPiEKXNq6Pf4P/view?preview"
        },
        {
          type: "video",
          title: "RecipeNest Final Project Presentation",
          summary: "",
          url: "https://www.youtube.com/embed/I7LL_F5sBvo"
        }
      ],
      ilp: {
        academicGoals: "Build scalable web applications from scratch.",
        careerGoals: "Work as a full-stack software engineer.",
        growthPlan: "Learn modern frameworks like React and Next.js."
      }
    },
    "CST 338": {
      code: "CST 338",
      title: "Software Design",
      description: "Focuses on object-oriented programming and software design principles. Students learn Java, design patterns, and software development lifecycle practices through hands-on projects.",
      samples: [
        {
          type: "video",
          title: "Final Project - TaskMate App.",
          summary: "",
          url: "https://www.youtube.com/embed/YRKrfSiudUc"
        }
      ],
      ilp: {
        academicGoals: "Master clean code principles and SOLID architecture.",
        careerGoals: "Design extensible enterprise software systems.",
        growthPlan: "Contribute to open-source Java and TypeScript repositories."
      }
    },
    "CST 363": {
      code: "CST 363",
      title: "Introduction to Database Systems",
      description: "Relational database design, ER modeling, SQL querying, normalization, indexing, transaction management, and NoSQL fundamentals.",
      samples: [
        {
          type: "pdf",
          title: "Prescription Database Web Application",
          summary: "The goal of this database is to support a web application that allows doctors, patients, and pharmacies to manage medical prescriptions online. We are able to do this in a robust and efficient way by adhering to Boyce-Codd Normal Form and proper entity-relationship management throughout the database.",
          url: "https://drive.google.com/file/d/1ZBlOytTMOV9tSLAa-3ho60Y_9u4lQFOU/preview"
        },
        {
          type: "pdf",
          title: "Pharmacy Prescription Database Design",
          summary: "This document describes a relational database design for pharmacies to track patient prescriptions, doctors, patients, drugs, pharmacies, and fill/refill history. The system supports online registration for doctors and patients, validation of drug names, unique RXID assignment for prescriptions, refill limits, and recording of each fill event including the pharmacy, actual price, quantity and date.",
          url: "https://drive.google.com/file/d/1fE-H4wT2tNpLEvEMMMpt1Oi4N5vjcY6x/preview"
        }
      ],
      ilp: {
        academicGoals: "Master data modeling and query performance tuning.",
        careerGoals: "Manage robust relational and distributed databases.",
        growthPlan: "Explore ORM tools like Hibernate and Prisma."
      }
    },
    "CST 370": {
      code: "CST 370",
      title: "Design and Analysis of Algorithms",
      description: "Study of advanced data structures, algorithmic paradigms (divide-and-conquer, greedy, dynamic programming), graph algorithms, and complexity analysis (P vs. NP).",
      samples: [
        {
          type: "pdf",
          title: "Dynamic Programming - Maximum Coins",
          summary: "Collects the maximum number of coins on an n x m board using dynamic programming and backtracks to output the optimal path.",
          url: "https://drive.google.com/file/d/18gFaH8TAHZ4Ie8YNnh9pPzcuO1KYQeWW/preview"
        },
        {
          type: "pdf",
          title: "Floyd's Algorithm",
          summary: "Implements Floyd's algorithm to compute and display all-pairs shortest paths distance matrix D(n).",
          url: "https://drive.google.com/file/d/16dpN5JHzHGbt_r8S1Yqrzdhb4MDrCHHf/preview"
        },
        {
          type: "pdf",
          title: "Hash Table - Linear Probing",
          summary: "Simulation of a hash table utilizing linear probing with dynamic rehashing when load factor exceeds 0.5",
          url: "https://drive.google.com/file/d/11CdeGMyWaKHfhi1Qw-Wb31qdyCW9ShpG/preview"
        }
      ],
      ilp: {
        academicGoals: "Improve problem-solving speed and algorithmic efficiency.",
        careerGoals: "Excel in technical coding interviews and systems design.",
        growthPlan: "Practice advanced graph and dynamic programming challenges."
      }
    },
    "CST 383": {
      code: "CST 383",
      title: "Introduction to Data Science",
      description: "Data wrangling, exploratory data analysis, statistical modeling, data visualization, and introductory machine learning using Python (pandas, scikit-learn).",
      samples: [
        {
          type: "pdf",
          title: "Linear Regression",
          summary: "",
          url: "https://drive.google.com/file/d/1P4eCBRmWypEl_pE6IfW7zhYJfgDAD6Kq/preview"
        },
        {
          type: "pdf",
          title: "Online Machine Learning Final Assignment",
          summary: "",
          url: "https://drive.google.com/file/d/1DbxI4Mg5NXe_0wDI99QLGcjBcMaq_BNC/preview"
        }
      ],
      ilp: {
        academicGoals: "Understand data pipelines and statistical inference.",
        careerGoals: "Build data-driven intelligent applications.",
        growthPlan: "Learn deep learning frameworks like TensorFlow and PyTorch."
      }
    },
    "CST 438": {
      code: "CST 438",
      title: "Software Engineering",
      description: "This course prepares students for large-scale software development using software engineering principles and techniques. Coverage includes software development process, requirements analysis and specification, software design, implementation, testing, and project management. Students are expected to work in teams to carry out a realistic software project.",
      samples: [
        {
          type: "pdf",
          title: "On-Demand Taxi Service Systemn",
          summary: "The purpose of this document is to present a detailed description of the On-Demand Taxi Service System. It explains the purpose, features, system interfaces, operational constraints, and responses to external stimuli. This document is intended for stakeholders, developers, project managers, and quality assurance engineers.",
          url: "https://drive.google.com/file/d/1xRuSpW4-tl7wjKAtDzc02uA9JoMhQmEm/preview"
        }
      ],
      ilp: {
        academicGoals: "Master agile collaboration and DevOps pipelines.",
        careerGoals: "Lead engineering teams as a technical lead.",
        growthPlan: "Master Docker, Kubernetes, and cloud deployment pipelines."
      }
    },
    "CST 462S": {
      code: "CST 462S",
      title: "Race, Gender, Class in the Digital World",
      description: "This course provides students with key knowledge of race, gender, class and social justice especially in relation to technology in today's digital world. Students challenge the barriers of expertise, gender, race, class, and location that restrict wider access to and understanding of the production and the usage of new technologies. Students engage in a practical experience in the community via their service placements, which provides depth and context for engaging with questions of justice, equality, social responsibilities and the complexities of technology and its societal impact. The course uses a scenario based approach combining research, discussions, and reflections to allow students to explore the relationship between critical reflection and action on the topics mentioned above.",
      samples: [
        {
          type: "pdf",
          title: "Telehealth Expansion and Healthcare Access Barriers",
          summary: "",
          url: "https://drive.google.com/file/d/1Lt2kihUeF12p206pY-Wi8U7rJomuAs4R/preview"
        },
        {
          type: "pdf",
          title: "Service Time Log",
          summary: "",
          url: "https://drive.google.com/file/d/1dZQs2nO5E0fHUqJgQATvdd3jZqcZjZaO/preview"
        }
      ],
      ilp: {
        academicGoals: "Promote equity and accessibility in technology design.",
        careerGoals: "Build inclusive products that serve diverse global populations.",
        growthPlan: "Advocate for ethical engineering practices and accessibility standards (WCAG)."
      }
    }
  },
  capstone: {
    title: "ComicSeen: Interactive Digital Comic Platform",
    subtitle: "Senior Capstone Project (In Progress)",
    description: "ComicSeen is an immersive web platform designed for independent comic creators and readers. It features a responsive digital reader with smooth panel-to-panel transitions, community discussion boards, and creator monetization tools. Built with React, Node.js, and MongoDB.",
    status: "Active Development - Final Submission Expected December 2026",
    deliverables: [
      {
        title: "Project Proposal & Architecture Specification",
        summary: "Detailed system design document outlining frontend component hierarchy, REST API endpoints, database schema, and user authorization workflows.",
        url: "https://drive.google.com/file/d/1SampleCapstoneProposal/preview"
      }
    ]
  }
};

export default function App() {
  const [activeTab, setActiveTab] = useState('home'); // 'home', 'capstone', or course code e.g. 'CST 300'
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showDeployModal, setShowDeployModal] = useState(false);
  const [data, setData] = useState(portfolioConfig);
  const [editMode, setEditMode] = useState(false);
  const [toast, setToast] = useState('');

  // Scroll to top on tab change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  const showNotification = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(''), 4000);
  };

  const navigateTo = (tab) => {
    setActiveTab(tab);
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col selection:bg-amber-400 selection:text-slate-900">
      
      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-amber-400 border border-amber-400/40 px-6 py-3 rounded-xl shadow-2xl flex items-center space-x-3 animate-bounce">
          <span className="w-2.5 h-2.5 bg-amber-400 rounded-full animate-ping"></span>
          <span className="font-bold text-xs">{toast}</span>
        </div>
      )}

      {/* HEADER BAR (Matching Weebly CSUMB Reference) */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo / University Branding */}
          <div 
            onClick={() => navigateTo('home')}
            className="cursor-pointer flex items-center space-x-3 group"
          >
            <div className="w-10 h-10  rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}csumb_logo.jpg`}
                alt="Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="text-[10px] tracking-widest uppercase font-bold text-slate-400">California State University</div>
              <div className="text-base sm:text-lg font-black tracking-tight text-slate-900">MONTEREY BAY</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <button
              onClick={() => navigateTo('home')}
              className={`px-4 py-2 rounded-lg text-sm font-bold tracking-wider transition-all ${
                activeTab === 'home'
                  ? 'bg-slate-900 text-amber-400 shadow-md'
                  : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              HOME
            </button>

            {/* MLOs Dropdown Menu */}
            <div 
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`px-4 py-2 rounded-lg text-sm font-bold tracking-wider flex items-center space-x-1 transition-all ${
                  Object.keys(data.courses).includes(activeTab)
                    ? 'bg-slate-900 text-amber-400 shadow-md'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <span>MLOS</span>
                <span className={`text-xs transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}>▼</span>
              </button>

              {dropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white border border-slate-200 shadow-2xl rounded-xl py-2 mt-1 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100">
                    CSUMB CS Online Courses
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {Object.keys(data.courses).map((courseKey) => (
                      <button
                        key={courseKey}
                        onClick={() => navigateTo(courseKey)}
                        className={`w-full text-left px-4 py-2.5 text-xs font-semibold hover:bg-slate-100 flex items-center justify-between group transition-colors ${
                          activeTab === courseKey ? 'bg-amber-50 text-amber-700 font-bold border-l-4 border-amber-500' : 'text-slate-700'
                        }`}
                      >
                        <span>{courseKey} – {data.courses[courseKey].title}</span>
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity text-amber-600 font-bold">&rarr;</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => navigateTo('capstone')}
              className={`px-4 py-2 rounded-lg text-sm font-bold tracking-wider transition-all ${
                activeTab === 'capstone'
                  ? 'bg-slate-900 text-amber-400 shadow-md'
                  : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              CAPSTONE
            </button>
          </nav>

          {/* Quick Actions (Edit Mode & GH-Pages Deployment) */}
          {/* <div className="hidden md:flex items-center space-x-2">
            <button
              onClick={() => setEditMode(!editMode)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                editMode ? 'bg-amber-500 text-slate-900 border-amber-600 shadow-inner' : 'bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200'
              }`}
            >
              {editMode ? 'Editing Enabled ✍️' : 'Quick Edit Mode'}
            </button>
            <button
              onClick={() => setShowDeployModal(true)}
              className="bg-slate-900 text-white hover:bg-slate-800 px-4 py-2 rounded-lg text-xs font-bold shadow-md hover:shadow-lg transition-all flex items-center space-x-2"
            >
              <span>🚀 GH-Pages Guide</span>
            </button>
          </div> */}

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 font-bold"
            >
              {mobileMenuOpen ? '✕ CLOSE' : '☰ MENU'}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2 shadow-2xl">
            <button
              onClick={() => navigateTo('home')}
              className="w-full text-left px-4 py-3 rounded-lg text-sm font-bold text-slate-800 hover:bg-slate-100"
            >
              HOME
            </button>
            <div className="px-4 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">MLOS Courses</div>
            <div className="pl-2 space-y-1 max-h-60 overflow-y-auto">
              {Object.keys(data.courses).map((courseKey) => (
                <button
                  key={courseKey}
                  onClick={() => navigateTo(courseKey)}
                  className="w-full text-left px-4 py-2 rounded-md text-xs font-medium text-slate-700 hover:bg-slate-100"
                >
                  {courseKey} – {data.courses[courseKey].title}
                </button>
              ))}
            </div>
            <button
              onClick={() => navigateTo('capstone')}
              className="w-full text-left px-4 py-3 rounded-lg text-sm font-bold text-slate-800 hover:bg-slate-100"
            >
              CAPSTONE
            </button>
            <div className="pt-3 border-t border-slate-100 flex justify-between">
              <button
                onClick={() => setEditMode(!editMode)}
                className="px-3 py-2 bg-amber-100 text-amber-900 rounded-lg text-xs font-bold"
              >
                {editMode ? 'Editing On' : 'Edit Mode'}
              </button>
              <button
                onClick={() => setShowDeployModal(true)}
                className="px-3 py-2 bg-slate-900 text-white rounded-lg text-xs font-bold"
              >
                Deploy Guide
              </button>
            </div>
          </div>
        )}
      </header>

      {/* MAIN BODY CONTENT */}
      <main className="flex-grow">
        {activeTab === 'home' && (
          <HomePage 
            student={data.student} 
            goals={data.goals}
            courses={data.courses}
            editMode={editMode}
            onUpdateStudent={(updated) => {
              setData({...data, student: updated});
              showNotification("Student profile updated successfully!");
            }}
            onNavigate={navigateTo}
          />
        )}

        {activeTab === 'capstone' && (
          <CapstonePage capstone={data.capstone} />
        )}

        {Object.keys(data.courses).includes(activeTab) && (
          <CourseDetailPage 
            course={data.courses[activeTab]} 
            editMode={editMode}
            onUpdateCourse={(updatedCourse) => {
              setData({
                ...data,
                courses: {
                  ...data.courses,
                  [activeTab]: updatedCourse
                }
              });
              showNotification(`Successfully saved ${activeTab}!`);
            }}
          />
        )}
      </main>

      {/* GITHUB PAGES DEPLOYMENT MODAL */}
      {showDeployModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 bg-slate-900 text-amber-400 rounded-xl font-bold">🐙</div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Deploying to GitHub Pages</h3>
                  <p className="text-xs text-slate-500">Host Mahmoud's portfolio for free on GitHub</p>
                </div>
              </div>
              <button 
                onClick={() => setShowDeployModal(false)}
                className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 font-bold"
              >
                ✕
              </button>
            </div>

            <div className="py-4 space-y-4 text-sm text-slate-700">
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl text-xs text-amber-900 font-medium">
                ✨ This portfolio is built with React and Tailwind CSS. Follow these quick steps to publish it live!
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 flex items-center space-x-2">
                  <span className="w-5 h-5 bg-slate-900 text-white rounded-full flex items-center justify-center text-xs">1</span>
                  <span>Create GitHub Repository</span>
                </h4>
                <p className="text-xs text-slate-600 pl-7">
                  Create a new public repository on GitHub (e.g., <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-slate-800">mahmoud-portfolio</code>) and push your React code.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 flex items-center space-x-2">
                  <span className="w-5 h-5 bg-slate-900 text-white rounded-full flex items-center justify-center text-xs">2</span>
                  <span>Install gh-pages package</span>
                </h4>
                <div className="bg-slate-900 text-slate-200 font-mono text-xs p-3 rounded-xl ml-7">
                  npm install gh-pages --save-dev
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 flex items-center space-x-2">
                  <span className="w-5 h-5 bg-slate-900 text-white rounded-full flex items-center justify-center text-xs">3</span>
                  <span>Add Homepage & Deploy Scripts in package.json</span>
                </h4>
                <div className="bg-slate-900 text-slate-200 font-mono text-xs p-3 rounded-xl ml-7 overflow-x-auto">
                  {`"homepage": "https://<your-username>.github.io/mahmoud-portfolio",\n"scripts": {\n  "predeploy": "npm run build",\n  "deploy": "gh-pages -d build"\n}`}
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 flex items-center space-x-2">
                  <span className="w-5 h-5 bg-slate-900 text-white rounded-full flex items-center justify-center text-xs">4</span>
                  <span>Run Deployment Command</span>
                </h4>
                <div className="bg-slate-900 text-slate-200 font-mono text-xs p-3 rounded-xl ml-7">
                  npm run deploy
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setShowDeployModal(false)}
                className="bg-slate-900 text-white hover:bg-slate-800 px-5 py-2 rounded-xl text-xs font-bold transition-all"
              >
                Got it, thanks!
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-10 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-white font-bold text-sm">Mahmoud Oraby – CSUMB ILP Portfolio</div>
            <div className="text-xs text-slate-500 mt-0.5">California State University, Monterey Bay • College of Science</div>
          </div>
          <div className="flex space-x-4 text-xs font-semibold">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors">LinkedIn</a>
            <a href="mailto:moraby@csumb.edu" className="hover:text-amber-400 transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ==========================================
// HOME PAGE COMPONENT (Matches Reference Images)
// ==========================================
function HomePage({ student, goals, courses, editMode, onUpdateStudent, onNavigate }) {
  const [form, setForm] = useState(student);

  return (
    <div className="space-y-16 pb-20">
      
      {/* Hero Banner (Dark Navy with Yellow Period Accent) */}
      <section className="bg-[#1e2530] text-white py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-[#f5c518] relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-4">
          <span className="px-4 py-1.5 bg-amber-400/10 text-amber-400 border border-amber-400/30 rounded-full text-xs font-bold tracking-widest uppercase">
            CSUMB Individual Learning Plan
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
            Individual Learning Plan <span className="text-[#f5c518]">(ILP)</span> Portfolio<span className="text-[#f5c518]">.</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-light">
            {student.tagline}
          </p>
        </div>
      </section>

      {/* About Section with Photo & Bio */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200/80 p-8 sm:p-12 space-y-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative group flex-shrink-0">
              <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-2xl overflow-hidden shadow-2xl border-4 border-amber-400 bg-slate-100">
                <img 
                  src={`${import.meta.env.BASE_URL}mahmoud.jpg`} 
                  alt={student.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => { e.target.src = "https://placehold.co/400x400/1e293b/fbbf24?text=Mahmoud"; }}
                />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-slate-900 text-amber-400 px-3 py-1 rounded-xl text-xs font-bold shadow-lg">
                CS Online
              </div>
            </div>

            <div className="flex-grow space-y-4 text-center md:text-left">
              <div className="inline-block px-3 py-1 bg-slate-100 rounded-lg text-xs font-bold text-slate-600">
                {student.degree} • {student.university}
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900">{student.name}</h2>
              
              {editMode ? (
                <div className="space-y-3 bg-amber-50 p-4 rounded-xl border border-amber-200 text-left">
                  <label className="text-xs font-bold text-slate-700 block">Edit Bio:</label>
                  <textarea 
                    value={form.bio}
                    onChange={(e) => setForm({...form, bio: e.target.value})}
                    className="w-full p-3 text-xs bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500"
                    rows="4"
                  />
                  <button 
                    onClick={() => onUpdateStudent(form)}
                    className="px-4 py-2 bg-slate-900 text-amber-400 rounded-lg text-xs font-bold hover:bg-slate-800"
                  >
                    Save Changes 💾
                  </button>
                </div>
              ) : (
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {student.bio}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Inspirational Quote Block (Matching Reference Image) */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="bg-slate-100 border-l-8 border-slate-900 rounded-2xl p-8 sm:p-10 shadow-sm relative">
          <div className="text-6xl text-slate-300 font-serif absolute top-2 left-4 select-none pointer-events-none">“</div>
          <p className="text-slate-700 italic text-base sm:text-lg leading-relaxed relative z-15 pl-6 font-serif">
            {student.quote}
          </p>
        </div>
      </section>

      {/* Program Description & Goals */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200 space-y-4">
          <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-700 font-bold text-xl">
            🎓
          </div>
          <h3 className="text-xl font-black text-slate-900">Program Description</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            The CSUMB Computer Science Online B.S. program emphasizes project-based learning and prepares students for real-world software engineering, full-stack development, and cybersecurity challenges. Students engage in hands-on projects across diverse areas of computer science while developing communication, teamwork, and ethical reasoning skills.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200 space-y-4">
          <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-amber-400 font-bold text-xl">
            🎯
          </div>
          <h3 className="text-xl font-black text-slate-900">My Goals & Growth Plan</h3>
          <ul className="space-y-3 text-sm text-slate-600">
            <li className="flex items-start space-x-2">
              <span className="text-emerald-600 font-bold">✔</span>
              <span><strong>Academic Goal:</strong> {goals.academic}</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-emerald-600 font-bold">✔</span>
              <span><strong>Career Goal:</strong> {goals.career}</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-emerald-600 font-bold">✔</span>
              <span><strong>Growth Plan:</strong> {goals.growth}</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Quick Course Directory Grid */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <h3 className="text-2xl font-black text-slate-900">Explore Course MLOS</h3>
          <p className="text-xs text-slate-500">Click any course below to view course details, Google Drive PDFs, and YouTube media.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {Object.keys(courses).map((courseKey) => {
            const course = courses[courseKey];
            return (
              <div 
                key={courseKey}
                onClick={() => onNavigate(courseKey)}
                className="bg-white p-6 rounded-2xl shadow-md border border-slate-200 hover:border-amber-400 hover:shadow-xl transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-slate-900 text-amber-400 rounded-lg text-xs font-bold">{course.code}</span>
                    <span className="text-slate-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-all">&rarr;</span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-base mb-2 group-hover:text-amber-700 transition-colors">{course.title}</h4>
                  <p className="text-xs text-slate-500 line-clamp-3">{course.description}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-medium">
                  <span>{course.samples.length} Work Samples</span>
                  <span className="text-amber-600 font-bold group-hover:underline">View Course &rarr;</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

// ==========================================
// COURSE DETAIL PAGE COMPONENT (Matches Reference Images)
// ==========================================
function CourseDetailPage({ course, editMode, onUpdateCourse }) {
  const [courseData, setCourseData] = useState(course);

  useEffect(() => {
    setCourseData(course);
  }, [course]);

  const handleFieldChange = (field, val) => {
    const updated = { ...courseData, [field]: val };
    setCourseData(updated);
    onUpdateCourse(updated);
  };

  const handleSampleChange = (index, field, val) => {
    const newSamples = [...courseData.samples];
    newSamples[index][field] = val;
    const updated = { ...courseData, samples: newSamples };
    setCourseData(updated);
    onUpdateCourse(updated);
  };

  return (
    <div className="space-y-16 pb-20">
      
      {/* Course Banner */}
      <section className="bg-[#1e2530] text-white py-20 px-4 sm:px-6 lg:px-8 border-b-4 border-[#f5c518]">
        <div className="max-w-5xl mx-auto space-y-3">
          <span className="px-3 py-1 bg-amber-400/20 text-amber-400 rounded-full text-xs font-bold tracking-wider uppercase">
            {courseData.code} MLO Course Portfolio
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            {courseData.code}: {courseData.title}
          </h1>
        </div>
      </section>

      {/* Course Description Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 sm:p-10 space-y-6">
          <h2 className="text-2xl font-black text-slate-900 border-b border-slate-100 pb-4">Course Description</h2>
          
          {editMode ? (
            <textarea
              value={courseData.description}
              onChange={(e) => handleFieldChange('description', e.target.value)}
              className="w-full p-4 text-sm bg-amber-50 border border-amber-300 rounded-xl focus:ring-2 focus:ring-amber-500"
              rows="4"
            />
          ) : (
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              {courseData.description}
            </p>
          )}
        </div>
      </section>

      {/* Work Samples Section (Google Drive PDFs & YouTube Videos) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <h2 className="text-2xl font-black text-slate-900">Work Samples</h2>
          <span className="text-xs font-semibold px-3 py-1 bg-slate-100 text-slate-600 rounded-full">
            {courseData.samples.length} Attached Documents & Videos
          </span>
        </div>

        <div className="space-y-12">
          {courseData.samples.map((sample, idx) => (
            <div key={idx} className="bg-white rounded-3xl shadow-xl border border-slate-200 p-6 sm:p-8 space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-3 rounded-2xl ${sample.type === 'pdf' ? 'bg-red-50 text-red-600' : 'bg-amber-50 text-amber-600'} font-bold`}>
                    {sample.type === 'pdf' ? '📄' : '🎥'}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Sample #{idx + 1} ({sample.type.toUpperCase()})</span>
                    {editMode ? (
                      <input 
                        type="text"
                        value={sample.title}
                        onChange={(e) => handleSampleChange(idx, 'title', e.target.value)}
                        className="text-lg font-bold text-slate-900 bg-amber-50 border border-amber-300 rounded px-2 py-1 w-full mt-1"
                      />
                    ) : (
                      <h3 className="text-lg font-bold text-slate-900">{sample.title}</h3>
                    )}
                  </div>
                </div>

                <a 
                  href={sample.url} 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold flex items-center space-x-2 transition-colors self-start sm:self-auto"
                >
                  <span>Open Raw Link ↗</span>
                </a>
              </div>

              {editMode ? (
                <div>
                  <label className="text-xs font-bold text-slate-600 block mb-1">Edit Summary:</label>
                  <textarea 
                    value={sample.summary}
                    onChange={(e) => handleSampleChange(idx, 'summary', e.target.value)}
                    className="w-full p-3 text-xs bg-amber-50 border border-amber-300 rounded-lg"
                    rows="3"
                  />
                </div>
              ) : (
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {sample.summary}
                </p>
              )}

              {/* Embedded Viewer (Google Drive PDF iframe or YouTube Player) */}
              
              <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-inner border border-slate-800 p-2">
                <div className="text-[11px] text-slate-400 px-3 py-1 flex items-center justify-between">
                  <span>
                    Embedded{" "}
                    {sample.type === "pdf"
                      ? "Google Drive PDF Document"
                      : "YouTube Video Player"}
                  </span>

                  <span className="text-amber-400 font-mono text-[10px]">
                    Live Preview
                  </span>
                </div>

                <div
                  className={`w-full bg-slate-950 rounded-xl overflow-hidden relative ${
                    sample.type === "pdf" ? "h-[600px]" : "aspect-video"
                  }`}
                >
                  {sample.type === "pdf" ? (
                    <iframe
                      src={sample.url
                        .replace(/\/view(\?.*)?$/, "/preview")
                        .replace(/\/edit(\?.*)?$/, "/preview")}
                      title={sample.title}
                      className="w-full h-full border-0 rounded-lg"
                      allow="autoplay"
                      loading="lazy"
                    />
                  ) : (
                    <iframe
                      src={sample.url}
                      title={sample.title}
                      className="w-full h-full border-0 rounded-lg"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    />
                  )}
                </div>

                {sample.type === "pdf" && (
                  <div className="flex justify-end px-3 py-2">
                    <a
                      href={sample.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-400 hover:text-amber-300 text-xs font-semibold transition-colors"
                    >
                      Open PDF in a new tab ↗
                    </a>
                  </div>
                )}
              </div>


              {editMode && (
                <div className="p-3 bg-amber-50 rounded-xl border border-amber-200">
                  <label className="text-xs font-bold text-slate-700 block mb-1">Edit Google Drive / YouTube URL:</label>
                  <input 
                    type="text"
                    value={sample.url}
                    onChange={(e) => handleSampleChange(idx, 'url', e.target.value)}
                    className="w-full p-2 text-xs bg-white border border-slate-300 rounded-lg font-mono"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Individual Learning Plan (ILP) Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 sm:p-10 space-y-6">
          <div className="flex items-center space-x-3 border-b border-slate-100 pb-4">
            <div className="p-3 bg-slate-900 text-amber-400 rounded-2xl font-bold">🎯</div>
            <div>
              <h2 className="text-2xl font-black text-slate-900">Individual Learning Plan (ILP)</h2>
              <p className="text-xs text-slate-500">Course Reflection & Future Objectives</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-700">Academic Goals</h4>
              <p className="text-sm text-slate-700">{courseData.ilp.academicGoals}</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-700">Career Goals</h4>
              <p className="text-sm text-slate-700">{courseData.ilp.careerGoals}</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-700">Growth Plan</h4>
              <p className="text-sm text-slate-700">{courseData.ilp.growthPlan}</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

// ==========================================
// CAPSTONE PAGE COMPONENT
// ==========================================
function CapstonePage({ capstone }) {
  return (
    <div className="space-y-16 pb-20">
      <section className="bg-[#1e2530] text-white py-20 px-4 sm:px-6 lg:px-8 border-b-4 border-[#f5c518]">
        <div className="max-w-5xl mx-auto space-y-3">
          <span className="px-3 py-1 bg-amber-400/20 text-amber-400 rounded-full text-xs font-bold tracking-wider uppercase">
            Senior Capstone Project
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            {capstone.title}
          </h1>
          <p className="text-slate-300 text-sm">{capstone.subtitle}</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 sm:p-10 space-y-6">
          <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold">
            {capstone.status}
          </div>
          <h2 className="text-2xl font-black text-slate-900">Project Overview</h2>
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
            {capstone.description}
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h2 className="text-2xl font-black text-slate-900">Capstone Deliverables</h2>
        {capstone.deliverables.map((item, idx) => (
          <div key={idx} className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 space-y-4">
            <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
            <p className="text-slate-600 text-sm">{item.summary}</p>
            <a 
              href={item.url} 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 bg-slate-900 text-amber-400 rounded-xl text-xs font-bold hover:bg-slate-800"
            >
              <span>View Document ↗</span>
            </a>
          </div>
        ))}
      </section>
    </div>
  );
}