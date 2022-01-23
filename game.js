window.onload = function() {


  add_button()
  add_score()

  var start = document.getElementById('start')
  var status = document.getElementById('status')
  var boundaries = document.getElementsByClassName('boundary')
  var buttons = document.getElementsByTagName('button')
  var headings = document.getElementsByTagName('h1')
  var scoring = headings[1]
  var button = buttons[0]

  var score = 0

  button.addEventListener('click', restart_game)
  start.addEventListener('click', start_game)

  function add_button() {
    console.log('button added successfully')
    const btn = document.createElement('button')
    btn.innerHTML = 'Restart Game'
    document.body.appendChild(btn)
    btn.style.position = 'relative'
    btn.style.left = '27%'
  }

  function add_score() {
    console.log('scoring added successfully')
    const scoring = document.createElement('h1')
    scoring.innerHTML = 'SCORE: 0'
    document.body.appendChild(scoring)
  }

  function restart_game() {
    console.log('restarted game')
    score = 0
    change_score()
    reset_status()
  }

  function start_game() {
    reset_color()
    reset_status()
    console.log("Game Started")
    window.addEventListener('mouseover', check_result)
  }

  function change_color_win() {
    console.log('change color')
    for (var k = 0; k < boundaries.length; k++) {
      if (boundaries[k].className == 'boundary example') {
        continue
      } else {
        boundaries[k].style.backgroundColor = '#3cff3c'
      }

    }
  }

  function change_color_lost() {
    console.log('change color')
    for (var k = 0; k < boundaries.length; k++) {
      if (boundaries[k].className == 'boundary example') {
        continue
      } else {
        boundaries[k].classList.add('youlose')
      }

    }
  }

  function reset_color() {
    console.log('reset color')
    for (var k = 0; k < boundaries.length; k++) {
      boundaries[k].classList.remove('youlose')
      boundaries[k].style.removeProperty('background-color')
    }
  }

  function reset_status() {
    console.log('reset status')
    status.innerHTML = 'Begin by moving your mouse over the "S".'
  }


  function check_result(e) {
    console.log("checking")
    if (e.target.className == 'boundary') {
      console.log("lost game")
      end_game()
      return;
    }
    if (e.target.id == 'end') {
      console.log("win game")
      win_game()
      return;
    }

  }

  function end_game() {
    status.innerHTML = 'YOU LOST THE GAME ...'
    score -= 10
    change_score()
    change_color_lost()
    console.log(score)
    window.removeEventListener('mouseover', check_result)
  }

  function win_game() {
    status.innerHTML = 'YOU WON THE GAME !!!'
    score += 5
    change_score()
    change_color_win()
    console.log(score)
    window.removeEventListener('mouseover', check_result)
  }

  function change_score() {
    scoring.innerHTML = 'SCORE: ' + score
  }


}
