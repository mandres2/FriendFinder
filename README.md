# PetFinder

## Motive:
The primary motive was to solidify my understandings of the foundational concepts utilizing Express, and Heroku.

## Getting Started

:black_small_square: <b>To get started:</b> 
* You will need to have an updated IDE (preferably VS Code), and the latest version of Node.js, and an up-to-date version of Express, and Heroku.

### Prerequisites

:black_small_square: IDE: Microsoft Visual Studios 1.37.1 (or higher).
<br>
:black_small_square: Node.js (Version: 12.9.0 or higher)
<br>
:black_small_square: Express
<br>
:black_small_square: Heroku

### Pet Finder:
![alt text](https://github.com/mandres2/FriendFinder/blob/master/images/PNG/welcome_page_petFinder.png)

![alt text](https://github.com/mandres2/FriendFinder/blob/master/images/PNG/API%20Pet%20List%20.png)


## Code Explanation
- `server.js` file sets up the Express server, specifying the port number, the npm packages that need to be loaded, and also the routes, which have externalized
- There are 2 separate HTML files (`home.html` and `survey.html`) that serve as the front-end portion of the code; they determine what the user sees (the homepage and the survey, which will also show the resulting best match)
- The 2 routing files (`html-routes.js` and `api-routes.js`) determine the back-end logic (based on the request being made, the response that gets sent to the browser); the HTML routes display the survey and the homepage based on the URL that is accessed, and the API routes send back existing content in the server-side data or add new pets
- Best match is calculated by finding the pet with the minimal difference in scores and then sending that friend to the browser as a JSON object
- A modal is then toggled, displaying the the best match to the person who just took the survey

## Deployment

* <b> 'git push' the files into GitHub Profile and Heroku.</b>
* <b> Link repository and Heroku deployment link to BCS.</b>

## Built With

<br>
:black_small_square: Microsoft Studios Visual Code (v1.37.1)
<br>
:black_small_square: Express
<br>
:black_small_square: Google Chrome
<br>
:black_small_square: Node.js v12.9.0
<br>
:black_small_square: ShareX v12.4.1 - Screen Record User Functionality and converts to GIFs
<br>

## npm Packages Used:
:black_small_square: express v4.17.1
<br>
:black_small_square: body-parser v1.19.0
<br>
:black_small_square: path v0.12.7

## Author

**Micah Andres** - [mandres2](https://github.com/mandres2)

## License

<b>This project is licensed under the MIT License</b>

## Acknowledgments
* <b>TAs</b> - Catherine Pham, Benjamin Vaagen

<br>

* <b>Teacher</b> - Arron Linton

## Progress Log:
<br>
:heavy_check_mark: 9.17 - Reviewed requirements. Established repository, files, and began markdown on README.md. Started coding front-end/back-end.
<br>
:heavy_check_mark: 9.18 - Programming survey and pets data.
<br>
:heavy_check_mark: 9.19 - Debugging and fixing PATH for Heroku. Application is unable to deploy.
<br>
:heavy_check_mark: 9.20 - PATH Fixed, Final touches, and deployed application.
