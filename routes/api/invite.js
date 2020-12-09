const express = require('express');
const router = express.Router();
const Quiz = require('../../models/Quiz');
const User = require('../../models/User');

router.post('/', (req, res) => {
  // console.log(req.body)
  const { quizInfo, userName } = req.body;
  // console.log(quizInfo[0])
  res.json({ test: 'test' });
  //store the info in db
  //generate and send back a pin
  let user = new User({ userName: userName });
  for (let i = 0; i < quizInfo.length; i++) {
    const quizFields = {
      number: quizInfo[i].number,
      bgColor: quizInfo[i].bgColor,
      question: quizInfo[i].question,
      correctAnswer: quizInfo[i].correctAnswer,
      answerOptions: quizInfo[i].answerOptions,
    };
    let quiz = new Quiz({ userName: 'test', quizInfo: quizFields });
    quiz.save();
    // console.log(quizFields);
  }
  user.save();
});

module.exports = router;