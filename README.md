# HelpDeskSupport
<p>Help Desk Support Ticketing Web app built from user stories business asked for.</p>
<p> Progress checkmarks will be at the bottom of ReadMe and checked as I progess.</p>

## Intro
<p>  This project is asked for by a company to demonstrate by ability to write source code, documentation, and explain fundamentals of my solution. </p>

### About
<p>  Build a Helpdesk support ticketing web application.</p>
<p>  As I work through this, I will make note how much time goes into this.</p>

### Objective
A demonstration of my ability to write source code to requirements supported by high level documentation to explain the fundamentals of the given solution. The interviewer company will be analyzing the implementation both at the architecture and code levels for elegance, maintainability, scalability, adherence to industry standards, and extensibility.

### Technologies
My solution should be buildable and cross-platform (Windows, Linux, Mac). At a minimum, I should leverage the following for this exercise:<br/>
• Angular or ReactJS – with TypeScript <i>I will probably use ReactJS</i><br/>
• .NET Core – with C#<br/>

### Business Ask
Build a Helpdesk support ticketing web application to fulfill these user stories:<br/>
- [X] Start:
- [ ] User Story: As a User, I can log in and out of the system.<br/>
- [ ] User Story: As a Helpdesk User, I can create a support ticket.<br/>
- [ ] User Story: As a Helpdesk User, I can update my support tickets.<br/>
- [ ] User Story: As a Helpdesk User, I can view all of my support tickets.<br/>
- [ ] User Story: As a Helpdesk Team Member, I can view all support tickets.<br/>
- [ ] User Story: As a Helpdesk Team Member, I can update any support ticket.<br/>
- [ ] User Story: As a Helpdesk Team Member, I can delete any support ticket.<br/>
Note: Interpret these requirements as I see fit. Less focus will be placed on the UX design. The structure of your solution is most important.<br/>

### Steps
When I've completed the above user stories, I will update my README.md with the following:<br/>
• Steps required to build, run, and test the solution locally<br/>
• Any assumptions I've made about the requirements<br/>
• High level overview of how your solutions works<br/>
• Explanation of major components and configuration<br/>

---
### My software developer interpretation on user stories
* Goal for all tasks is to keep things simple and get an MVP (minimum viable product).
- [ ] `User Story: As a User, I can log in and out of the system.`<br/>
- Create a login and logout with username and password using C# security.  Simple enough.....until I code it and find a bug. 
1. Create a database to hold HelpDesk User login names and password.
2. Set restrictions for user to access only their own tickets.
3. Same database for HelpDesk User or "admin" with login name and password.
4. Set restrictions or all-access to every ticket in the system.
- [ ] `User Story: As a Helpdesk User, I can create a support ticket.`<br/>
- [ ] `User Story: As a Helpdesk User, I can update my support tickets.`<br/>
- [ ] `User Story: As a Helpdesk User, I can view all of my support tickets.`<br/>
- [ ] `User Story: As a Helpdesk Team Member, I can view all support tickets.`<br/>
1. Same database for "admin" to be able to access all tickets created.  Should be already created in user story 1.
- [ ] `User Story: As a Helpdesk Team Member, I can update any support ticket.`<br/>
- [ ] `User Story: As a Helpdesk Team Member, I can delete any support ticket.`<br/>


