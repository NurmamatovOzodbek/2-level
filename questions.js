const questions = [
  {
    id: 1,
    module: 1,
    type: "true_false",
    question:
      "For each statement about portable media device security, select True or False.",
    statements: [
      {
        text: "You should disable the Autorun and Autoplay features for all removable media devices.",
        correct: "True",
      },
      {
        text: "You should keep your work and personal files on separate media devices and never plug a personal device into a work computer or vice versa.",
        correct: "True",
      },
      {
        text: "If you find a media storage device and don't know who it belongs to, plug the device into your computer to find information about its owner.",
        correct: "False",
      },
    ],
  },
  {
    id: 2,
    module: 1,
    type: "single",
    question:
      "You need to change the speed of the mouse cursor as it moves across your computer screen. Which option should you choose?",
    options: [
      "A. Natural scrolling",
      "B. Secondary click",
      "C. Tracking speed",
      "D. Double-Click Speed",
    ],
    correct: [2],
  },
  {
    id: 3,
    module: 1,
    type: "single",
    question:
      "You need to create a calendar event for a regular lunch meeting that will happen every Wednesday. Which option should you choose?",
    options: [
      "A. Time zone dropdown",
      "B. Does not repeat dropdown",
      "C. Find a time tab",
      "D. Save button",
    ],
    correct: [1],
  },
  {
    id: 4,
    module: 1,
    type: "true_false",
    question: "For each statement about cloud computing, select True or False.",
    statements: [
      {
        text: "Cloud-based applications must be manually updated.",
        correct: "False",
      },
      {
        text: "Cloud-based storage and applications have no possibility of service outage.",
        correct: "False",
      },
      {
        text: "You can access files in cloud storage from anywhere if you are connected to the internet.",
        correct: "True",
      },
    ],
  },
  {
    id: 5,
    module: 1,
    type: "single",
    question:
      "Large groups of remote servers can be networked to allow sharing of data-processing tasks, centralized data storage, and online access to computer services. What is this technology called?",
    options: [
      "A. Cloud computing",
      "B. Cloud data storage",
      "C. Virtual private network (VPN)",
      "D. Virtual machine (VM)",
    ],
    correct: [0],
  },
  {
    id: 6,
    module: 1,
    type: "single",
    question:
      "You connect headphones to your computer, but sound still comes through the computer speakers. What should you do?",
    options: [
      "A. Manage output devices.",
      "B. Manage input devices.",
      "C. Mute your computer speakers.",
      "D. Configure Ease of Access audio settings.",
    ],
    correct: [0],
  },
  {
    id: 7,
    module: 1,
    type: "checkbox",
    question:
      "You are working on your laptop computer in a sunny outdoor area. You need to minimize eyestrain. Which two display settings should you adjust first? (Choose 2.)",
    options: [
      "A. Brightness",
      "B. Contrast",
      "C. Sharpness",
      "D. Scale",
      "E. Orientation",
    ],
    correct: [0, 1],
  },
  {
    id: 8,
    module: 1,
    type: "single",
    question:
      "What is the benefit of selecting a printer as the system default?",
    options: [
      "A. The default printer will automatically be selected when you click Print.",
      "B. The default printer will remain powered on at all times.",
      "C. The default printer can notify you when it is low on ink or toner.",
      "D. The default printer can receive print jobs from any device connected to the internet.",
    ],
    correct: [0],
  },
  {
    id: 9,
    module: 1,
    type: "true_false",
    question:
      "For each statement about the difference between CPUs and GPUs, select True or False.",
    statements: [
      {
        text: "You typically upgrade a laptop GPU by replacing the display.",
        correct: "False",
      },
      {
        text: "Some CPUs have a built-in GPU and don't rely on a graphics card.",
        correct: "True",
      },
      {
        text: "Many modern computers and game systems have only a GPU and not a CPU.",
        correct: "False",
      },
      {
        text: "Modern GPUs run increasingly complex workloads, including deep learning and artificial intelligence.",
        correct: "True",
      },
    ],
  },
  {
    id: 10,
    module: 1,
    type: "single",
    question:
      "You have separate Google accounts for school and personal use. You are logged into your personal account and need to access a file shared with your school account. What should you do?",
    options: [
      "A. Switch from your personal Google account to your school account.",
      "B. Configure both accounts to use the same password.",
      "C. Share the file with your personal Google account.",
      "D. Copy the contents of the file into your personal account.",
    ],
    correct: [0],
  },
  {
    id: 11,
    module: 1,
    type: "single",
    question:
      "You are applying for a job in your chosen career field. What should you do to support your professional online profile?",
    options: [
      "A. Restrict access to the profile to maintain privacy.",
      "B. Include your salary history and expectations.",
      "C. Update the profile regularly to showcase your skills.",
      "D. Include information about personal activities to demonstrate balance.",
    ],
    correct: [2],
  },
  {
    id: 12,
    module: 1,
    type: "single",
    question:
      "A student sends an email to reschedule an interview. Which element of the email message displays appropriate email etiquette?",
    options: [
      "A. Greeting",
      "B. Capitalization",
      "C. Punctuation",
      "D. Grammar",
    ],
    correct: [0],
  },
  {
    id: 13,
    module: 1,
    type: "single",
    question: "Which practice should be used when sharing photos online?",
    options: [
      "A. Add captions that provide context to the photos.",
      "B. Always tag everyone in the photo to make sure they see it.",
      "C. Share photos on your public account of your friends and family.",
      "D. Always include the names of everyone in the photo to give proper credit.",
    ],
    correct: [0],
  },
  {
    id: 14,
    module: 1,
    type: "checkbox",
    question:
      "You see an interesting picture on a website and want to share it. Which two actions are examples of appropriate digital etiquette? (Choose 2.)",
    options: [
      "A. Share the picture, giving credit to the content creator.",
      "B. Reach out to the content creator to ask for permission.",
      "C. Modify the picture before posting it on your social media.",
      "D. Take a screenshot and share it on your social media.",
    ],
    correct: [0, 1],
  },
  {
    id: 15,
    module: 1,
    type: "true_false",
    question:
      "You are using a new software program. For each resource, select Yes if you could use it to find help or No if you could not.",
    statements: [
      { text: "The Help feature within the program", correct: "Yes" },
      { text: "The software installation instructions", correct: "No" },
      { text: "An online forum dedicated to the software", correct: "Yes" },
      { text: "The LinkedIn page for the software company", correct: "No" },
    ],
  },
  {
    id: 16,
    module: 1,
    type: "true_false",
    question:
      "You are doing research for a school project about sharks. For each resource, select Yes if it is a reliable and citable source or No if it is not.",
    statements: [
      {
        text: "An interview with a person who survived a shark attack",
        correct: "Yes",
      },
      {
        text: "An online resource like Encyclopedia Britannica",
        correct: "Yes",
      },
      { text: "Your classmates", correct: "No" },
      { text: "Articles from Google Scholar", correct: "Yes" },
    ],
  },
  {
    id: 17,
    module: 1,
    type: "matching",
    question:
      "Move each description from the list on the left to the corresponding Boolean search string on the right.",
    mappings: [
      {
        description: "Returns results excluding one word",
        term: "buffalo NOT bison",
      },
      {
        description:
          "Returns results for either word if another word is included",
        term: "(fish OR turtles) AND pacific ocean",
      },
      {
        description: "Returns results for either word",
        term: "lions OR tigers",
      },
    ],
  },
  {
    id: 18,
    module: 1,
    type: "true_false",
    question:
      "You are preparing to write a research paper. For each statement, select Yes if you should consider it when determining the credibility of the study or No if you should not.",
    statements: [
      { text: "The popularity of the study", correct: "No" },
      { text: "The organization that funded the study", correct: "Yes" },
      { text: "The entity that published the study results", correct: "Yes" },
    ],
  },
  {
    id: 19,
    module: 1,
    type: "single",
    question:
      "You enter the search term 'Do snakes make good pets?' into your web browser. Which search result presents a different perspective from the other three?",
    options: [
      "A. Do Snakes Make Good Pets? - www.snakerights.org (Snakes are wild animals and should never be kept as pets)",
      "B. 11 Best Pet Snakes for Beginners - www.petchronicles.com",
      "C. How to Choose the Best Pet Snake for You - www.vetmed.famu.edu",
      "D. Snakes as Pets - www.petilom.com",
    ],
    correct: [0],
  },
  {
    id: 20,
    module: 1,
    type: "single",
    question: "Which statement about filling out online forms is true?",
    options: [
      "A. Microsoft Forms can be filled out by people outside of the creator's organization.",
      "B. Filling out Microsoft Forms requires an Office 365 license.",
      "C. Filling out an online PDF form requires an Adobe Acrobat license.",
      "D. Google Forms always require that you provide an email address.",
    ],
    correct: [0],
  },
  {
    id: 21,
    module: 1,
    type: "matching",
    question:
      "Move each presentation term from the list on the left to its definition on the right.",
    mappings: [
      {
        description: "A file that contains ready-made styles",
        term: "Template",
      },
      {
        description: "A special effect used to introduce slides",
        term: "Transition",
      },
      {
        description:
          "A slide that controls the design of the associated slide layouts",
        term: "Master",
      },
      {
        description:
          "A visual effect that moves placeholders, text, and images on and off slides",
        term: "Animation",
      },
    ],
  },
  {
    id: 22,
    module: 1,
    type: "single",
    question:
      "What is the primary purpose of using heading styles in a document?",
    options: [
      "A. To create structure and enable a table of contents",
      "B. To change the font size for visual differentiation",
      "C. To add color for emphasis throughout the text",
      "D. To highlight important keywords in the document",
    ],
    correct: [0],
  },
  {
    id: 23,
    module: 1,
    type: "single",
    question:
      "You need to permanently implement the corrections in your document. Which button should you select on the Word ribbon?",
    options: ["A. Track Changes", "B. Accept", "C. Reject", "D. Compare"],
    correct: [1],
  },
  {
    id: 24,
    module: 1,
    type: "single",
    question:
      "Which digital presentation strategy would best engage the audience?",
    options: [
      "A. Use slide transitions that complement the presentation's theme.",
      "B. Apply animations to all elements to keep the audience engaged.",
      "C. Animate only text elements, leaving any images static.",
      "D. Avoid using any transitions or animations to prevent distraction.",
    ],
    correct: [0],
  },
  {
    id: 25,
    module: 1,
    type: "single",
    question: "What is the primary advantage of using file compression?",
    options: [
      "A. Faster data transfer",
      "B. Increased file size",
      "C. Decreased file security",
      "D. Improved file readability",
    ],
    correct: [0],
  },
  {
    id: 26,
    module: 1,
    type: "checkbox",
    question:
      "Which two statements about permissions of a locally stored word processing document are true? (Choose 2.)",
    options: [
      "A. Read-only permission allows viewing but not modifications.",
      "B. Read-write permission allows changes to the document content.",
      "C. The default permission for any new document is read-only.",
      "D. Read-only permission prevents creating a new copy of the document.",
    ],
    correct: [0, 1],
  },
  {
    id: 27,
    module: 1,
    type: "checkbox",
    question:
      "What are two signs that an article presents a biased view? (Choose 2.)",
    options: [
      "A. The author supports their ideas by providing anecdotal data instead of verified statistics.",
      "B. The author states that authors of an opposing article are radical and therefore not able to understand the topic.",
      "C. The author addresses the opposing view in a respectful, professional manner.",
      "D. The article is published in a small newspaper, not a well-known academic journal.",
    ],
    correct: [0, 1],
  },
  {
    id: 28,
    module: 1,
    type: "checkbox",
    question:
      "Which two visual unity guidelines should you tell your friend to follow for a PowerPoint presentation? (Choose 2.)",
    options: [
      "A. Apply the design principles of repetition, alignment, and proximity.",
      "B. Maintain consistency across all presentation elements.",
      "C. Use a wide variety of fonts, colors, and backgrounds on each slide.",
      "D. Center the text and visual elements on each slide.",
    ],
    correct: [0, 1],
  },
  {
    id: 29,
    module: 1,
    type: "single",
    question:
      "How can AI potentially help content creators achieve their goals at TechTrends?",
    options: [
      "A. By analyzing data and generating insights to help make content",
      "B. By providing biased data inputs, resulting in content focused on only specific perspectives",
      "C. By replacing human creativity and unique writing styles with standardized content",
      "D. By analyzing competitors' content and replicating their style",
    ],
    correct: [0],
  },
  {
    id: 30,
    module: 1,
    type: "matching",
    question:
      "Match each file extension to its corresponding file format description.",
    mappings: [
      {
        description:
          "A compressed video that is optimal for devices with limited storage space",
        term: ".mp4",
      },
      {
        description:
          "A compressed audio file that is optimal for devices such as tablets and smartphones",
        term: ".mp3",
      },
      {
        description:
          "A digital audio container for storing compressed or uncompressed audio data, often used for CD audio",
        term: ".wav",
      },
    ],
  },
  {
    id: 31,
    module: 1,
    type: "single",
    question:
      "A school principal needs to send an email about punctuality to all parents efficiently. What should the principal do?",
    options: [
      "A. Send one message to all parents using the Bcc field.",
      "B. Send one message to all parents using the Cc field.",
      "C. Send one message to a contact group that includes only the students' email addresses.",
      "D. Send a message to the parent of each student who has been tardy.",
    ],
    correct: [0],
  },
  {
    id: 32,
    module: 1,
    type: "checkbox",
    question:
      "You receive an email that a team project due date has changed. Which two best practices should you follow? (Choose 2.)",
    options: [
      "A. Take your time to write a thoughtful response.",
      "B. Add the rest of your team on the CC line when you reply.",
      "C. Use reply-all to let the entire team know about the changes.",
      "D. Send a thumbs-up reaction to show you received the email.",
    ],
    correct: [1, 2],
  },
  {
    id: 33,
    module: 1,
    type: "checkbox",
    question: "Which three services are audio streaming services? (Choose 3.)",
    options: [
      "A. Pandora",
      "B. SiriusXM",
      "C. Spotify",
      "D. TikTok",
      "E. Snapchat",
      "F. Instagram",
    ],
    correct: [0, 1, 2],
  },
  {
    id: 34,
    module: 1,
    type: "matching",
    question: "Classify each item as Goods or Services.",
    mappings: [
      { description: "Bluetooth headset", term: "Goods" },
      { description: "Cloud storage", term: "Services" },
      { description: "Network router", term: "Goods" },
      { description: "Software subscription", term: "Services" },
    ],
  },
  {
    id: 35,
    module: 1,
    type: "matching",
    question:
      "In what sequence should the actions for collaborative document creation be performed?",
    mappings: [
      {
        description: "Step 1",
        term: "Create the proposal document and upload it to cloud storage.",
      },
      {
        description: "Step 2",
        term: "Share a link to the document with your partner.",
      },
      {
        description: "Step 3",
        term: "Add comments and track changes in the document.",
      },
      {
        description: "Step 4",
        term: "Review and accept or reject comments and changes.",
      },
    ],
  },
  {
    id: 36,
    module: 1,
    type: "matching",
    question:
      "Move each digital collaboration tool from the list on the left to its description on the right.",
    mappings: [
      {
        description:
          "Collaborators can edit files at the same time and automatically save their changes.",
        term: "Cloud file sharing",
      },
      {
        description:
          "Collaborators can simultaneously brainstorm, review, and edit visual information by writing, drawing, and inserting images.",
        term: "Online whiteboard",
      },
      {
        description:
          "Collaborators participate in learning activities and immediately share reactions, interpretations, and ideas.",
        term: "Webinar",
      },
    ],
  },
  {
    id: 37,
    module: 1,
    type: "checkbox",
    question: "What are three benefits of working collaboratively? (Choose 3.)",
    options: [
      "A. Team members evenly share the workload.",
      "B. It develops interpersonal relationships among peers.",
      "C. Collaboration encourages rigorous academic discussion.",
      "D. It sharpens problem-solving and time-management skills.",
      "E. Collaboration allows for a valid assessment of all learners.",
    ],
    correct: [1, 2, 3],
  },
  {
    id: 38,
    module: 1,
    type: "checkbox",
    question:
      "You are digitally peer reviewing a classmate's report and find an error. Which two actions should you take? (Choose 2.)",
    options: [
      "A. Use the comment feature to point out the error.",
      "B. Add constructive tips on how to fix the mistake.",
      "C. Screenshot the error and share it on social media.",
      "D. Insert a link to Wikipedia showing the correct information.",
    ],
    correct: [0, 1],
  },
  {
    id: 39,
    module: 1,
    type: "true_false",
    question:
      "For each statement about digital feedback, select Yes if the behavior meets digital etiquette standards or No if it does not.",
    statements: [
      {
        text: "Correct other people whenever their opinions and ideas are wrong",
        correct: "No",
      },
      {
        text: "Give fair criticism and constructive feedback, phrasing it respectfully.",
        correct: "Yes",
      },
      {
        text: "Use abbreviations, slang, and emojis to give comments personality.",
        correct: "No",
      },
      {
        text: "Use good grammar and spelling so comments are easy to understand.",
        correct: "Yes",
      },
    ],
  },
  {
    id: 40,
    module: 1,
    type: "checkbox",
    question:
      "Which three reasons show why social media challenges can be a problem for teens? (Choose 3.)",
    options: [
      "A. Fear of missing out can lead teens to act without considering possible consequences.",
      "B. Even challenges that seem harmless can cause harm that requires medical attention.",
      "C. Completing internet challenges can lead to an increase in social media followers.",
      "D. Attention-seeking behavior can encourage even more hazardous versions of a challenge.",
      "E. Participating in social media challenges can cause a rise in self-esteem for many teens.",
    ],
    correct: [0, 1, 3],
  },
  {
    id: 41,
    module: 1,
    type: "checkbox",
    question:
      "What are two universal design principles for computing hardware? (Choose 2.)",
    options: [
      "A. Equitable use: The design is useful and marketable to people with diverse abilities.",
      "B. Size and space for approach and use: Provides space regardless of user's size, posture, or mobility.",
      "C. Easy to keep clean: Minimizes the use of lighter colors.",
      "D. Internet of Things connected: Implements online functionality whenever possible.",
    ],
    correct: [0, 1],
  },
  {
    id: 42,
    module: 1,
    type: "checkbox",
    question:
      "Bryce is experiencing anxiety due to fear of missing out (FOMO). What are two symptoms or effects of his FOMO? (Choose 2.)",
    options: [
      "A. He needs to understand all the 'in jokes' his friends post on social media.",
      "B. Whenever he enjoys an activity, he must immediately update his status online.",
      "C. He becomes nervous when giving a presentation in front of his classmates.",
      "D. He worries that his grades will suffer if he does not complete his homework.",
    ],
    correct: [0, 1],
  },
  {
    id: 43,
    module: 1,
    type: "checkbox",
    question:
      "Which three are effective strategies for maintaining mental well-being while using technology? (Choose 3.)",
    options: [
      "A. Balance screen time with analog activities.",
      "B. Make time for regular face-to-face interactions.",
      "C. Take breaks from screens throughout the day.",
      "D. Stay up to date by checking social media often.",
      "E. Set notifications for every app on your device.",
    ],
    correct: [0, 1, 2],
  },
  {
    id: 44,
    module: 1,
    type: "true_false",
    question: "For each statement about webcam security, select True or False.",
    statements: [
      {
        text: "It is recommended that everyone cover their webcam when not in use.",
        correct: "True",
      },
      {
        text: "All webcams include a recording light that cannot be disabled through software.",
        correct: "False",
      },
      {
        text: "Disabling a webcam in your computer settings protects against any unauthorized access.",
        correct: "False",
      },
    ],
  },
  {
    id: 45,
    module: 1,
    type: "single",
    question:
      "Select the option that allows you to prevent unauthorized access to Windows files or folders.",
    options: [
      "A. File is ready for archiving",
      "B. Allow this file to have contents indexed in addition to file properties",
      "C. Compress contents to save disk space",
      "D. Encrypt contents to secure data",
    ],
    correct: [3],
  },
];
const module2Questions = [
  {
    id: 101,
    module: 2,
    type: "true_false",
    question:
      "For each of the three statements about web browsers, select Yes if the action is possible or No if it is not.",
    statements: [
      { text: "Customize buttons, menus, or toolbars.", correct: "True" },
      { text: "Change the default home page.", correct: "True" },
      {
        text: "Add plug-ins and extensions to a browser to increase functionality.",
        correct: "True",
      },
    ],
  },
  {
    id: 102,
    module: 2,
    type: "checkbox",
    question:
      "You need to add next month's Student Government meeting to your calendar. Which two elements can you select to open the event dialog box? (Choose 2.)",
    options: [
      "A. Create button",
      "B. March 8 on primary calendar",
      "C. Month dropdown",
      "D. Today button",
    ],
    correct: [0, 1],
  },
  {
    id: 103,
    module: 2,
    type: "true_false",
    question:
      "For each statement about macros in an Excel workbook, select True or False.",
    statements: [
      {
        text: "Each macro is saved as an individual text file.",
        correct: "False",
      },
      {
        text: "You can create a macro by writing a script in a scripting editor.",
        correct: "True",
      },
      {
        text: "Macros are sequences of events that can be played back to help with repetitive tasks.",
        correct: "True",
      },
      {
        text: "You can create a macro by recording a series of commands, keystrokes, and mouse clicks.",
        correct: "True",
      },
    ],
  },
  {
    id: 104,
    module: 2,
    type: "single",
    question: "Which statement describes saving files to the cloud?",
    options: [
      "A. Saving files with a service that allows access from any device",
      "B. Saving files on your computer's hard drive",
      "C. Sharing files with friends using email",
      "D. Storing files on a USB drive that you can share with others",
    ],
    correct: [0],
  },
  {
    id: 105,
    module: 2,
    type: "true_false",
    question:
      "For each of the three statements about encryption as it relates to your device and personal internet usage, indicate whether it is True or False.",
    statements: [
      {
        text: "Using a Virtual Private Network (VPN) will make you completely anonymous on the internet.",
        correct: "False",
      },
      {
        text: "Biometric verification and passcodes are two security methods commonly used for device encryption.",
        correct: "True",
      },
      {
        text: "In End-to-End encryption, information is encrypted on the originating device and only decrypted once it arrives on the target device.",
        correct: "True",
      },
    ],
  },
  {
    id: 106,
    module: 2,
    type: "single",
    question:
      "You connect headphones to your computer, but sound still comes through the computer speakers. What should you do?",
    options: [
      "A. Manage output devices.",
      "B. Manage input devices.",
      "C. Mute your computer speakers.",
      "D. Configure Ease of Access audio settings.",
    ],
    correct: [0],
  },
  {
    id: 107,
    module: 2,
    type: "single",
    question:
      "The content shown on your computer monitor is difficult to see. The dark areas are too dark, and the bright areas are too bright. Which monitor setting should you adjust?",
    options: [
      "A. Contrast",
      "B. Brightness",
      "C. Input Source",
      "D. Sharpness",
    ],
    correct: [0],
  },
  {
    id: 108,
    module: 2,
    type: "true_false",
    question:
      "For each statement, select True if it is a method of confirming a successful connection to a printer or False if it is not.",
    statements: [
      {
        text: "For a direct-connected printer, replace the connection cable with a CAT6 cable.",
        correct: "False",
      },
      {
        text: "Check the status of the printer connection in the Printers & Scanners setting window.",
        correct: "True",
      },
      {
        text: "For an Ethernet-connected printer, ensure that the Ethernet cable is connected directly to the computer instead of through a switch or router.",
        correct: "False",
      },
    ],
  },
  {
    id: 109,
    module: 2,
    type: "true_false",
    question:
      "For each statement about central processing units (CPUs), select True or False.",
    statements: [
      {
        text: "Most modern CPUs are built to support 64-bit systems.",
        correct: "True",
      },
      {
        text: "When properly used, CPUs typically have an attached air cooler or liquid cooler.",
        correct: "True",
      },
      {
        text: "The CPU speed affects the frames per second (fps) rendered in a 3D game.",
        correct: "True",
      },
    ],
  },
  {
    id: 110,
    module: 2,
    type: "true_false",
    question:
      "For each of the four statements about best practices for social media accounts, determine whether each is True or False.",
    statements: [
      {
        text: "Maintain separate personal and professional social presences.",
        correct: "True",
      },
      {
        text: "Minimal privacy settings increase appropriate traffic engagement to both personal and professional accounts.",
        correct: "False",
      },
      {
        text: "In your professional online presence, engage publicly as much as possible, even if you're not 100% confident about the topic.",
        correct: "False",
      },
      {
        text: "Consider yourself a personality: treat both personal and professional accounts as part of the same goal.",
        correct: "False",
      },
    ],
  },
  {
    id: 111,
    module: 2,
    type: "single",
    question:
      "You have separate Google accounts for school and personal use. You are logged into your personal account and need to access a file shared with your school account. What should you do?",
    options: [
      "A. Switch from your personal Google account to your school account.",
      "B. Configure both accounts to use the same password.",
      "C. Share the file with your personal Google account.",
      "D. Copy the contents of the file into your personal account.",
    ],
    correct: [0],
  },
  {
    id: 112,
    module: 2,
    type: "matching",
    question:
      "Match each type of question to the appropriate method of contacting your supervisor late at night.",
    mappings: [
      {
        description:
          "An emergency situation that your supervisor needs to be aware of immediately",
        term: "Call or text your supervisor on their cell phone.",
      },
      {
        description:
          "A personal situation that you would like your supervisor's opinion on",
        term: "Speak to your supervisor in person during a break the next day.",
      },
      {
        description:
          "A general work-related question that does not require an immediate answer",
        term: "Send an email to your supervisor and schedule its delivery for 9:00 the next morning.",
      },
    ],
  },
  {
    id: 113,
    module: 2,
    type: "single",
    question:
      "You take a video of a friend doing a silly dance during a party. How should you share the video demonstrating good digital etiquette?",
    options: [
      "A. Send the video directly to the friend who was dancing and allow them to share it with others.",
      "B. Send the video only to the people who attended the party and ask them not to share it with anyone else.",
      "C. Share the video on social media, under privacy settings that allow only your followers to see it.",
      "D. Share the video on social media with public viewing access.",
    ],
    correct: [0],
  },
  {
    id: 114,
    module: 2,
    type: "single",
    question:
      "A user adds a negative or critical comment in response to original content you posted online. How should you respond?",
    options: [
      "A. Respond with respect, even if you disagree.",
      "B. Only reply if you agree with the comment.",
      "C. Delete comments that you don't agree with.",
      "D. Reply with emojis to show you disagree.",
    ],
    correct: [0],
  },
  {
    id: 115,
    module: 2,
    type: "true_false",
    question:
      "You are using a new software program. For each resource, select Yes if you could use it to find help or No if you could not.",
    statements: [
      { text: "The Help feature within the program", correct: "Yes" },
      { text: "The software installation instructions", correct: "No" },
      { text: "The LinkedIn page for the software company", correct: "No" },
      { text: "An online forum dedicated to the software", correct: "Yes" },
    ],
  },
  {
    id: 116,
    module: 2,
    type: "checkbox",
    question:
      "What are two ways students can improve their ability to use assigned software features? (Choose 2.)",
    options: [
      "A. Teach someone else to use it.",
      "B. Read an online review of a similar application.",
      "C. Try using the new feature.",
      "D. Use the built-in animated tool tips.",
    ],
    correct: [0, 2],
  },
  {
    id: 117,
    module: 2,
    type: "single",
    question:
      "Which term represents the main concepts you are searching for in a search engine?",
    options: ["A. Keywords", "B. Coverage", "C. Filters", "D. Context"],
    correct: [0],
  },
  {
    id: 118,
    module: 2,
    type: "true_false",
    question:
      "You need to research the impacts of online learning. For each statement, select Yes if the search result is relevant or No if it is not.",
    statements: [
      { text: "An article about the benefits of education", correct: "No" },
      {
        text: "A website offering educational resources for sale",
        correct: "No",
      },
      {
        text: "A graph comparing test scores of students in online and in-person educational systems",
        correct: "Yes",
      },
      {
        text: "An article in an educational magazine about teachers' online teaching experiences",
        correct: "Yes",
      },
    ],
  },
  {
    id: 119,
    module: 2,
    type: "checkbox",
    question:
      "What are two signs that an article presents a biased view? (Choose 2.)",
    options: [
      "A. The author supports their ideas by providing anecdotal data instead of verified statistics.",
      "B. The author states that authors of an opposing article are radical and therefore not able to understand the topic.",
      "C. The author addresses the opposing view in a respectful, professional manner.",
      "D. The article is published in a small newspaper, not a well-known academic journal.",
    ],
    correct: [0, 1],
  },
  {
    id: 120,
    module: 2,
    type: "single",
    question: "Which statement about filling out online forms is true?",
    options: [
      "A. Microsoft Forms can be filled out by people outside of the creator's organization.",
      "B. Filling out Microsoft Forms requires an Office 365 license.",
      "C. Filling out an online PDF form requires an Adobe Acrobat license.",
      "D. Google Forms always require that you provide an email address.",
    ],
    correct: [0],
  },
  {
    id: 121,
    module: 2,
    type: "matching",
    question:
      "Move each workbook element from the list on the left to the correct definition on the right.",
    mappings: [
      {
        description: "Area where you enter data and equations",
        term: "Formula bar",
      },
      {
        description: "Vertical series of cells, labeled with a letter",
        term: "Column",
      },
      {
        description:
          "Area that identifies and allows you to switch among worksheets in the file",
        term: "Sheet tab",
      },
      {
        description:
          "Area that displays information about the worksheet, worksheet content, and program",
        term: "Status bar",
      },
    ],
  },
  {
    id: 122,
    module: 2,
    type: "checkbox",
    question:
      "Which two keys are part of the 'home row' on a standard keyboard? (Choose 2.)",
    options: ["A. B", "B. D", "C. K", "D. Q", "E. X", "F. Y"],
    correct: [1, 2],
  },
  {
    id: 123,
    module: 2,
    type: "matching",
    question:
      "Move each basic video editing technique from the list on the left to the correct definition on the right.",
    mappings: [
      { description: "Join two video clips together", term: "Splice" },
      { description: "Hide portions of a video frame", term: "Crop" },
      { description: "Cut a video clip into two segments", term: "Split" },
      { description: "Remove the beginning and end of the clip", term: "Trim" },
    ],
  },
  {
    id: 124,
    module: 2,
    type: "single",
    question:
      "Which step should you take to insert page numbers into your document?",
    options: [
      "A. Use the header or footer to automatically add page numbers.",
      "B. Type the page number manually on each page.",
      "C. Only add page numbers to the first and last pages.",
      "D. Add page numbers in a sidebar next to the content.",
    ],
    correct: [0],
  },
  {
    id: 125,
    module: 2,
    type: "single",
    question:
      "Which two statements about permissions of a locally stored word processing document are true? (Choose 2.)",
    options: [
      "A. Read-only permission allows viewing but not modifications.",
      "B. Read-write permission allows changes to the document content.",
      "C. The default permission for any new document is read-only.",
      "D. Read-only permission prevents creating a new copy of the document.",
    ],
    correct: [0, 1],
  },
  {
    id: 126,
    module: 2,
    type: "single",
    question:
      "You need to send several high-resolution photos as an email attachment, but the file size is too large. Which action will make the files easier to share?",
    options: [
      "A. Compress the files into a .zip folder.",
      "B. Add the photos to a document file.",
      "C. Increase the resolution of each photo.",
      "D. Change the file format of each photo to .svg.",
    ],
    correct: [0],
  },
  {
    id: 127,
    module: 2,
    type: "matching",
    question:
      "Move each term from the list on the left to its description on the right.",
    mappings: [
      {
        description:
          "The ability to view the contents of a file but not modify it",
        term: "Read-Only File",
      },
      {
        description:
          "Settings that determine who can read, write, or execute a file",
        term: "File Permission",
      },
      {
        description:
          "The process of encoding data to prevent unauthorized access",
        term: "Encryption",
      },
      {
        description:
          "A file that can be viewed and modified by users with the appropriate permissions",
        term: "Read-Write File",
      },
      {
        description:
          "A security feature that restricts file access to users who enter the correct access code",
        term: "Password Protection",
      },
    ],
  },
  {
    id: 128,
    module: 2,
    type: "matching",
    question:
      "Move each positive or negative aspect of AI to its impact on the right.",
    mappings: [
      {
        description: "Creates specific content improving user engagement",
        term: "Personalization of content",
      },
      {
        description: "Reproduces biases that exist in the data it analyzes",
        term: "Ethical concerns",
      },
      {
        description:
          "Frees up time for computer users to focus on more strategic actions",
        term: "Automation of repetitive tasks",
      },
    ],
  },
  {
    id: 129,
    module: 2,
    type: "true_false",
    question:
      "For each statement about rules and regulations concerning intellectual property, indicate whether it is True or False.",
    statements: [
      {
        text: "The DMCA is a law intended to make it easier for copyright to be applied to original works by an artist.",
        correct: "True",
      },
      {
        text: "Fair Use and Public Domain govern the use of copyrighted materials for individual purposes, like teaching.",
        correct: "True",
      },
      {
        text: "Creative Commons standards include clear descriptions of what is required to use materials.",
        correct: "True",
      },
      {
        text: "Using copyrighted material, even if modified, is illegal under current copyright rules without permission.",
        correct: "True",
      },
    ],
  },
  {
    id: 130,
    module: 2,
    type: "matching",
    question:
      "Move each file extension from the list on the left to the correct description on the right.",
    mappings: [
      {
        description: "A text file that supports formatted text and graphics",
        term: ".rtf",
      },
      {
        description:
          "A text file that supports only plain text in a linear format",
        term: ".txt",
      },
      {
        description:
          "A highly compressed raster image file that supports multiple images in one file",
        term: ".gif",
      },
      {
        description:
          "A raster image file with lossless compression that supports transparent color-mapped images",
        term: ".png",
      },
    ],
  },
  {
    id: 131,
    module: 2,
    type: "true_false",
    question:
      "A student joins a social media community. Select Yes if it would be an appropriate way to interact or No if it would not.",
    statements: [
      {
        text: "Expect other community members to treat the information he shares as private.",
        correct: "No",
      },
      {
        text: "Introduce himself and provide his personal email address.",
        correct: "No",
      },
      {
        text: "Reply to a comment stating that he disagrees, in a respectful tone.",
        correct: "Yes",
      },
      {
        text: "Share a comment from the community with another group without stating who created it.",
        correct: "No",
      },
    ],
  },
  {
    id: 132,
    module: 2,
    type: "matching",
    question:
      "Move each file access permission type from the list on the left to its definition on the right.",
    mappings: [
      { description: "View or access the file content.", term: "Read" },
      {
        description: "Add data to the file and read or change its attributes.",
        term: "Write",
      },
      {
        description: "View file content, add data, and delete the file.",
        term: "Modify",
      },
      {
        description:
          "View or access the file content and run the file if it is a program.",
        term: "Read & Execute",
      },
    ],
  },
  {
    id: 133,
    module: 2,
    type: "checkbox",
    question: "Which three services are audio streaming services? (Choose 3.)",
    options: [
      "A. Pandora",
      "B. SiriusXM",
      "C. Spotify",
      "D. TikTok",
      "E. Snapchat",
      "F. Instagram",
    ],
    correct: [0, 1, 2],
  },
  {
    id: 134,
    module: 2,
    type: "matching",
    question:
      "Move each type of in-app purchase from the list on the left to its description on the right.",
    mappings: [
      {
        description: "Subscribe to a video streaming service",
        term: "Auto-renewable",
      },
      {
        description: "Unlock a special feature in a video game",
        term: "Non-consumable",
      },
      {
        description: "Purchase gems or coins for mobile games",
        term: "Consumable",
      },
      {
        description: "Rent an online movie through a streaming service",
        term: "Non-renewable",
      },
    ],
  },
  {
    id: 135,
    module: 2,
    type: "checkbox",
    question:
      "You are electronically reviewing the rough draft of a report written by a classmate. Which two methods should you use to provide constructive feedback? (Choose 2.)",
    options: [
      "A. Use the Comments feature.",
      "B. Suggest edits using Track Changes.",
      "C. Use capital letters to show what you would change.",
      "D. Discuss the changes verbally.",
    ],
    correct: [0, 1],
  },
  {
    id: 136,
    module: 2,
    type: "checkbox",
    question: "Which two communication methods are asynchronous? (Choose 2.)",
    options: [
      "A. Emailing",
      "B. Text messaging",
      "C. Telephoning",
      "D. Videoconferencing",
    ],
    correct: [0, 1],
  },
  {
    id: 137,
    module: 2,
    type: "checkbox",
    question:
      "Review the list of tools: Google Docs, Google Meet, Microsoft Teams, Dropbox. Which two features are shared by ALL of these tools? (Choose 2.)",
    options: [
      "A. Collaboration",
      "B. File storage",
      "C. Content creation",
      "D. Video chat",
    ],
    correct: [0, 1],
  },
  {
    id: 138,
    module: 2,
    type: "checkbox",
    question:
      "Which three actions should you take before presenting in a video conference? (Choose 3.)",
    options: [
      "A. Make sure the images in your presentation are school appropriate.",
      "B. Test and practice using the screen-sharing feature.",
      "C. Close any programs and browser tabs that you won't need.",
      "D. Present from outdoors to be in natural lighting.",
      "E. Let other students know that they can share screens simultaneously.",
    ],
    correct: [0, 1, 2],
  },
  {
    id: 139,
    module: 2,
    type: "true_false",
    question:
      "For each statement about digital feedback, select Yes if the behavior meets digital etiquette standards or No if it does not.",
    statements: [
      {
        text: "Correct other people whenever their opinions and ideas are wrong.",
        correct: "No",
      },
      {
        text: "Give fair criticism and constructive feedback, phrasing it respectfully.",
        correct: "Yes",
      },
      {
        text: "Use abbreviations, slang, and emojis to give comments personality.",
        correct: "No",
      },
      {
        text: "Use good grammar and spelling so comments are easy to understand.",
        correct: "Yes",
      },
    ],
  },
  {
    id: 140,
    module: 2,
    type: "true_false",
    question:
      "Your job requires you to work at a computer for several hours each day. For each action, select Yes if it will prevent eye strain or No if it will not.",
    statements: [
      { text: "Blink often.", correct: "Yes" },
      { text: "Work in a very dark room.", correct: "No" },
      {
        text: "Frequently change your focus from the computer screen to something at least six meters away from you.",
        correct: "Yes",
      },
      {
        text: "Position your monitor so it is an arm's length away from you and the top of the screen is at your eye level.",
        correct: "Yes",
      },
    ],
  },
  {
    id: 141,
    module: 2,
    type: "checkbox",
    question:
      "What are two universal design principles for computing hardware? (Choose 2.)",
    options: [
      "A. Tolerance for error: Minimize hazards and adverse consequences.",
      "B. Equitable use: The design is useful and marketable to people with diverse abilities.",
      "C. Keep costs low: Use less expensive parts whenever possible.",
      "D. Internet of Things connected: Implement online functionality whenever possible.",
    ],
    correct: [0, 1],
  },
  {
    id: 142,
    module: 2,
    type: "single",
    question:
      "A teenage neighbor creates a fake profile pretending to be a 40-year-old man, connects with neighbors, and sponsors a fake online fundraiser for herself. What is she doing?",
    options: ["A. Catfishing", "B. Cyberhacking", "C. Trolling", "D. Phishing"],
    correct: [0],
  },
  {
    id: 143,
    module: 2,
    type: "checkbox",
    question:
      "Which three are effective strategies for maintaining mental well-being while using technology? (Choose 3.)",
    options: [
      "A. Balance screen time with analog activities.",
      "B. Make time for regular face-to-face interactions.",
      "C. Take breaks from screens throughout the day.",
      "D. Stay up to date by checking social media often.",
      "E. Set notifications for every app on your device.",
    ],
    correct: [0, 1, 2],
  },
  {
    id: 144,
    module: 2,
    type: "checkbox",
    question:
      "In which two situations should you disable the camera on your online device? (Choose 2.)",
    options: [
      "A. When chatting with other players during a public online gaming session",
      "B. When watching a virtual college tour with hundreds of participants",
      "C. When participating in a distance learning class session",
      "D. When exchanging messages with distant relatives",
    ],
    correct: [0, 1],
  },
];

// Asosiy questions massiviga biriktirish:
questions.push(...module2Questions);
const module3Questions = [
  {
    id: 201,
    module: 3,
    type: "single",
    question:
      "You need to change the speed of the mouse cursor as it moves across your computer screen. Which option should you choose?",
    options: [
      "A. Natural scrolling",
      "B. Tracking speed",
      "C. Secondary click",
      "D. Double-Click Speed",
    ],
    correct: [1],
  },
  {
    id: 202,
    module: 3,
    type: "true_false",
    question:
      "As you're walking to your desk you see a USB drive on the floor. For each of the four statements about unknown USB drives, select whether it is True or False.",
    statements: [
      {
        text: "To find the owner you should plug the USB drive into your laptop.",
        correct: "False",
      },
      {
        text: "You should throw the USB drive in the trash without plugging it in.",
        correct: "True",
      },
      {
        text: "Plugging in the drive may expose your computer to harmful software.",
        correct: "True",
      },
      {
        text: "USB drives can cause physical damage to a computer's components.",
        correct: "False",
      },
    ],
  },
  {
    id: 203,
    module: 3,
    type: "single",
    question:
      "Mrs. Wilkins is working in a spreadsheet. In the first column, she enters a list of students. Partway through she notices that as she types the letter 'Y', the word 'Yes' appears automatically. Which feature caused this change?",
    options: ["A. AutoComplete", "B. AutoFill", "C. AutoFormat", "D. AutoFit"],
    correct: [0],
  },
  {
    id: 204,
    module: 3,
    type: "true_false",
    question: "For each statement about file encryption, select True or False.",
    statements: [
      {
        text: "Encrypting files decreases file access speed.",
        correct: "True",
      },
      {
        text: "All files in cloud storage are encrypted by default.",
        correct: "False",
      },
      {
        text: "You can open an encrypted file only on the computer on which it was encrypted.",
        correct: "False",
      },
    ],
  },
  {
    id: 205,
    module: 3,
    type: "single",
    question: "What is one advantage of using macros in software programs?",
    options: [
      "A. They automate repetitive tasks.",
      "B. They store files online automatically.",
      "C. They provide cloud storage services.",
      "D. They automatically correct spelling errors.",
    ],
    correct: [0],
  },
  {
    id: 206,
    module: 3,
    type: "single",
    question:
      "The content shown on your computer monitor is difficult to see (dark areas too dark, bright areas too bright). Which monitor setting should you adjust?",
    options: [
      "A. Contrast",
      "B. Brightness",
      "C. Input Source",
      "D. Sharpness",
    ],
    correct: [0],
  },
  {
    id: 207,
    module: 3,
    type: "checkbox",
    question:
      "What are two advantages of Universal Design environments? (Choose 2.)",
    options: [
      "A. UD environments are usable and marketable to everyone.",
      "B. They encourage interaction between people of different ages.",
      "C. They offer individual adaptations for people with disabilities.",
      "D. UD environments focus on increasingly multiethnic populations.",
    ],
    correct: [0, 2],
  },
  {
    id: 208,
    module: 3,
    type: "matching",
    question:
      "You need to identify the advantages of inkjet printers and laser printers. Move each advantage to the corresponding printer type.",
    mappings: [
      {
        description: "Environmentally friendly (Laser Printer)",
        term: "Laser Printer",
      },
      {
        description:
          "Documents are dry to the touch when printed (Laser Printer)",
        term: "Laser Printer",
      },
    ],
  },
  {
    id: 209,
    module: 3,
    type: "matching",
    question:
      "For each of the three actions, select whether you should use a USB-C or a CAT6 Ethernet cable.",
    mappings: [
      { description: "Connect a laptop to a projector", term: "USB-C" },
      { description: "Connect to the internet", term: "CAT6 Ethernet" },
      {
        description: "Charge Bluetooth devices (headphones, keyboards, etc.)",
        term: "USB-C",
      },
    ],
  },
  {
    id: 210,
    module: 3,
    type: "single",
    question:
      "You have separate Google accounts for school and personal use. You are logged into your personal account and need to access a file shared with your school account. What should you do?",
    options: [
      "A. Switch from your personal Google account to your school account.",
      "B. Configure both accounts to use the same password.",
      "C. Share the file with your personal Google account.",
      "D. Copy the contents of the file into your personal account.",
    ],
    correct: [0],
  },
  {
    id: 211,
    module: 3,
    type: "single",
    question:
      "You are applying for a job in your chosen career field. What should you do to support your professional online profile?",
    options: [
      "A. Restrict access to the profile to maintain privacy.",
      "B. Include your salary history and expectations.",
      "C. Update the profile regularly to showcase your skills.",
      "D. Include information about personal activities to demonstrate balance.",
    ],
    correct: [2],
  },
  {
    id: 212,
    module: 3,
    type: "true_false",
    question:
      "You find a social media post sharing inaccurate medical information. For each response, select Yes if it adheres to appropriate digital etiquette or No if it does not.",
    statements: [
      {
        text: '"Everyone knows this isn\'t true. Why are you spreading harmful rumors?"',
        correct: "No",
      },
      {
        text: '"Dr. Janae Johnson of Harvard Medical School has proven this idea is false."',
        correct: "Yes",
      },
      {
        text: '"Here\'s a list of current resources that may help to change your mind."',
        correct: "Yes",
      },
      {
        text: "\"You skipped Yale Med School's latest findings. I'm so tired of internet trolls!\"",
        correct: "No",
      },
    ],
  },
  {
    id: 213,
    module: 3,
    type: "checkbox",
    question:
      "Your teacher invites a guest speaker. You need to demonstrate good digital etiquette and show the speaker you are listening. Which two actions are appropriate? (Choose 2.)",
    options: [
      "A. Maintain eye contact and use appropriate body language to demonstrate your engagement.",
      "B. Use your tablet or laptop to take notes, while still making good eye contact with the speaker.",
      "C. Use your smartphone to take photos of the speaker to post on social media later.",
      "D. Use your tablet or phone to record the speaker's presentation in case you miss something.",
    ],
    correct: [0, 1],
  },
  {
    id: 214,
    module: 3,
    type: "checkbox",
    question:
      "You lead a team of people of differing beliefs, backgrounds, and ages. You plan to host a remote meeting using videoconferencing. Which two actions should you take to demonstrate good digital etiquette? (Choose 2.)",
    options: [
      "A. Use the videoconferencing platform's transcription tool so everyone can follow the conversation.",
      "B. Use features such as Raise Hand to provide opportunities for all team members to participate.",
      "C. Keep the team focused and avoid conflicts by limiting discussion to a list of only a few ideas.",
      "D. At the beginning of the meeting, ask younger team members to act as tech buddies for the older people.",
    ],
    correct: [0, 1],
  },
  {
    id: 215,
    module: 3,
    type: "checkbox",
    question:
      "You are offered an unpaid summer internship at a local technology firm before your senior year. What are two reasons to accept the internship? (Choose 2.)",
    options: [
      "A. Internships can make your college applications more competitive.",
      "B. The internship will let you develop your IT skills in a professional setting.",
      "C. The internship will allow you to manage an active IT data center.",
      "D. Internships can lead to an increase in social media followers.",
    ],
    correct: [0, 1],
  },
  {
    id: 216,
    module: 3,
    type: "true_false",
    question:
      "You are doing research for a school project about sharks. For each resource, select Yes if it is a reliable and citable source or No if it is not.",
    statements: [
      {
        text: "An interview with a person who survived a shark attack",
        correct: "Yes",
      },
      {
        text: "An online resource like Encyclopedia Britannica",
        correct: "Yes",
      },
      { text: "Your classmates", correct: "No" },
      { text: "Articles from Google Scholar", correct: "Yes" },
    ],
  },
  {
    id: 217,
    module: 3,
    type: "single",
    question:
      "You are writing a report about the War of 1812 and need to filter your search results to display only articles published in the past year. Which button can you select?",
    options: [
      "A. Tools button",
      "B. Settings button",
      "C. Images tab",
      "D. News tab",
    ],
    correct: [0],
  },
  {
    id: 218,
    module: 3,
    type: "true_false",
    question:
      "You need to research the impacts of online learning. For each statement, select Yes if the search result is relevant or No if it is not.",
    statements: [
      { text: "An article about the benefits of education", correct: "No" },
      {
        text: "A website offering educational resources for sale",
        correct: "No",
      },
      {
        text: "A graph comparing test scores of students in online and in-person educational systems",
        correct: "Yes",
      },
      {
        text: "An article in an educational magazine about teachers' online teaching experiences",
        correct: "Yes",
      },
    ],
  },
  {
    id: 219,
    module: 3,
    type: "true_false",
    question:
      "You need to assess whether the content of an online article is biased. For each aspect, select Yes if you should check it to assess bias or No if you should not.",
    statements: [
      { text: "Article funding source", correct: "Yes" },
      { text: "Article publication date", correct: "Yes" },
      { text: "Education level of the author", correct: "No" },
      {
        text: "Connections of the author to political organizations",
        correct: "Yes",
      },
    ],
  },
  {
    id: 220,
    module: 3,
    type: "single",
    question: "Which statement about filling out online forms is true?",
    options: [
      "A. Microsoft Forms can be filled out by people outside of the creator's organization.",
      "B. Filling out Microsoft Forms requires an Office 365 license.",
      "C. Filling out an online PDF form requires an Adobe Acrobat license.",
      "D. Google Forms always require that you provide an email address.",
    ],
    correct: [0],
  },
  {
    id: 221,
    module: 3,
    type: "checkbox",
    question:
      "You need to change an image by removing the figure from the left side and changing it from color to monochrome. Which two photo editing tools should you use? (Choose 2.)",
    options: ["A. Crop", "B. Filter", "C. Exposure", "D. Trim"],
    correct: [0, 1],
  },
  {
    id: 222,
    module: 3,
    type: "checkbox",
    question:
      "You create a long document with many section titles. For which two reasons should you format the section titles with heading styles? (Choose 2.)",
    options: [
      "A. So that you can automatically generate a table of contents for the document",
      "B. To apply consistent formatting to each level of heading text",
      "C. So that you can include the same information (such as a page number) on every page",
      "D. To enable unique permissions for each section",
    ],
    correct: [0, 1],
  },
  {
    id: 223,
    module: 3,
    type: "single",
    question:
      "What is the function of using headers and footers in a document?",
    options: [
      "A. To display recurring information such as page numbers or the document title",
      "B. To incorporate decorative elements that enhance the design",
      "C. To provide space for important images related to the content",
      "D. To offer a summary of the document's main points on each page",
    ],
    correct: [0],
  },
  {
    id: 224,
    module: 3,
    type: "true_false",
    question:
      "For each of the three statements about using the Track Changes feature for word processing, select True or False.",
    statements: [
      {
        text: "Track Changes allows you to toggle between changes made by you or by everyone.",
        correct: "True",
      },
      {
        text: "Track Changes can be used only when a document is shared via online syncing.",
        correct: "False",
      },
      {
        text: "Find and Replace > Go To lets you focus on the comments of a specific reviewer.",
        correct: "True",
      },
    ],
  },
  {
    id: 225,
    module: 3,
    type: "single",
    question: "What is a primary purpose of file versioning?",
    options: [
      "A. To enable users to recover earlier copies of the file",
      "B. To enable multiple users to collaborate on the file content",
      "C. To identify the date the file was created",
      "D. To identify the file as a draft, not a final release",
    ],
    correct: [0],
  },
  {
    id: 226,
    module: 3,
    type: "checkbox",
    question:
      "Bryce is experiencing anxiety and depression due to his fear of missing out (FOMO). What are two symptoms or effects of his FOMO? (Choose 2.)",
    options: [
      "A. He needs to understand all the 'in jokes' his friends post on social media.",
      "B. Whenever he enjoys an activity, he must immediately update his status online.",
      "C. He becomes nervous when giving a presentation in front of his classmates.",
      "D. He worries that his grades will suffer if he does not complete his homework.",
    ],
    correct: [0, 1],
  },
  {
    id: 227,
    module: 3,
    type: "true_false",
    question:
      "For each statement about file compression, indicate whether the statement is True or False.",
    statements: [
      {
        text: "Compressing files makes transferring easier, since it reduces the total amount of files being shared.",
        correct: "True",
      },
      {
        text: "Unlike pdf documents, there are no solutions available commercially to password protect a compressed archive.",
        correct: "False",
      },
      {
        text: "In addition to third-party compression applications, most modern Operating Systems offer a system-level option to compress files.",
        correct: "True",
      },
      {
        text: "Compressing multiple files into a single file always results in a smaller file, thus making it an efficient solution for long-term file storage.",
        correct: "False",
      },
    ],
  },
  {
    id: 228,
    module: 3,
    type: "matching",
    question:
      "Move each positive or negative aspect of AI to its impact on the right.",
    mappings: [
      {
        description: "Creates specific content improving user engagement",
        term: "Personalization of content",
      },
      {
        description: "Reproduces biases that exist in the data it analyzes",
        term: "Ethical concerns",
      },
      {
        description:
          "Frees up time for computer users to focus on more strategic actions",
        term: "Automation of repetitive tasks",
      },
    ],
  },
  {
    id: 229,
    module: 3,
    type: "matching",
    question:
      "Move the Artificial Intelligence ethical challenge on the left to its description on the right.",
    mappings: [
      {
        description:
          "AI may exhibit limited openness, which can potentially mislead the audience regarding origin and intent.",
        term: "Deception and lack of transparency",
      },
      {
        description:
          "AI's limited comprehension of social norms and cultural aspects can result in producing inappropriate content.",
        term: "Lack of contextual understanding",
      },
      {
        description:
          "AI-generated content may perpetuate stereotypes or discriminatory views.",
        term: "Promotion of harmful biased views",
      },
      {
        description:
          "AI can create manipulated media, which may defame individuals and spread misinformation.",
        term: "Deepfake development",
      },
    ],
  },
  {
    id: 230,
    module: 3,
    type: "matching",
    question:
      "Move each file extension from the list on the left to the corresponding scenario on the right.",
    mappings: [
      { description: "A file that contains unformatted text", term: ".txt" },
      { description: "A logo with a transparent background", term: ".png" },
      {
        description: "A photo that you will display on a webpage",
        term: ".jpg",
      },
      {
        description: "A file that you will email to a printing company",
        term: ".pdf",
      },
    ],
  },
  {
    id: 231,
    module: 3,
    type: "checkbox",
    question:
      "Which two are appropriate situations for using the Bcc field of an email message? (Choose 2.)",
    options: [
      "A. You are sending an email to a large group of people and want to be sure they cannot use 'reply all.'",
      "B. You are sending an email to a large group of people and want to keep their email addresses private.",
      "C. You are trying to create a threaded group discussion about an important topic.",
      "D. You are having a problem with a classmate and want to be sure your teacher knows what's going on.",
    ],
    correct: [0, 1],
  },
  {
    id: 232,
    module: 3,
    type: "single",
    question:
      "When composing an email, what is a good practice to ensure clarity?",
    options: [
      "A. Write a simple subject line.",
      "B. Use all capital letters for emphasis.",
      "C. Include screenshots and diagrams.",
      "D. Use informal language.",
    ],
    correct: [0],
  },
  {
    id: 233,
    module: 3,
    type: "single",
    question:
      "What is an advantage of using a digital wallet such as Apple Pay or Google Pay?",
    options: [
      "A. Requires you to authorize every transaction",
      "B. Allows you to perform transactions without authenticating",
      "C. Transmits your account information directly to the retailer",
      "D. Allows you to safely build your credit history",
    ],
    correct: [0],
  },
  {
    id: 234,
    module: 3,
    type: "matching",
    question: "For each item, select whether it is Goods or Services.",
    mappings: [
      { description: "iCloud", term: "Services" },
      { description: "Laptop", term: "Goods" },
      { description: "Hard drive", term: "Goods" },
      { description: "Tech Support", term: "Services" },
    ],
  },
  {
    id: 235,
    module: 3,
    type: "matching",
    question:
      "Move each digital collaboration tool from the list on the left to its description on the right.",
    mappings: [
      {
        description:
          "Collaborators can edit files at the same time and automatically save their changes.",
        term: "Cloud file sharing",
      },
      {
        description:
          "Collaborators can simultaneously brainstorm, review, and edit visual information.",
        term: "Online whiteboard",
      },
      {
        description:
          "Collaborators participate in learning activities and immediately share reactions and ideas.",
        term: "Webinar",
      },
    ],
  },
  {
    id: 236,
    module: 3,
    type: "checkbox",
    question: "Which two communication methods are asynchronous? (Choose 2.)",
    options: [
      "A. Emailing",
      "B. Text messaging",
      "C. Telephoning",
      "D. Videoconferencing",
    ],
    correct: [0, 1],
  },
  {
    id: 237,
    module: 3,
    type: "true_false",
    question:
      "You have joined a team that uses collaboration. For each statement about collaboration, select True or False.",
    statements: [
      {
        text: "Individual input and creative decision-making will be limited.",
        correct: "False",
      },
      {
        text: "Members share ideas to come up with solutions.",
        correct: "True",
      },
      {
        text: "Everyone in the group will have the same perspectives for the project.",
        correct: "False",
      },
    ],
  },
  {
    id: 238,
    module: 3,
    type: "checkbox",
    question:
      "You plan to attend a live webinar about school science lab safety rules. Which three actions should you take to be respectful and polite? (Choose 3.)",
    options: [
      "A. Log in early to ensure that the webinar application is working.",
      "B. Mute your audio unless the presenter calls on you to speak.",
      "C. Express critical opinions of the content in the public chat area.",
      "D. Open other browser tabs so you can multitask for other purposes.",
    ],
    correct: [0, 1], // A, B va boshqalar shartga ko'ra
  },
  {
    id: 239,
    module: 3,
    type: "checkbox",
    question:
      "Your team disagrees about a task over email, and you feel strongly your opinion is correct. Which two steps could you take that follow digital etiquette?",
    options: [
      "A. Pause the conversation to research the issue further, then compose a clear email describing your opinion.",
      "B. Schedule an in-person or virtual meeting with the whole team to discuss the task together face-to-face.",
      "C. Post about your team's disagreement publicly on social media and ask for opinions.",
      "D. Compose an email using strong language that shows how you feel, and send it to everyone.",
    ],
    correct: [0, 1],
  },
  {
    id: 240,
    module: 3,
    type: "true_false",
    question:
      "Your employer provides you with an adjustable chair to help prevent repetitive strain injury (RSI). For each position, select Yes if it helps or No if it does not.",
    statements: [
      { text: "Your knees are higher than your hips.", correct: "No" },
      { text: "Your feet are flat on the floor or footrest.", correct: "Yes" },
      {
        text: "Your arms form a 90-degree angle, with your elbows at your side.",
        correct: "Yes",
      },
    ],
  },
  {
    id: 241,
    module: 3,
    type: "true_false",
    question:
      "For each physical symptom, select Yes if it is a sign of repetitive strain injury (RSI) or No if it is not.",
    statements: [
      { text: "Pain", correct: "Yes" },
      { text: "Itching", correct: "No" },
      { text: "Tingling", correct: "Yes" },
      { text: "Weakness", correct: "Yes" },
    ],
  },
  {
    id: 242,
    module: 3,
    type: "single",
    question:
      "A teenage neighbor pretends to be a 40-year-old man online, connects with people, and sponsors a fake fundraiser. What is she doing?",
    options: ["A. Catfishing", "B. Cyberhacking", "C. Trolling", "D. Phishing"],
    correct: [0],
  },
  {
    id: 243,
    module: 3,
    type: "checkbox",
    question:
      "Which three are effective strategies for maintaining mental well-being while using technology? (Choose 3.)",
    options: [
      "A. Balance screen time with analog activities.",
      "B. Make time for regular face-to-face interactions.",
      "C. Take breaks from screens throughout the day.",
      "D. Stay up to date by checking social media often.",
      "E. Set notifications for every app on your device.",
    ],
    correct: [0, 1, 2],
  },
  {
    id: 244,
    module: 3,
    type: "single",
    question:
      "What is the process of converting data into an unrecognizable form that requires the use of a key to return the data to plain text?",
    options: ["A. Compression", "B. Encoding", "C. Encryption", "D. Hashing"],
    correct: [2],
  },
];

// Asosiy massivga qo'shish:
questions.push(...module3Questions);
const module4Questions = [
  {
    id: 301,
    module: 4,
    type: "single",
    question:
      "Which option protects a file by requiring authentication before access?",
    options: [
      "A. Add a password that is required to open the file",
      "B. Mark the file as Read-only",
      "C. Limit editing to tracked changes",
      "D. Protect the document for comments only",
    ],
    correct: [0],
  },
  {
    id: 302,
    module: 4,
    type: "checkbox",
    question:
      "Which two settings improve accessibility for users with visual impairments? (Choose 2.)",
    options: [
      "A. Enabling high-contrast mode",
      "B. Using screen magnifier",
      "C. Increasing the refresh rate",
      "D. Disabling notifications",
    ],
    correct: [0, 1],
  },
  {
    id: 303,
    module: 4,
    type: "true_false",
    question:
      "For each of the four statements about calendar event reminders, select True or False.",
    statements: [
      {
        text: "You can set a different reminder time for each attendee.",
        correct: "False",
      },
      {
        text: "You can set multiple reminders for a single event.",
        correct: "True",
      },
      {
        text: "Reminders can be sent by email or pop-up alerts.",
        correct: "True",
      },
      { text: "You can customize an event's reminder time.", correct: "True" },
    ],
  },
  {
    id: 304,
    module: 4,
    type: "true_false",
    question:
      "For each of the four statements about cloud computing, select True or False.",
    statements: [
      {
        text: "Cloud computing supports scalability of resources.",
        correct: "True",
      },
      {
        text: "Cloud computing requires all applications to be installed locally.",
        correct: "False",
      },
      {
        text: "Cloud computing allows users to access resources over the internet.",
        correct: "True",
      },
      {
        text: "Cloud computing eliminates the need for any internet connection.",
        correct: "False",
      },
    ],
  },
  {
    id: 305,
    module: 4,
    type: "matching",
    question:
      "Move each technology concept from the list on the left to its description on the right.",
    mappings: [
      {
        description: "Predicts and finishes words as you type",
        term: "Autocomplete",
      },
      {
        description: "Finds and fixes grammatical and spelling errors",
        term: "Autocorrect",
      },
      {
        description: "Provides resources over the Internet",
        term: "Cloud computing",
      },
      {
        description: "Uses technology to perform tasks without human input",
        term: "Automation",
      },
    ],
  },
  {
    id: 306,
    module: 4,
    type: "single",
    question:
      "A user complains that the screen looks washed out after moving their laptop near a window. Which adjustment should be made to improve the display?",
    options: [
      "A. Increase brightness.",
      "B. Lower refresh rate.",
      "C. Enable night mode.",
      "D. Adjust gamma settings.",
    ],
    correct: [0],
  },
  {
    id: 307,
    module: 4,
    type: "true_false",
    question:
      "For each of the four statements about sound adjustments, select True or False.",
    statements: [
      {
        text: "Mono audio combines stereo channels into one.",
        correct: "True",
      },
      {
        text: "Volume control changes the overall loudness of audio.",
        correct: "True",
      },
      {
        text: "Balance control adjusts the distribution of sound between speakers.",
        correct: "True",
      },
      {
        text: "Equalizer settings can fix uneven sound between left and right speakers.",
        correct: "True",
      },
    ],
  },
  {
    id: 308,
    module: 4,
    type: "checkbox",
    question:
      "Which two actions can confirm a successful printer connection? (Choose 2.)",
    options: [
      "A. Printing a test page",
      "B. Checking the printer queue for pending jobs",
      "C. Restarting the computer",
      "D. Selecting 'Set as default printer'",
    ],
    correct: [0, 1],
  },
  {
    id: 309,
    module: 4,
    type: "true_false",
    question:
      "For each of the four statements about components, select True or False.",
    statements: [
      {
        text: "Processing devices change input data into useful output.",
        correct: "True",
      },
      {
        text: "A GPU is a processing device that handles pictures and graphics.",
        correct: "True",
      },
      {
        text: "The CPU is an output device that shows information to users.",
        correct: "False",
      },
      {
        text: "RAM is a processing device because it stores data for a short time.",
        correct: "False",
      },
    ],
  },
  {
    id: 310,
    module: 4,
    type: "true_false",
    question:
      "For each of the three statements about creating and managing digital identities, select True or False.",
    statements: [
      {
        text: "One digital identity is enough for all online tasks, both personal and work.",
        correct: "False",
      },
      {
        text: "Your professional digital identity shows your skills to possible employers or coworkers.",
        correct: "True",
      },
      {
        text: "Using the same password for your work and personal accounts is easier and safer.",
        correct: "False",
      },
    ],
  },
  {
    id: 311,
    module: 4,
    type: "matching",
    question:
      "Move each password management practice from the list on the left to its matching benefit on the right.",
    mappings: [
      {
        description: "Adds an extra safety layer beyond passwords",
        term: "Enabling two-factor authentication",
      },
      {
        description: "Keeps account protected against new threats",
        term: "Regularly updating passwords",
      },
      {
        description: "Keeps passwords safe in one locked place",
        term: "Using a password manager",
      },
      {
        description:
          "Stops unauthorized access if one site using that password is hacked",
        term: "Creating unique passwords",
      },
    ],
  },
  {
    id: 312,
    module: 4,
    type: "true_false",
    question:
      "Your class is planning a fundraiser. You are in charge of emailing people. For each of the four actions, select whether it is Appropriate or Inappropriate.",
    statements: [
      { text: "Using all caps for emphasis", correct: "Inappropriate" },
      { text: "Sharing confidential information", correct: "Inappropriate" },
      { text: "Responding promptly to questions", correct: "Appropriate" },
      { text: "Keeping messages concise and relevant", correct: "Appropriate" },
    ],
  },
  {
    id: 313,
    module: 4,
    type: "true_false",
    question:
      "You are working with a group of classmates and emailing your teacher. For each of the four statements about email etiquette, select True or False.",
    statements: [
      { text: "Use a clear subject line", correct: "True" },
      { text: "Proofread before sending", correct: "True" },
      { text: "Use professional greetings", correct: "True" },
      {
        text: "Mark the emails you send to your teacher as important.",
        correct: "False",
      },
    ],
  },
  {
    id: 314,
    module: 4,
    type: "matching",
    question:
      "Move each principle of digital etiquette from the list on the left to its example on the right.",
    mappings: [
      {
        description: "Not sharing private client data",
        term: "Confidentiality",
      },
      {
        description: "Avoiding acronyms in professional emails",
        term: "Clarity",
      },
      {
        description: "Replying to messages within agreed timeframes",
        term: "Timeliness",
      },
      {
        description: "Scheduling meetings considering time zones",
        term: "Cultural sensitivity",
      },
    ],
  },
  {
    id: 315,
    module: 4,
    type: "checkbox",
    question:
      "Jordan encounters an unfamiliar feature with a tight deadline. What two actions should Jordan take to increase digital competence? (Choose 2.)",
    options: [
      "A. Search for tutorials and user guides in the tool's help section.",
      "B. Post a question in an online community forum for the tool.",
      "C. Ask a coworker for a quick explanation and rely on that guidance going forward.",
      "D. Watch a video review of the tool on a popular tech channel to learn about its future.",
    ],
    correct: [0, 1],
  },
  {
    id: 316,
    module: 4,
    type: "checkbox",
    question:
      "Priya needs to create a custom chart using a tool with limited official documentation. What two actions should Priya take? (Choose 2.)",
    options: [
      "A. Post a question in the tool's official community forum asking for guidance on creating the custom chart.",
      "B. Search for a user-created tutorial video on a video-sharing platform.",
      "C. Experiment with the tool's settings until the custom chart looks correct.",
      "D. Use a similar chart type from the basic guide and hope it meets the project's needs.",
    ],
    correct: [0, 1],
  },
  {
    id: 317,
    module: 4,
    type: "true_false",
    question:
      "For each of the four statements about filtering search results, select True or False.",
    statements: [
      {
        text: "Filters can include date, file type and region.",
        correct: "True",
      },
      { text: "Filters guarantee accurate information.", correct: "False" },
      { text: "Removing filters narrows search results.", correct: "False" },
      {
        text: "Filters help organize results based on user needs.",
        correct: "True",
      },
    ],
  },
  {
    id: 318,
    module: 4,
    type: "true_false",
    question:
      "For each of the three statements about assessing bias, select True or False.",
    statements: [
      {
        text: "Biased content often uses emotional language.",
        correct: "True",
      },
      {
        text: "Neutral content avoids presenting multiple viewpoints.",
        correct: "False",
      },
      {
        text: "Researching the author's affiliations can uncover potential bias.",
        correct: "True",
      },
    ],
  },
  {
    id: 319,
    module: 4,
    type: "matching",
    question:
      "Move each factor from the list on the left to its description on the right.",
    mappings: [
      { description: "Content favors one perspective", term: "Bias" },
      { description: "Information relates to the topic", term: "Relevance" },
      {
        description: "Source is trustworthy and authoritative",
        term: "Credibility",
      },
      {
        description: "Information is correct and supported by evidence",
        term: "Accuracy",
      },
    ],
  },
  {
    id: 320,
    module: 4,
    type: "true_false",
    question:
      "For each of the four statements about online data collection, select True or False.",
    statements: [
      {
        text: "Surveys can be distributed through email links.",
        correct: "True",
      },
      {
        text: "Screenshots are an effective way to collect structured data.",
        correct: "False",
      },
      {
        text: "Online forms can include text fields and multiple-choice questions.",
        correct: "True",
      },
      {
        text: "Data collected online is typically stored on remote servers or cloud systems.",
        correct: "True",
      },
    ],
  },
  {
    id: 321,
    module: 4,
    type: "single",
    question:
      "You are designing a presentation for a client who wants all slides to have the same background, font, and color scheme. Which feature should you use?",
    options: [
      "A. Slide Master",
      "B. Design Ideas",
      "C. Backgrounds",
      "D. Layout",
    ],
    correct: [0],
  },
  {
    id: 322,
    module: 4,
    type: "true_false",
    question:
      "For each of the four statements about tracking changes in a document, select True or False.",
    statements: [
      {
        text: "Track Changes automatically accepts all edits.",
        correct: "False",
      },
      {
        text: "Track Changes can show insertions and deletions.",
        correct: "True",
      },
      {
        text: "Track Changes is used to apply consistent formatting.",
        correct: "False",
      },
      {
        text: "Track Changes highlights edits made by different users.",
        correct: "True",
      },
    ],
  },
  {
    id: 323,
    module: 4,
    type: "matching",
    question:
      "Move each function from the list on the left to the task you would use it for on the right.",
    mappings: [
      {
        description: "Calculate the mean of a list of test scores",
        term: "AVERAGE",
      },
      {
        description: "Identify the single highest value in a sales column",
        term: "MAX",
      },
      {
        description: "Insert a total for B2:B15 using a one-click command",
        term: "AutoSum (SUM)",
      },
      {
        description:
          "Return the number of cells in a range that contain numeric values",
        term: "COUNT",
      },
    ],
  },
  {
    id: 324,
    module: 4,
    type: "checkbox",
    question:
      "Which three practices help maintain speed and accuracy during routine typing and editing tasks? (Choose 3.)",
    options: [
      "A. Maintain a neutral wrist position with forearms roughly parallel to the floor.",
      "B. Use the Shift key for a single capital letter instead of toggling Caps Lock.",
      "C. Occasionally look down at the keyboard to confirm each key before pressing it.",
      "D. Rest your palms on the keyboard's front edge while actively typing.",
      "E. Place index fingers on F and J and return to the home row after reaching.",
      "F. Strike keys firmly to ensure each keystroke registers.",
    ],
    correct: [0, 1, 4],
  },
  {
    id: 325,
    module: 4,
    type: "single",
    question:
      "Why should you compress a folder into a ZIP file before emailing it?",
    options: [
      "A. It reduces the total size and combines many items into one attachment.",
      "B. It makes every file inside editable by anyone, even without software.",
      "C. It improves image quality in the files.",
      "D. It automatically encrypts the contents with strong security.",
    ],
    correct: [0],
  },
  {
    id: 326,
    module: 4,
    type: "checkbox",
    question:
      "Which three practices improve your ability to find files later? (Choose 3.)",
    options: [
      "A. Use consistent, descriptive file names that reflect the file's content and context.",
      "B. Establish a predictable folder structure that mirrors your workflow.",
      "C. Apply available metadata (tags or properties) to categorize files.",
      "D. Change file extensions to pdf so everyone can open it.",
      "E. Include your initials in every file name.",
      "F. Keep multiple versions with identical names in the same folder.",
    ],
    correct: [0, 1, 2],
  },
  {
    id: 327,
    module: 4,
    type: "true_false",
    question:
      "For each of the four statements, select True or False regarding file versioning and compression.",
    statements: [
      {
        text: "Version history lets you view or restore an earlier saved version of a file.",
        correct: "True",
      },
      {
        text: "Uploading a new file to replace an old one automatically removes the old file's version history.",
        correct: "False",
      },
      {
        text: "Compressing multiple files into a ZIP file makes them easier to upload.",
        correct: "True",
      },
      {
        text: "Compressing a video into a ZIP file reduces the audio and visual quality.",
        correct: "False",
      },
    ],
  },
  {
    id: 328,
    module: 4,
    type: "single",
    question:
      "You want to use a Creative Commons image labeled Non-Commercial Use, Requires Attribution (CC BY-NC). What should you do?",
    options: [
      "A. Don't use the image and find something else.",
      "B. Use with credit because the image is allowed for business.",
      "C. Use the image without making edits.",
      "D. Use the image if the brochure will be free to download.",
    ],
    correct: [3],
  },
  {
    id: 329,
    module: 4,
    type: "checkbox",
    question:
      "You are creating a step-by-step guide for nontechnical community members printing at home. Which two actions should you do? (Choose 2.)",
    options: [
      "A. Use plain language and numbered steps.",
      "B. Export a printer-friendly PDF with high contrast.",
      "C. Share the design source file (psd) for editing.",
      "D. Add captions for your videos so the information is printed.",
    ],
    correct: [0, 1],
  },
  {
    id: 330,
    module: 4,
    type: "single",
    question:
      "Team members are in different time zones, file is too large to attach, and you want feedback stored together. What platform should you use?",
    options: [
      "A. A shared cloud document that allows team members to review and annotate in one location.",
      "B. A group video meeting scheduled for later today to discuss live.",
      "C. A private team chat channel post with the file uploaded.",
      "D. Individual instant messages to each teammate.",
    ],
    correct: [0],
  },
  {
    id: 331,
    module: 4,
    type: "single",
    question:
      "A heat advisory has been issued. You need to confirm whether cooling centers are open and find the nearest location. Which online resource is authoritative?",
    options: [
      "A. City emergency alerts page with live status and an official locations map.",
      "B. Local news article covering the heat wave with reader comments.",
      "C. Private neighborhood social app post from last summer.",
      "D. Third-party business directory page for a nearby community center.",
    ],
    correct: [0],
  },
  {
    id: 332,
    module: 4,
    type: "single",
    question:
      "You installed a free game selling extra items inside the app on a shared tablet with younger siblings. Which setting reduces unwanted charges?",
    options: [
      "A. Require a password or fingerprint for every purchase.",
      "B. Store the card on the device for one-tap checkout.",
      "C. Permit purchases without a password for 60 minutes.",
      "D. Disable marketing alerts about new in-game items.",
    ],
    correct: [0],
  },
  {
    id: 333,
    module: 4,
    type: "true_false",
    question:
      "For each of the four statements about internet commerce, select True or False.",
    statements: [
      {
        text: "A cloud backup subscription is a service because you pay for ongoing access rather than owning a product.",
        correct: "True",
      },
      {
        text: "A downloadable movie you can watch offline at any time after purchase is a digital good.",
        correct: "True",
      },
      {
        text: "A restaurant delivery order is only a good, not a service.",
        correct: "False",
      },
      {
        text: "Renting a video in an app for 48 hours is a service because you pay for temporary access.",
        correct: "True",
      },
    ],
  },
  {
    id: 334,
    module: 4,
    type: "checkbox",
    question:
      "Which two tools enable multiple people to edit the same document online at the same time? (Choose 2.)",
    options: [
      "A. Google Docs",
      "B. Acrobat Reader",
      "C. Notepad",
      "D. Microsoft 365",
    ],
    correct: [0, 3],
  },
  {
    id: 335,
    module: 4,
    type: "matching",
    question:
      "Move each editing approach from the list on the left to its characteristic on the right.",
    mappings: [
      {
        description:
          "Teammates edit offline and later upload different versions that must be merged.",
        term: "Asynchronous",
      },
      {
        description:
          "Minor typing delays may occur when several people type in the same paragraph simultaneously.",
        term: "Synchronous",
      },
      {
        description:
          "A reliable internet connection is needed so multiple users can edit a shared document.",
        term: "Synchronous",
      },
      {
        description:
          "Contributors post suggestions which the file owner accepts or rejects after review.",
        term: "Asynchronous",
      },
    ],
  },
  {
    id: 336,
    module: 4,
    type: "checkbox",
    question:
      "You are collaborating with a group of classmates and need to edit the same online document at the same time, seeing who makes changes. Which two actions should you choose? (Choose 2.)",
    options: [
      "A. Share the document on a cloud service with version history and grant edit access.",
      "B. Share the document using an online app with co-authoring and notation.",
      "C. Share the document by attaching it to an email.",
      "D. Share the document with your classmates as commenters.",
      "E. Share the document as an exported PDF.",
    ],
    correct: [0, 1],
  },
  {
    id: 337,
    module: 4,
    type: "checkbox",
    question:
      "Which two actions apply digital etiquette when reviewing a shared draft asynchronously? (Choose 2.)",
    options: [
      "A. Use comments with @mentions to ask clarifying questions where issues appear.",
      "B. Turn on Suggesting/Track Changes so edits are visible and attributed.",
      "C. Download a personal copy, make edits privately, and email back later.",
      "D. Rewrite sections directly in the main text without explanation to save time.",
      "E. Tag multiple stakeholders across unrelated sections.",
    ],
    correct: [0, 1],
  },
  {
    id: 338,
    module: 4,
    type: "true_false",
    question:
      "For each of the four statements about meetings and reviews, select True or False.",
    statements: [
      {
        text: "In small-team update meetings, giving a brief status, noting blocking issues, and stating next steps respects teammates' time.",
        correct: "True",
      },
      {
        text: "For asynchronous review of a shared draft, downloading your own copy and emailing edits back keeps feedback centralized.",
        correct: "False",
      },
      {
        text: "In a public webinar, screen sharing without being asked shows engagement and is appropriate.",
        correct: "False",
      },
      {
        text: "In large meetings, staying muted when not speaking and using Raise Hand helps keep discussion orderly.",
        correct: "True",
      },
    ],
  },
  {
    id: 339,
    module: 4,
    type: "matching",
    question:
      "Move each accessibility feature from the list on the left to its corresponding user need on the right.",
    mappings: [
      {
        description:
          "Operate the computer with limited hand mobility or dexterity",
        term: "Voice control (OS voice access with built-in mic)",
      },
      {
        description:
          "Reduce neck/back strain and accommodate seated, standing, or wheelchair users",
        term: "Adjustable height desk",
      },
      {
        description:
          "Improve on-screen readability for users with low vision or visual fatigue",
        term: "Screen magnifier/zoom with high contrast display",
      },
      {
        description: "Improve typing accuracy for users with low vision",
        term: "Large-print keyboard or keycap overlays",
      },
    ],
  },
  {
    id: 340,
    module: 4,
    type: "single",
    question:
      "Your team is updating a public computer lab to better follow universal hardware design. Which choice supports universal design principles for the widest range of users?",
    options: [
      "A. Install height-adjustable desks and adjustable monitor arms at all workstations.",
      "B. Replace one PC with a special workstation reserved for users with disabilities.",
      "C. Post a sign that assistance is available upon request.",
      "D. Add high-DPI gaming mice to every station for faster pointing.",
    ],
    correct: [0],
  },
  {
    id: 341,
    module: 4,
    type: "single",
    question:
      "Ten minutes after posting a rude public comment about a classmate on TikTok, you privatize it, but others have already replied and shared it. What outcome describes the remaining risk?",
    options: [
      "A. Screenshots and reshares may continue circulating, harming your reputation even after deletion.",
      "B. The deleted comment cannot affect you or your classmate now that it has been removed.",
      "C. Your home internet service will automatically suspend your account.",
      "D. People who replied must remove every reply per platform policy.",
    ],
    correct: [0],
  },
  {
    id: 342,
    module: 4,
    type: "true_false",
    question:
      "For each of the four statements regarding digital well-being, select True or False.",
    statements: [
      {
        text: "Turning on a blue-light filter at night is an effective way to prevent sleep problems caused by late-night social media use.",
        correct: "True",
      },
      {
        text: "Scheduling quiet hours or Do Not Disturb can reduce notification-driven stress without uninstalling apps.",
        correct: "True",
      },
      {
        text: "Curating your feed by unfollowing or muting accounts that trigger anxiety is an appropriate self-care step.",
        correct: "True",
      },
      {
        text: "When an online exchange becomes hostile, continuing to reply until the other person calms down is a healthy way to protect well-being.",
        correct: "False",
      },
    ],
  },
  {
    id: 343,
    module: 4,
    type: "single",
    question:
      "During a two-hour study block, you feel FOMO as classmates post live updates about a campus event. Which action reduces FOMO while protecting focus?",
    options: [
      "A. Enable Focus/Do Not Disturb for the study block and schedule a 5-minute check at the midpoint.",
      "B. Leave notifications on but lower the volume so alerts are less noticeable.",
      "C. Keep group chats open on a second screen to glance at between problems.",
      "D. Turn on push notifications for event posts to avoid missing anything important.",
    ],
    correct: [0],
  },
  {
    id: 344,
    module: 4,
    type: "true_false",
    question:
      "For each of the three statements about device security, select True or False.",
    statements: [
      {
        text: "It is safe to plug in an unknown USB flash drive as long as you don't open any files from it.",
        correct: "False",
      },
      {
        text: "A charge-only cable will protect your device from data risks when using a public USB charging station.",
        correct: "True",
      },
      {
        text: "You should block camera access until you confirm that a new app is legitimate and actually needs the camera.",
        correct: "True",
      },
    ],
  },
  {
    id: 345,
    module: 4,
    type: "checkbox",
    question:
      "Which two settings enable device encryption on common desktop operating systems? (Choose 2.)",
    options: [
      "A. BitLocker (Windows)",
      "B. FileVault (macOS)",
      "C. Windows Hello PIN (Windows)",
      "D. Airplane mode (device)",
      "E. Secure Boot (UEFI firmware)",
    ],
    correct: [0, 1],
  },
];

// Asosiy massivga qo'shish:
questions.push(...module4Questions);
