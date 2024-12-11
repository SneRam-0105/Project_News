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
    article_image varchar(20)   
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
(1, 'AI in Education', 'The impact of artificial intelligence in modern education.', 'ai_education.jpg'),
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

