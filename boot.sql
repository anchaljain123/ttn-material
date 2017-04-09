-- MySQL dump 10.13  Distrib 5.7.17, for Linux (x86_64)
--
-- Host: localhost    Database: student
-- ------------------------------------------------------
-- Server version	5.7.17-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `email_id` varchar(255) NOT NULL,
  `is_active` bit(1) NOT NULL,
  `date_created` datetime DEFAULT NULL,
  `marks` int(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `indx` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'anchal.jain@tothenew.com','','2017-02-10 10:49:00',76),(2,'anchall.jain@tothenew.com','\0','2017-02-10 10:53:34',NULL),(3,'sita.jain@tothenew.com','','2017-02-10 10:55:56',NULL),(4,'pankaj.malhotra@tothenew.com','','2017-02-10 10:59:54',NULL),(5,'pankajj.malhotra@tothenew.com','','2017-02-10 11:05:26',90),(6,'w@ttnd.com','','2017-02-10 12:24:54',NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_marks`
--

DROP TABLE IF EXISTS `user_marks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_marks` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) NOT NULL,
  `subject_name` varchar(255) NOT NULL,
  `date_created` datetime DEFAULT NULL,
  `marks` int(10) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `indx` (`id`,`user_id`),
  CONSTRAINT `fk_id` FOREIGN KEY (`id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_marks`
--

LOCK TABLES `user_marks` WRITE;
/*!40000 ALTER TABLE `user_marks` DISABLE KEYS */;
INSERT INTO `user_marks` VALUES (1,101,'cpp','2017-02-10 12:04:50',100),(2,103,'java','2017-02-10 12:05:03',100),(3,105,'asp','2017-02-10 12:05:44',89),(4,110,'jvm','2017-02-10 12:06:03',32),(5,110,'node','2017-02-10 12:06:20',90),(6,120,'node','2017-02-10 12:15:02',88);
/*!40000 ALTER TABLE `user_marks` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-02-10 13:14:36
