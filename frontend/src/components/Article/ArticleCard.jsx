const ArticleCard = ({ title, author, description, url, urlToImage, content }) => {


    return (

        <div className="card">
            <div className="card-content">
                <p> {title}

                </p>
            </div>
            <div className="card-content">
                <p> {author}

                </p>
            </div>
            <div className="card-content">
                <p> {description}

                </p>

            </div>
            <div className="card-content">
                <p> {url}

                </p>

            </div>
            <div className="card-image">
                <img src={urlToImage} alt="Card Image">
                </img>
            </div>
            <div className="card-content">
                <p> {content}

                </p>

            </div>

</div>

    )
}
export default ArticleCard;