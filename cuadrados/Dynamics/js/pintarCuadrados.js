/* En este archivo se encargarán de generar el código que hará dinámica la página */
let colorPar = 0 ;
let colorImpar = 0;
let colorPrimo = 0 ;

//Obtenemos los botones por id
parbtn = document.getElementById("pares");
imparbtn = document.getElementById("impares");
primosbtn = document.getElementById("primos");

//Funcion que permite colorear dependiendo si es par o impar


function colorea(residuo, color, )
{
    for(let o=0;o<10;o++)
            for(let i=1; i<=10; i++)
            {
                if(i%2 == residuo)
                {   
                    if(color == 1)
                        cuadrados.children[o].children[i-1].style.backgroundColor = "rgb("+255*residuo+",17,"+ (255-(residuo*255)) +")" ;
                    else
                        cuadrados.children[o].children[i-1].style.backgroundColor = "#FFFFFF" ;
                }
            }

}


//Colocamos los eventos para cada boton

//Para el boton Par 
parbtn.addEventListener("click", () =>{
    //Ocupamos una variable como interruptor para verificar si esta coloreado o no 
    if(colorPar == 0)
        colorPar = 1;
    else
        colorPar = 0;

    colorea(0, colorPar);
    console.log(colorPar);
});

//Para el boton Impar
imparbtn.addEventListener("click", () =>{
    //Ocupamos una variable como interruptor para verificar si esta coloreado o no 
    if(colorImpar == 0)
        colorImpar = 1;
    else
        colorImpar = 0;

    colorea(1, colorImpar);
    console.log(colorImpar);
});

//Para el boton Primos
primosbtn.addEventListener("click",() =>{
    if(colorPrimo == 0)
    {
        for(let o=0;o<10;o++)
                for(let i=1; i<=10; i++)
                    cuadrados.children[o].children[i-1].style.backgroundColor = "#00FF00" ;
        for(let o=0;o<10;o++)
                for(let i=1; i<=10; i++)
                {
                    let n=100;
                    if(i!=1 || o!=0  )
                        n= i+(10*o) ;

                    console.log("numero"+n) ;
                    a=0;
                    e=0;
                    for(let a=0;a<10;a++)
                        for(let e=1; e<=10; e++)
                            if(( e + (a*10))%n == 0 && e + (a*10)!= n)
                            {   
                                console.log(e + (a*10)%n)
                                cuadrados.children[a].children[e-1].style.backgroundColor = "#FFFFFF" ;
                            }
                }
        colorPrimo=1;
    }     
    else
    {
        colorea(1, colorImpar);
        colorea(0, colorPar);
        colorPrimo=0;
    }     
    console.log(colorPrimo)  ;
});