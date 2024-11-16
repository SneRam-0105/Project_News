import './widget.css'

function Widget() {
    return (
        <div className="sidebar">
            <div className="weather-section">
                <p>Current Weather</p>
                <div className="weather-icon">☁️</div>
                <p>22°C</p>
                <p>71.6 F</p>
                <p>Partially Cloudy</p>
            </div>

            <div className="section-header">Trending News</div>
            <div className="card">
                <div className="card-content">
                    <p>Taliquet elementum. Consectetur adipiscing elit</p>
                </div>
                <div className="card-image">
                    <img src="https://media.istockphoto.com/id/1369150014/vector/breaking-news-with-world-map-background-vector.jpg?s=612x612&w=0&k=20&c=9pR2-nDBhb7cOvvZU_VdgkMmPJXrBQ4rB1AkTXxRIKM=" alt="Card Image">
                    </img>
                </div>
            </div>
            <div className="section-header">Watch the news on youtube</div>
            <div className="card">
                <div className="card-content">
                    <p>Taliquet elementum. Consectetur adipiscing elit</p>
                </div>
                <div className="card-image">
                    <img src="https://media.istockphoto.com/id/1369150014/vector/breaking-news-with-world-map-background-vector.jpg?s=612x612&w=0&k=20&c=9pR2-nDBhb7cOvvZU_VdgkMmPJXrBQ4rB1AkTXxRIKM=" alt="Card Image">
                    </img>
                </div>
            </div>
        </div>


    )
};

export default Widget;