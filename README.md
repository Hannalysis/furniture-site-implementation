<h1 align = "center">Furniture Site Implementation</h1>

<p align = "center"><b>Overview</b>: This project is a Front-End Design System Implementation, of a Community Figma Design created by <i>aashifasheikh12</i>.</p>

<div align = "center">
  <img src= "docs/readme-assets/furniro-banner.jpg" alt="Landing page banner showing furniro hero section"/>
</div>

<br>
<p align = "center">ℹ Note: Current scope is restricted to the Landing Page.</p>

------------

<h2>Table of Contents</h2>

- [Deployment](#deployment)
- [Installation](#installation)
- [Goals](#goals)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Components](#components)
- [Process](#process)
- [Milestones](#milestones)
- [Author](#author)

------------

# Deployment 

For a live demonstration, please feel free to view here: <br/>
https://furniture-site-implementation.vercel.app/

# Installation

```bash
npm install
npm run dev
```

# Goals
<i>Initially, this project was going to become a straightforward figma-to-code visual translation.

After setting my eyes on this public community figma design, which actually encompassed an entire 8 pages and a sidebar; it made sense to implement a scalable front-end system, with reusable components and design tokens. This would make it easier to create all the pages on this selfsame project.
</i>

# Tech Stack

<p align="left">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=react,vite,ts,html,css,vscode&perline=8" />
  </a>
    <h4><u>Packages:</u><br/><span style = "font-weight:lighter">classNames, react-router-dom, react-icons</span></h4>
</p>

# Architecture

This project consists of a Layout system, Typography system, Design Token variables associated to a main theme, a react-routing system, reusable grid & container classes, and reusable components.  

Styling is handled in modular css files and using hsl colouring only. Despite only having design files for desktop (therefore implementing 1440px view first), I'm utilising a mobile first mindset by allocating as much of the styling that requires a desktop width to be already handled by relevant media queries. Therefore when MS1 is complete, mobile styling properties will not be using media queries by default.

High level app flow diagram:

<div align= "center">
  <img src= "docs/readme-assets/app-basic-flowchart-diagram.jpg" 
       alt="Basic application flow diagram"
       width=75% />
</div>

<br/>

<h3> Layout </h3>

- Layout.tsx
- Layout.module.css
- Themes.module.css


Folder & file structure: 

```bash
src/
  assets/
  components/
    @ui
    Carousel
    Footer
    Header
    ProductCard
  data/
  Layout/
    Layout.module.css
    Layout.tsx
    Themes.module.css
  pages/
    Home/
      Banner/
      BrowseTheRange/
      HashtagShare/
      Inspirations/
      OurProducts/
      Home.tsx
  App.tsx
  index.css
  main.tsx
```


Layout decisions (Grid/Flex, spacing wrappers, etc.)
Design tokens / theme variables

# Components

<div align="center">

PH table!

|  | Purpose                          | Where Used                       |
| --------- | -------------------------------- | -------------------------------- |
| Card      | Reusable content container       | Features, Pricing, Blog sections |
| Button    | Primary / secondary actions      | CTA, forms                       |
| Grid      | Layout system for responsiveness | All pages                        |

</div>


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

- #PR10 Pt1: Implemented pass for Header, which involved updating the Typography system due to the component originally disallowing href properties. Created new Typography variants for navlink and brand. Header spacing and styling now matches almost like for like against the figma design (just a small misalignment for the react icons as I could not find a matching profile icon, and all icons are from different sub libraries.) React icons package installed.

- #PR10 Pt2: Footer implemented to mirror figma design. I did have to make a design decision surrounding the Newsletter subsection content. The 'underline' (bottom-border) for the input and sub button are a little thinner, as even one more pixel is just too emphasised, and I have learnt previously that dealing with half pixels can cause issues with the lines not rendering in React applications.

- #PR11 Implemented the Banner section. Added the overline and subtitle1 Typrography properties and linked them to the appropriate text content within the Discovery container. Discovery's button is bespoke and does not quite match other buttons so it is styled and contained within the Banner component section for now.

- #PR12 Implemented the Browse The Range (btr) section. I decided to not place the subheader within the Typography system as it's specific properties are not utilised in any of the other 8 pages of the figma design. I'm also overriding the h4 Typography within the room headers as the font weight is bespoke to that section, however otherwise it's still mostly h4 for other properties it uses.

- #PR13 Pt1: Implemented the Our Products section. The Product Card contents are utilising more Typography header elements than perhaps expected usually, however there are reusable elements here (ie product description and sticker text), and the product card text is more defined and distinct than product cards can typically be, so I allowed the exception in this case.
The sticker content text is also more centred for the sale sticker type than the figma, to remain consistent with the centred new sticker (which does match the figma).  

- #PR13 Pt2: Additionally, I had to import the ProductCardData and explicitly set it to the products array list once the optional sticker object existed; and is also more TypeScript compliant.  Finally, I refactored elements of the OurProducts component to keep the intention more layout focused; by abstracting the product data into its own file, and placing the ProductCard types into their own bespoke file. I initially thought to abtract the stickers into their own component, but realising they are only present with the ProductCards on the web pages, but realised it's cleaner not to.

- #PR14 Pt1: Inspiration section implemented. When working on the Room Card subsection (the middle container), I was hoping to reuse one of the react-icons packages I had already utilised for the header, and thankfully, the bs one had a good match for the right arrow button. Transforming the inner container to be exact has proven difficult. I've got it extremly close to the figma; and decided to align exactly height and allow .5% off on the horizontal for now. Meaning, the top of the container aligns well against the bears arm and the button sits just under the top of the mattress, however the top of the container sits a fraction too high compared to the end table.

- #PR14 Pt2: Carousel items and their supporting indicators are dynamically generated based on the amount of inspirations images within the inspirationsCarousel data file. 
(The Figma design shows 4 indicators but only provides two images for this section, so I've implemented the two which generates two indicators). 

- #PR15 A first pass of the Share section. Without a designer on hand to talk about how this is supposed to be handle in any form of responsiveness, I have strictly implemented the section for the 1400px layout. I do have some issues on previous implemented sections on smaller desktop views anyway, so that seems the appropriate next step.

<p align = "center"><i>--- Making the site responsive for all desktop sizes (1024px and above) ---</i></p>

- #PR16 Pt1: Due to the community figma design not having any slides for anything other than the 1440px, I made layout decisions to help make the responsive adjustments flow easier without losing the intended section deisgn in as many sections as possible.  I ensured I commented out all section components at first, and slowly introduced them as each section had apt responsive behaviour.

- #PR16 Pt2: First changes I made to any serious section layouts was to the footer; I decided to push the span at the smaller desktop breakpoints to allow the columns to take up two rows. The Inspirations section was a little more challenging. For this one, I decided to split the 3 columns, with the first one taking up the first row as the header, and the second two underneath. I decided to push the carousel to the right so the peek effect feels relevant on the smaller desktops, just without the negative margins so the container is responsive. With the Share section consisting of asthetic room photos but non product specific imagery, it made sense to take out the centre image and remove a couple of outer images as the screen width decreases, along with a slight scaling adjustment. It's likely I ll have to take a different approach when factoring in mobile devices.


# Author

Front-end Design System Implementation by Hannahry
<i></br><b>aka: </b>@Hannalysis</i>