# Cadastro-de-enderecos
Primeiro aplicação React - Cadastro de endereços com verificação de CEP via API


**Desenvolva uma aplicação React onde o usuário vai informar seu nome e endereço, vamos considerar aquele endereço como novo ou não conforme informações abaixo.**

- **Crie um formulário que contenha os campos:**
    - **Nome completo (*Alfanumérico e obrigatório*)**
    - **Apelido (*Alfanumérico e opcional*)**
    - **CEP (*Numérico e obrigatório, máscara opcional*)**
    - **UF (*Campo obrigatório duas letras*)**
    - **Cidade (*Alfanumérico e obrigatório*)**
    - **Logradouro (*Alfanumérico e obrigatório*)**
    - **Bairro (*Alfanumérico e obrigatório*)**
    - **Número (*Numérico e obrigatório*)**
    - **Complemento (*Alfanumérico e obrigatório*)**
- **Crie uma listagem que contenha as colunas:**
    - Nome
    - CEP
    - Novo endereço (Sim/Não)
- **Regras de negócio:**
    - O usuário deverá preencher todos os campos listado acima conforme as regras de campo e ao salvar deverá validar os campos obrigatórios e exibir alguma mensagem que informe que algum campo obrigatório não foi preenchido;
    - Ao preencher o CEP deverá buscar automaticamente os campos UF, Cidade, Logradouro e Bairro;
    - Caso o CEP não exista no serviço da ViaCEP os campos não serão preenchidos automaticamente e o usuário deverá preenchê-los, neste caso será considerado um endereço novo. Caso exista, não será considerado um endereço novo.
    - Após salvar o formulário deverá ser exibido abaixo do formulário uma lista com os nomes e CEPs preenchidos juntamente com a informação de ser um endereço novo ou não.
        
        Bônus: Considerar que alguns CEPs são gerais para algumas cidades, como este 93700-000, neste caso os campos os campos Logradouro e Bairro não serão preenchidos  automaticamente e o usuário 
        deverá preencher.
        
        Observação: Não existe nenhum layout a ser seguido, então pode usar a criatividade aqui.
        
- **Regras técnicas:**
    - Usar React com TYPESCRIPT;
    - O uso de um framework de CSS (como Bootstrap, Material UI, etc...) é opcional;
    - Utilizar algum controle de estado (como Redux, Api Context, etc...) para controle de estado;
    - Pode ser utilizado algum framework para as validações do formulário;
    - Máscaras são opcionais;
    - Utilizar a API da ViaCEP para busca de CEP (Ex: 
    https://viacep.com.br/ws/01310-930/json/);
    - Uso do Atomic Design é desejável;
    
    Bônus: Caso esteja interessado em mostrar suas habilidades em backend, desenvolva uma API que encapsule o serviço da ViaCEP e faça sua aplicação frontend bater nesta sua API para obter o endereço pelo CEP.
    

Algumas ações deste desafio podem ser desafiadora, não se preocupe, vamos avaliar o que se esforçou para fazer.
