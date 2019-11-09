# HelpDeskSupport
<p>Help Desk Support Ticketing Web app built from user stories business asked for.</p>
<p> Progress checkmarks will be at the bottom of ReadMe and checked as I progess.</p>

## Intro
<p>  This project is asked for by a company to demonstrate by ability to write source code, documentation, and explain fundamentals of my solution. </p>

## Updates
* This project will not be as rushed as the original company that asked for this project cancelled.  Will still continue to work on it to practice React+C# Azure combo.< /br>
November 08, 2019

## How to use
```
In order to run your local machine, clone the respository on to your machine.  Using Visual Studio 2019, click the "play button" ISS Express.  If using Mac, there will simply be a play button.
```
```
A browser should open and display the intro page to the app.  Please ensure all npm packages needed for react and node.js are installed.
```

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
```
THOUGHT PROCESS:  My idea is to create something like an e-commerce store in which there are users and admin.  The users would be able to select Tickets in much the same way as selecting "products" online.  The user would then add the Ticket to their shopping cart.  I can use SendGrid to send an email notification when a Ticket has been added to a shopping cart.  The user can also edit their ticket but not delete.  
```
```
THOUGHT PROCESS:  The admin would have access to all the users carts.  Going cart by cart, the admin can also update or delete the tickets.  This could then empty the cart for any user.
```
* Goal for all tasks is to keep things simple and get an MVP (minimum viable product).
* [ ] `User Story: As a User, I can log in and out of the system.`<br/>
- Create a login and logout with username and password using C# security using the following:
- Under the Controllers directory, create an AccountController.cs class to handle the users and admin.  This will include the user's "cart" which hold the tickets.  This controller will also be using System.Security.Claims and ASPnet.Core.Identity for handeling users and admin.
- Under the Models directory, create an AccountUsers.cs class to handle login users/admin using get/set property.
- Under the ClientApp/src/componenets create a LoginView.js with necessary code needed to call API on controller.
- Under the ClientApp/src/componenets create a RegisterView.js with necessary code needed to call API on controller.
- Create a Data directory on top level.  This is where the database context will live.  Under the Data directory create a ApplicationDbContext.cs class.
* [ ] `User Story: As a Helpdesk User, I can create a support ticket.`<br/>
- Under the Data directory, create a TicketDbContext.cs class as a database to hold all the tickets and carts.
- Under the Models/ViewModels create a TicketTypes.cs class.  This code will have id, name, and description to add or "create" ticket for the user.
- Create an Interface directory under Models.
- Create an ICart.cs interface.  Code the GetCartforUser.
- Create an ITckets.cs interface. Code the AddTicketToCart
* [ ] `User Story: As a Helpdesk User, I can update my support tickets.`<br/>
- In the ICart.cs add the code needed for UpdateCartTicket.
- In the ITicket.cs add the code needed for UpdateTicketType.
* [ ] `User Story: As a Helpdesk User, I can view all of my support tickets.`<br/>
- The interfaces will be coded to get the cart and all the tickets in that cart.
* [ ] `User Story: As a Helpdesk Team Member, I can view all support tickets.`<br/>
- Helpdesk Team Member will be refered to as "Admin".  
* [ ] `User Story: As a Helpdesk Team Member, I can update any support ticket.`<br/>
- The AccountController.cs will be coded with identity and security to be able to access all carts.
- The interfaces will be coded to display all carts.
* [ ] `User Story: As a Helpdesk Team Member, I can delete any support ticket.`<br/>
- The interfaces will have the code to deleteTickets.
- I might need to seperate interfaces for users and admin since only admin will have the delete option.  Interfaces require I use all properties implemented on it.  I will meditate on this....


