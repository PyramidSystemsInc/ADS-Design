# ADS RFQ Pool One Design

### Deliverables
1. [Pool One Prototype Location](https://ads-design-prototype.herokuapp.com)
2. [Pool One Repository on GitHub](https://github.com/PyramidSystemsInc/ADS-Design)
3. Summary of Approach: README.md (this file)
4. Product Backlog: [Live on Trello](https://trello.com/b/S1uBdwEg/product-backlog), final snapshot in /process/
5. User Profiles, Scenarios, Process Map, Journey Map: /analysis/
6. Style Tile, Wireframes: /design/
7. Usability Testing and Results: /usability/
8. Labor Categories and LOE: /rfq/
9. Prototype Creation Process Documentation: /process/

### Product Vision
For people who want to find over-the-counter medications free of certain ingredients for themselves or their family. SHIELD is a simple and responsive web app that allows people to quickly and easily see if a product has an ingredient they're allergic to, or find alternatives that are safe to use.

### Summary of Approach
The first step in the creation of this prototype was an analysis of the available data sets from the FDA API, to understand the scope of problems a prototype could solve. We wrote out a set of possible user scenarios, then chose a leader (our Product Owner, as detailed in the labor categories) who wrote out an initial product vision statement based on the most viable scenarios for rapid development. Using Trello, we set up a simple [Kanban board](https://trello.com/b/S1uBdwEg/product-backlog) to track deliverables, and a design backlog of [potential user stories](https://trello.com/b/KcsLZZtj/product-roadmap) for each major scenario. The design and development teams (Pool One and Pool Two) worked closely together throughout the project. Initial rounds of prioritization, testing and refinement were conducted on a shared codebase, to ensure that design reflected the actual capabilities of a rapid prototype and development was focused on solving real people's needs.

Over the course of the project, we continually revised our user stories based on our scenarios for upcoming usability tests, the capabilities of our data set and tools, and our available bandwidth. We used whiteboards to iterate quickly on our target users, screen and data flow, wireframes, choice of technologies, and any outstanding issues discussed at the daily standup/grooming meetings. Each user-facing story was written with acceptance tests and sample API queries, and was prioritized and rapidly re-scoped to support the milestones needed for effective user testing. The key findings from each usability test were used to prioritize subsequent user stories. To ensure responsive design, usability sessions were conducted on both desktop and a variety of iOS and Android devices.

Once a minimum viable product was built and tested, further prototype development concentrated on responsiveness, clarity of navigation, and a smooth user experience. Where implementation was constrained by the current API limitations, those features were added to a separate design prototype, to maintain a Pool One submission that addressed the key findings from our users. Future releases should consider additional features requested by users, such as allowing each user to build up a catalog of individually meaningful search results and filters, and should investigate the feasibility of adding other data sets for pricing, availability, and thesaurus information.

The design and development life cycle of the prototype was carried out using open-source or freely available tools and technologies. Usability testing was conducted with [GoToMeeting Free](http://free.gotomeeting.com) to broadcast testing sessions for remote note-taking, with notes taken directly to the GitHub repository. The results and recommendations based on usability tests were disseminated to the team in person and through the Trello backlog. Wireframes, scenarios and user profiles were created on the team's physical whiteboards. The Style Tile was created in [Adobe Illustrator](http://www.adobe.com/illustrator/) and distributed in PDF and SVG format, using the publicly available [Font Awesome](http://fortawesome.github.io/Font-Awesome/) icon library and [Open Sans](https://www.google.com/fonts#UsePlace:use/Collection:Open+Sans) fonts. The Process Map was recorded using [draw.io](https://www.draw.io/). The design prototype was written in [JavaScript](https://en.wikipedia.org/wiki/JavaScript), [HTML](https://en.wikipedia.org/wiki/HTML), and [TypeScript](http://www.typescriptlang.org/). It uses  [Bootstrap](http://getbootstrap.com) and [AngularJS](http://angularjs.org/) as front-end UI frameworks for rapid development, and [NodeJS](https://nodejs.org/) for back-end support. For detailed licenses, see Licensing Information in this readme file.

Due to time constraints, testing was limited to the functional behavior of the application under ordinary use. Future releases should include reviews to ensure compliance with [Section 508](http://www.section508.gov/section-508-standards-guide#Web) and [WCAG 2.0](http://www.w3.org/TR/WCAG20/#guidelines) accessibility standards, and [Plain Language](http://www.plainlanguage.gov/howto/quickreference/weblist.cfm) readability standards, including screen reader software.

### Installation Instructions
In order to run the design prototype locally:

1. Install [node.js](https://nodejs.org) (if not already installed)
2. Pull this GitHub repository to a local directory 
3. Open a command line, navigate to the /prototype directory, and run:

        node server.js
4. Open a web browswer and navigate to http://localhost:8080

### Licensing Information

This prototype is licensed under the MIT license, making it free and open; for details, see the LICENSE file. The MIT license also applies to Angular, Bootstrap, and Node, while TypeScript is used according to a similar Apache [license](https://github.com/Microsoft/TypeScript/blob/master/LICENSE.txt). JavaScript and HTML are open standards. Stock photos used are from [Flickr](http://www.flickr.com) under the [Creative Commons NonCommercial 2.0 license](https://creativecommons.org/licenses/by-nc/2.0/legalcode).
