# LesSoft-APP
App desenvolvido para o projeto LesSoft - FIAP

## Sumário
- [Integrantes;](#integrantes)
- [Instruções para uso da aplicação;](#instruções-para-uso-da-aplicação)
- [Componentes do Projeto.](#componentes-do-projeto)

## Integrantes
- Beatriz Lucas - RM99104;
- Enzo Farias - RM98792;
- Ewerton Gonçalves - RM98571;
- Guilherme Tantulli - RM97890;
- Thiago Zupelli - RM99085.

## Instruções para uso da aplicação
### Iniciando a Aplicação

Após, rodar:
```
cd lessoft-app
```

Em sequência:
```
npm install
```

Para inicializar o projeto:
```
npm start
```

### Credenciais para Login:
Usuário:
```
teste
```

Senha:
```
teste123
```

## Componentes do Projeto:

### AsyncStorage
O componente *AsyncStorage* é utilizado para a camada de login do app. Não foi desenvolvida uma tela de cadastro para que o controle fosse feito com uma validação simples de *if/else* o que facilita testes de navegaçao e geração de token (validação do *AsyncStorage*).

### TabNavigation
No APP da LesSoft utilizamos a navegação em *Tab's* ou *TabNavigation*. Esse tipo de navegação é mais moderno, mais clean, e comporta melhor componentes em tela para APP's (vide exemplos como Facebook e Instagram).

Nessa navegação existe o controle do que é exibido em cada página **após** login, que é controlado pelo componente acima.

### Stack Navigation ou AppNavigation
Nossa *StackNavigation* controla a entrada e saída da *TabNavigation*. Isso quer dizer que ela da um *SET* para a *HomeScreen* como tela *MAIN* e um *SET* para a *LoginScreen* como *LOGIN*.

Assim, ao abrir o app você é redirecionado de maneira padrão para a tela de *LOGIN* e ao logar com as credenciais é redirecionado para a *MAIN* que é a *HomeScreen*.

Ao deslogar, você é novamente direcionado para a tela de *LOGIN*.

### View
Para nosso APP a *View* é usada de maneira genérica, assim como em 90% dos APP's. Os componentes listados abaixo são alocados dentro de *View's* diferentes, como uma repartição do total da tela do nosso APP. 

### Text
O componente de *Text* é utilizado para alocar campos de texto dentro de *Views* em toda nossa *TabNavigation*.

### InputText
Foi utilizado *InputText* na nossa *LOGIN* para receber as credenciais de *Login* e *Senha*.

### Button
Temos diversos *Button's* dentro do nosso APP. 

#### LoginScreen:
Temos o botão para enviar as credenciais para o AsyncStorage gerar o *Token*:
- Botão de *Login*.

#### TabNavigation:
Temos todas as páginas com um botão de acesso, sendo elas: 
- Home;
- Quem Somos;
- Produtos;
- Soluções;
- Configurações.

#### SettingsScreen:
Temos um botão para deletar o *Token* gerado pelo AsyncStorage, que também tem uma tratativa para redirecionar o usuário para a tela de *LOGIN*.

### Alert
Foi utilizado o componente de *Alert* para exibir a versão do APP dentro da nossa *SettingsScreen*. Assim como para mostrar que algumas *features* ainda serão desenvolvidas numa próxima versão.

### Carrossel
Temos um componente de carrossel dentro da nossa *HomeScreen* e da nossa *SolutionsScreen*.

Ambos possuem uma lista, que são os parâmetros do Carrossel e o componenete faz o controle da exibição desses parâmetros, iterando por essa lista. Um deles é apenas uma lista de dicionário e o outro uma lista de objetos.

#### Lista de Itens
```
const carouselItems = [
  { title: 'Serviço' },
  { title: 'Varejo' },
  { title: 'Telecom' },
  { title: 'Bens de Consumo' },
  { title: 'Serviço Financeiro' },
  { title: 'Seguro' },
  { title: 'Utilities' },
  { title: 'Agronegócio' },
  { title: 'Educação' },
  { title: 'Saúde' },
];
```

#### Exibição do Carrossel
```
const renderCarouselItem = ({ item }) => (
    <View style={styles.carouselItem}>
      <Text style={styles.carouselItemText}>{item.title}</Text>
    </View>
  );
```

#### Estilização do Carrossel
```
<View style={styles.carouselWrapper}>
        <View style={styles.carouselContainer}>
          <Text style={styles.carouselTitle}>Temos um time de especialistas que domina o seu negócio</Text>
          <Carousel
            loop
            autoPlay
            autoPlayInterval={3000}
            width={windowWidth - 32} // Adiciona margem de 16 de cada lado
            height={200}
            data={carouselItems}
            renderItem={renderCarouselItem}
            scrollAnimationDuration={1000}
            pagingEnabled
            customConfig={{
              itemSpacing: 20, // Espaço entre os itens do carrossel
            }}
          />
        </View>
```
