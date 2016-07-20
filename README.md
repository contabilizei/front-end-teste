# Por que trabalhar na Contabilizei

**Eleita a melhor startup B2B da América Latina em 2016**, a Contabilizei é um escritório de contabilidade online, líder de mercado, com sede em Curitiba (PR). Nosso propósito é resolver a dor e burocracia de micro e pequenas empresas ao se manterem regulares com o governo. Somos contadores, só que online, simples assim. Acreditamos no poder da tecnologia para melhorar continuamente a vida das pessoas. 


Se você tem espírito e comportamento empreendedor, muita disposição e proatividade para trabalhar em uma empresa em franca expansão, você é um forte candidato :)

Como Desenvolvedor Front-end você irá trabalhar juntamente com uma excelente equipe de desenvolvedores ninja, tendo foco na criação produtos que garantam a melhor experiência para nossos usuários.

O que fazem os Ninjas da Contabilizei? O que comem (e bebem)? Onde vivem?

Somos um time de desenvolvimento ágil, focado em fazer as coisas acontecerem. Trabalhamos com Kanban, entregas contínuas, Git, Cloud, aplicações distribuídas e mais uma porrada de tecnologias novas... Queremos que nosso cliente tenha o produto e a experiência mais fodásticos do planeta. Gostamos de compartilhar ideias, testar tecnologias e de cerveja :)

# O trabalho por aqui

Que tal fazer parte de um time com atitude “get Fˆ%#ing things done”? Participar de uma das maiores disrupções no mercado? Ter a oportunidade de trabalhar com tecnologias e conceitos inovadores, como:
* Práticas ágeis como Kanban / Scrum
* Google Cloud Platform
* Escalabilidade
* Micro services e aplicações distribuídas
* Kubernetes
* Git
* AngularJs
* Material Design
* BDD

Mais informações sobre a vaga você encontra aqui: [Desenvolvedor Front-end na Contabilizei](https://jobs.lever.co/contabilizei/9dee5e3a-34bd-4b8e-9fc6-0b38db170788)

# O que preciso fazer?

Vamos ser práticos e diretos, se você quer trabalhar conosco siga os passos abaixo:

* Faça um "fork" desse projeto para sua conta git.
* Implemente o desafio descrito no tópico abaixo.
* Faça um push para seu repositório com o desafio implementado.
* Envie um email para (queroserninja@contabilizei.com.br) avisando que finalizou o desafio com a url do seu fork.
* Cruze os dedos e aguarde nosso contato.

# O desafio (Simulador de Impostos)

Crie uma *Single Page Application* de um **Simulador de Impostos para empresas de Lucro Presumido ou Simples Nacional**.
Para fazer a simulação dos impostos, nós disponibilizamos para você uma RESTFul API com os seguintes serviços:

Host: [https://contabilizei-jobs.appspot.com/rest/simulador/imposto](https://contabilizei-jobs.appspot.com)

**Listar atividade**  *GET /rest/simulador/atividades*

Retorna uma lista de atividades econômicas.

**Responses**

(*application/json*)

| Parâmetro     | Tipo          | Descrição                                                                                        |
| ------------- |:-------------:| :------------------------------------------------------------------------------------------------|
| success       | boolean       | Indica sucesso ou não na requisição do método|
| errors        | array(String) | Lista de mensagens de erros                  |
| objects       | array(object) | Lista de objetos atividade (cod, descricao)  |


**Calcular impostos Simples Nacional**  *GET /rest/simulador/imposto/simples*

Retorna uma lista com o imposto do regime tributário Simples Nacional que é calculado sobre o faturamento da empresa e impostos de folha de pagamento caso houver.

**Request**

Query parameters

| Parâmetro     | Tipo          | Descrição                                                                                        |
| ------------- |:-------------:| :------------------------------------------------------------------------------------------------|
| fatanterior   | float         | Soma do valor faturamento da empresa nos últimos 12 meses, excluindo-se o faturamento de mês da simulação|
|faturamento    |float          |Valor do faturamento da empresa no mês referente à simulação                                      |
|folha          |float          |Soma do valor da folha de pagamento da empresa no mês referente à simulação                       |
|codatividade   |int            |Código da atividade econômica principal da empresa                                                |

**Responses**

(*application/json*)

| Parâmetro     | Tipo          | Descrição                                                                                        |
| ------------- |:-------------:| :------------------------------------------------------------------------------------------------|
| success       | boolean       | Indica sucesso ou não na requisição do método|
| errors        | array(String) | Lista de mensagens de erros|
| objects       | array(object) | Lista de objetos impostos|

**Calcular impostos Lucro Presumido**  *GET /rest/simulador/imposto/lucropresumido*

Retorna uma lista com os impostos do regime tributário Lucro Presumido que são calculados sobre o faturamento da empresa e impostos de folha de pagamento caso houver.

**Request**

Query parameters

| Parâmetro     | Tipo          | Descrição                                                                                        |
| ------------- |:-------------:| :------------------------------------------------------------------------------------------------|
|faturamento    |float          |Valor do faturamento da empresa no mês referente à simulação                                      |
|folha          |float          |Soma do valor da folha de pagamento da empresa no mês referente à simulação                       |

**Responses**

(*application/json*)

| Parâmetro     | Tipo          | Descrição                                                                                        |
| ------------- |:-------------:| :------------------------------------------------------------------------------------------------|
| success       | boolean       | Indica sucesso ou não na requisição do método|
| errors        | array(String) | Lista de mensagens de erros|
| objects       | array(object) | Lista de objetos impostos|

**Atenção:** os impostos e valores retornados são ilustrativos e podem não correspondem a informações reais.

## Tecnologias

Devem ser utilizadas as seguintes tecnologias :

* HTML5 e CSS3 
* Javascript puro / JQuery
* Bootstrap (http://getbootstrap.com/)
* AngularJS 1.4.X (desejável)
* Angular Material Design (desejával)

## Arquitetura da solução

Explique o por que das decisões de solução que foram adotas na implementação do desafio.

## Avaliação

Entre os critérios de avaliação estão:

* Usabilidade
* Criatividade
* Código limpo
* Organização e documentação
* Performance

# Sobre você

Queremos saber um pouco mais sobre você :) Por favor, responda o questionário do arquivo questions.rmd e envie junto com seu projeto.

