/*Escreva uma query para exibir todas as peças que começam com GR.
Escreva uma query para exibir todos os fornecimentos que contenham a peça com code 2. Organize o resultado por ordem alfabética de fornecedor.
Escreva uma query para exibir as peças, preço e fornecedor de todos os fornecimentos em que o código do fornecedor tenha a letra N.
Escreva uma query para exibir todas as informações dos fornecedores que são empresas limitadas (LTDA). Ordene os resultados em ordem alfabética decrescente.
Escreva uma query para exibir o número de empresas (fornecedores) que contém a letra F no código.
Escreva uma query para exibir os fornecimentos onde as peças custam mais de R$15,00 e menos de $40,00. Ordene os resultados por ordem crescente.
Escreva uma query para exibir o número de vendas feitas entre o dia 15/04/2018 e o dia 30/07/2019.*/

USE PecasFornecedores;

SELECT * FROM Pecas
WHERE name LIKE 'GR%';

SELECT * FROM Fornecimentos
WHERE peca = 2
ORDER BY Fornecedor;

SELECT peca, Preco, Fornecedor FROM Fornecimentos
WHERE Fornecedor LIKE '%N%';

SELECT * FROM Fornecedores
WHERE name LIKE '%LTDA'
ORDER BY name DESC;

SELECT COUNT(*) FROM Fornecedores
WHERE code LIKE '%F%';

SELECT * FROM Fornecimentos
WHERE Preco BETWEEN 15 AND 40
ORDER BY Preco;

SELECT COUNT(*) FROM Vendas
WHERE DATE(order_date) BETWEEN '2018-04-15' AND '2019-07-30';