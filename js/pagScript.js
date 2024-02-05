
    function Aluno(Nome, id, nota1, nota2, nota3) {
        this.Nome = Nome;
        this.id = id;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
    }
    
    let MinhasNotas = [];
    
    function novoAluno() {

        while(MinhasNotas.length != 0){
            MinhasNotas.pop()
           }

        let aluno = new Aluno();
        aluno.Nome = document.getElementById("nome").value;
        aluno.id = document.getElementById("id").value;
        aluno.nota1 = parseInt(document.getElementById("nota1").value);
        aluno.nota2 = parseInt(document.getElementById("nota2").value);
        aluno.nota3 = parseInt(document.getElementById("nota3").value);
    
        let revi = 0;
        let alerta = "";
        while(revi == 0){
            if (aluno.nota1 > 100 || aluno.nota2 > 100  || aluno.nota3 > 100) {
                revi = 0;
            }
            else if( aluno.nota1 < 0 ||  aluno.nota2 < 0 || aluno.nota3 < 0 ) {
                revi = 0
                
            }
            else{
                MinhasNotas.push(aluno.nota1);
                MinhasNotas.push(aluno.nota2);
                MinhasNotas.push(aluno.nota3);
                revi = 1
            }
        }

        let maior = Math.max.apply(null,MinhasNotas);

        let menor  = Math.min.apply(null,MinhasNotas);

        let maiorB = "";

        let menorB = "";
    
    
        for( i = 0;  i < MinhasNotas.length;i++){
            if (MinhasNotas[i] == maior){
             maiorB += "O Bimestre com a maior nota foi o "+ (i+1)+ "° bimestre." ;
                }
           if(MinhasNotas [i]==menor){
            menorB +="O Bimestre com a menor nota foi o "+ (i+1)+ "° bimestre." ;
           }
        }

        let mf = (aluno.nota1 + aluno.nota2 + aluno.nota3) / 3 ;

        let conceito = "";
        let resultado = "";
        if( mf >= 90){
            conceito = "A";
            resultado = "Aprovado";
        }
        else if( mf >= 75  && mf <90) {
            conceito = "B"; 
            resultado = "Aprovado";
        }
        else if(mf >=60 && mf <75 ) {
            conceito = "C"  
            resultado = "Recuperação";
        }
        else if(mf >= 40 &&  mf <60 ){
             conceito= "D"  
             resultado="Reprovado"
         }
         else{
              conceito="E"
              resultado="Reprovado"
          }



         let txt = "Nome: " + aluno.Nome + "\n" +
         "Id: " + aluno.id + "\n" + 
         "Nota do primeiro Bimestre: " + aluno.nota1 +"\n"+ 
         "Nota do segundo Bimestre: " + aluno.nota2 + "\n"+
         "Nota do terceiro Bimestre: "+ aluno.nota3+ "\n"+
         maiorB+"\n"+
         menorB+"\n"+
         "Média final: "+ mf+"\n"+
         "Conceito da média final: " + conceito+ "\n"+
         "Resultado Final: "+resultado;

         

        console.log(txt);
        document.getElementById("infs").innerText = txt;
    }
    
