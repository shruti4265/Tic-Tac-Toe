function removeElements(selector) {
    $(selector).remove();
}

let originalHtml;
let SecondHtml;
$(document).ready(function() {
    originalHtml = $("#box").html();

    function attachEventListeners() {
        $(".player2").on("click", function() {
            removeElements("#box .heading, #box .buttons");
            $("#box").fadeOut(function() {
                $(this).css({
                    "background-color": "white",
                    "background-image": "none"
                });
                $("#box").html(`
                    <div id="back2">
                        <button class="back firstback">
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="30" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                            </svg>
                            </button>
                            <button class="back1 secondback">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="27.5" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                            </svg>
                            </button>
                    </div>
                    <div id="message1">X Turn</div>
                    <div id="board">
                        <div class="cell number0"></div>
                        <div class="cell number1"></div>
                        <div class="cell number2"></div>
                        <div class="cell number3"></div>
                        <div class="cell number4"></div>
                        <div class="cell number5"></div>
                        <div class="cell number6"></div>
                        <div class="cell number7"></div>
                        <div class="cell number8"></div>
                    </div>
                    <div id="message2">Let's Play!</div>
                    <button id="Reset">Reset</button>
                    <div id="overlay">
                        <div id="overlayMessage"></div>
                    </div>
                `);
                $(this).fadeIn();

                var Turn = "X";
                var gameActive = true;

                function changeTurn() {
                    Turn = Turn === 'X' ? 'O' : 'X';
                }

                function checkWinner() {
                    const winningCombinations = [
                        [0, 1, 2],
                        [3, 4, 5],
                        [6, 7, 8],
                        [0, 3, 6],
                        [1, 4, 7],
                        [2, 5, 8],
                        [0, 4, 8],
                        [2, 4, 6]
                    ];
                    for (const combo of winningCombinations) {
                        const [a, b, c] = combo;
                        const cellA = $(`.number${a}`).text().trim();
                        const cellB = $(`.number${b}`).text().trim();
                        const cellC = $(`.number${c}`).text().trim();

                        if (cellA && cellA === cellB && cellB === cellC) {
                            $("#message2").text(`${cellA} wins`);
                            $("#overlay").show().text(`${cellA} wins! Click anywhere to continue.`);
                            gameActive = false;
                            return;
                        }
                    }
                }

                function checkDraw() {
                    for (var i = 0; i < 9; i++) {
                        if ($(`.number${i}`).text().trim() === "") {
                            return;
                        }
                    }
                    $("#message2").text("It is a draw");
                    $("#overlay").show().text("It's a draw! Click anywhere to continue.");
                    gameActive = false;
                }

                $(".cell").on("click", function() {
                    if ($(this).text().trim() === "" && gameActive) {
                        if (Turn === "X") {
                            $(this).css({
                                "color": "red"
                            });
                        } else {
                            $(this).css({
                                "color": "blue"
                            });
                        }
                        $(this).text(Turn);
                        changeTurn();
                        $("#message1").text(Turn + " Turn");
                        checkWinner();
                        checkDraw();
                    }
                });

                $("#Reset").on("click", function() {
                    for (var j = 0; j < 9; j++) {
                        $(`.number${j}`).text("");
                    }
                    $("#message2").text("Let's Play!");
                    $("#message1").text("X Turn");
                    Turn = "X";
                    gameActive = true;
                });

                $("#overlay").on("click", function() {
                    $(this).hide();
                    $("#message2").text("Let's Play!");
                    $("#message1").text("X Turn");
                    gameActive = true;
                    for (var j = 0; j < 9; j++) {
                        $(`.number${j}`).text("");
                    }
                });

                $(".back").on("click", function() {
                    $("#box").fadeOut(function() {
                        $(this).css({
                            "background-image": "url('./images/tictactoe.jpg')"
                        });
                        $("#box").html(originalHtml);
                        attachEventListeners();
                        $(this).fadeIn();
                    });
                });
                $(".back1").on("click", function() {
                    $("#box").fadeOut(function() {
                        $(this).css({
                            "background-image": "url('./images/tictactoe.jpg')"
                        });
                        $("#box").html(originalHtml);
                        attachEventListeners();
                        $(this).fadeIn();
                    });
                });
            });
        });

        $(".player1").on("click", function() {
            $(".heading").slideUp(500);
            $("#button1").slideUp(500);
            $("#button2").slideUp(500);
            SecondHtml = `
            <div id="back1">
                <button  class=" back firstback">
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="30" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                    </svg>
                </button>
                <button class="back secondback">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="27.5" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                    </svg>
                </button>
            </div>
            <div class="difficulty"><img src="./images/cooltext2.png"/></div>
            <div class="difficultyformobile"><img src="./images/cooltext2mobile.png"/></div>
            <div class="buttons">
                <div><button id="Easy" class="players">Easy</button></div>
                <div><button id="Medium" class="players">Medium</button></div>
                <div><button id="Hard" class="players">Hard</button></div>
            </div>
        `;

        $("#box").html(SecondHtml);
        attachSecondEventListeners();
                function attachSecondEventListeners(){
                    $(".back").on("click",function(){
                      $("#box").html(originalHtml);
                      attachEventListeners();
                    });
                  $("#Easy").on("click",function(){
                    $("#box").fadeOut(function(){
                        removeElements("#box #back1, #box .buttons,#box .difficulty");
                        $("#box").css({
                            "background-color":"white",
                            "background-image":"none"
                        });
                        $("#box").html(`
                            <div id="back2">
                                 <button class="back firstback">
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="30" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                            </svg>
                            </button>
                            <button class="back1 secondback">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="27.5" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                            </svg>
                            </button>
                            </div>
                            <div id="message1">X Turn</div>
                            <div id="board">
                                <div class="cell number0"></div>
                                <div class="cell number1"></div>
                                <div class="cell number2"></div>
                                <div class="cell number3"></div>
                                <div class="cell number4"></div>
                                <div class="cell number5"></div>
                                <div class="cell number6"></div>
                                <div class="cell number7"></div>
                                <div class="cell number8"></div>
                            </div>
                            <div id="message2">Let's Play!</div>
                            <button id="Reset">Reset</button>
                            <div id="overlay">
                                <div id="overlayMessage"></div>
                            </div>
                        `);
                        $(this).fadeIn();
                        var Turn = "X";
                        var gameActive = true;
                        function checkWinner() {
                            const winningCombinations = [
                             [0, 1, 2],
                             [3, 4, 5],
                             [6, 7, 8],
                             [0, 3, 6],
                             [1, 4, 7],
                             [2, 5, 8],
                             [0, 4, 8],
                             [2, 4, 6]
                            ];
                            for (const combo of winningCombinations) {
                                  const [a, b, c] = combo;
                                  const cellA = $(`.number${a}`).text().trim();
                                  const cellB = $(`.number${b}`).text().trim();
                                  const cellC = $(`.number${c}`).text().trim();
                                  if (cellA && cellA === cellB && cellB === cellC) {
                                     $("#message2").text(cellA + " wins");
                                     $("#overlay").show().text(cellA + " wins! Click anywhere to continue.");
                                     gameActive = false;
                                     return;
                                    }
                                }
                        }

                        function checkDraw() {
                           for (var i = 0; i < 9; i++) {
                             if ($(`.number${i}`).text().trim() === "") {
                                return;
                             }
                            }
                             $("#message2").text("It is a draw");
                             $("#overlay").show().text("It's a draw! Click anywhere to continue.");
                             gameActive = false;
                         }

                        function makeRandomMove() {
                          if (!gameActive) return;
                          let random;
                          do {
                               random = Math.floor(Math.random() * 9);
                             } while ($(`.number${random}`).text().trim() !== "");
                          $(`.number${random}`).css({
                                "color":"blue"
                            });
                           $("#message1").text("O Turn");
                           setTimeout(function () {
                              $(`.number${random}`).text("O");
                              checkWinner();
                              checkDraw();
                              if(gameActive===true){
                                $("#message1").text("X Turn");
                              }
                            }, 500);
    
                        }

                        $(".cell").on("click", function () {
                           if (!gameActive) return;
                           if ($(this).text().trim() === "") {
                              $(this).css({
                                "color":"red"
                               });
                              $(this).text("X");
                               checkWinner();
                               checkDraw();
                               if (gameActive) {
                                  makeRandomMove();
                               }
                            }
                         });
                        $("#Reset").on("click", function() {
                           for (var j = 0; j < 9; j++) {
                              $(`.number${j}`).text("");
                            }
                            $("#message2").text("Let's Play!");
                            $("#message1").text("X Turn");
                            Turn = "X";
                            gameActive = true;
                        });

                        $("#overlay").on("click", function() {
                             $(this).hide();
                             $("#message2").text("Let's Play!");
                             $("#message1").text("X Turn");
                             gameActive = true;
                            for (var j = 0; j < 9; j++) {
                                $(`.number${j}`).text("");
                            }
                        });
                        $(".back").on("click", function() {
                           $("#box").fadeOut(function() {
                               $(this).css({
                                  "background-image": "url('./images/tictactoe.jpg')"
                                });
                                $("#box").html(SecondHtml);
                                attachSecondEventListeners();
                                $(this).fadeIn();
                            });
                        });
                        $(".back1").on("click", function() {
                            $("#box").fadeOut(function() {
                                $(this).css({
                                   "background-image": "url('./images/tictactoe.jpg')"
                                 });
                                 $("#box").html(SecondHtml);
                                 attachSecondEventListeners();
                                 $(this).fadeIn();
                             });
                         });
                    });
                    


                  });
                  $("#Medium").on("click",function(){
                    $("#box").fadeOut(function(){
                        removeElements("#box #back1, #box .buttons,#box .difficulty");
                        $("#box").css({
                            "background-color":"white",
                            "background-image":"none"
                        });
                        $("#box").html(`
                            <div id="back2">
                                 <button class="back firstback">
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="30" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                            </svg>
                            </button>
                            <button class="back1 secondback">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="27.5" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                            </svg>
                            </button>
                            </div>
                            <div id="message1">X Turn</div>
                            <div id="board">
                                <div class="cell number0"></div>
                                <div class="cell number1"></div>
                                <div class="cell number2"></div>
                                <div class="cell number3"></div>
                                <div class="cell number4"></div>
                                <div class="cell number5"></div>
                                <div class="cell number6"></div>
                                <div class="cell number7"></div>
                                <div class="cell number8"></div>
                            </div>
                            <div id="message2">Let's Play!</div>
                            <button id="Reset">Reset</button>
                            <div id="overlay">
                                <div id="overlayMessage"></div>
                            </div>
                        `);
                        $(this).fadeIn();
                        var Turn = "X";
                        var gameActive = true;
                         var moves = true;
                        function checkWinner() {
                           const winningCombinations = [
                               [0, 1, 2],
                               [3, 4, 5],
                               [6, 7, 8],
                               [0, 3, 6],
                               [1, 4, 7],
                               [2, 5, 8],
                               [0, 4, 8],
                               [2, 4, 6]
                            ];
                         for (const combo of winningCombinations) {
                             const [a, b, c] = combo;
                             const cellA = $(`.number${a}`).text().trim();
                             const cellB = $(`.number${b}`).text().trim();
                             const cellC = $(`.number${c}`).text().trim();
                             if (cellA && cellA === cellB && cellB === cellC) {
                               $("#message2").text(cellA + " wins");
                               $("#overlay").show().text(cellA + " wins! Click anywhere to continue.");
                               gameActive = false;
                               return;
                              }
                            }
                        }
                        function checkDraw() {
                          for (var i = 0; i < 9; i++) {
                               if ($(`.number${i}`).text().trim() === "") {
                               return;
                               }
                            }
                          $("#message2").text("It is a draw");
                          $("#overlay").show().text("It's a draw! Click anywhere to continue.");
                           gameActive = false;
                        }
                        function checkwin() {
                           const winningCombinations = [
                              [0, 1, 2],
                              [3, 4, 5],
                              [6, 7, 8],
                              [0, 3, 6],
                              [1, 4, 7],
                              [2, 5, 8],
                              [0, 4, 8],
                              [2, 4, 6]
                            ];
                            for (const combo of winningCombinations) {
                              const [a, b, c] = combo;
                              const cellA = $(`.number${a}`).text().trim();
                              const cellB = $(`.number${b}`).text().trim();
                              const cellC = $(`.number${c}`).text().trim();
                              $("#message1").text("O Turn");

                              if (cellA === "" && cellB === cellC && cellB == "O") {
                                  setTimeout(function() {
                                      $(`.number${a}`).css("color", "blue").text("O");
                                      moves = false;
                                      checkWinner();
                                      checkDraw();
                                    }, 500);
                                  return true;
                                } else if (cellB === "" && cellA === cellC && cellA == "O") {
                                  setTimeout(function() {
                                      $(`.number${b}`).css("color", "blue").text("O");
                                      moves = false;
                                      checkWinner();
                                      checkDraw();
                                    }, 500);
                                    return true;
                                } else if (cellC === "" && cellA === cellB && cellA == "O") {
                                    setTimeout(function() {
                                       $(`.number${c}`).css("color", "blue").text("O");
                                       moves = false;
                                       checkWinner();
                                       checkDraw();
                                    }, 500);
                                    return true;
                                }
                            }
                            return false;
                        }
                        function makeproblem(){
                            const winningCombinations = [
                                [0, 1, 2],
                                [3, 4, 5],
                                [6, 7, 8],
                                [0, 3, 6],
                                [1, 4, 7],
                                [2, 5, 8],
                                [0, 4, 8],
                                [2, 4, 6]
                            ];
                            for (const combo of winningCombinations) {
                                const [a, b, c] = combo;
                                const cellA = $(`.number${a}`).text().trim();
                                const cellB = $(`.number${b}`).text().trim();
                                const cellC = $(`.number${c}`).text().trim();
                                $("#message1").text("O Turn");
                              if (cellA === "" && cellB === cellC && cellB == "X") {
                                setTimeout(function() {
                                    $(`.number${a}`).css("color", "blue").text("O");
                                    moves = false;
                                    checkWinner();
                                    checkDraw();
                                    if(gameActive===true){
                                        $("#message1").text("X Turn");
                                      }
                                }, 500);
                                return true;
                            }else if (cellB === "" && cellA === cellC && cellA == "X") {
                                setTimeout(function() {
                                    $(`.number${b}`).css("color", "blue").text("O");
                                    moves = false;
                                    checkWinner();
                                    checkDraw();
                                    if(gameActive===true){
                                        $("#message1").text("X Turn");
                                      }
                                }, 500);
                                return true;
                            } else if (cellC === "" && cellA === cellB && cellA == "X") {
                                setTimeout(function() {
                                    $(`.number${c}`).css("color", "blue").text("O");
                                    moves = false;
                                    checkWinner();
                                    checkDraw();
                                    if(gameActive===true){
                                        $("#message1").text("X Turn");
                                      }
                                }, 500);
                                return true;
                             }
                        }
                        }
                        function makeRandomMove() {
                           if (!gameActive) return;
                           let random;
                           do {
                              random = Math.floor(Math.random() * 9);
                            } while ($(`.number${random}`).text().trim() !== "");
                            $(`.number${random}`).css({
                                 "color": "blue"
                            });
                            $("#message1").text("O Turn");
                            setTimeout(function() {
                                $(`.number${random}`).text("O");
                                checkWinner();
                                checkDraw();
                                if(gameActive===true){
                                    $("#message1").text("X Turn");
                                  }
                            }, 500);
                        }
                        $(".cell").on("click", function() {
                           if (!gameActive) return;
                           if ($(this).text().trim() === "") {
                                $(this).css({
                                  "color": "red"
                                });
                                $(this).text("X");
                                checkWinner();
                                checkDraw();
                                if (gameActive) {
                                    moves = true;
                                    if (checkwin()) {
                                      return;
                                    }
                                    else if (makeproblem()){
                                        return;
                                    }
                                    else if (moves) {
                                       makeRandomMove();
                                    }
                                }
                            }
                        });
                        $("#Reset").on("click", function() {
                           for (var j = 0; j < 9; j++) {
                              $(`.number${j}`).text("");
                            }
                            $("#message2").text("Let's Play!");
                            $("#message1").text("X Turn");
                            Turn = "X";
                            gameActive = true;
                        });
                        $("#overlay").on("click", function() {
                            $(this).hide();
                            $("#message2").text("Let's Play!");
                            $("#message1").text("X Turn");
                            gameActive = true;
                            for (var j = 0; j < 9; j++) {
                               $(`.number${j}`).text("");
                            }
                        });
                        $(".back").on("click", function() {
                           $("#box").fadeOut(function() {
                                $(this).css({
                                 "background-image": "url('./images/tictactoe.jpg')"
                                });
                              $("#box").html(SecondHtml);
                              attachSecondEventListeners();
                              $(this).fadeIn();
                            });
                        });
                        $(".back1").on("click", function() {
                            $("#box").fadeOut(function() {
                                 $(this).css({
                                  "background-image": "url('./images/tictactoe.jpg')"
                                 });
                               $("#box").html(SecondHtml);
                               attachSecondEventListeners();
                               $(this).fadeIn();
                             });
                         });

                      });
                    }); 
                    $("#Hard").on("click",function(){
                        $("#box").fadeOut(function(){
                            removeElements("#box #back1, #box .buttons,#box .difficulty");
                            $("#box").css({
                                "background-color":"white",
                                "background-image":"none"
                            });
                            $("#box").html(`
                                <div id="back2">
                                <button class="back firstback">
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="30" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                            </svg>
                            </button>
                            <button class="back1 secondback">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="27.5" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                            </svg>
                            </button>
                            </div>
                                <div id="message1">X Turn</div>
                                <div id="board">
                                    <div class="cell number0"></div>
                                    <div class="cell number1"></div>
                                    <div class="cell number2"></div>
                                    <div class="cell number3"></div>
                                    <div class="cell number4"></div>
                                    <div class="cell number5"></div>
                                    <div class="cell number6"></div>
                                    <div class="cell number7"></div>
                                    <div class="cell number8"></div>
                                </div>
                                <div id="message2">Let's Play!</div>
                                <button id="Reset">Reset</button>
                                <div id="overlay">
                                    <div id="overlayMessage"></div>
                                </div>
                            `);
                            $(this).fadeIn();
                            var Turn = "X";
                            var gameActive = true;
                            var moves = true;
                            function checkWinner() {
                                const winningCombinations = [
                                    [0, 1, 2],
                                    [3, 4, 5],
                                    [6, 7, 8],
                                    [0, 3, 6],
                                    [1, 4, 7],
                                    [2, 5, 8],
                                    [0, 4, 8],
                                     [2, 4, 6]
                                ];
                                for (const combo of winningCombinations) {
                                    const [a, b, c] = combo;
                                    const cellA = $(`.number${a}`).text().trim();
                                    const cellB = $(`.number${b}`).text().trim();
                                    const cellC = $(`.number${c}`).text().trim();
                                    if (cellA && cellA === cellB && cellB === cellC) {
                                        $("#message2").text(cellA + " wins");
                                        $("#overlay").show().text(cellA + " wins! Click anywhere to continue.");
                                        gameActive = false;
                                        return;
                                    }
                                }
                            }
                            function checkDraw() {
                                for (var i = 0; i < 9; i++) {
                                    if ($(`.number${i}`).text().trim() === "") {
                                        return;
                                    }
                                }
                                $("#message2").text("It is a draw");
                                $("#overlay").show().text("It's a draw! Click anywhere to continue.");
                                gameActive = false;
                            }
                            function checkwin() {
                                const winningCombinations = [
                                    [0, 1, 2],
                                    [3, 4, 5],
                                    [6, 7, 8],
                                    [0, 3, 6],
                                    [1, 4, 7],
                                    [2, 5, 8],
                                    [0, 4, 8],
                                    [2, 4, 6]
                                ];
                                for (const combo of winningCombinations) {
                                    const [a, b, c] = combo;
                                    const cellA = $(`.number${a}`).text().trim();
                                    const cellB = $(`.number${b}`).text().trim();
                                    const cellC = $(`.number${c}`).text().trim();
                                    $("#message1").text("O Turn");
                                    if (cellA === "" && cellB === cellC && cellB == "O") {
                                        setTimeout(function() {
                                            $(`.number${a}`).css("color", "blue").text("O");
                                            moves = false;
                                            checkWinner();
                                            checkDraw();
                                        }, 500);
                                        return true;
                                    } else if (cellB === "" && cellA === cellC && cellA == "O") {
                                        setTimeout(function() {
                                            $(`.number${b}`).css("color", "blue").text("O");
                                            moves = false;
                                            checkWinner();
                                            checkDraw();
                                        }, 500);
                                        return true;
                                    }
                                    else if (cellC === "" && cellA === cellB && cellA == "O") {
                                        setTimeout(function() {
                                            $(`.number${c}`).css("color", "blue").text("O");
                                            moves = false;
                                            checkWinner();
                                            checkDraw();
                                        }, 500);
                                        return true;
                                    }
                                }
                                return false;
                            }
                            function makeproblem(){
                                const winningCombinations = [
                                    [0, 1, 2],
                                    [3, 4, 5],
                                    [6, 7, 8],
                                    [0, 3, 6],
                                    [1, 4, 7],
                                    [2, 5, 8],
                                    [0, 4, 8],
                                    [2, 4, 6]
                                ];
                                for (const combo of winningCombinations) {
                                    const [a, b, c] = combo;
                                    const cellA = $(`.number${a}`).text().trim();
                                    const cellB = $(`.number${b}`).text().trim();
                                    const cellC = $(`.number${c}`).text().trim();
                                    $("#message1").text("O Turn");
                                    if (cellA === "" && cellB === cellC && cellB == "X") {
                                        setTimeout(function() {
                                            $(`.number${a}`).css("color", "blue").text("O");
                                            moves = false;
                                            checkWinner();
                                            checkDraw();
                                            if(gameActive===true){
                                                $("#message1").text("X Turn");
                                              }
                                        }, 500);
                                        return true;
                                    }else if (cellB === "" && cellA === cellC && cellA == "X") {
                                        setTimeout(function() {
                                            $(`.number${b}`).css("color", "blue").text("O");
                                            moves = false;
                                            checkWinner();
                                            checkDraw();
                                            if(gameActive===true){
                                                $("#message1").text("X Turn");
                                              }
                                        }, 500);
                                        return true;
                                    } else if (cellC === "" && cellA === cellB && cellA == "X") {
                                        setTimeout(function() {
                                            $(`.number${c}`).css("color", "blue").text("O");
                                            moves = false;
                                            checkWinner();
                                            checkDraw();
                                            if(gameActive===true){
                                                $("#message1").text("X Turn");
                                              }
                                        }, 500);
                                        return true;
                                    }
                                }
                            }
                            function center(){
                                if ($(".number4").text().trim() ==="") {
                                    $("#message1").text("O Turn");
                                    setTimeout(function() {
                                        $(".number4").css("color", "blue").text("O");
                                        moves = false;
                                        checkWinner();
                                        checkDraw();
                                        if(gameActive===true){
                                            $("#message1").text("X Turn");
                                          }
                                    }, 500);
                                    return true;
                                }
                            }
                            function OppositeCorner(){
                                if ($(".number0").text().trim() ==="") {
                                    $("#message1").text("O Turn");
                                    setTimeout(function() {
                                        $(".number0").css("color", "blue").text("O");
                                        moves = false;
                                        checkWinner();
                                        checkDraw();
                                        if(gameActive===true){
                                            $("#message1").text("X Turn");
                                          }
                                    }, 500);
                                    return true;
                                }else if ($(".number2").text().trim() ==="") {
                                    setTimeout(function() {
                                        $(".number2").css("color", "blue").text("O");
                                        moves = false;
                                        checkWinner();
                                        checkDraw();
                                        if(gameActive===true){
                                            $("#message1").text("X Turn");
                                          }
                                    }, 500);
                                    return true;
                                }else if ($(".number6").text().trim() ==="") {
                                    setTimeout(function() {
                                        $(".number6").css("color", "blue").text("O");
                                        moves = false;
                                        checkWinner();
                                        checkDraw();
                                        if(gameActive===true){
                                            $("#message1").text("X Turn");
                                          }
                                    }, 500);
                                    return true;
                                }else if ($(".number8").text().trim() ==="") {
                                    setTimeout(function() {
                                        $(".number8").css("color", "blue").text("O");
                                        moves = false;
                                        checkWinner();
                                        checkDraw();
                                        if(gameActive===true){
                                            $("#message1").text("X Turn");
                                          }
                                    }, 500);
                                    return true;
                                }
                            }
                            function makeRandomMove() {
                                if (!gameActive) return;
                                    let random;
                                    do {
                                        random = Math.floor(Math.random() * 9);
                                    } while ($(`.number${random}`).text().trim() !== "");
                                        $(`.number${random}`).css({
                                            "color": "blue"
                                        });
                                    $("#message1").text("O Turn");
                                    setTimeout(function() {
                                        $(`.number${random}`).text("O");
                                        checkWinner();
                                        checkDraw();
                                        if(gameActive===true){
                                            $("#message1").text("X Turn");
                                          }
                                    }, 500);
                                }
                                $("#Reset").on("click", function() {
                                    for (var j = 0; j < 9; j++) {
                                        $(`.number${j}`).text("");
                                    }
                                    $("#message2").text("Let's Play!");
                                    $("#message1").text("X Turn");
                                    Turn = "X";
                                    gameActive = true;
                                });
                                $("#overlay").on("click", function() {
                                    $(this).hide();
                                    $("#message2").text("Let's Play!");
                                    $("#message1").text("X Turn");
                                    gameActive = true;
                                    for (var j = 0; j < 9; j++) {
                                        $(`.number${j}`).text("");
                                    }
                                });
                                $(".back").on("click", function() {
                                    $("#box").fadeOut(function() {
                                        $(this).css({
                                            "background-image": "url('./images/tictactoe.jpg')"
                                        });
                                    $("#box").html(SecondHtml);
                                    attachSecondEventListeners();
                                    $(this).fadeIn();
                                });
                            });
                            $(".back1").on("click", function() {
                                $("#box").fadeOut(function() {
                                    $(this).css({
                                        "background-image": "url('./images/tictactoe.jpg')"
                                    });
                                $("#box").html(SecondHtml);
                                attachSecondEventListeners();
                                $(this).fadeIn();
                            });
                        });
                            $(".cell").on("click", function() {
                                if (!gameActive) return;
                                if ($(this).text().trim() === "") {
                                $(this).css({
                                    "color": "red"
                                });
                                $(this).text("X");
                                checkWinner();
                                checkDraw();
                                if (gameActive) {
                                    moves = true;
                                    if (checkwin()) {
                                        return;
                                    }
                                    else if (makeproblem()){
                                        return;
                                    }
                                    else if(center()){
                                        return;
                                    }
                                    else if(OppositeCorner()){
                                        return;
                                    }
                                    else if (moves) {
                                        makeRandomMove();
                                    }
                                }
                            }
                        });
                    });
                });
                    
            }
            attachSecondEventListeners();
        });
    }
    attachEventListeners();
});
