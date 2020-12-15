import { Dropdown } from 'react-bootstrap';
import './questionDropdown.css';

function QuestionDropdown({
  quizInfo,
  setCustomQ,
  setQuizInfo,
  cardNumber,
}) {
  let allQ = {};
  for (let i = 1; i <= 10; i++) {
    allQ[quizInfo[i].question] = quizInfo[i].ansOptions;
  }

  return (
    <Dropdown>
      <Dropdown.Toggle
        variant='secondary'
        className='question-dropdown'
        id='dropdown-basic'
      >
        More Questions
      </Dropdown.Toggle>
      <Dropdown.Menu className='question-dropdown-menu'>
        {Object.keys(allQ).map((key) => (
          <Dropdown.Item
            key={key}
            onClick={() => {
              setQuizInfo({
                ...quizInfo,
                [cardNumber]: {
                  ...quizInfo[cardNumber],
                  question: key,
                  ansOptions: allQ[key],
                },
              });
            }}
          >
            {key}
          </Dropdown.Item>
        ))}

        <Dropdown.Item
          onClick={(e) => {
            setCustomQ(true);

            setQuizInfo({
              ...quizInfo,
              [cardNumber]: {
                ...quizInfo[cardNumber],
                question: '',
                ansOptions: ['', '', '', ''],
              },
            });
          }}
        >
          Add custom question
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default QuestionDropdown;
