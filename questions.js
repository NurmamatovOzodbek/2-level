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
