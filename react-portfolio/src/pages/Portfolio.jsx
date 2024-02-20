import React from 'react';
import Project from '../components/Project';

function Portfolio() {
    const projects = [
        {
            title: "Weather Forecast Dashboard",
            image: "https://github.com/adriang1004/weather-dash/assets/144719329/66f39938-913a-4c37-9021-ef53eadbbbd8",
            link: "https://adriang1004.github.io/weather-dash",
            repo: "https://github.com/adriang1004/weather-dash"
        },
        {
            title: "PWA Text Editor",
            image: "https://github.com/adriang1004/PWA-text-editor/assets/144719329/b9bc61cd-2be6-40f3-b08a-8f69a223965d",
            link: "https://pwa-text-editor-tdaj.onrender.com",
            repo: "https://github.com/adriang1004/PWA-text-editor"
        },
        {
            title: "Take Note",
            image: "https://github.com/adriang1004/SVGLogo-Maker/assets/144719329/86a465e6-c1fd-41af-9947-b55fe3928f6a",
            link: "https://secret-atoll-81702-749578649982.herokuapp.com",
            repo: "https://github.com/adriang1004/Take_Note"
        },
        {
            title: "JS Code Quiz",
            image: "https://github.com/adriang1004/js-code-quiz/assets/144719329/39dab33a-5e18-42d9-809f-3afa49903dcd",
            link: "https://adriang1004.github.io/js-code-quiz/",
            repo: "https://github.com/adriang1004/js-code-quiz"
        },
        {
            title: "HTML Web Portfolio",
            image: "https://github.com/adriang1004/web-portfolio-adrian/assets/144719329/952a55d9-450d-4f48-9af7-95e14619c25e",
            link: "https://adriang1004.github.io/web-portfolio-adrian",
            repo: "https://github.com/adriang1004/web-portfolio-adrian"
        },
        {
            title: "Work Day Scheduler",
            image: "https://github.com/adriang1004/work-day-scheduler/assets/144719329/5e7cea9f-070c-44b9-ada6-01afde471220",
            link: "https://adriang1004.github.io/work-day-scheduler",
            repo: "https://github.com/adriang1004/work-day-scheduler"
        },

    ];

    return (
        <section>
            <h2>Portfolio</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <Project key={index} {...project} />
                ))}
            </div>
        </section>
    );

}

export default Portfolio;