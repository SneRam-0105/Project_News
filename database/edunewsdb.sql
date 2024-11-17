drop database if exists edunewsdb;
create database edunewsdb;

use edunewsdb;

create table education(
    educationId integer not null primary key,
    faculty varchar (50) not null,
    article varchar(300) not null
);

create table articles(
    articleId integer not null primary key,
    article_title varchar(25) not null,
    article_description varchar(300) not null,
    article_image varchar(20)   
);

create table business();
create table tech();
create table contact();

