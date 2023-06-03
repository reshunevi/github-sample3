var pagination = 0;

var details = 0;

async function getDetails1(element){
    try{
        let response = await fetch(element.url);
        let pokemonDetails = await response.json();

        let pokemonMoves = 0;
        let pokemonAbilities = 0;

        pokemonDetails.moves.forEach(element => {
            if(pokemonMoves == 0){
                const arr = element.move.name.split(" ");
                for (var i = 0; i < arr.length; i++) {
                    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

                }
                const str2 = arr.join(" ");
                pokemonMoves = str2;
            }else{
                const arr = element.move.name.split(" ");
                for (var i = 0; i < arr.length; i++) {
                    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

                }
                const str2 = arr.join(" ");
                pokemonMoves += ", "+str2;
            }
        })

        pokemonDetails.abilities.forEach(element => {
            if(pokemonAbilities == 0){
                const arr = element.ability.name.split(" ");
                for (var i = 0; i < arr.length; i++) {
                    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

                }
                const str2 = arr.join(" ");
                pokemonAbilities = str2;
            }else{
                const arr = element.ability.name.split(" ");
                for (var i = 0; i < arr.length; i++) {
                    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

                }
                const str2 = arr.join(" ");
                pokemonAbilities += ", "+str2;
            }
        })

        // console.log(pokemonAbilities)

        if(details == 0){
            details = '<div class="row"><div class="card" style="width: 100%;"><div class="card-body"><h5 class="card-title">'+pokemonDetails.name+'</h5><div class="row"><div class= col-4 mt-4><img style="width: 50%; height:50%;" src="'+pokemonDetails.sprites.front_default+'" class="card-img-top"></div><div class="col-8"><p class="card-text" id="pokeAbility">Abilities : '+pokemonAbilities+'</p><p class="card-text" id="pokeMoves">Moves : '+pokemonMoves+'</p><p class="card-text" id="pokeWeight">Weight : '+pokemonDetails.weight+' Kg</p></div></div><div class="card-body"></div></div></div></div>'
        }else{
            details += '<div class="row"><div class="card" style="width: 100%;"><div class="card-body"><h5 class="card-title">'+pokemonDetails.name+'</h5><div class="row"><div class= col-4 mt-4><img style="width: 50%; height:50%;" src="'+pokemonDetails.sprites.front_default+'" class="card-img-top"></div><div class="col-8"><p class="card-text id="pokeAbility">Abilities : '+pokemonAbilities+'</p><p class="card-text" id="pokeMoves">Moves : '+pokemonMoves+'</p><p class="card-text" id="pokeWeight">Weight : '+pokemonDetails.weight+' Kg</p></div></div><div class="card-body"></div></div></div></div>'
        }

        document.getElementById("main").innerHTML = details;
        
    } catch (error){
        console.error('error fetching the pokemon details')

    }
}

function prevPage(){
    details = 0;
    pagination -= 10;
    getDetails(pagination);
}

function nextPage(){
    details = 0;
    pagination += 10;
    getDetails(pagination);
}

async function getDetails(offset){
    try{
        let response= await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=10`);
        let data = await response.json();
        data.results.forEach(element => {
            getDetails1(element)
        });

         
    } catch (error){
        console.error('error fetching the pokemon details')

    }
    
    if(pagination === 0){
        document.getElementById('previousButton').style.visibility = 'hidden';
        document.getElementById('nextButton').style.visibility = 'visible';
    }else if(pagination === 40){
        document.getElementById('previousButton').style.visibility = 'visible';
        document.getElementById('nextButton').style.visibility = 'hidden';
    }else{
        document.getElementById('previousButton').style.visibility = 'visible';
        document.getElementById('nextButton').style.visibility = 'visible';
    }
}
getDetails(pagination);
