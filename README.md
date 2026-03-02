<h1 align = "center">Furniture Site Implementation</h1>

<p align = "center"><b>Overview</b>: This project is a Front-End Implementation of a Community Figma Design created by <i>aashifasheikh12</i>.</p>

<!-- <p align = "center">
  <img src= "/readme-images/house-icon.jpg"             alt="house-icon-outline"
  width="25%"/>
</p> -->

<br>
<p align = "center">ℹ Note: Current scope is restricted to the Landing Page.</p>

------------

<h2>Table of Contents</h2>


- [Installation](#installation)
- [Tech Stack](#tech-stack)
- [Process](#process)
- [Author](#author)

------------

# Installation

```bash
npm install
npm run dev
```

# Tech Stack

<p align="left">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=react,vite,ts,html,css,vscode&perline=8" />
  </a>
    <h4><u>Packages:</u><br/><span style = "font-weight:lighter">classNames, react-router-dom, react-icons</span></h4>
</p>

# Process

- Cleared the initial application of any pre-existing Vite demo logic & styling, pushed up and then added main branch protection in Github

- #PR1 Imported all img assets from the figma design, and gave appropriate naming conventions for each file and stored them in appropriate sub folders within the assets folder.

- #PR2 Initial scaffolding for components, layout and modular CSS.

- #PR3 Installed classnames to aid Typography systems, along with @types/classnames under a dev dependency. Basic test using some placeholder h1 styling.

- #PR4 Adding design token variables and font sourcing

- #PR5 Added icon to site & update favicon

- #PR6 Code cleanup: Removing redundant styling, vite icon, and property access from themes (design token variables only)

- #PR7 Adding responsive grid functionality to the Layout component, and rendering a basic Home page component (with testing styling). Deployment initiated.

- #PR8 Implemented React Router DOM, for scalability - for when this project goes past the initial MVP and we create other linking pages to visit.

<p align = "center"><i>--- System implemented ---</i></p>

- #PR9 Implemented the basic skeleton with appropriate container classes (including making grid a reusable class), and placeholder padding-blocks to grey-box & preserve the sections.

Also added the gap between main sections. Chose 56px as it matched two of 4 of the gaps in the home sections of the figma design.

<p align = "center"><i>--- Skeleton implemented | Ready to translate the Home page from figma ---</i></p>

- #PR10 Pt1: Implemented pass for header, which involved updating the Typography system due to the component originally disallowing href properties. Created new Typography variants for navlink and brand. Header spacing and styling now matches almost like for like against the figma design (just a small misalignment for the react icons as I could not find a matching profile icon, and all icons are from different sub libraries.) React icons package installed.

- #PR10 Pt2: Footer implemented to mirror figma design. I did have to make a design decision surrounding the Newsletter subsection content. The 'underline' (bottom-border) for the input and sub button are a little thinner, as even one more pixel is just too emphasised, and I have learnt previously that dealing with half pixels can cause issues with the lines not rendering in React applications.


# Author

Front-end Implementation by Hannahry
<i></br><b>aka: </b>@Hannalysis</i>