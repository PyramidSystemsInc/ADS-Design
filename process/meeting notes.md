
## Design/Development Notes

Daily standup meeting 6/22/15:

- Decision about single-page/multi-page application
   - Basic user needs can be supported in either approach
   - Single-page avoids some development overhead
   - Multi-page allows flows to be developed more flexibly
   - Current flows are not solid, heavily dependent on technical limitations + results of usability sessions
   - Therefore, going with a multi-page system
- Discussed issues with current work
   - Limitations of FDA API: no ability to query possible values for fields directly, noisy data, no disambiguation support natively
   - Hooking up initial search results for a basic prototype, in order to support user feedback and testing
   - Infrastructure continues to be built out
   - Initial wireframes for the prototype and system flow given above information
   - Query construction for future queries

Daily standup meeting 6/23/15:

- Decision to de-prioritize product search by name until MVP of purpose/ingredients search is working
- Switch to whiteboard/paper wireframes to ensure FOSS compliance
- Avoid conducting usability tests on paper wireframes for now; wait until MVP is ready to show
- Multiple stories for different technical possibilities with existing features; will update story during development with whatever can be accomplished in this timeframe
   - Example: Auto-complete search results vs. count of search results vs. distinct search results

Daily standup meeting 6/24/15:

- Next steps for dev: Detailed Product Info page, clean up data in search results, deploy on public-facing site (vs. localhost)
- Next steps for design: Wireframe Product Info page, write Disclaimer page, clean up and transfer deliverables from whiteboard to GitHub repository

Daily standup meeting 6/25/15:

- Next steps for dev: Improve user interface, smarter filtering and highlighting of search results, About page
- Next steps for design: Transfer usability info to GitHub, identify chunks of development small enough to complete before round 2 of testing
- Next round of usability testing planned for 6/29
- First pass of all design deliverables to be completed by 6/30
- QA review and final submission on 6/31