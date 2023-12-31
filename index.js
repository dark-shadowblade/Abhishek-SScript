<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Random Number Generator</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background: linear-gradient(to right, #3494e6, #ec6ead);
            text-align: center;
            margin: 20px;
            color: #ffffff;
        }

        button {
            background: linear-gradient(to right, #ff8c00, #ffd700);
            font-size: 20px;
            padding: 10px;
            margin: 10px;
            border: none;
            cursor: pointer;
            border-radius: 5px;
            transition: background 0.3s ease;
        }

        button:hover {
            background: linear-gradient(to right, #ec6ead, #3494e6);
        }

        #toggleButton {
            background: linear-gradient(to right, #ff6347, #ff4500);
            color: white;
        }

        #toggleButton:hover {
            background: linear-gradient(to right, #ff4500, #ff6347);
        }

        #intervalInput {
            font-size: 16px;
            padding: 5px;
            margin: 10px;
        }

        p {
            font-size: 24px;
            margin-top: 20px;
        }

        .frame-container {
            display: flex;
            justify-content: space-between;
        }

        .frame {
            width: 48%;
            height: 300px;
            border: none;
        }
    </style>
</head>
<body>
  
  <button onclick="openLink('https://rewards.bing.com')">REWARDS</button>
  <button onclick="openLink('https://rewards.bing.com/status')">STATUS</button>
 

  <input type="number" id="intervalInput" placeholder=" 1 sec">
  <button onclick="toggleLoop()" id="toggleButton">Stop</button>

  <p id="randomNumber"></p>

  <div class="frame-container">
    <iframe id="bingFrame" class="frame"></iframe>
    <iframe id="newFrame" class="frame"></iframe>
  </div>

  <script>
      var intervalId;
      var isLooping = true;

      function generateRandomNumber() {
          var randomNumber = Math.floor(Math.random() * 10008000) + 1;
          document.getElementById('randomNumber').innerText = 'Random Number: ' + randomNumber;
          document.getElementById('bingFrame').src = 'https://www.bing.com/search?form=MOZLBR&pc=MOZR&q=' + encodeURIComponent(randomNumber);
      }

      function openLink(link) {
          window.open(link, '_blank');
      }

      function openNewFrame(link) {
          document.getElementById('newFrame').src = link;
      }

      function toggleLoop() {
          var toggleButton = document.getElementById('toggleButton');
          var intervalInput = document.getElementById('intervalInput');
          if (isLooping) {
              clearInterval(intervalId);
              toggleButton.innerText = 'Start';
              toggleButton.style.background = 'linear-gradient(to right, #32cd32, #008000)';
              intervalInput.disabled = false; // Enable the input box
          } else {
              var intervalValue = parseInt(intervalInput.value, 10);
              intervalId = setInterval(generateRandomNumber, intervalValue * 1000);
              toggleButton.innerText = 'Stop';
              toggleButton.style.background = 'linear-gradient(to right, #ff6347, #ff4500)';
              intervalInput.disabled = true; // Disable the input box while looping
          }
          isLooping = !isLooping;
      }

      intervalId = setInterval(generateRandomNumber, 1000);
      generateRandomNumber();

      // Simulate a click on the hidden "NEW FRAME" button after the page loads
      openNewFrame('');
  </script>

</body>
</html>
            
