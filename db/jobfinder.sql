-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-06-2023 a las 07:12:09
-- Versión del servidor: 10.4.17-MariaDB
-- Versión de PHP: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `jobfinder`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `offer`
--

CREATE TABLE `offer` (
  `ID` int(11) NOT NULL,
  `title` text NOT NULL,
  `description` text NOT NULL,
  `expiration` date NOT NULL,
  `type` int(11) NOT NULL,
  `owner` int(11) NOT NULL,
  `icon` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `offer`
--

INSERT INTO `offer` (`ID`, `title`, `description`, `expiration`, `type`, `owner`, `icon`) VALUES
(1, 'asdfasd', 'asdfads', '2001-01-01', 1, 24, '1687912573055-pngwing.com.png'),
(2, 'title', 'desc', '2001-01-01', 1, 24, '1687912689466-pngwing.com.png'),
(3, 'asdfa', 'asdf', '2001-01-01', 1, 24, '1687912795913-pngwing.com.png'),
(4, 'dgfsa', 'asdf', '2001-03-01', 1, 24, '1687912819436-pngwing.com.png'),
(6, 'oferta de jose2', 'sdfasdf', '2002-01-02', 2, 25, '1688012747251-mision_0.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `postulation`
--

CREATE TABLE `postulation` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `offer_id` int(11) NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `postulation`
--

INSERT INTO `postulation` (`id`, `user_id`, `offer_id`, `status`) VALUES
(2, 24, 1, 1),
(3, 24, 2, 1),
(4, 25, 1, 4),
(5, 25, 3, 4),
(6, 25, 2, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

CREATE TABLE `rol` (
  `ID` int(11) NOT NULL,
  `Name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `rol`
--

INSERT INTO `rol` (`ID`, `Name`) VALUES
(1, 'admin'),
(2, 'normal');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `ID` int(11) NOT NULL,
  `Name` text NOT NULL,
  `Phone` text NOT NULL,
  `Email` text NOT NULL,
  `Pass` text NOT NULL,
  `Ocupation` int(11) NOT NULL,
  `Organization` text NOT NULL,
  `Role` int(11) NOT NULL,
  `Icon` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`ID`, `Name`, `Phone`, `Email`, `Pass`, `Ocupation`, `Organization`, `Role`, `Icon`) VALUES
(24, 'Ignacio', '+56978962947', 'ignacio@price.cl', '$2b$10$Sl6qHjSg0yldXuAXSr1yzuR/fWk6Dupkyt55BYwucmy2Bvc4l45dK', 0, 'GETT', 2, '1687911547778-pngwing.com.png'),
(25, 'jose', '56978962947', 'ignacio@mail.com', '$2b$10$RdiRWEVmkXULtMK2Akrfs.KwL1Enqmtx98yTW5w1F9Uyio8OrXCUy', 0, 'wis', 1, '1688012463325-humedal-de-ConcAn.jpg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `offer`
--
ALTER TABLE `offer`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `postulation`
--
ALTER TABLE `postulation`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `offer`
--
ALTER TABLE `offer`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `postulation`
--
ALTER TABLE `postulation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `rol`
--
ALTER TABLE `rol`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
