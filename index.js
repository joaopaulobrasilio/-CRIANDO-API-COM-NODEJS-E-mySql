 const custonExpress =require('./config/custoExpress') // chamando módulo no express
 const conexao = require( './infraestrutura/conexao')

 conexao.connect( erro => {
     if (erro){
         console.log (erro)
     }else {
         console.log( "Conectado com sucesso")
          const Tabelas = require('./infraestrutura/tabelas')

          Tabelas.init(conexao)


        
         const app = custonExpress() // executando o app

         app.listen(3000,()=> console.log ('Servidor rodando na porta 3000')) // subindo no servidor 
        
     }
 })
