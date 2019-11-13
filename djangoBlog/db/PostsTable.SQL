CREATE TABLE `posts` (
                         `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
                         `author` varchar(100) NOT NULL,
                         `content` text NOT NULL,
                         `title` varchar(100) NOT NULL,
                         PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8