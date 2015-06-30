# ADS RFQ Pool One Design

### Product Vision
For people who want to find over-the-counter medications free of certain ingredients for themselves or their family. SHIELD  is a simple and responsive web app that allows people to quickly and easily see if a product has an ingredient they're allergic to, or find alternatives that are safe to use.

### Deliverables Index
1. Summary of Approach: README.md (this file)
2. [Prototype Location](http://pyramidopenfdadev.herokuapp.com)
3. [Pool One Repository on GitHub](https://github.com/PyramidSystemsInc/ADS-Design)
4. [Product Backlog on Trello](https://trello.com/b/S1uBdwEg/product-backlog)
5. Spreadsheet: TBD
6. User Profiles, Scenarios, Process Map, Journey Map: /analysis/
7. Style Tile, Wireframes: /design/
8. Usability Testing and Results: /usability/
9. Labor Categories and LOE: TBD
10. Prototype Creation Process Documentation: /process/

### Summary of Approach
The first step in the creation of this prototype was an analysis of the available data sets from the FDA API, to understand the scope of problems a prototype could solve. We wrote out a set of possible user scenarios, then chose a leader (our Product Owner, as detailed in the labor categories) who wrote out an initial product vision statement based on the most viable scenarios. Using Trello, we set up a simple [Kanban board](https://trello.com/b/S1uBdwEg/product-backlog) to track deliverables, and a design backlog of [potential user stories](https://trello.com/b/KcsLZZtj/product-roadmap) for each major scenario.

Over the course of the project, we continually revised our user stories based on our scenarios for upcoming usability tests, the capabilities of our data set and tools, and our available bandwidth. We used whiteboards to iterate quickly on our target users, screen and data flow, wireframes, choice of technologies, and any outstanding issues discussed at the daily standup/grooming meetings. Each user-facing story was written with acceptance tests and sample API queries, and was prioritized and rapidly re-scoped to support the milestones needed for effective user testing. The key findings from the first usability test were used to prioritize subsequent user stories.

Due to the short time frame of the project, testing was limited to the functional behavior of the application under ordinary use. Future releases should include reviews to ensure compliance with [Section 508](http://www.section508.gov/section-508-standards-guide#Web) and [WCAG 2.0](http://www.w3.org/TR/WCAG20/#guidelines) accessibility standards, and [Plain Language](http://www.plainlanguage.gov/howto/quickreference/weblist.cfm) readability standards, including screen reader software.

The analysis, design and development of the prototype was carried out using open-source or freely available tools and technologies. Usability testing was conducted with [GoToMeeting Free](http://free.gotomeeting.com) to broadcast testing sessions for remote note-taking, with notes taken directly to the GitHub repository. The results and recommendations based on usability tests were disseminated to the team in person and through the Trello backlog. Wireframes, scenarios and user profiles were created on the team's physical whiteboards. The Style Tile was distributed in PDF and SVG format, using the publicly available [Font Awesome](http://fortawesome.github.io/Font-Awesome/) icon library and [Open Sans](https://www.google.com/fonts#UsePlace:use/Collection:Open+Sans) fonts. The Process Map was recorded using [draw.io](https://www.draw.io/). For a full list of technologies used in the development of the prototype, see below.

### Technologies Used
* Design
 * User Stories: [Trello](https://trello.com/)
 * Usability testing: [GoToMeeting Free](http://free.gotomeeting.com)
 * Icons: [Font Awesome](http://fortawesome.github.io/Font-Awesome/)
 * Fonts: [Open Sans](https://www.google.com/fonts#UsePlace:use/Collection:Open+Sans)
 * Flowcharts: [draw.io](https://www.draw.io/)
 * Note-taking: [Markdown](http://daringfireball.net/projects/markdown/)
* Languages
 * [JavaScript](https://en.wikipedia.org/wiki/JavaScript)
 * [HTML](https://en.wikipedia.org/wiki/HTML)
 * [TypeScript](http://www.typescriptlang.org/)
* Deployment / Automation
 * [Gulp](http://gulpjs.com/)
 * [Yargs](https://www.npmjs.com/package/yargs)
 * [Uglify](http://lisperator.net/uglifyjs/)
 * [BrowserSync](http://www.browsersync.io/)
* Frontend
 * [Bower](http://bower.io/)
 * [Bootstrap](http://getbootstrap.com)
 * [AngularJS](http://angularjs.org/)
* Backend
 * [Node.js](https://nodejs.org/)
 * [Express](http://expressjs.com/)
* Testing
 * [Mocha](http://mochajs.org/)
 * [Karma](http://karma-runner.github.io/)
 * [Hippie](https://github.com/vesln/hippie)
 * [Bard](https://github.com/wardbell/bardjs)
 * [PhantomJS](http://phantomjs.org/)
* Analysis
 * [Plato](https://github.com/es-analysis/plato)
 * [jscs](https://www.npmjs.com/package/jscs) - <sub>(Artistic License 2.0)</sub>


### Deliverables Reference
1. Write a brief description, no greater than 750 words, of the approach used to create the working prototype.
2. Evidence of Playbook: Demonstrate that they followed the U.S. Digital Services Playbook by providing evidence in the repository.
3. assigned one leader and gave that person authority and responsibility and held that person accountable for the quality of the prototype submitted
4. assembled a multidisciplinary and collaborative team that includes at a minimum three of the labor categories limited to the Design Pool Labor categories to design the prototype as quoted in Attachment C. The quoter’s proposed mix of labor categories and level of effort for its working prototype, as reflected in Attachment C, shall be evaluated to assess the quoter’s understanding and capability to supply agile delivery services.
5. understand what people need, by including people (anyone not directly involved in the design or development of the prototype) in the prototype design process
6. used at least three “human-centered design” techniques or tools
7. created or used a design style guide and/or a pattern library
8. used at least three modern (released, created, initiated or finalized in the last 5 years) and open source frontend or client side (executed within a user-agent, e.g. web browser) web technologies 
9. performed usability tests with people
10. used an interactive approach, where feedback informed subsequent work or versions of the prototype
11. created a prototype that works on multiple devices and presents a responsive design
12. provided sufficient documentation to install and run their prototype on another machine
13. prototype and underlying platforms used to create and run the prototype are openly licensed and free of charge
14. provided additional process documentation (photographs, screenshots, mockups, notes etc.)
