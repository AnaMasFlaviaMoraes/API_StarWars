# Avaliação Sprint 2 - Programa de Bolsas Compass.uol e universidades de Rio Grande e Pelotas
Avaliação da segunda sprint do programa de bolsas Compass.uol para formação em chatbot Rasa.

## API Escolhida:
A API escolhida foi Star Wars API, disponível em: https://swapi.dev/documentation
A aplicação consiste em criar um personagem que iniciará sua aventura no Universo Star Wars!
Você terá que dar um nome a seu personagem, escolher a sua espécie e selecionar um personagem da saga para acompanhá-lo durante a aventura!

## Funcionalidades:
A aplicação cria personagens, lista todos os personagens criados e faz a exclusão de algum deles.

## Informações adicionais:
A aplicação é a união de arquivos NodeJS, JavaScript e ligação com o banco de dados MongoDB.

Dependências instaladas:
 - npm install express
 - npm install body-parser
 - npm install dotenv
 - npm install mongoose

 ## Sobre MongoDB
 Existe uma rota local, quando o código for usado em ambiente localhost e a rota para o mongo do Okteto.
 Para que a aplicação fosse colocada no ar a URL usada é vinculada com o Mongo DB do Okteto!
 No docker-compose é mostrado a criação da imagem da aplicação e a imagem do mongo. No campo 'environment' são definidos username, password e database de ligação com o Mongo do Okteto, foram usados logins padrão (root). 

 ## Link para aplicação:
 https://web-anamasflaviamoraes.cloud.okteto.net
 
