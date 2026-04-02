<h2 align="center">#PR9-#PR15</h2>

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

<p align = "center"><i>--- Initial translation from figma design for the Home page complete ---</i></p>