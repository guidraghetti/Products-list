<h1># Product List API Test </h1>

</br></br>

<p align="center">
Este é um repositório temporário que contém os arquivos necessários para executar um servidor de _backend_ desenvolvido para solucionar o teste de processo seletivo da empresa Zaply.
</p>

<h3>Pré-requisitos:</h3>

* Node
* Yarn
* MySQL

<h3>Como executar: </h3>

1. Clone o repositório
2. Navegue até a raiz do projeto
3. Vá até o arquivo ```.env``` e modifique a senha do MySQL (campo _PASSWORD_) para acesso ao _database_ (o usuário já está configurado como _root_)
4. Execute o comando: 
 ```sh 
 $ ǹpm start 
 ```
5. Aguarde a configuração do ambiente...

* Após a configuração do ambiente, o servidor já deve estar disponível para utilização.
* Para melhor visualização e utilização do servidor um _swagger_ está disponível no endereço ```http://localhost:3001/swager```

***

</br>

# Helpers
* [Testes e cobertura](#testes) </br>
* [Tecnologias](#tecnologias) </br>
* [Arquitetura](#arquitetura) </br>
</br>

# Testes

<h3>Testes automatizados</h3>

Para executar os testes basta executar na raiz do projeto o comando: 
```sh 
 $ ǹpm test 
 ```
 Após a execução será exibido no terminal uma tabela com a cobertura dos testes.
 
 ***
 </br>
 
 # Tecnologias
 
 Tecnologias utilizadas
 </br>
 * Node
 * Sequelize - utilizada por possuir capacidade de fazer migrações de esquemas de banco de dados e alimentar o mesmo com dados (_migrations_ e _seeders_)
 * Mocha - _framework_ para realização de suite testes de fácil utilização
 * Chai - biblioteca para asserção do desenvolvidos dos testes.
 * Swagger - utilizada para facilitar a utilização do servidor, disponibilizando uma _interface_ gráfica
 * Yarn - gerenciador de pacotes com melhor performance que o _NPM_
 * Express - _framework_ padrão do Node para criação de APIs
 * MySQL - SGBD muito utilizado e de fácil configurção

***
</br>

# Arquitetura

 O projeto foi desenvolvido utilizando o padrão MVC. Para isso temos: 
* Uma pasta para a definição de rotas 
* Uma pasta para a definição de _controllers_ (no qual a lógica de negócio é implementada) 
* Uma pasta para os modelos a serem armazenados no banco de dados  
* Uma pasta de _services_ que controla a comunicação com o banco de dados.

***

 Para facilitar a utilização, temos dois _scrips_:  
* Execução do servidor, criando _database_, tabelas e populando o _database_.
* Execução de testes, que também cria o _database_ e suas tabelas, popula o banco e realiza os testes.
