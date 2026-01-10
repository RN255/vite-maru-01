## Project Name: Vite Maru (React Vite Bootstrap)  

I wanted to make a new frontend using Vite. I created a page based on the Vite homepage. 

## How to use

Can be viewed on GitHub Pages: https://vite-maru-01.vercel.app/

## Screenshots
![Vite Maru screenshot](https://github.com/RN255/vite-maru-01/blob/main/src/assets/Screenshot%202026-01-10%20150515.jpg)

## Motivation

I wanted to make a new frontend using Vite.

## Tech used
- React
- Bootstrap
- Vite

## Project features
- Fully responsive front page and content page.

## Lessons learnt / development process
- Install vite

- Install react bootstrap

- Clear App.css and Index.css - We're using bootstrap now

- Create components folder
    - Add a navbar
    - Use "rfc" to create boilerplate

- Create a pages folder
    - Why not create a Home.jsx page?

- Use react
    - className="container" - and so on...

- Instal React Router Dom
    - npm install react-router-dom
    - Put the wrapper in main.jsx
    - Add routes to app.jsx

- Vite layout
   -  Keep main.jsx tiny
        - Browser router wrapping (only) will go in here at some point
    - App.jsx should be high level structure
       -  Routes will go in here
       -  Global components like NavBar will go in here

- Import a font from google fonts
   -  use @import and then *{} in css file

- Customise your buttons
    - Create custom css

- Import some icons
    - follow instructions for bootstrap instructions
    - gpt will help you will referencing it in the css file

- Get your site running again with
    - npm run dev

- Let's make some links
    - if you’re using React Router:
        - `<Button as={Link} to="/about">About</Button>`
            - And import Link at top

- If react bootstrap components look bad, you might have to state you're in dark mode
    - `<div data-bs-theme="dark">`
       
    


## future development
- More pages can be added.
- It needs a real prupose, not just a boilerplate site.
- Needs some animations.
