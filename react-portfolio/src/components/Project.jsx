
function Project({ title, image, link, repo }) {
    return (
        <div className="project-tile">
            <img src={image} alt={title} />
            <div className="project-info">
                <h3>{title}</h3>
                <a href={link} target="_blank" rel="noopener noreferrer" className="project-link"style={{ color: 'red' }}>Live Site</a>
                <a href={repo} target="_blank" rel="noopener noreferrer" className="project-repo" style={{ color: 'purple' }}>GitHub Repo</a>
            </div>
        </div>
    );
}

export default Project;
