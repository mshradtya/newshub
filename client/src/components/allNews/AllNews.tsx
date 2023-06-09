import { useEffect, useState } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import NewsCard from "../newsCard/NewsCard";

interface News {
  _id: string;
  banner: string;
  category: string;
  link: string;
  source: string;
  summary: string;
  title: string;
}

const AllNews = () => {
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/v1/news");
        const newsData = await response.json();
        console.log(newsData);
        setNews(newsData);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="AllNews">
      <Grid templateColumns="repeat(4, 1fr)" gap={3}>
        {news.map((newsItem) => (
          <GridItem key={newsItem._id}>
            <NewsCard news={newsItem} />
          </GridItem>
        ))}
      </Grid>
    </div>
  );
};

export default AllNews;
