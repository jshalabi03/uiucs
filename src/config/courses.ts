
export interface Course {
  subjectCode: string;
  courseNumber: number;
  title: string;
  description: string;
  creditHoursStr: string;
  instructors: Array<string>;
  difficulty: number;
  reviews: number;
  avgGPA: number;
  Rating: number;
}

export const courses: Array<Course> = [
{
"subjectCode": "CS",
"courseNumber": 100,
"title": "Computer Science Orientation",
"description": "Introduction to Computer Science as a field and career for incoming first year and external transfer students in the computer science majors. Overview of the field and specific examples of problem areas and methods of solution.",
"creditHoursStr": "1 hours",
"instructors": [
"Fleck, M",
"Gunter, E",
"Pitt, L"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 101,
"title": "Intro Computing: Engrg &amp; Sci",
"description": "Fundamental principles, concepts, and methods of computing, with emphasis on applications in the physical sciences and engineering. Basic problem solving and programming techniques; fundamental algorithms and data structures; use of computers in solving engineering and scientific problems. Intended for engineering and science majors. Prerequisite: One of MATH 220 or MATH 221 or MATH 231 or MATH 241.",
"creditHoursStr": "3 hours",
"instructors": [
"Agrawal, P",
"Aich, R",
"Asthana, P",
"Beckman, M",
"Chen, J",
"Chu, G",
"Davis, N",
"Du, X",
"Isaac, I",
"Jain, B",
"Kanjalkar, S",
"Kwan, R",
"Lin, S",
"Lunt, B",
"Meyers, S",
"Mukherjee, D",
"Osei-Owusu, J",
"Patel, A",
"Sharma, K",
"Tahboub, R",
"Xie, T",
"Yoder, C",
"Zhu, C"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 102,
"title": "Little Bits to Big Ideas",
"description": "Same as INFO 102. See INFO 102.",
"creditHoursStr": "4 hours",
"instructors": [
"Agarwal, R",
"Agarwala, D",
"Amanzadeh, M",
"Chen, S",
"Cunningham, R",
"Hopping, D",
"Hou, H",
"Jiang, M",
"Kadimisetty, A",
"Kashinath, A",
"Khurana, S",
"Koiliaris, K",
"Liu, Y",
"Markazi, D",
"Mathew, R",
"Padua, D",
"Sandur, A",
"Teng, D",
"Tsai, P",
"Wedell, E",
"Xiao, J"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 105,
"title": "Intro Computing: Non-Tech",
"description": "Computing as an essential tool of academic and professional activities. Functions and interrelationships of computer system components: hardware, systems and applications software, and networks. Widely used application packages such as spreadsheets and databases. Concepts and practice of programming for the solution of simple problems in different application areas. Intended for non-science and non-engineering majors. Prerequisite: MATH 112.",
"creditHoursStr": "3 hours",
"instructors": [
"Chen, B",
"Dadu, A",
"Emeka, C",
"Fowler, M",
"Goyal, A",
"Guha, S",
"Haberman, M",
"Harris, A",
"Hellwig, M",
"Isenegger, K",
"Iyer, V",
"Kaempen, K",
"Krishnan, V",
"Kumar, A",
"Lewis, C",
"Ling, F",
"Liu, A",
"Schoening, M",
"Smith, D",
"Wauck, H",
"Xu, D",
"Xu, R",
"Yen, C",
"Zhou, A",
"Zilles, C"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 107,
"title": "Data Science Discovery",
"description": "Same as IS 107 and STAT 107. See STAT 107.",
"creditHoursStr": "4 hours",
"instructors": [
"Adhikari, A",
"Bazargani, S",
"Bhanushali, U",
"Bygari, R",
"Chakravarti, A",
"Das, T",
"Fagen-Ulmschneider, W",
"Flanagan, K",
"Gao, H",
"Kim, B",
"Kiv, D",
"Nguyen, H",
"Ojha, A",
"Qu, T",
"Sheng, P",
"Tang, T",
"Tonks, A",
"Tsiamalos, E",
"Wang, M",
"Xing, Y",
"Yang, Z",
"Yigit, H",
"Zhang, Z",
"Zhou, W"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 124,
"title": "Introduction to Computer Science I",
"description": "Basic concepts in computing and fundamental techniques for solving computational problems. Intended as a first course for computer science majors and others with a deep interest in computing. Credit is not given for both CS 124 and CS 125. Prerequisite: Three years of high school mathematics or MATH 112.",
"creditHoursStr": "3 hours",
"instructors": [
"Challen, G",
"Lewis, C"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 125,
"title": "Intro to Computer Science",
"description": "Basic concepts in computing and fundamental techniques for solving computational problems. Intended as a first course for computer science majors and others with a deep interest in computing. Prerequisite: Three years of high school mathematics or MATH 112.",
"creditHoursStr": "4 hours",
"instructors": [
"Angrave, L",
"Challen, G",
"Chapman, W",
"Dey, J",
"Do, H",
"Gao, M",
"Huynh, H",
"Krishna Kumaran, S",
"Seo, S",
"Tang, Z",
"Zhang, B"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 126,
"title": "Software Design Studio",
"description": "Fundamental principles and techniques of software development. Design, documentation, testing, and debugging software, with a significant emphasis on code review. Credit is not given for both CS 242 and CS 126. Prerequisite: CS 125. For majors only.",
"creditHoursStr": "3 hours",
"instructors": [
"Angrave, L",
"Evans, G",
"Woodley, M",
"Zilles, C"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 128,
"title": "Introduction to Computer Science II",
"description": "Continuation of CS 124. More advanced concepts in computing and techniques and approaches for solving computational problems. Prerequisite: CS 124 or CS 125.",
"creditHoursStr": "3 hours",
"instructors": [
"Nowak, M"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 173,
"title": "Discrete Structures",
"description": "Discrete mathematical structures frequently encountered in the study of Computer Science. Sets, propositions, Boolean algebra, induction, recursion, relations, functions, and graphs. Credit is not given for both CS 173 and MATH 213. Prerequisite: One of CS 124, CS 125, ECE 220; one of MATH 220, MATH 221.",
"creditHoursStr": "3 hours",
"instructors": [
"Agha, G",
"Balepur, N",
"Cosman, B",
"Cunningham, R",
"Delgosha, P",
"Ding, H",
"Evans, G",
"Fleck, M",
"Gertner, Y",
"Lin, P",
"Liu, Y",
"Meseguer, J",
"Morabia, K",
"Murhekar, A",
"Parthasarathy, M",
"Poulsen, S",
"Shah, D",
"Shi, W",
"Singhal, S",
"Skeirik, S",
"Varodayan, D",
"Viswanathan, M",
"Warnow, T",
"Yu, Y",
"Zhang, P",
"Zhang, W",
"Zhou, Q"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 196,
"title": "Freshman Honors",
"description": "Offered for honors credit in conjunction with other 100-level computer science courses taken concurrently. A special examination may be required for admission to this course. May be repeated. Prerequisite: Concurrent registration in another 100-level computer science course (see Schedule).",
"creditHoursStr": "1 hours",
"instructors": [
"Challen, G",
"Chapman, W",
"Cosman, B",
"Fleck, M",
"Lin, P",
"Parthasarathy, M",
"Viswanathan, M",
"Warnow, T"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 199,
"title": "Undergraduate Open Seminar in Computer Science",
"description": "Topics vary. Approved for Letter and S/U grading. May be repeated.",
"creditHoursStr": "0 TO 5 hours",
"instructors": [
"Amato, N",
"Angrave, L",
"Asplund, J",
"Beckman, M",
"Brunner, R",
"Challen, G",
"Chapman, W",
"Choi, H",
"Cosman, B",
"Davis, N",
"Evans, C",
"Fagen-Ulmschneider, W",
"Fowler, M",
"Francis, G",
"Heeren, C",
"Herman, G",
"Kumar, R",
"Lewis, C",
"Nowak, M",
"Olson, L",
"Parthasarathy, M",
"Pitt, L",
"Shaffer, E",
"Silva, M",
"Solomon, B",
"Viswanathan, M"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 210,
"title": "Ethical &amp; Professional Issues",
"description": "Ethics for the computing profession. Ethical decision-making; licensing; intellectual property, freedom of information, and privacy. Credit is not given for both CS 210 and either CS 211 or ECE 316. Prerequisite: CS 225. Junior standing required.",
"creditHoursStr": "2 hours",
"instructors": [
"Agarwala, D",
"Asplund, J",
"Bullock, B",
"Cunningham, R",
"Ojha, V",
"Winter, G"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 211,
"title": "Ethical and Professional Conduct",
"description": "Navigating the complex ethical and professional landscape of the computing professional: privacy, intellectual property, cybersecurity, and freedom of speech. Hands-on exercises, assignments, and discussions in which students analyze current events from perspectives in both philosophical and professional ethics. Writing professionally and technically in several writing assignments requiring peer review, workshops, and multiple rounds of editing and revising. Credit is not given for both CS 211 and CS 210 or ECE 316. Prerequisite: CS 225.",
"creditHoursStr": "3 hours",
"instructors": [
"Cunningham, R",
"Winter, G"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 222,
"title": "Software Design Lab",
"description": "Design and implementation of novel software solutions. Problem identification and definition; idea generation and evaluation; and software implementation, testing, and deployment. Emphasizes software development best practices\u2014including framework selection, code review, documentation, appropriate library usage, project management, continuous integration and testing, and teamwork. Prerequisite: CS 128; credit or concurrent registration in CS 225. Restricted to majors in Computer Science undergraduate curricula only.",
"creditHoursStr": "1 hours",
"instructors": [
"Woodley, M"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 225,
"title": "Data Structures",
"description": "Data abstractions: elementary data structures (lists, stacks, queues, and trees) and their implementation using an object-oriented programming language. Solutions to a variety of computational problems such as search on graphs and trees. Elementary analysis of algorithms. Credit is not given for CS 277 if credit for CS 225 has been earned. Prerequisite: CS 126 or CS 128 or ECE 220; One of CS 173, CS 413, MATH 213, MATH 347, MATH 412, or MATH 413.",
"creditHoursStr": "4 hours",
"instructors": [
"Adhikari, R",
"Assefa, N",
"Athani, A",
"Azam, R",
"Bai, S",
"Basu, S",
"Beckman, A",
"Beckman, M",
"Bhagat, A",
"Chang, L",
"Chhabra, R",
"Cole, P",
"Evans, C",
"Evans, G",
"Fagen-Ulmschneider, W",
"Ge, Y",
"Heeren, C",
"Jiang, J",
"Kindratenko, V",
"Li, Y",
"Rajgopal, -",
"Roddur, M",
"Rodriguez, S",
"Saboo, Y",
"Shaffer, E",
"Solomon, B",
"Tong, X",
"Wu, H",
"Yershova, G",
"Zhang, Z",
"Zilles, C",
"Zyrianov, V"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 233,
"title": "Computer Architecture",
"description": "Fundamentals of computer architecture: digital logic design, working up from the logic gate level to understand the function of a simple computer; machine-level programming to understand implementation of high-level languages; performance models of modern computer architectures to enable performance optimization of software; hardware primitives for parallelism and security. Prerequisite: CS 125 or CS 128; CS 173 or MATH 213; credit or concurrent enrollment in CS 225.",
"creditHoursStr": "4 hours",
"instructors": [
"Arun, A",
"Cao, E",
"Fong, M",
"Ghose, S",
"Hazlett, C",
"Herman, G",
"Lowder, C",
"Mahmood, M",
"Mahmood, S",
"Shen, R",
"Tran, H",
"Tu, B",
"Wang, S",
"Zilles, C"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 240,
"title": "Introduction to Computer Systems",
"description": "Basics of computer systems. Number representations, assembly/machine language, abstract models of processors (fetch/execute, memory hierarchy), processes/process control, simple memory management, file I/O and directories, network programming, usage of cloud services. Prerequisite: CS 225.",
"creditHoursStr": "3 hours",
"instructors": [
"Fagen-Ulmschneider, W",
"Viswanathan, M"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 241,
"title": "System Programming",
"description": "Basics of system programming, including POSIX processes, process control, inter-process communication, synchronization, signals, simple memory management, file I/O and directories, shell programming, socket network programming, RPC programming in distributed systems, basic security mechanisms, and standard tools for systems programming such as debugging tools. Credit is not given for both CS 241 and ECE 391. Prerequisite: CS 225 and CS 233.",
"creditHoursStr": "4 hours",
"instructors": [
"Angrave, L",
"Bhasin, R",
"Cheng, K",
"Ding, H",
"Evans, G",
"Foster, C",
"Green, A",
"Hu, V",
"Kandikuppa, A",
"Love, I",
"Mbarki, O",
"Meherwal, R",
"Michael, N",
"Sankaran, A",
"Tian, B",
"Zhao, B"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 242,
"title": "Programming Studio",
"description": "Intensive programming lab intended to strengthen skills in programming. Prerequisite: CS 241.",
"creditHoursStr": "3 hours",
"instructors": [
"Woodley, M"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 277,
"title": "Algorithms and Data Structures for Data Science",
"description": "Introduction to elementary concepts in algorithms and classical data structures with a focus on their applications in Data Science. Topics include algorithm analysis (ex: Big-O notation), elementary data structures (ex: lists, stacks, queues, trees, and graphs), basics of discrete algorithm design principles (ex: greedy, divide and conquer, dynamic programming), and discussion of discrete and continuous optimization. Credit is not given for CS 277 if credit for CS 225 is earned. Prerequisite: STAT 207; one of MATH 220, MATH 221, MATH 234. CS 277 cannot be taken concurrently with CS 225.",
"creditHoursStr": "4 hours",
"instructors": [
"Solomon, B"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 296,
"title": "Honors Course",
"description": "Group projects for honors credit in computer science. Sections of this course are offered in conjunction with other 200-level computer science courses taken concurrently. A special examination may be required for admission to this course. May be repeated. Prerequisite: Concurrent registration in another 200-level computer science course (see Schedule).",
"creditHoursStr": "1 hours",
"instructors": [
"Angrave, L",
"Beckman, A",
"Beckman, M",
"Cosman, B",
"Evans, G",
"Fagen-Ulmschneider, W",
"Ghose, S",
"Heeren, C",
"Herman, G",
"Jiang, J",
"Lin, P",
"Padua, D",
"Shaffer, E",
"Solomon, B",
"Viswanathan, M",
"Zilles, C"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 307,
"title": "Modeling and Learning in Data Science",
"description": "Introduction to the use of classical approaches in data modeling and machine learning in the context of solving data-centric problems. A broad coverage of fundamental models is presented, including linear models, unsupervised learning, supervised learning, and deep learning. A significant emphasis is placed on the application of the models in Python and the interpretability of the results. Prerequisite: STAT 207; one of MATH 225, MATH 257, MATH 415, MATH 416, ASRM 406.",
"creditHoursStr": "4 hours",
"instructors": [
"Li, B",
"Viswanathan, M"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 340,
"title": "Introduction to Computer Systems",
"description": "Basics of computer systems. Number representations, assembly/machine language, abstract models of processors (fetch/execute, memory hierarchy), processes/process control, simple memory management, file I/O and directories, network programming, usage of cloud services. Credit is not given for both CS 340 and CS 240. Prerequisite: CS 225.",
"creditHoursStr": "3 hours",
"instructors": [
"Fagen-Ulmschneider, W"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 341,
"title": "System Programming",
"description": "Basics of system programming, including POSIX processes, process control, inter-process communication, synchronization, signals, simple memory management, file I/O and directories, shell programming, socket network programming, RPC programming in distributed systems, basic security mechanisms, and standard tools for systems programming such as debugging tools. Credit is not given for both CS 341 and either CS 241 or ECE 391. Prerequisite: CS 225 and CS 233.",
"creditHoursStr": "4 hours",
"instructors": [
"Angrave, L"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 357,
"title": "Numerical Methods I",
"description": "Fundamentals of numerical methods for students in science and engineering; floating-point computation, systems of linear equations, approximation of functions and integrals, the single nonlinear equation, and the numerical solution of ordinary differential equations; various applications in science and engineering; programming exercises and use of high quality mathematical library routines. Same as MATH 357. Credit is not given towards graduation for CS 357 if credit for CS 450 has been earned. (Counts for advanced hours in LAS). Prerequisite: One of CS 101, CS 105, CS 124, CS 125 or ECE 220; MATH 241; one of MATH 225, MATH 257, MATH 415, MATH 416, ASRM 406 or BIOE 210.",
"creditHoursStr": "3 hours",
"instructors": [
"Carrier, E",
"Kloeckner, A",
"Olson, L",
"Silva, M",
"Sohn, M",
"Solomonik, E",
"West, M"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 361,
"title": "Probability &amp; Statistics for Computer Science",
"description": "Introduction to probability theory and statistics with applications to computer science. Topics include: visualizing datasets, summarizing data, basic descriptive statistics, conditional probability, independence, Bayes theorem, random variables, joint and conditional distributions, expectation, variance and covariance, central limit theorem. Markov inequality, Chebyshev inequality, law of large numbers, Markov chains, simulation, the PageRank algorithm, populations and sampling, sample mean, standard error, maximum likelihood estimation, Bayes estimation, hypothesis testing, confidence intervals, linear regression, principal component analysis, classification, and decision trees. Same as STAT 361. Credit is not given for both CS 361 and ECE 313. Prerequisite: MATH 220 or MATH 221; credit or concurrent registration in one of MATH 225, MATH 257, MATH 415, MATH 416 or ASRM 406. For majors only.",
"creditHoursStr": "3 hours",
"instructors": [
"Barber, R",
"Chen, J",
"Deng, Y",
"Jiang, E",
"Karan, A",
"Krishna Kumaran, S",
"Li, W",
"Liu, H",
"Pattanaik, A",
"Peng, J",
"Saleh, E",
"Sinha, S",
"Varodayan, D",
"Wang, Y",
"Xu, W"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 374,
"title": "Introduction to Algorithms &amp; Models of Computation",
"description": "Analysis of algorithms, major paradigms of algorithm design including recursive algorithms, divide-and-conquer algorithms, dynamic programming, greedy algorithms, and graph algorithms. Formal models of computation including finite automata and Turing machines. Limitations of computation arising from fundamental notions of algorithm and from complexity-theoretic constraints. Reductions, undecidability and NP-completeness. Same as ECE 374. Prerequisite: One of CS 173, MATH 213; CS 225.",
"creditHoursStr": "4 hours",
"instructors": [
"Al-Hassanieh, H",
"Bajpai, T",
"Beideman, C",
"Boodaghians, S",
"Borisov, N",
"Chan, T",
"Chekuri, C",
"Cinkoske, M",
"Erickson, J",
"Feltes, P",
"Har-Peled, S",
"Huang, J",
"Kani, N",
"Khan, M",
"Khurana, D",
"Kolla, A",
"Kulkarni, P",
"Kulkarni, R",
"Kulkarni, S",
"Lim, J",
"Lin, P",
"Livanos, V",
"Lu, Y",
"Mehta, R",
"Miller, A",
"Robson, E",
"Shankar Narayanan, A",
"Shen, Z",
"Sie, E",
"Sun, I",
"Sun, M",
"Viswanathan, M",
"Yu, C",
"Zhou, T",
"Zhou, Z",
"Zhu, Z",
"Zuo, S"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 400,
"title": "Accelerated Fundamentals of Computing I",
"description": "The first class in a sequence of two classes that introduces students to the basic concepts in computing with an emphasis on the fundamental techniques for solving computational problems. Topics include: core programming concepts (variables, data types, conditional expressions, loops, functions), basic data structures, searching and sorting algorithms, and data exploration and visualization. No prior programming experience is required. No undergraduate credit. 3 graduate hours. Prerequisite: Current enrollment in the Illinois Computing Accelerator for Non-specialists (iCAN) program or consent of instructor. Restricted to post-baccalaureate students with a non-computing background.",
"creditHoursStr": "3 hours",
"instructors": [
"Williams, T"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 401,
"title": "Accelerated Fundamentals of Algorithms I",
"description": "The first class in a sequence of two classes that introduces students to the theoretical foundations of computer science. Topics include counting, sets, functions, decision trees, recursion, binary numbers, basic graph theory, depth first search and breadth first search, algorithms for computing shortest paths, data structures like stacks and queues, big O notation and asymptotic analysis, complexity classes like P and NP, and reductions. No undergraduate credit. 3 graduate hours. Prerequisite: Current enrollment in the Illinois Computing Accelerator for Non-specialists (iCAN) program or consent of instructor. Restricted to post- baccalaureate students with a non-computing background.",
"creditHoursStr": "3 hours",
"instructors": [
"Gertner, Y"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 402,
"title": "Accelerated Fundamentals of Computing II",
"description": "Provides an accelerated introduction to class-based program design and the design of abstractions that support the design of reusable software and libraries. It reviews typical object-oriented concepts such as information hiding, encapsulation, polymorphism, inheritance, composition, and common design patterns. The course will also covers exception handling, database programming, and concurrent programming. No undergraduate credit. 3 graduate hours. Prerequisite: CS 400 or consent of instructor. Current enrollment in the Illinois Computing Accelerator for Non-specialists (iCAN) program or consent of instructor. Restricted to post-baccalaureate students with a non-computing background.",
"creditHoursStr": "3 hours",
"instructors": [
"Williams, T"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 403,
"title": "Accelerated Fundamentals of Algorithms II",
"description": "The second class in a sequence of two classes that introduces students to the theoretical foundations of computer science. Topics include major paradigms of algorithm design divide and conquer, greedy, recursive, and dynamic programming; solving recurrences and analysis of divide and conquer algorithms; graph algorithms; formal models of computations like finite state automata and Turing machines; reductions. No undergraduate credit. 3 graduate hours. Prerequisite: CS 401 or consent of instructor. Current enrollment in the Illinois Computing Accelerator for Non-specialists (iCAN) program or consent of instructor. Restricted to post-baccalaureate students with a non-computing background.",
"creditHoursStr": "3 hours",
"instructors": [
"Gertner, Y"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 407,
"title": "Cryptography",
"description": "Same as ECE 407. See ECE 407.",
"creditHoursStr": "3 OR 4 hours",
"instructors": [
"Khurana, D"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 409,
"title": "The Art of Web Programming",
"description": "Client- and server-side technologies that enable modern Web applications. Topics include the building blocks of the Web (browsers, HTML, CSS, JavaScript) and data exchange (HTTP, AJAX, JSON, REST). Assignments expose students to full-stack web development, and JavaScript frameworks that scaffold MVC architectures and event-driven, asynchronous programming. The course culminates in a final project, where students work in teams to design and develop an original, database-backed web application. 3 undergraduate hours. 3 or 4 graduate hours. Prerequisite: CS 225.",
"creditHoursStr": "3 OR 4 hours",
"instructors": [
"Kumar, R"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 410,
"title": "Text Information Systems",
"description": "Theory, design, and implementation of text-based information systems. Text analysis, retrieval models (e.g., Boolean, vector space, probabilistic), text categorization, text filtering, clustering, retrieval system design and implementation, and applications to web information management. 3 undergraduate hours. 3 or 4 graduate hours. Prerequisite: CS 225.",
"creditHoursStr": "3 OR 4 hours",
"instructors": [
"Zhai, C"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 411,
"title": "Database Systems",
"description": "Examination of the logical organization of databases: the entity-relationship model; the hierarchical, network, and relational data models and their languages. Functional dependencies and normal forms. Design, implementation, and optimization of query languages; security and integrity; concurrency control, and distributed database systems. 3 undergraduate hours. 3 or 4 graduate hours. Prerequisite: CS 225.",
"creditHoursStr": "3 OR 4 hours",
"instructors": [
"Adhikari, A",
"Alawini, A",
"Chang, K",
"Ge, V",
"Huang, S",
"Parameswaran, A",
"Park, Y"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 412,
"title": "Introduction to Data Mining",
"description": "Concepts, techniques, and systems of data warehousing and data mining. Design and implementation of data warehouse and on-line analytical processing (OLAP) systems; data mining concepts, methods, systems, implementations, and applications. 3 undergraduate hours. 3 or 4 graduate hours. Prerequisite: CS 225.",
"creditHoursStr": "3 OR 4 hours",
"instructors": [
"Banerjee, A",
"Chang, K",
"Dev, H",
"Gui, H",
"Han, J",
"Li, Q",
"Narang, K",
"Norick, B",
"Sinha, S",
"Sundaram, H",
"Tong, H",
"Yang, J",
"Zhuang, H"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 413,
"title": "Intro to Combinatorics",
"description": "Same as MATH 413. See MATH 413.",
"creditHoursStr": "3 OR 4 hours",
"instructors": [
"English, S",
"Ford, K",
"Li, X",
"St Dizier, A",
"Yong, A"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 415,
"title": "Game Development",
"description": "A team and project-based course on the technical aspects of video game development and game engine internals: geometric modeling, game physics and AI, shader programming, real-time physically based rendering, and software engineering practices within the game industry. The central focus of the course is the development of a game by teams of 3 to 5 students. The course strongly emphasizes code development using a modern game engine. Students will gain skills necessary to develop games and to develop game engines. 3 undergraduate hours. 4 graduate hours. Prerequisite: CS 225.",
"creditHoursStr": "3 OR 4 hours",
"instructors": [
"Shaffer, E",
"Tychonievich, L"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 418,
"title": "Interactive Computer Graphics",
"description": "Basic mathematical tools and computational techniques for modeling, rendering, and animating 3-D scenes. Same as CSE 427. 3 undergraduate hours. 3 or 4 graduate hours. Prerequisite: CS 225; One of MATH 225, MATH 257, MATH 415, MATH 416, ASRM 406, or BIOE 210; MATH 241.",
"creditHoursStr": "3 OR 4 hours",
"instructors": [
"Hart, J",
"Pietrowicz, M",
"Shaffer, E",
"Tychonievich, L"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 419,
"title": "Production Computer Graphics",
"description": "Advanced methods for representing, displaying, and rendering two-, three-, and four-dimensional scenes. General algebraic curves and surfaces, splines, Gaussian and bump-function representation, fractals, particle systems, constructive solid geometry methods, lighting models, radiosity, advanced ray-tracing methods, surface texturing animation techniques, data visualization methods. 3 undergraduate hours. 3 or 4 graduate hours. Prerequisite: CS 418.",
"creditHoursStr": "3 OR 4 hours",
"instructors": [
"Shaffer, E"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 420,
"title": "Parallel Progrmg: Sci &amp; Engrg",
"description": "Fundamental issues in design and development of parallel programs for various types of parallel computers. Various programming models according to both machine type and application area. Cost models, debugging, and performance evaluation of parallel programs with actual application examples. Same as CSE 402 and ECE 492. 3 undergraduate hours. 3 or 4 graduate hours. Prerequisite: CS 225.",
"creditHoursStr": "3 OR 4 hours",
"instructors": [
"Kanakagiri, R",
"Padua, D",
"Snir, M"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 421,
"title": "Programming Languages &amp; Compilers",
"description": "Structure of programming languages and their implementation. Basic language design principles; abstract data types; functional languages; type systems; object-oriented languages. Basics of lexing, parsing, syntax-directed translation, semantic analysis, and code generation. 3 undergraduate hours. 3 or 4 graduate hours. Prerequisite: One of CS 233, CS 240 or CS 340; CS 374 or ECE 374; one of MATH 225, MATH 257, MATH 415, MATH 416, ASRM 406, BIOE 210.",
"creditHoursStr": "3 OR 4 hours",
"instructors": [
"Beckman, A",
"Beckman, M",
"Foster, C",
"Gunter, E",
"Misailovic, S",
"Parthasarathy, M"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 422,
"title": "Programming Language Design",
"description": "Exploration of major language design paradigms using imperative and functional programming as unifying themes. Tools include both practical language processor construction and theoretical models. 3 undergraduate hours. 3 or 4 graduate hours. Prerequisite: CS 421.",
"creditHoursStr": "3 OR 4 hours",
"instructors": [
"Gunter, E",
"Rosu, G"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 423,
"title": "Operating Systems Design",
"description": "Organization and structure of modern operating systems and concurrent programming concepts. Deadlock, virtual memory, processor scheduling, and disk systems. Performance, security, and protection. Same as CSE 423. 3 undergraduate hours. 3 or 4 graduate hours. Prerequisite: One of CS 241, CS 341, or ECE 391.",
"creditHoursStr": "3 OR 4 hours",
"instructors": [
"Bates, A",
"Fagen-Ulmschneider, W",
"Liu, J",
"Xu, T",
"Yoo, A"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 424,
"title": "Real-Time Systems",
"description": "Supervisory control aspects of Cyber Physical Systems (CPS): fundamentals of reliability analysis, real-time scheduling, simple feedback control, software fault tolerance architecture, wireless networking and energy saving, principles of safety critical system engineering. Student groups design and demonstrate supervisory control architecture for a robot. 3 undergraduate hours. 3 or 4 graduate hours. Prerequisite: One of CS 241, CS 341 or ECE 391.",
"creditHoursStr": "3 OR 4 hours",
"instructors": [
"Abdelzaher, T",
"Sha, L"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 425,
"title": "Distributed Systems",
"description": "Protocols, specification techniques, global states and their determination, reliable broadcast, transactions and commitment, security, and real-time systems. Same as ECE 428. 3 or 4 undergraduate hours. 3 or 4 graduate hours. Prerequisite: Credit or concurrent enrollment in one of CS 240, CS 241, CS 340, CS 341 or ECE 391.",
"creditHoursStr": "3 OR 4 hours",
"instructors": [
"Bailey, M",
"Bhatt, M",
"Borisov, N",
"Gupta, I",
"Mehar, J",
"Mittal, R",
"Vaidya, N",
"Wang, H"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 426,
"title": "Compiler Construction",
"description": "Compiler structure, syntax analysis, syntax-directed translation, automatically constructed recognizers, semantic analysis, code generation, intermediate language, optimization techniques. 3 undergraduate hours. 3 or 4 graduate hours. Prerequisite: Credit or concurrent enrollment in CS 421.",
"creditHoursStr": "3 OR 4 hours",
"instructors": [
"Adve, V",
"Evans, G",
"Padua, D",
"Rauchwerger, L"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 427,
"title": "Software Engineering I",
"description": "Software process, analysis and design. Software development paradigms, system engineering, function-based analysis and design, and object-oriented analysis and design. Course will use team-projects for hands-on exercises. Same as CSE 426. 3 undergraduate hours. 3 or 4 graduate hours. Prerequisite: One of CS 222, CS 240, CS 241, CS 340, CS 341 or ECE 391.",
"creditHoursStr": "3 OR 4 hours",
"instructors": [
"Jabbarvand Behrouz, R",
"Rosu, G",
"Xie, T",
"Zhang, L"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 428,
"title": "Software Engineering II",
"description": "Continuation of CS 427. Software development, management, and maintenance. Project and configuration management, collaborative development models, software quality assurance, interoperability domain engineering and software reuse, and software re-engineering. Same as CSE 429. 3 undergraduate hours. 3 or 4 graduate hours. Prerequisite: CS 427.",
"creditHoursStr": "3 OR 4 hours",
"instructors": [
"Dave, M",
"Marinov, D",
"Xie, T"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 429,
"title": "Software Engineering II, ACP",
"description": "Continuation of CS 427. Identical to CS 428 except for the additional writing component. See CS 428. 3 undergraduate hours. 3 graduate hours. Prerequisite: CS 427.",
"creditHoursStr": "3 hours",
"instructors": [
"Marinov, D",
"Xie, T"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 431,
"title": "Embedded Systems",
"description": "A survey of sampled data systems and embedded architecture; key concepts in common embedded system applications; signal processing and control; embedded microprocessor and device interface; time-critical I/O handling; data communications; real-time operating systems and techniques for the development and analysis of embedded real-time software; hands-on laboratory projects. 3 undergraduate hours. 3 or 4 graduate hours. Prerequisite: One of CS 241, CS 341 or ECE 391. Students must register for one lab and one lecture section.",
"creditHoursStr": "3 or 4 hours",
"instructors": [
"Caccamo, M",
"Fauza, R",
"Sha, L"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 433,
"title": "Computer System Organization",
"description": "Computer hardware design and analysis and interface with software. Advanced processor design, including superscalar, out-of-order issue, branch prediction, and speculation. Memory hierarchy design, including advanced cache optimizations, main memory, and virtual memory. Principles of multiprocessor design, including shared-memory, cache coherence, synchronization, and consistency. Other advanced topics depending on time; e.g., GPUs and accelerators, warehouse computers and data centers, security. Same as CSE 422. 3 undergraduate hours. 4 graduate hours. Prerequisite: CS 233.",
"creditHoursStr": "3 OR 4 hours",
"instructors": [
"Adve, S",
"Bohloolizamani, A",
"Fletcher, C",
"Franques Garcia, A",
"Hassan N Mahmoud, A",
"Huzaifa, M",
"Torrellas, J"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 434,
"title": "Mobile Computing &amp; Application",
"description": "Same as ECE 434. See ECE 434.",
"creditHoursStr": "3 OR 4 hours",
"instructors": [
"Roy Choudhury, R"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 435,
"title": "Cloud Networking",
"description": "Provides a foundational view of computer networks with a focus on enabling modern large-scale cloud computing. The first part of this course studies the principles upon which the Internet and other networks are built, and how those principles translate into deployed protocols. The second part covers how those principles are applied in network infrastructure for modern clouds, enabling deployment of virtual networks on shared infrastructure, efficient transfer of big data and low latency communication, and federation of applications across countries and continents. 3 undergraduate hours. 4 graduate hours. Credit is not given for both CS 435 and CS 438/ECE 438. Prerequisite: One of CS 240, CS 241, CS 340, CS 341 or ECE 391.",
"creditHoursStr": "3 OR 4 hours",
"instructors": [
"Godfrey, P"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 437,
"title": "Topics in Internet of Things",
"description": "Topics of networked embedded computing technology, known as the Internet of Things, in application, distributed, human-centric, or social contexts. The tight coupling between people, networking protocols, computing elements, and physical things in IoT systems presents unique challenges for data collection, processing in constrained computation and communication environments. Introduces general principles of IoT systems and protocol, offers broad foundations for IoT services, and allows specialization to pursue an in-depth understanding of selected IoT aspects or subtopics. 3 undergraduate hours. 4 graduate hours. May be repeated if topics vary. Credit towards a degree from multiple offerings of this course is not given if those offerings have significant overlap, as determined by the CS department. Prerequisite: CS 241 or CS 341. Additional prerequisites may be specified each term. See section information.",
"creditHoursStr": "3 OR 4 hours",
"instructors": [
"Caesar, M"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 438,
"title": "Communication Networks",
"description": "Layered architectures and the OSI Reference Model; design issues and protocols in the transport, network, and data link layers; architectures and control algorithms of local-area, point-to-point, and satellite networks; standards in networks access protocols; models of network interconnection; overview of networking and communication software. Same as ECE 438. 3 undergraduate hours. 3 or 4 graduate hours. Prerequisite: One of CS 241, CS 341 or ECE 391; strongly recommend one of CS 361, STAT 361, ECE 313, MATH 362, MATH 461, MATH 463 or STAT 400.",
"creditHoursStr": "3 OR 4 hours",
"instructors": [
"Al-Hassanieh, H",
"Borisov, N",
"Kravets, R",
"Roy Choudhury, R",
"Vasisht, D",
"Zhang, A"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 439,
"title": "Wireless Networks",
"description": "Same as ECE 439. See ECE 439.",
"creditHoursStr": "3 OR 4 hours",
"instructors": [
"Al-Hassanieh, H",
"Kravets, R",
"Roy Choudhury, R"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 440,
"title": "Artificial Intelligence",
"description": "Major topics in and directions of research in artificial intelligence: basic problem solving techniques, knowledge representation and computer inference, machine learning, natural language understanding, computer vision, robotics, and societal impacts. Same as ECE 448. 3 undergraduate hours. 3 or 4 graduate hours. Prerequisite: CS 225; one of CS 361, STAT 361, ECE 313, MATH 362, MATH 461, MATH 463, STAT 400 or BIOE 310.",
"creditHoursStr": "3 OR 4 hours",
"instructors": [
"Adhikari, A",
"DeJong, G",
"Fleck, M",
"Gupta, A",
"Hasegawa-Johnson, M",
"Hockenmaier, J",
"Lazebnik, S"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 441,
"title": "Applied Machine Learning",
"description": "Techniques of machine learning to various signal problems: regression, including linear regression, multiple regression, regression forest and nearest neighbors regression; classification with various methods, including logistic regression, support vector machines, nearest neighbors, simple boosting and decision forests; clustering with various methods, including basic agglomerative clustering and k-means; resampling methods, including cross-validation and the bootstrap; model selection methods, including AIC, stepwise selection and the lasso; hidden Markov models; model estimation in the presence of missing variables; and neural networks, including deep networks. The course will focus on tool-oriented and problem-oriented exposition. Application areas include computer vision, natural language, interpreting accelerometer data, and understanding audio data. 3 undergraduate hours. 3 or 4 graduate hours. Prerequisite: CS 225 and CS 361.",
"creditHoursStr": "3 OR 4 hours",
"instructors": [
"Hoiem, D",
"Morales Aguirre, M",
"Robles Granda, P",
"Viswanathan, M"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 442,
"title": "Trustworthy Machine Learning",
"description": "Prepares students to understand the security and privacy problems in machine learning and educates students to propose different attack strategies to identify the vulnerabilities of a range of learning algorithms and understand different defense approaches towards trustworthy machine learning systems. Students will explore topics including basic machine learning foundations (e.g., linear regression and PCA), adversarial attacks against different learning algorithms, differential privacy, data valuation, and different categories of defenses. The lessons are reinforced via a series of topic-driven lectures, coding assignments, related paper readings, exams and in-class discussions. Students will learn to analyze current interactions between attackers and defenders on machine learning and therefore develop an understanding of the principles on trustworthy machine learning which is an emerging and important topic. Students will be required to finish three related homework projects, including 1) developing a machine learning classifier, 2) designing adversarial attacks against the built classifier, and 3) developing defenses to improve the robustness of the trained classifier against designed attacks. Students registered for 4 credit hours will also finish a final project based on the class topics, demonstrating their ability to propose related new algorithms based on the class subjects. 3 undergraduate hours. 4 graduate hours. Prerequisite: CS 225; one of CS 440, ECE 448, CS 441, CS 446 or ECE 449; one of MATH 225, MATH 257, MATH 415, MATH 416, ASRM 406 or BIOE 210.",
"creditHoursStr": "3 OR 4 hours",
"instructors": [
"Li, B",
"Zhao, H"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 443,
"title": "Reinforcement Learning",
"description": "Fundamental concepts and basic algorithms in Reinforcement Learning (RL) - a machine learning paradigm for sequential decision-making. The goal of this course is to enable students to (1) understand the mathematical framework of RL, (2) tell what problems can be solved with RL, and how to cast these problems into the RL formulation, (3) understand why and how RL algorithms are designed to work, and (4) know how to experimentally and mathematically evaluate the effectiveness of an RL algorithm. There will be both programming and written assignments. 3 undergraduate hours. 4 graduate hours. Prerequisite: CS 225; MATH 241; one of MATH 225, MATH 257, MATH 415, MATH 416, ASRM 406 or BIOE 210; one of CS 361, STAT 361, ECE 313, MATH 362, MATH 461, MATH 463 or STAT 400.",
"creditHoursStr": "3 OR 4 hours",
"instructors": [
"Jiang, N"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 444,
"title": "Deep Learning for Computer Vision",
"description": "Provides an elementary hands-on introduction to neural networks and deep learning with an emphasis on computer vision applications. Topics include: linear classifiers; multi-layer neural networks; back-propagation and stochastic gradient descent; convolutional neural networks and their applications to object detection and dense image labeling; recurrent neural networks and state-of-the-art sequence models like transformers; generative adversarial networks and variational autoencoders for image generation; and deep reinforcement learning. Coursework will consist of programming assignments in a common deep learning framework. Those registered for 4 credit hours will have to complete a project. 3 undergraduate hours. 4 graduate hours. Prerequisite: MATH 241; one of MATH 225, MATH 257, MATH 415, MATH 416, ASRM 406, or BIOE 210; CS 225 or equivalent; one of CS 361, ECE 313, MATH 461 or STAT 400. No previous exposure to machine learning is required.",
"creditHoursStr": "3 OR 4 hours",
"instructors": [
"Lazebnik, S"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 445,
"title": "Computational Photography",
"description": "Computer vision techniques to enhance, manipulate, and create media from photo collections, such as panoramic stitching, face morphing, texture synthesis, blending, and 3D reconstruction. 3 undergraduate hours. 3 or 4 graduate hours. Prerequisite: CS 225, MATH 225, and MATH 231.",
"creditHoursStr": "3 OR 4 hours",
"instructors": [
"Hoiem, D",
"Wang, Y"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 446,
"title": "Machine Learning",
"description": "Principles and applications of machine learning. Main paradigms and techniques, including discriminative and generative methods, reinforcement learning: linear regression, logistic regression, support vector machines, deep nets, structured methods, dimensionality reduction, k-means, Gaussian mixtures, expectation maximization, Markov decision processes, and Q-learning. Application areas such as natural language and text understanding, speech recognition, computer vision, data mining, and adaptive computer systems, among others. Same as ECE 449. 3 undergraduate hours. 3 or 4 graduate hours. Prerequisite: CS 225; One of MATH 225, MATH 257, MATH 415, MATH 416, ASRM 406 or BIOE 210; One of CS 361, ECE 313, MATH 461 or STAT 400.",
"creditHoursStr": "3 OR 4 hours",
"instructors": [
"Gui, L",
"Koyejo, O",
"Mangipudi, B",
"Roth, D",
"Schwing, A",
"Telgarsky, M",
"Wang, S",
"Zhao, Z"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 447,
"title": "Natural Language Processing",
"description": "Part-of-speech tagging, parsing, semantic analysis and machine translation. Relevant linguistics concepts from morphology (word formation) and lexical semantics (the meaning of words) to syntax (sentence structure) and compositional semantics (the meaning of sentences). 3 undergraduate hours. 3 or 4 graduate hours. Credit is not given for both CS 447 and LING 406. Prerequisite: CS 374.",
"creditHoursStr": "3 OR 4 hours",
"instructors": [
"Hockenmaier, J"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 448,
"title": "Audio Computing Laboratory",
"description": "Computational foundations of modern audio applications: theory of audio processing for implementation of applications such as room and 3D/virtual audio rendering, pitch manipulations and autotuning, denoising for communications and forensics, audio classification, music information retrieval based on audio, rudimentary speech recognition, speech and audio coding, applications of machine learning to audio scene recognition, audio restoration, missing data recovery, and many more. This will be a lab-like course in which students collectively implement a variety of core audio operations that are commonplace today. Students will be required to bring to class their laptops and headphones to participate in lab exercises. 3 undergraduate hours. 3 or 4 graduate hours. Prerequisite: One of CS 241, CS 341, or ECE 391; one of MATH 225, MATH 257, MATH 415, MATH 416, ASRM 406, or BIOE 210.",
"creditHoursStr": "3 OR 4 hours",
"instructors": [
"Smaragdis, P"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 450,
"title": "Numerical Analysis",
"description": "Linear system solvers, optimization techniques, interpolation and approximation of functions, solving systems of nonlinear equations, eigenvalue problems, least squares, and quadrature; numerical handling of ordinary and partial differential equations. Same as CSE 401, ECE 491, and MATH 450. 3 undergraduate hours. 3 or 4 graduate hours. Credit is not given toward graduation for both CS 450 and CS 457. Prerequisite: One of CS 101, CS 124 or CS 125; one of CS 357, MATH 257, MATH 357, MATH 415, or MATH 416; MATH 285.",
"creditHoursStr": "3 OR 4 hours",
"instructors": [
"Fischer, P",
"Heath, M",
"Kloeckner, A",
"Olson, L",
"Shaffer, E",
"Solomonik, E"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 461,
"title": "Computer Security I",
"description": "Fundamental principles of computer and communications security and information assurance: ethics, privacy, notions of threat, vulnerabilities, and risk in systems, information warfare, malicious software, data secrecy and integrity issues, network security, trusted computing, mandatory and discretionary access controls, certification and accreditation of systems against security standards. Security mechanisms: authentication, auditing, intrusion detection, access control, cryptography, security protocols, key distribution. Same as ECE 422. 4 undergraduate hours. 4 graduate hours. Prerequisite: One of CS 241, CS 341, or ECE 391.",
"creditHoursStr": "4 hours",
"instructors": [
"Bailey, M",
"Bates, A",
"Borisov, N",
"Cunningham, R",
"Levchenko, K",
"Ma, Z",
"Miller, A",
"Murley, P",
"Ren, L",
"Reynolds, J"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 463,
"title": "Computer Security II",
"description": "Program security, trusted base, privacy, anonymity, non-interference, information flow, confinement, advanced auditing, forensics, intrusion detection, key management and distribution, policy composition and analysis, formal approaches to specification and verification of secure systems and protocols, and topics in applied cryptography. Same as ECE 424. 3 undergraduate hours. 3 or 4 graduate hours. Prerequisite: CS 461. Recommended: CS 475.",
"creditHoursStr": "3 OR 4 hours",
"instructors": [
"Gunter, C",
"Wang, G"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 464,
"title": "Topics in Societal and Ethical Impacts of Computer Technology",
"description": "Topics selected from key current areas of impact of computer technology on aspects of society and ethics such as: freedom versus the rule of law in cyberspace; social discourse; privacy; livelihoods and automation; fairness; security; political change; business models; technology divide. 3 undergraduate hours. No graduate credit. May be repeated if topics vary. Credit is not given towards a degree from multiple offerings of this course, if those offerings have significant overlap, as determined by the CS department. Prerequisite: CS 225. One of CS 210 or CS 211 or ECE 316 or PHIL 316. One of CS 361 or STAT 400 or STAT 200. Restricted to students with senior standing.",
"creditHoursStr": "3 hours",
"instructors": [
"Cobb, C",
"Gunter, C"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 465,
"title": "User Interface Design",
"description": "A project-focused course covering fundamental principles of user interface design, implementation, and evaluation. Small teams work on a term-long project that involves: analysis of the problem domain, user skills, and tasks; iterative prototyping of interfaces to address user needs; conducting several forms of evaluation such as cognitive walkthroughs and usability tests; implementation of the final prototype. Non-technical majors may enroll as non-programmers who participate in all aspects of the projects with the possible exception of implementation. 4 undergraduate hours. 4 graduate hours. Prerequisite: CS 225.",
"creditHoursStr": "4 hours",
"instructors": [
"Bailey, B",
"Dey, S",
"Do, H",
"Fu, W",
"Hastings, E",
"Isenegger, K",
"Kirlik, A",
"Xiao, Z",
"Yen, C"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 466,
"title": "Introduction to Bioinformatics",
"description": "Algorithmic approaches in bioinformatics: (i) biological problems that can be solved computationally (e.g., discovering genes, and interactions among different genes and proteins); (ii) algorithmic techniques with wide applicability in solving these problems (e.g., dynamic programming and probabilistic methods); (iii) practical issues in translating the basic algorithmic ideas into accurate and efficient tools that biologists may use. 3 undergraduate hours. 3 or 4 graduate hours. Prerequisite: CS 225.",
"creditHoursStr": "3 OR 4 hours",
"instructors": [
"El-Kebir, M",
"Peng, J",
"Sinha, S",
"Warnow, T"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 467,
"title": "Social Visualization",
"description": "Visualizing social interaction in networked spaces: investigation of patterns in networked communications systems such as messaging (email, instant messaging), social networking sites and collaborative sites; social network theory and visualizations; exploration of how to move beyond existing visualization techniques; visualizing the network identity over compilations of online data. 3 undergraduate hours. 3 or 4 graduate hours. Prerequisite: CS 225.",
"creditHoursStr": "3 OR 4 hours",
"instructors": [
"Karahalios, K"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 468,
"title": "Tech and Advertising Campaigns",
"description": "Same as ADV 492. See ADV 492.",
"creditHoursStr": "3 hours",
"instructors": [
"Fisher, J",
"Maslowska, E",
"Su, L",
"Yao, M"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 469,
"title": "Computational Advertising Infrastructure",
"description": "Thorough coverage of technologies including web-search, auctions, behavioral targeting, mechanisms for viral marketing, that underpin the display of advertisements on a variety of locations (e.g., ads on search engines; display ads). Students shall also learn about emerging areas in computational advertising including location-based adverting and algorithmic synthesis of personalized advertisements. Discussion around privacy will be a significant focus of the class. Same as ADV 462. 3 undergraduate hours. 3 or 4 graduate hours. Prerequisite: CS 173; CS 225; one of MATH 225, MATH 257, MATH 415, MATH 416, ASRM 406 or BIOE 210; one of CS 361, ECE 313, MATH 461, or STAT 400.",
"creditHoursStr": "3 OR 4 hours",
"instructors": [
"Sundaram, H"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 470,
"title": "Social and Information Networks",
"description": "Social networks, auctions, and stock-markets appear to be very different phenomena, but they share a common foundation\u2014the science of networks. The learning goal: to provide a broad, accessible introduction to the foundations of network science. We shall draw on ideas from mathematical sociology, and from game theory to understand strategic interaction over networks. We shall develop algorithms to identify network properties, and models for explaining network dynamics, including viral behavior. 3 undergraduate hours. 4 graduate hours. Prerequisite: CS 225; CS 173; one of CS 361, ECE 313, MATH 461, or STAT 400; one of MATH 225, MATH 257, MATH 415, MATH 416, ASRM 406, or BIOE 210.",
"creditHoursStr": "3 OR 4 hours",
"instructors": [
"Sundaram, H"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 473,
"title": "Algorithms",
"description": "Design and analysis techniques, approximation algorithms, randomized algorithms and amortized analysis, and advanced topics such as network flow, linear programming, and dynamic data structures, among others. Same as CSE 414 and MATH 473. 4 undergraduate hours. 4 graduate hours. Prerequisite: CS 374 or ECE 374, and one of CS 361, STAT 361, ECE 313, MATH 362, MATH 461, MATH 463 or STAT 400.",
"creditHoursStr": "4 hours",
"instructors": [
"Andrews, R",
"Beideman, C",
"Chan, T",
"Chekuri, C",
"Erickson, J",
"Forbes, M",
"Har-Peled, S",
"Kelley, A",
"Mehta, R"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 474,
"title": "Logic in Computer Science",
"description": "An introduction to mathematical logic from the perspective of computer science, emphasizing both computable aspects of logic, especially automated reasoning, as well as applications of logic to computer science in artificial intelligence, databases, formal methods, and theoretical computer science. Prepares students to use logic as a formal tool to solve problems in computer science and AI. Topics include: syntax, semantics and proofs for propositional and first order logic, the decidable logics and efficient realizations in terms of SAT/SMT solvers, decision and semi-decision procedures for first order logic and several first order logic theories, finite model theory and descriptive complexity. Additional topics include: connections between logic and machine learning, higher order logics, applications of logic to program verification, applications of logic in knowledge representation, proof complexity, modal and temporal logic, Courcelle\u2019s theorem and its applications in parameterized complexity, logic and its role in automatic program synthesis, connections between logic and database query languages. 3 undergraduate hours. 3 or 4 graduate hours. Prerequisite: CS 173; CS 225; one of CS 374 or ECE 374.",
"creditHoursStr": "3 OR 4 hours",
"instructors": [
"Parthasarathy, M",
"Viswanathan, M"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 475,
"title": "Formal Models of Computation",
"description": "Finite automata and regular languages; pushdown automata and context-free languages; Turing machines and recursively enumerable sets; linear-bounded automata and context-sensitive languages; computability and the halting problem; undecidable problems; recursive functions; Chomsky hierarchy; computational complexity. Same as MATH 475. 3 undergraduate hours. 3 or 4 graduate hours. Prerequisite: CS 374 or ECE 374.",
"creditHoursStr": "3 OR 4 hours",
"instructors": [
"Cosman, B",
"Viswanathan, M"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 476,
"title": "Program Verification",
"description": "Formal methods for demonstrating correctness and other properties of programs. Invariant assertions; Hoare axiomatics; well-founded orderings for proving termination; structural induction; computational induction; data structures; parallel programs; overview of predicate calculus. 3 undergraduate hours. 3 or 4 graduate hours. Prerequisite: CS 225; CS 374 or MATH 414.",
"creditHoursStr": "3 OR 4 hours",
"instructors": [
"Meseguer, J"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 477,
"title": "Formal Software Development Methods",
"description": "Mathematical models, languages, and methods for software specification, development, and verification. Same as ECE 478. 3 undergraduate hours. 3 or 4 graduate hours. Prerequisite: CS 225; one of CS 374, ECE 374 or MATH 414.",
"creditHoursStr": "3 OR 4 hours",
"instructors": [
"Gunter, E",
"Misailovic, S",
"Parthasarathy, M",
"Singh, G"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 481,
"title": "Advanced Topics in Stochastic Processes &amp; Applications",
"description": "Same as IE 410. See IE 410.",
"creditHoursStr": "3 OR 4 hours",
"instructors": [
"Jacobson, S"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 482,
"title": "Simulation",
"description": "Same as IE 413. See IE 413.",
"creditHoursStr": "0 TO 4 hours",
"instructors": [
"Jacobson, S"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 483,
"title": "Applied Parallel Programming",
"description": "Same as CSE 408 and ECE 408. See ECE 408.",
"creditHoursStr": "4 hours",
"instructors": [
"Haase, H",
"Hwu, W",
"Kindratenko, V",
"Lumetta, S",
"Patel, S"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 484,
"title": "Parallel Programming",
"description": "Techniques for the programming of all classes of parallel computers and devices including shared memory and distributed memory multiprocessors, SIMD processors and co-processors, and special purpose devices. Key concepts in parallel programming such as reactive and transformational programming, speculation, speedup, isoefficiency, and load balancing. Synchronization primitives, libraries and languages for parallel programming such as OpenMP and MPI, performance monitoring, program tuning, analysis and programming of numerical and symbolic parallel algorithms. 3 undergraduate hours. 3 or 4 graduate hours. Prerequisite: CS 241.",
"creditHoursStr": "3 OR 4 hours",
"instructors": [
"Kale, L",
"Rauchwerger, L"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 491,
"title": "Seminar",
"description": "Seminar on topics of current interest as announced in the Class Schedule. 0 to 4 undergraduate hours. 0 to 4 graduate hours. Approved for S/U grading only. May be repeated in the same or separate terms if topics vary to a maximum of 4 hours. Prerequisite: As specified for each topic offering, see Class Schedule or departmental course description.",
"creditHoursStr": "0 TO 4 hours",
"instructors": [
"Amato, N",
"Angrave, L",
"Bailey, B",
"Bashir, M",
"Beckman, A",
"Beckman, M",
"Campbell, R",
"Chapman, W",
"Davis, N",
"Gertner, Y",
"Lewis, C",
"Marinov, D",
"Shang, J",
"Thakore, U",
"Tucker, Z",
"Williams, T"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 492,
"title": "Senior Project I",
"description": "First part of a project course in computer science. Students work in teams to solve typical commercial or industrial problems. Work involves planning, design, and implementation. Extensive oral and written work is required both on-campus and possibly off-campus at sponsors' locations. CS 492 must be taken as a sequence with either CS 493 or CS 494. 3 undergraduate hours. No graduate credit. Credit is not given for both CS 492 and a project course in another engineering department for the same project. Prerequisite: For Computer Science majors with senior standing.",
"creditHoursStr": "3 hours",
"instructors": [
"Woodley, M"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 493,
"title": "Senior Project II, ACP",
"description": "Continuation of CS 492. Identical to CS 494 except for an additional writing component. See CS 494. 3 undergraduate hours. No graduate credit. Credit is not given for both CS 493 and a project course in another engineering department for the same project. Prerequisite: CS 492.",
"creditHoursStr": "3 hours",
"instructors": [
"Woodley, M"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 494,
"title": "Senior Project II",
"description": "Continuation of CS 492. 3 undergraduate hours. No graduate credit. Credit is not given for both CS 494 and a project course in another engineering department for the same project. Prerequisite: CS 492.",
"creditHoursStr": "3 hours",
"instructors": [
"Woodley, M"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 497,
"title": "CS Team Project",
"description": "Student teams work with CS faculty to complete a significant project requiring advanced knowledge of CS principles. Project topics vary. 1 to 3 undergraduate hours. No graduate credit. May be repeated in the same term up to 6 hours, if topics vary; may be repeated in separate terms. Prerequisite: For majors only; junior or senior standing required.",
"creditHoursStr": "1 TO 3 hours",
"instructors": [
"Alawini, A",
"Angrave, L",
"Brunner, R",
"Forsyth, D"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 498,
"title": "Special Topics",
"description": "Subject offerings of new and developing areas of knowledge in computer science intended to augment the existing curriculum. See Class Schedule or departmental course information for topics and prerequisites. 1 to 4 undergraduate hours. 1 to 4 graduate hours. May be repeated in the same or separate terms if topics vary.",
"creditHoursStr": "1 to 4 hours",
"instructors": [
"Agha, G",
"Alawini, A",
"Angrave, L",
"Arsan, D",
"Bailey, B",
"Bambenek, J",
"Bashir, M",
"Caccamo, M",
"Caesar, M",
"Campbell, R",
"Chan, T",
"Chandrasekharan, E",
"Chekuri, C",
"Chen, B",
"Chowdhary, G",
"Cunningham, R",
"Davis, N",
"De, S",
"DeJong, G",
"Delgosha, P",
"Erickson, J",
"Fagen-Ulmschneider, W",
"Farivar, R",
"Forsyth, D",
"Gertner, Y",
"Ghose, S",
"Godfrey, P",
"Gunter, C",
"Han, J",
"Har-Peled, S",
"Hauser, K",
"Herman, G",
"Iyer, R",
"Jiang, N",
"Kesan, J",
"Khurana, D",
"Kirlik, A",
"Kravets, R",
"Kumar, R",
"Lane, H",
"Lavalle, S",
"Lazebnik, S",
"Li, B",
"Mehta, R",
"Miller, A",
"Mitra, S",
"Mohan, S",
"Morales Aguirre, M",
"Parthasarathy, M",
"Shaffer, E",
"Smaragdis, P",
"Snir, M",
"Sohn, M",
"Stodden, V",
"Sundaram, H",
"Torres, M",
"Vasisht, D",
"Viswanathan, M",
"Walker, T",
"Wang, S",
"Williams, T",
"Xie, T",
"Yershova, G",
"Zhao, H",
"Zilles, C"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 500,
"title": "Current Topics in Computing Education Research",
"description": "Current research topics and theories in Computers and Education with an emphasis on learning theories such as constructivism, behaviorism, cognitivism, knowledge-in-pieces, test-potentiated learning, and transfer of learning. These theories will be applied to understanding how students learn computing topics such as programming and theoretical computing. These topics will be applied through the design of ethically responsible educational research studies. The course will culminate in students writing a research proposal or conference-style research paper based upon pilot data. 4 graduate hours. No professional credit. May be repeated if topics vary. Credit towards a degree from multiple offerings of this course is not given if those offerings have significant overlap, as determined by the CS department.",
"creditHoursStr": "4 hours",
"instructors": [
"Cunningham, K",
"Herman, G",
"Lewis, C"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 507,
"title": "Topics in Cryptography",
"description": "Modern cryptography helps realize a variety of tasks: from computations on and proofs about secret data, to verifiably offloading computation to untrusted clients, to making programs unintelligible while preserving functionality, to testing untrusted quantum devices. Covers a selection of such cutting-edge topics in cryptography. We will understand how any adversary that counters the security of modern protocols can be transformed into an adversary that contradicts basic mathematical assumptions. We will understand key ideas in recent cryptography research and identify new directions and problems for the future. 4 graduate hours. No professional credit. May be repeated, up to 8 hours in a single term, to a total of 16 graduate hours, if topics vary. Credit is not given towards a degree from multiple offerings of this course if those offerings have significant overlap, as determined by the CS department. Prerequisite: Offerings in separate semesters may specify additional prerequisites each term, depending on the specific topic offered. See section information for additional details.",
"creditHoursStr": "4 hours",
"instructors": [
"Khurana, D"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 508,
"title": "Manycore Parallel Algorithms",
"description": "Same as ECE 508. See ECE 508.",
"creditHoursStr": "4 hours",
"instructors": [
"Hwu, W",
"Lumetta, S"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 510,
"title": "Advanced Information Retrieval",
"description": "Advanced concepts, models, and algorithms in information retrieval and major recent developments in the field, including historical milestones in information retrieval research, evaluation methodology, vector space retrieval model, probabilistic retrieval models, learning to rank algorithms, probabilistic topic models, information retrieval systems, text analytics, and topics of research frontiers in information retrieval. 4 graduate hours. No professional credit. Prerequisite: One of CS 410, CS 412, CS 446, ECE 449 or LING 406.",
"creditHoursStr": "4 hours",
"instructors": [
"Zhai, C"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 511,
"title": "Advanced Data Management",
"description": "Advanced concepts in data management and information system design and implementation, and recent developments in the field. 1) Relational roots, objects and extensibility, query languages, data indexing, query processing, transaction processing, benchmarks, and 2) semi-structured data and unstructured data, information extraction, information integration, web search and mining, and other emerging directions in the field. Prerequisite: CS 411.",
"creditHoursStr": "4 hours",
"instructors": [
"Chang, K",
"Javari, A",
"Park, Y"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 512,
"title": "Data Mining Principles",
"description": "An advanced course on principles and algorithms of data mining. Data cleaning and integration; descriptive and predictive mining; mining frequent, sequential, and structured patterns; clustering, outlier analysis and fraud detection; stream data, web, text, and biomedical data mining; security and privacy in data mining; research frontiers. Prerequisite: CS 412.",
"creditHoursStr": "4 hours",
"instructors": [
"Han, J",
"Tong, H",
"Zhu, Q"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 519,
"title": "Scientific Visualization",
"description": "Visualization techniques useful in analysis of engineering and scientific data. Physical models; methods of computational science; two- and three-dimensional data types; visual representation schemes for scalar, vector, and tensor data; isosurface and volume visualization methods; visual monitoring; interactive steering. Same as CSE 527. Prerequisite: CS 418.",
"creditHoursStr": "4 hours",
"instructors": [
"Shaffer, E"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 521,
"title": "Advanced Topics in Programming Systems",
"description": "Advanced topics in building and verifying software systems, selected from areas of current research such as: model checking and automated verification, testing and automated test generation, program synthesis, runtime verification, machine learning and its applications in the design of verified systems, formal analysis of machine learning algorithms, principles of programming languages and type systems. 4 graduate hours. No professional credit. May be repeated if topics vary. Credit is not given towards a degree from multiple offerings of this course if those offerings have significant overlap, as determined by the CS department. Prerequisite: CS 374, CS 421. Additional prerequisites or corequisites may be specified each term. See section information.",
"creditHoursStr": "4 hours",
"instructors": [
"Misailovic, S",
"Parthasarathy, M",
"Singh, G"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 522,
"title": "Programming Language Semantics",
"description": "Theory of programming languages including functional programming, meta-circular interpreters, typed, untyped and polymorphic lambda-calculi, and denotational semantics. Prerequisite: CS 422 and CS 426.",
"creditHoursStr": "4 hours",
"instructors": [
"Rosu, G"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 523,
"title": "Advanced Operating Systems",
"description": "Advanced concepts in operating system design and coverage of recent research directions. Resource management for parallel and distributed systems. Interaction between operating system design and computer architectures. Process management, virtual memory, interprocess communication, context switching, parallel and distributed file system designs, persistent objects, process and data migration, load balancing, security, protection. Term projects. 4 graduate hours. No professional credit. Prerequisite: One of CS 423 or CSE 423; one of CS 425 or ECE 428; and one of CS 433 or CSE 422.",
"creditHoursStr": "4 hours",
"instructors": [
"Campbell, R",
"Eslami, H",
"Xu, T"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 524,
"title": "Concurrent Progrmg Languages",
"description": "Theory of concurrency and concurrent programming languages. Formal models of concurrent computation such as process algebras, nets, and actors; high level concurrent programming languages and their operational semantics; methods for reasoning about correctness and complexity of concurrent programs. 4 graduate hours. No professional credit. Prerequisite: CS 422; one of CS 475, MATH 475 or CS 476.",
"creditHoursStr": "4 hours",
"instructors": [
"Agha, G",
"Meseguer, J"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 525,
"title": "Advanced Distributed Systems",
"description": "Peer-to-peer systems, sensor networks, and fundamental theoretical distributed computing. Review of classical work in each area, and application of design methodologies to explore overlaps across them. Emphasis on protocol design, systems issues, and theory. Reading selections are roughly two-third classical to one-third contemporary. Students write critiques, make presentations, and create a conference paper in a systematic manner. 4 graduate hours. No professional credit. Prerequisite: One of CS 423, CSE 423, CS 425, ECE 428, CS 438 or ECE 438.",
"creditHoursStr": "4 hours",
"instructors": [
"Gupta, I"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 526,
"title": "Advanced Compiler Construction",
"description": "Incremental and interactive compiling, error correction, code optimization, models of code generators. Prerequisite: CS 426.",
"creditHoursStr": "4 hours",
"instructors": [
"Adve, V",
"Mendis, C",
"Misailovic, S"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 527,
"title": "Topics in Software Engineering",
"description": "Fault-tolerant software, software architecture, software patterns, multi-media software, and knowledge-based approaches to software engineering. Case studies. 4 graduate hours. No professional credit. Prerequisite: CS 428, CSE 429 or CS 429.",
"creditHoursStr": "4 hours",
"instructors": [
"Gyori, G",
"Hsieh, C",
"Marinov, D",
"Xie, T",
"Zhang, L"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 533,
"title": "Parallel Computer Architecture",
"description": "Theoretical aspects of parallel and pipeline computation; time and processor bounds on classes of computations; data alignment network speed and cost bounds; conflict-free access memories; overall computer system ideas. Same as CSE 522. 4 graduate hours. No professional credit. Prerequisite: CS 433 or CSE 422.",
"creditHoursStr": "4 hours",
"instructors": [
"Torrellas, J"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 534,
"title": "Advanced Topics in Computer Architecture",
"description": "Current topics in computer architecture, selected from areas of current research such as: energy efficiency, processing in memory, cloud computing, 3-D architectures, security and privacy, hardware and software resiliency, cross-stack design, heterogeneous platforms, approximate computing, mobile computing, machine learning accelerators, and novel computing technologies. 4 graduate hours. No professional credit. May be repeated, if topics vary. Credit is not given towards a degree from multiple offerings of this course, if those offerings have significant overlap, as determined by the CS department. Prerequisite: CS 433 or CSE 422. Additional prerequisites or co-requisites may be specified each term. See Class Schedule information.",
"creditHoursStr": "4 hours",
"instructors": [
"Adve, S",
"Ghose, S",
"Torrellas, J"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 536,
"title": "Fault-Tolerant Dig Syst Design",
"description": "Same as ECE 542. See ECE 542.",
"creditHoursStr": "4 hours",
"instructors": [
"Iyer, R",
"Kalbarczyk, Z"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 537,
"title": "Advanced Topics in Internet of Things (IoT)",
"description": "Advanced topics in Internet of Things (IoT) algorithms, protocols, architectures, systems, and infrastructures, selected from areas of current research such as: IoT sensors representations and compression, streaming and caching of IoT data, IoT analytics and feature learning, IoT-edge-cloud computing infrastructures, resource optimization for multi-modal IoT systems, applications and human perception of IoT. Students will read and discuss recent research papers and conduct a semester-long research project. 4 graduate hours. No professional credit. May be repeated, if topics vary. Credit towards a degree from multiple offerings of this course is not given if those offerings have significant overlap, as determined by the CS department. Prerequisite: CS 425, CS 438. Additional prerequisites may be specified each term. See section information.",
"creditHoursStr": "4 hours",
"instructors": [
"Nahrstedt, K"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 538,
"title": "Advanced Computer Networks",
"description": "Advanced concepts in computer networks, including congestion control, quality of service, naming, routing, wireless networks, Internet architecture, measurement, network security, and selected recent research directions. 4 graduate hours. No professional credit. Prerequisite: CS 438 or ECE 438.",
"creditHoursStr": "4 hours",
"instructors": [
"Godfrey, P"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 539,
"title": "Distributed Algorithms",
"description": "Same as ECE 526. See ECE 526.",
"creditHoursStr": "4 hours",
"instructors": [
"Ren, L"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 540,
"title": "Deep Learning Theory",
"description": "A rigorous mathematical course covering foundational analyses of the approximation, optimization, and generalization properties of Deep Neural Networks. Topics include: constructive and non-constructive approximations with one hidden layer; benefits of depth; optimization in the NTK regime; maximum margin optimization outside the NTK regime; Rademacher complexity, VC dimensino, and covering number bounds for ReLU networks. Evaluation is primarily based on homeworks, with a smaller project component. The course goal is to prepare students perform their own research in the field. 4 graduate hours. No professional credit. Prerequisite: Basic linear algebra, probability, proof-writing, and statistics required. Real analysis recommended.",
"creditHoursStr": "4 hours",
"instructors": [
"Telgarsky, M"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 542,
"title": "Statistical Reinforcement Learning",
"description": "Theory of reinforcement learning, with a focus on sample complexity analyses. Specific topics include MDP basics, finite-sample analyses of online (i.e., exploration) and offline (i.e., batch) RL with a tabular representation, finite-sample analyses of online and offline RL with function approximation, state abstraction theory, off-policy evaluation (importance sampling), and policy gradient. The course goal is to provide a comprehensive understanding of the statistical properties of RL under various settings (e.g., online vs offline), preparing the students for doing research in the area. 4 graduate hours. No professional credit. Prerequisite: Calculus, linear algebra, probability and statistics, and basic concepts of machine learning. Familiarity with (at least one of) the following topics is highly recommended: stochastic processes, numerical analysis, and theoretical computer science.",
"creditHoursStr": "4 hours",
"instructors": [
"Jiang, N"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 543,
"title": "Computer Vision",
"description": "Same as ECE 549. See ECE 549.",
"creditHoursStr": "4 hours",
"instructors": [
"Gupta, S",
"Hoiem, D",
"Lazebnik, S"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 545,
"title": "Machine Learning for Signal Processing",
"description": "Fundamentals of machine learning and signal processing as they pertain to the development of machines that can understand complex real-world signals, such as speech, images, movies, music, biological and mechanical readings, etc. Hands-on examples of how to decompose, analyze, classify, detect and consolidate signals, and examine various commonplace operations such as finding faces from camera feeds, organizing personal music collections, designing speech dialog systems and understanding movie content. 4 graduate hours. No professional credit. Prerequisite: MATH 415; CS 361 or MATH 461 or STAT 400.",
"creditHoursStr": "4 hours",
"instructors": [
"Smaragdis, P"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 546,
"title": "Advanced Topics in Natural Language Processing",
"description": "Advanced topics in natural language processing, ranging from general techniques such as deep learning for NLP to specific topics such as information extraction, knowledge acquisition, dialogue systems, language grounding, and natural language generation. Review of classic as well as state-of-the-art techniques and remaining challenges, and exploration of recent proposals for meeting these challenges. Intended for graduate students doing research in natural language processing. 4 graduate hours. No professional credit. May be repeated in separate terms up to 16 hours, if topics vary. Credit towards a degree from multiple offerings of this course is not given if those offerings have significant overlap, as determined by the CS department. Prerequisite: CS 447 and CS 446 or equivalent background.",
"creditHoursStr": "4 hours",
"instructors": [
"Hockenmaier, J",
"Ji, H"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 547,
"title": "Deep Learning",
"description": "Same as IE 534. See IE 534.",
"creditHoursStr": "4 hours",
"instructors": [
"Sirignano, J",
"Sowers, R"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 549,
"title": "Seminar in Cognitive Science",
"description": "Same as PSYC 514, ANTH 514, EPSY 551, LING 570, and PHIL 514. See PSYC 514.",
"creditHoursStr": "2 OR 4 hours",
"instructors": [
"Hummel, J"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 554,
"title": "Parallel Numerical Algorithms",
"description": "Numerical algorithms for parallel computers: parallel algorithms in numerical linear algebra (dense and sparse solvers for linear systems and the algebraic eigenvalue problem), numerical handling of ordinary and partial differential equations, and numerical optimization techniques. Same as CSE 512. Prerequisite: One of CS 450, CS 457, CS 555.",
"creditHoursStr": "4 hours",
"instructors": [
"Solomonik, E"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 555,
"title": "Numerical Methods for PDEs",
"description": "Numerical techniques for initial and boundary value problems in partial differential equations. Finite difference and finite element discretization techniques, direct and iterative solution methods for discrete problems, and programming techniques and usage of software packages. Same as CSE 510 and MATH 552. 4 graduate hours. No professional credit. Prerequisite: CS 450, CSE 401, ECE 491, MATH 450 or CS 457.",
"creditHoursStr": "4 hours",
"instructors": [
"Fischer, P",
"Kloeckner, A",
"Olson, L"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 556,
"title": "Iterative &amp; Multigrid Methods",
"description": "Comprehensive treatment of algebraic and multigrid iterative methods to solve systems of equations, primarily linear equations arising from discretization of partial differential equations. Same as CSE 511.",
"creditHoursStr": "4 hours",
"instructors": [
"Fischer, P",
"Olson, L"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 562,
"title": "Advanced Topics in Security, Privacy, and Machine Learning",
"description": "Advanced topics in security and privacy problems in machine learning systems, selected from areas of current research such as: adversarial machine learning, differential privacy, game theory enabled defenses, robust learning methods, machine learning based cybercrime analysis, network intrusion detection, and malware analysis, and machine learning interpretation techniques. 4 graduate hours. No professional credit. May be repeated if topics vary. Credit is not given towards a degree from multiple offerings of this course if those offerings have significant overlap, as determined by the CS department. Prerequisite: CS 446 and CS 463 or equivalent courses, by consent of instructor. Additional prerequisites or corequisites may be specified each term. See section information.",
"creditHoursStr": "4 hours",
"instructors": [
"Li, B"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 563,
"title": "Advanced Computer Security",
"description": "Current research trends in computer and network security. Privacy, tamper-resistance, unwanted traffic, monitoring and surveillance, and critical infrastructure protection. Subtopics will vary depending upon current research trends. Students work in teams in close coordination with the course instructor to develop one of the topics in depth by carrying out background research and an exploratory project. Same as ECE 524. Prerequisite: CS 461 or CS 463.",
"creditHoursStr": "4 hours",
"instructors": [
"Bates, A",
"Fletcher, C",
"Gunter, C",
"Hojjati, A",
"Miller, A"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 565,
"title": "Human-Computer Interaction",
"description": "In-depth coverage of advanced topics in human-computer interaction (HCI). Applied models of human performance and attention, design tools for creative design tasks, interruptions and peripheral displays, gestures, and bimanual input, and usability evaluation techniques. Students complete a research-oriented term project of their choosing. Prerequisite: CS 465.",
"creditHoursStr": "4 hours",
"instructors": [
"Bailey, B",
"Kirlik, A"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 567,
"title": "Social Signals and Social Media",
"description": "Online social interactions occur in many arenas important to society and human well-being, but are mediated through algorithmic interventions that alter the users expectations in these social spaces. This class explores the presentation of self, the presentation of collectives, the presentation of news, and social dynamics in these online spaces--and how algorithmic intervention shapes them from the perspective of social signaling theory. Topics covered include: the evolution of algorithmic matchmaking (as in online resume/interviews and dating sites), why people share misinformation, the mitigation of trolling, ethics, and bias in social media systems. Upon completion of this course, students will have an up-to-date understanding of the design social media interfaces with incentive structures from social signaling theory. 4 graduate hours. No professional credit. Prerequisite: CS 465 or equivalent or permission of instructor. Prioritize PhD students, then others.",
"creditHoursStr": "4 hours",
"instructors": [
"Karahalios, K"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 568,
"title": "User-Centered Machine Learning",
"description": "Introduces guidelines, processes, and systems for designing effective user experiences powered by machine learning models. Topics include design tradeoffs unique to data-driven products and services such as automation versus control, precision versus recall, and personalization versus privacy. Readings from human computer-interaction, product design, cognitive science, machine learning, computer vision, and natural language processing frame in-class design exercises. Students work in teams on a multi-week research project creating or auditing data-driven experiences. 4 graduate hours. No professional credit. Prerequisite: CS 465 or equivalent course work.",
"creditHoursStr": "4 hours",
"instructors": [
"Kumar, R"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 571,
"title": "Combinatorial Mathematics",
"description": "Same as MATH 580. See MATH 580.",
"creditHoursStr": "4 hours",
"instructors": [
"Balog, J"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 574,
"title": "Randomized Algorithms",
"description": "Basic and advanced concepts in the design and analysis of randomized algorithms. Sampling; concentration inequalities such as Chernoff-Hoeffding bounds; probabilistic method; random walks, dimension reduction; entropy; martingales and Azuma's inequality; derandomization. Randomized algorithms for sorting and searching; graphs; geometric problems. Basics of pseudorandomness and randomized complexity classes. Prerequisite: CS 473; MATH 461 or STAT 400.",
"creditHoursStr": "4 hours",
"instructors": [
"Chan, T",
"Har-Peled, S"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 575,
"title": "Methods of Combinatorics",
"description": "Same as MATH 584. See MATH 584.",
"creditHoursStr": "4 hours",
"instructors": [
"Balog, J",
"Balogh, J"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 576,
"title": "Topics in Automated Deduction",
"description": "Advanced topics in computer-aided methods for formal deduction, selected from areas of current research, such as: resolution theorem proving strategies, special relations, equational reasoning, unification theory, rewrite systems, mathematical induction, program derivation, hybrid inference systems, and programming with logic. May be repeated in separate terms. Prerequisite: As specified for each topic offering, see Schedule or departmental course description.",
"creditHoursStr": "2 TO 4 hours",
"instructors": [
"Meseguer, J"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 579,
"title": "Computational Complexity",
"description": "Turing machines; determinism and non-determinism; time and space hierarchy theorems; speed-up and tape compression; Blum axioms; structure of complexity classes NP, P, NL, L, and PSPACE; complete problems; randomness and complexity classes RP, RL, and BPP; alternation, polynomial-time hierarchy; circuit complexity, parallel complexity, NC, and RNC; relativized computational complexity; time-space trade-offs. Same as ECE 579. Prerequisite: CS 473 or CS 475.",
"creditHoursStr": "4 hours",
"instructors": [
"Forbes, M",
"Kolla, A"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 580,
"title": "Topics in Algorithmic Game Theory",
"description": "A theoretical CS course covering advances in algorithmic game theory. This includes study of strategic, computational, learning, dynamic, and fairness aspects of games and markets (organizations that involves rational and strategic agents). In particular, topics will include computation and complexity of equilibria, mechanism design, fair-division, dynamics in games and markets, price-of-anarchy etc.. These topics arise from applications such as online marketplaces (like Lyft, Uber, eBay, sponsored search, TaskRabbit), social networks, recommendation systems, kidney exchange, spectrum auction, etc., and thereby will prepare students for related research and/or industry jobs. 4 graduate hours. No professional credit. Prerequisite: CS 473.",
"creditHoursStr": "4 hours",
"instructors": [
"Mehta, R"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 581,
"title": "Algorithmic Genomic Biology",
"description": "The purpose of the course is to give each student enough background and training in the area of algorithmic genomic biology so that each will be able to do research in this area, and publish papers. The main focus of the course is phylogeny (evolutionary tree) estimation, multiple sequence alignment, and genome-scale phylogenetics, which are problems that present very interesting challenges from a computational and statistical standpoint. Time permitting, we will also discuss computational problems in microbiome analysis, protein function and structure prediction, genome assembly, and even historical linguistics. Students will learn the mathematical and computational foundations in these areas, read the current literature, and do a team research project. The course is designed for doctoral students in computer science, computer engineering, bioengineering, mathematics, and statistics, and does not depend on any prior background in biology. The technical material will depend on discrete algorithms, graph theory, simulations, and probabilistic analysis of algorithms. 4 graduate hours. No professional credit. Prerequisite: CS 374 and CS 361/STAT 361, or consent of instructor.",
"creditHoursStr": "4 hours",
"instructors": [
"Smirnov, V",
"Warnow, T"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 582,
"title": "Machine Learning for Bioinformatics",
"description": "This graduate course on bioinformatics introduces a selection of topics in computational biology and bioinformatics, with special emphasis on current problems in regulatory genomics and systems biology. Computational approaches discussed will focus on Machine Learning techniques such as Bayesian inference, graphical models, supervised learning and network analysis. Bioinformatics topics will be introduced through lectures by instructor and research paper presentations by students, and include regulatory sequence analysis, cistromics, epigenomics, regulatory network reconstruction, non-coding variant interpretation, and protein structure and function prediction. A research project involving real data analysis with techniques related to course content is mandatory and will help prepare students for bioinformatics research. 4 graduate hours. No professional credit. Prerequisite: CS 446; Credit or concurrent enrollment in CS 466; or consent of instructor.",
"creditHoursStr": "4 hours",
"instructors": [
"Sinha, S"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 583,
"title": "Approximation Algorithms",
"description": "Approximation algorithms for NP-hard problems. Basic and advanced techniques in approximation algorithm design: combinatorial algorithms; mathematical programming methods including linear and semi-definite programming, local search methods, and others. Algorithms for graphs and networks, constraint satisfaction, packing and scheduling. Prerequisite: CS 573 or consent of instructor.",
"creditHoursStr": "4 hours",
"instructors": [
"Chekuri, C"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 584,
"title": "Embedded System Verification",
"description": "Same as ECE 584. See ECE 584.",
"creditHoursStr": "4 hours",
"instructors": [
"Mitra, S"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 586,
"title": "Combinatorial Optimization",
"description": "Same as IE 519. See IE 519.",
"creditHoursStr": "4 hours",
"instructors": [
"Chandrasekaran, K",
"Chekuri, C"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 588,
"title": "Autonomous Vehicle System Engineering",
"description": "Will introduce students to the computational principles involved in autonomous vehicles, with practical labwork on an actual vehicle. Sensing topics will include vision, lidar and sonar sensing, including state-of-the-art methods for detection, classification, and segmentation. Bayesian filtering methods will be covered in the context of both SLAM and visual tracking. Planning and control topics will cover vehicle dynamics models, state-lattice planning, sampling-based kinodynamic planning, optimal control and trajectory optimization, and some reinforcement learning. Evaluation will involve ambitious challenge projects implemented on a physical vehicle. 4 graduate hours. No professional credit. Prerequisite: CS 374, ECE 374, ECE 484, or equivalent.",
"creditHoursStr": "4 hours",
"instructors": [
"Forsyth, D"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 591,
"title": "Advanced Seminar",
"description": "Seminar on topics of current interest as announced in the Class Schedule. Approved for S/U grading only. May be repeated in the same or separate terms if topics vary. Prerequisite: As specified for each topic offering, see Class Schedule or departmental course description.",
"creditHoursStr": "0 TO 4 hours",
"instructors": [
"Adve, V",
"Alagappan, R",
"Amato, N",
"Bailey, B",
"Beckman, A",
"Beckman, M",
"Campbell, R",
"Chan, A",
"Chekuri, C",
"Chen, Y",
"Cobb, C",
"Cunningham, K",
"El-Kebir, M",
"Erickson, J",
"Fletcher, C",
"Forsyth, D",
"Ganesan, A",
"Garzaran, M",
"Geigle, C",
"George, K",
"Gertner, Y",
"Ghose, S",
"Goodman, M",
"Gunter, E",
"Gupta, I",
"Heath, M",
"Herman, G",
"Hudson, M",
"Jabbarvand Behrouz, R",
"Johnson, B",
"Kale, L",
"Kalim, F",
"Karahalios, K",
"Kirlik, A",
"Kloeckner, A",
"Kravets, R",
"Lewis, C",
"Marinov, D",
"Massung, S",
"Mendis, C",
"Meseguer, J",
"Misailovic, S",
"Mohan, S",
"Olson, L",
"Padua, D",
"Rauchwerger, L",
"Ren, L",
"Sha, L",
"Singh, G",
"Viswanathan, M",
"Warnow, T",
"Williams, T",
"Wright, A",
"Xie, T",
"Xu, T",
"Zhai, C",
"Zhang, L",
"Zilles, C"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 597,
"title": "Individual Study",
"description": "Individual study or reading in a subject not covered in normal course offerings. May be repeated. Prerequisite: Consent of instructor.",
"creditHoursStr": "2 TO 16 hours",
"instructors": [
"Campbell, R",
"Singh, G"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 598,
"title": "Special Topics",
"description": "Subject offerings of new and developing areas of knowledge in computer science intended to augment the existing curriculum. See Class Schedule or departmental course information for topics and prerequisites. May be repeated in the same or separate terms if topics vary.",
"creditHoursStr": "2 TO 4 hours",
"instructors": [
"Abdelzaher, T",
"Adve, S",
"Adve, V",
"Agha, G",
"Alagappan, R",
"Banerjee, A",
"Bashir, M",
"Bates, A",
"Borisov, N",
"Caccamo, M",
"Campbell, R",
"Chacko, G",
"Chan, T",
"Chandrasekharan, E",
"Chang, K",
"Chekuri, C",
"Choi, D",
"Cobb, C",
"De, S",
"Delgosha, P",
"El-Kebir, M",
"Erickson, J",
"Farivar, R",
"Fletcher, C",
"Forbes, M",
"Forsyth, D",
"Ganesan, A",
"Geigle, C",
"Ghose, S",
"Gui, L",
"Gunter, C",
"Guo, H",
"Gupta, I",
"Gupta, S",
"Han, J",
"Har-Peled, S",
"Hauser, K",
"Heath, D",
"Herman, G",
"Hoiem, D",
"Jabbarvand Behrouz, R",
"Ji, H",
"Jiang, N",
"Kale, L",
"Karahalios, K",
"Khurana, D",
"Kirlik, A",
"Kloeckner, A",
"Koyejo, O",
"Kumar, R",
"Lavalle, S",
"Lazebnik, S",
"Lewis, C",
"Li, B",
"Liang, F",
"Marinov, D",
"Mehta, R",
"Mendis, C",
"Miller, A",
"Misailovic, S",
"Mittal, R",
"Nahrstedt, K",
"Olson, L",
"Padua, D",
"Parameswaran, A",
"Park, T",
"Parthasarathy, M",
"Peng, J",
"Rauchwerger, L",
"Ray Chaudhury, B",
"Ren, L",
"Renear, A",
"Ringer, T",
"Rosu, G",
"Sha, L",
"Singh, G",
"Sinha, S",
"Sirignano, J",
"Smaragdis, P",
"Snir, M",
"Solomonik, E",
"Soltanaghai, E",
"Sun, J",
"Sundaram, H",
"Telgarsky, M",
"Tong, H",
"Torrellas, J",
"Vasisht, D",
"Viswanathan, M",
"Wang, G",
"Wang, S",
"Wang, Y",
"Xu, T",
"Zhai, C",
"Zhang, L",
"Zhao, H",
"Zhu, R"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
},
{
"subjectCode": "CS",
"courseNumber": 599,
"title": "Thesis Research",
"description": "Approved for S/U grading only. May be repeated.",
"creditHoursStr": "0 TO 16 hours",
"instructors": [
"Amato, N"
],
"difficulty": 69,
"reviews": 69,
"avgGPA": 69,
"Rating": 69
}
];