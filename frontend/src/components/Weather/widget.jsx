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
                    <img src="your-image-url.jpg" alt="Card Image">
                    </img>
                </div>
            </div>
        </div>


    )
};

export default Widget;