-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Erstellungszeit: 29. Aug 2018 um 13:06
-- Server-Version: 5.7.21
-- PHP-Version: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Datenbank: `festival_lovers`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `festival`
--

CREATE TABLE `festival` (
  `user_id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ort` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `kanton` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `beginn` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `ende` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `musikrichtung` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Daten für Tabelle `festival`
--

INSERT INTO `festival` (`user_id`, `name`, `ort`, `kanton`, `beginn`, `ende`, `musikrichtung`, `id`) VALUES
(9, 'eingabe in DB festival1', '8050 Oerlikon', 'ZH', '2018-10-04 14:59:43', '2018-10-06 14:59:43', 'poprock', 1),
(9, 'eingabe in DB festival2', '1000 Lausanne', 'VD', '2018-10-07 14:59:43', '2018-10-08 14:59:43', 'electronic', 2);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Daten für Tabelle `user`
--

INSERT INTO `user` (`id`, `email`, `password`, `username`, `created`, `updated`) VALUES
(1, 'test@test1.com', '$2y$10$FjgOIlafDvkOs8JhMnuGe.NPfZHpHkBbtkdP3qeYdNJjDKOc/pE8K', 'Test1', '2018-08-26 09:56:07', '2018-08-27 22:53:43'),
(2, 'test@test2.com', '$2y$10$X6YRsKHXEuSwmdu4heWgneuehsJq3nbPbR.HyzChFf61JtxJOA5m.', 'Test2', '2018-08-27 23:54:58', '2018-08-27 23:54:58'),
(3, 'test@test3.com', '$2y$10$qwnkaw4cVJ7cAwT.ybIr4e0FvsF3hgGKbz8xWLSS4GIf7DtVqkzd.', 'Test3', '2018-08-27 23:57:35', '2018-08-27 23:57:35'),
(7, 'test@test4.com', '$2y$10$Jt9R.zyDJ8Ow9oHGs3dkbu1AV.LAyxUuabnOnE0iUhTseAyVwr5tS', 'Test4', '2018-08-28 03:06:11', '2018-08-28 03:06:11'),
(8, 'test@test5.com', '$2y$10$SyEtfhE8J4gIw9qaz43MDe8xCvku6DOQlF0SVpo8Cl9MxOSEFlc1m', 'Test5', '2018-08-28 13:05:24', '2018-08-28 13:05:24'),
(9, 'admin@admin.com', '$2y$10$zY1kMTN/71jSV.2tWxxX9OW7NBVSlNOLluaw2xMOzzzJyE1IBJDwW', 'admin@admin.com', '2018-08-28 14:53:23', '2018-08-28 14:53:23');

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `festival`
--
ALTER TABLE `festival`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `festival`
--
ALTER TABLE `festival`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT für Tabelle `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
