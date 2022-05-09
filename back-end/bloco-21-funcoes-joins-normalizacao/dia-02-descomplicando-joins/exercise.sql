/*Exercício 1: Utilizando o INNER JOIN, encontre as vendas nacionais (domestic_sales) e internacionais (international_sales) de cada filme.
🚀 Exercício 2: Utilizando o INNER JOIN, faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais (international_sales) do que vendas nacionais (domestic_sales).
🚀 Exercício 3: Utilizando o INNER JOIN, faça uma busca que retorne os filmes e sua avaliação (rating) em ordem decrescente.
Exercício 4: Utilizando o LEFT JOIN, faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.
Exercício 5: Utilizando o RIGHT JOIN, faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.*/

USE Pixar;

SELECT * FROM Movies;
SELECT * FROM BoxOffice;
SELECT * FROM Theater;

SELECT m.title, bo.domestic_sales, bo.international_sales
FROM Movies AS m
INNER JOIN BoxOffice AS bo
ON m.id = bo.movie_id;

SELECT m.title, bo.domestic_sales + bo.international_sales AS Sales
FROM Movies AS m
INNER JOIN BoxOffice AS bo
ON m.id = bo.movie_id
WHERE bo.international_sales > bo.domestic_sales;

SELECT m.title, bo.rating
FROM Movies AS m
INNER JOIN BoxOffice AS bo
ON m.id = bo.movie_id
ORDER BY bo.rating DESC;

SELECT t.*, m.*
FROM Theater as t
LEFT JOIN Movies as m
ON t.id = m.theater_id
ORDER BY t.name;

SELECT t.*, m.*
FROM Theater as t
RIGHT JOIN Movies as m
ON t.id = m.theater_id
ORDER BY t.name;
