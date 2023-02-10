let Module = ( function (){

    (()=>{
        document.getElementById('form').addEventListener('submit',function(Event){Event.preventDefault()})
    })();

    let gameboard = ["_", "_", "_",
                     "_", "_", "_",
                     "_", "_", "_"];

    

    let playerOne = {mark : "X"};
    let playerTwo = {mark : "O"};
    
    let currentPlayer = playerOne;


    let fillBoard = () =>{
        let displayElements = document.getElementsByClassName('spot');

        for (let i = 0; i < gameboard.length; i++){
            displayElements[i].innerText = gameboard[i]
            displayElements[i].id = `spot${i}`

        }
    };
    fillBoard();

    let switchPlayer = () =>{
        if(currentPlayer == playerOne){
            currentPlayer = playerTwo;
        } else{
            currentPlayer = playerOne;
        }
    }
    // 
    // 
    // Win Cases
    let win = () =>{
        if(gameboard[0] == gameboard[1] && gameboard[0] == gameboard[2] ){
            if(gameboard[0] != "_" ){
                document.getElementById("winContainer").innerText = `${currentPlayer.name} wins!`
                return true
            }
        }

        if(gameboard[3] == gameboard[4] && gameboard[3] == gameboard[5] ){
            if(gameboard[3] != "_" ){
                document.getElementById("winContainer").innerText = `${currentPlayer.name} wins!`
                return true
            }
        }

        if(gameboard[6] == gameboard[7] && gameboard[6] == gameboard[8] ){
            if(gameboard[6] != "_" ){
                document.getElementById("winContainer").innerText = `${currentPlayer.name} wins!`
                return true
            }
        }

        if(gameboard[0] == gameboard[3] && gameboard[0] == gameboard[6] ){
            if(gameboard[0] != "_" ){
                document.getElementById("winContainer").innerText = `${currentPlayer.name} wins!`
                return true
            }
        }

        if(gameboard[1] == gameboard[4] && gameboard[1] == gameboard[7] ){
            if(gameboard[1] != "_" ){
                document.getElementById("winContainer").innerText = `${currentPlayer.name} wins!`
                return true
            }
        }

        if(gameboard[2] == gameboard[5] && gameboard[2] == gameboard[8] ){
            if(gameboard[2] != "_" ){
                document.getElementById("winContainer").innerText = `${currentPlayer.name} wins!`
                return true
            }
        }

        if(gameboard[0] == gameboard[4] && gameboard[0] == gameboard[8] ){
            if(gameboard[0] != "_" ){
                document.getElementById("winContainer").innerText = `${currentPlayer.name} wins!`
                return true
            }
        }

        if(gameboard[2] == gameboard[4] && gameboard[2] == gameboard[6] ){
            if(gameboard[2] != "_" ){
                document.getElementById("winContainer").innerText = `${currentPlayer.name} wins!`
                return true
            }
        }

        
        
        return false
    }
    

    return {
        submit : function(){

            playerOne.name = document.getElementById('playerone').value;
            playerTwo.name = document.getElementById('playertwo').value;
            
            document.getElementById('formContainer').style.zIndex = "-1"

                console.log(playerOne, playerTwo)
        },
        refresh : function(){location.reload()},
        placeMark : function(ele){

            if (win() == false){
      
                if(gameboard[ele.id[ele.id.length - 1]] == "_"){
                    gameboard[ele.id[ele.id.length - 1]] = currentPlayer.mark
                    fillBoard()
                    win()
                    if (!win()){
                        switchPlayer()
                    }
                }
            }
        }
    }
})();

