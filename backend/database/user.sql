drop user if exists 'team5'@'localhost';
create user 'team5'@'localhost' identified by 'team5';

grant all privileges on edunewsdb.* to 'team5'@'localhost';


-- mysql -u team5 -p  --