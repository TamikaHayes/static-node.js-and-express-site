# static-node.js-and-express-site

 /**
 * Treehouse FSJS Techdegree
 * Project 6 - Static Node.js and Express Site
 * Tamika Hayes
 * May 11, 2021
 * app.js
 */
 
 This project portfolio website is built using Node.js, Express, and Pug. 
 
 Data about each project is stored in a customized JSON file.
 Pug templates use the JSON to dynamically generate the HTML that is ultimately displayed in the browser. Static files (images and CSS) are served using middleware.
 Error handlers catch 404 (not found) and 500 (server) errors. The server is set up using Express and Node.js.

 Site pages:
    --Home page/landing page, which showcases code projects with thumbnail images and links
    --'About' page with brief bio and contact information
    --Individual project pages (5 as of this writing) with links to Github repo and live project demo (hosted on GitHub Pages)

Design edits/customizations of styles.css file:
    --Home Page:
        - Changed color of .projects-box h5 (project titles) to blue
        - Increased font weight of .projects-box h5 to 600
        - Changed font-family of .projects-box h5 to "'Courier New', monospace"
        - Changed font-family of portfolio-intro h1 (homepage header) to "'Courier New', monospace"
        - Added light blue background color to portfolio-intro h1
        - Changed color of .cell-img border (border surrounding each project thumbnail) to coral
        - Changed background color of sidebar to creamsicle orange
        - Changed background color of body element (originally black) to match sidebar background



