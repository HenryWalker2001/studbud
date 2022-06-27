# Development Documentation: DECO2017_A3 | STUDBUD

### Project Overview:
In this assessment for DECO2017 I was tasked with designing and implementing a web application for the client DesCo. I followed the specifications to the best of my ability, utilising HTML, CSS & JavaScript to create an effective solution to the problems I identified.

### Research Summary:
Through conducting a range of Primary and Secondary Research I was able to identify some key issues in the problem space. I identified that the most "Useful Features" were centered around usability and visual appeal. Some of these many features found in the research include:
* __Accessibility__, that is ensuring the web application is easy to navigate, has a simple layout and is usable by many people.
* __Visual Appeal__, was identified as important, meaning the web app had to be visually engaging.
* __Dark Mode__, the web app needed to have a dark mode layout, reducing the eye strain, headaches and migraines students' experience when studying late into the night.
* __Device Compatibility__, the web app needed to be compatibile to both mobile and desktop devices.

![Identified problems from research](/public/images/research_goals.png)


# Implementation of Research features:

## 1. Accessibility:

![High Fidelity Mock-up of Prototype Web Application](/public/images/accessibility_feature.png)

### Self Reflection:
I found accessibility to be an important feature to my project, making sure to involve the concept effectively in the design. 

### Challenges:
It can be difficult to have an accessible website with the differences of users's. I aimed to create a consistent website, with clear symbols, text and colours making the application accessible to more users.

### Changes and Improvements:
While there are many ways to further improve the accessibility of a website, I ensured the site had a consistent and easily navigatible section at the top of the web page. This adjustment improved upon the mock-up, as I found users were more familiar with this top navigation section, making going through pages easy.


## 2. Visual Appeal:

![Style Guide of chosen design elements](/public/images/visual_appeal.png)

### Self Reflection:
I ensured my web application was visiaully appealing by creating a style guide which I could use to make informed and justified design decisions which affected the visual aesthetic of the website. While I followed most of these guides, I also evolved my initial prototype for certain reasons.

### Challenges:
I found the initial red colour choice  to not be the most suitable when interactive and changing JavaScript elements were involved. For this reason I had to further test and prototype potential options to address this issue in colour contrast.

### Changes and Improvements:
I found using a similar dark colour gradient with a blue highlight colour to be suitable for the web application. I followed my style guide plan, utilising Futura PT as a body font and Bebas Neue Regular for a strong heading font. This typography strengthened the visual appeal of the site over generic default font, whilst following the style guide of icons and elements made the solution have greater consistency and usability overall.


## 3. Dark Mode:

![Dark Mode style of the website](/public/images/dark_mode_UI.png)

### Self Reflection:
I effectively followed a __Dark Mode__ UI layout for the website, helping reduce eye strain for students late at night.

### Challenges:
This UI made some small insignificant  challenges when coding the website, as a series of gray scale palettes had to replace nearly all items in the website, meaning font colour and background colour had to be changed.

### Changes and Improvements:
As can be seen, a series of adjustments had to be made to the __Background color__ and __text color__ of the website.

```CSS
{
  background:rgb(64, 64, 60);
  background-color: rgb(43, 43, 43);
background: rgb(36, 36, 36);
  border-bottom: rgb(37, 65, 214) 12px solid; 
  color: rgb(255, 255, 255);
  }
```

## 4. Device Compatibility:

![High-Fidelity Mock-Up of mobile device UI](/public/images/device_compatability.png)

### Self Reflection:
I had to ensure the web application was usable in both a mobile and desktop layout as this was a feature requested in both the design brief, and by the target audience.

### Challenges & Improvements:
There were many technical developmental difficulties when coding for a flexible site rather than fixed. In general, it meant the web application had to have flexible % based dimensions that adjusted to the window size, __rather__ than having fixed px lengths for large areas/ items.




# Implementation of primary features:

## Task List:

![Task List landing page](/public/images/task_list.png)

### Justification:
I implemented the primary feature of a task list using a flexible box that adjusted to the dimensions of the page. This element was nested within the main element of the HTML page, with a header above and footer below. The Task List utilised a series of input box areas and types to gather information and inputs from the user. Using JavaScript, this information could be saved in a seperate Kanban board.

## Stopwatch Timer:

![Identified problems from research](/public/images/stopwatch_feature.png)

### Justification:
The stopwatch feature was directely and effectively integrated into the web application. On the 'Timer' page the user is able to access two different styles of timer for managing their time. Importantly, the stopwatch timer simpily follows the features of the Design Brief, as this aspect was only required by DesCo. Additionally, the UI and usability of the timer is prioritised, being visually appealing and easy to use because of the CSS, HTML and JS elements.


# Implementation of secondary features:

## Kanban Board:

![KanBan board feature](/public/images/kanban_feature.png)

### Justification:
The KanBan board feature was integrated to the best of my ability. This feature was particularly difficult and took literally weeks of prototyping, experimenting testing and redesigning to get a somewhat functional feature. I managed to integrate a range of data types that could be entered and saved by the user, as well as having mutiple different tasks visible at once under the 'tasks' title.

## Pomodoro Timer:

![Identified problems from research](/public/images/pomodoro_feature.png)

### Justification:
The pomodoro was the next of the secondary features to be integrated into the web application. This feature I was proud of, as it too took weeks of preperation, testing and redesigning to get a functional timer. Importantly, this feature required many complex JavaScript processes, interacting with both HTML and CSS elements. The final timer is able to be saved for different study blocks, with study breaks also available. The feature is highly engaging and visually appealing, giving immediate feedback to the user.

## Reading List Creator:

![Identified problems from research](/public/images/references_feature.png)

### Justification:
The reference feature window is accessible through the main landing page. The home page gives some interesting and visually engaging windows to click and access this page. This feature gives the user three data types they can enter about their reading list for later. It allows them to select from a scrollable multiselector what item they want to save, then save the inforamtion.

# Conclusion
In this assessment I effectively implemented the series of features and functionalities specified by the target demographic and Design Brief. I implemneted a flexible layout and design that adjusts to the window's size depending on device. Further I used a dark mode and theme layout, making the design more visually appealing and usable late at night. There are many future improvments and iterations I would love to make to this project. Thank You!

# References

>DECO2017. (2022). Modules, Lectures, Tutorials and Content. Retrieved 19 May 
2022, from https://canvas.sydney.edu.au/courses/39757

>Flaticon. (2022). Free Icons and Stickers. Retrieved 23 May 2022, from https://www.flaticon.com/

>Pexels. (2022). Free Stock Photos. Retrived 16 May 2022, from https://www.pexels.com

>Tomitsch, M., Borthwick, M., Ahmadpour, N., Cooper, C., Frawley, J., Hepburn, L.A., 
Kocaballi, A.B., Loke, L., Núñez-Pacheco, C., Straker, K., _Wrigley, C. (2022). Design. Think. Make. Break. Repeat. A Handbook of Methods (revised edition). BIS Publishers, Amsterdam, The Netherlands.


