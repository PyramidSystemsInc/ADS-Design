# ADS RFQ Pool One Design
Prototype URL: [url goes here]
Pool Two Repository: [url goes here]

# Product Vision
For people who want to find over-the-counter medications free of certain ingredients for themselves or their family. The [product name] is a responsive web app that allows people to quickly and easily check he ingredients in a certain product or find alternatives that are free of the ingredients they're concerned about.

# Process Documentation
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

# Supporting Documentation
1. Photographs:
2. Screenshots:
3. Mockups:
4. Notes:

# Design/Development Notes

Daily standup meeting 6/22/15:

- Decision about single-page/multi-page application
   - Basic user needs can be supported in either approach
   - Single-page avoids some development overhead
   - Multi-page allows flows to be developed more flexibly
   - Current flows are not solid, heavily dependent on technical limitations + results of usability sessions
   - Therefore, going with a multi-page system
- Discussed current work
   - Limitations of FDA API: no ability to query possible values for fields directly, noisy data, no disambiguation support natively
   - Hooking up initial search results for a basic prototype, in order to support user feedback and testing
   - Infrastructure continues to be built out
   - Initial wireframes for the prototype and system flow given above information
   - Query construction for future queries
