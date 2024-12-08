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

