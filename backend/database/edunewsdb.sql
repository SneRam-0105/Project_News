drop database if exists edunewsdb;
create database edunewsdb;
use edunewsdb;
create table education(
    educationId integer not null primary key,
    faculty varchar (50) not null,
    articles_number integer not null,
    web_link varchar(200)
);
create table articles(
    articleId integer not null primary key,
    article_title varchar(25) not null,
    article_description varchar(300) not null,
    article_image varchar(100),
    articles_link varchar(255)
);
create table contact(
    email varchar(20) not null,
    address varchar(40) not null,
    phone_number varchar(11) not null
);
INSERT INTO education (educationId, faculty, articles_number, web_link)
VALUES 
(1, 'Engineering', 5, 'https://www.engineeringnews.com'),
(2, 'Medical Sciences', 3, 'https://www.medicaltimes.com'),
(3, 'Arts and Humanities', 4, 'https://www.artshub.com'),
(4, 'Computer Science', 7, 'https://www.techworld.com'),
(5, 'Business Administration', 2, 'https://www.businessinsider.com');
INSERT INTO articles (articleId, article_title, article_description, article_image)
VALUES 
(1, 'AI in Education', 'The impact of artificial intelligence in modern education.', 'https://shorturl.at/qjIRr'),
(2, 'Online Learning Trends', 'Exploring the rapid growth of online education platforms.', 'online_learning.jpg'),
(3, 'Sustainability', 'How engineering students are embracing sustainability.', 'sustainability.jpg'),
(4, 'Mental Health', 'Addressing mental health issues among students.', 'mental_health.jpg'),
(5, 'Career Paths', 'Emerging careers in the field of business administration.', 'career_paths.jpg');
INSERT INTO contact (email, address, phone_number)
VALUES 
('info@engineer.com', '123 Engineering St, City A', '12345678901'),
('support@medical.com', '456 Medical Lane, City B', '23456789012'),
('contact@artshub.com', '789 Arts Blvd, City C', '34567890123'),
('help@techworld.com', '101 Tech Park, City D', '45678901234'),
('info@business.com', '202 Business Ave, City E', '56789012345');

--update statements (DO NOT EXECUTE)
 update articles set article_image = 'https://shorturl.at/1UIac' where articleId=1;
 update articles set article_image = 'https://shorturl.at/24r2a' where articleId=2;
 update articles set article_image = 'https://shorturl.at/VDd5k' where articleId=3;


ALTER TABLE articles
ADD COLUMN article_link VARCHAR(255);

UPDATE articles
SET article_link = 'https://www.engineeringnews.co.za/'
WHERE articleId = 1;

UPDATE articles
SET article_link = 'https://blogs.helsinki.fi/globalcampus/category/online-learning-trends/'
WHERE articleId = 2;

UPDATE articles
SET article_link = 'https://www.sciencedaily.com/news/earth_climate/sustainability/'
WHERE articleId = 3;

UPDATE articles
SET article_link = 'https://www.who.int/campaigns/world-mental-health-day'
WHERE articleId = 4;

UPDATE articles
SET article_link = 'https://www.betterup.com/blog/career-path'
WHERE articleId = 5;

update education set web_link = 'https://www.engineeringnews.co.za/' where educationId=1;
update education set web_link = 'https://www.sciencedirect.com/topics/earth-and-planetary-sciences/medical-science' where educationId=2;

