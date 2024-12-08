import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import ArticleCard from "../components/Article/ArticleCard";


const IT_Page = () => {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState([true]);
    useEffect(() => {
        axios
            .get("http://localhost:5002/Homepage/IT")
            .then((response) => {
                setArticles(response.data.articles);
                console.log(response.data.articles)
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });

    }, []);

    return (
        <div>


            {
                loading ? (
                    <p>Loading...</p>
                ) : (articles.map((news) => (
                    <ArticleCard key={news.id} {...news} />
                )))}
        </div>
    );
};

export default IT_Page;