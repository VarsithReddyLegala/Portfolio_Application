import React, { useState } from "react";
import { BsFolderFill } from 'react-icons/bs';
import PageHeaderContent from "../../Components/pageheader";
import data from './utils.js';
import './style.scss';

const filterData = [
    { filterId: 1, label: 'All' },
    { filterId: 2, label: 'Deployed' },
    { filterId: 3, label: 'In_Progress' },
];

const Projects = () => {
    const [filteredvalue, setFilterValue] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    function handleFilter(currentId) {
        setFilterValue(currentId);
    }

    function handleViewMore(project) {
        setSelectedProject(project);
        setIsModalOpen(true);
    }

    function closeModal() {
        setIsModalOpen(false);
        setSelectedProject(null);
    }

    const filteredItems = filteredvalue === 1 ? data.projectimg : data.projectimg.filter(item => item.id === filteredvalue);

    return (
        <div>
            <section id="Projects" className="projects">
            <PageHeaderContent headerText="Projects" icon={<BsFolderFill size={40} />} />
                <div className="portfolio__content">
                    <ul className="portfolio__content__filter">
                        {filterData.map((item) => (
                            <li
                                className={item.filterId === filteredvalue ? 'active' : ''}
                                onClick={() => handleFilter(item.filterId)}
                                key={item.filterId}
                            >
                                {item.label}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="portfolio__content__cards">
                    {filteredItems.map((item) => (
                        <div className="portfolio__content__cards__item" key={`cardItem${item.title.trim()}`}>
                                 <h2>{item.title}</h2>
                            <div className="portfolio__content__cards__item__img-wrapper">
                                <a>
                                    <img src={item.path} alt={item.title} />
                                </a>
                            </div>
                            <div className="portfolio__content__cards__item__button1">
                            <button onClick={() => handleViewMore(item)}>View More!</button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal */}
            {isModalOpen && selectedProject && (
                <div className="modal">
                    <div className="modal__content">
                            <span className="modal__close" onClick={closeModal}>&times;</span>
                            <h2 className="modal__content__Heading">{selectedProject.title}</h2>
                            <p className="modal__content__paragraph">{selectedProject.description}</p>
                            <h3 className="modal__content__Heading1">Technologies Used</h3>
                            <div className="modal__content__techstack">
                                {selectedProject.tech_stack.map((tech, index) => (
                                    <span key={index} className="modal__content__techstack__techbadge">{tech}</span>
                                ))}
                            </div>
                            <div className="modal__content__Links">
                                <a 
                                    className="modal__content__Links__code" 
                                    href={selectedProject.viewcodeLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    View Code
                                </a>
                                <a 
                                    className="modal__content__Links__live" 
                                    href={`https://${selectedProject.viewliveLink}`} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    View Live
                                </a>
                            </div>
                    </div>
                </div>
            )}
            </section>
        </div>
    );
};

export default Projects;
