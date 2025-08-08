<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>SkillUp Microlearning Platform</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>SkillUp: Learn & Earn Micro Certificates</h1>
  </header>

  <main>
    <section id="lesson">
      <h2>Lesson: Introduction to JavaScript</h2>
      <p>JavaScript is a programming language used to make web pages interactive. It can respond to user actions like clicks, form inputs, and more.</p>
    </section>

    <section id="quiz">
      <h3>Quiz: What is JavaScript used for?</h3>
      <form id="quizForm">
        <label>
          <input type="radio" name="answer" value="a">
          Styling web pages
        </label><br>
        <label>
          <input type="radio" name="answer" value="b">
          Making web pages interactive
        </label><br>
        <label>
          <input type="radio" name="answer" value="c">
          Hosting websites
        </label><br><br>
        <button type="submit">Submit Answer</button>
      </form>
      <div id="quizResult"></div>
    </section>

    <section id="certificate" style="display: none;">
      <h2>🎉 Congratulations!</h2>
      <p>You passed the quiz and earned a micro certificate!</p>
      <button onclick="downloadCertificate()">Download Certificate</button>
    </section>
  </main>

  <script src="script.js"></script>
</body>
</html>
  
