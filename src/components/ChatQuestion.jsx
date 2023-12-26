import React, {useState} from 'react';
import './ChatQuestion.scss';
import Button from 'react-bootstrap/Button';
import {Card} from 'react-bootstrap';

const ChatQuestion = () => {
    const [questionIndex, setQuestionIndex] = useState(0);

    const questions = ["What have you created that you are most proud of?", "What is your favorite hobby?", "What is your dream vacation destination?", // Add more questions here...
    ];

    const generateRandomQuestion = () => {
        const randomIndex = Math.floor(Math.random() * questions.length);
        setQuestionIndex(randomIndex);
    };

    return (

        <div className="d-flex align-items-center justify-content-center w-100 h-100 vh-100">
            <Card className="border-0 w-50">
                <Card.Body className="text-center d-flex flex-column">
                    <h1 >{questions[questionIndex]}</h1>

                </Card.Body>
                <Button className="w-25 mt-3 d-block mx-auto" onClick={generateRandomQuestion}>
                    Generate New Question
                </Button>
            </Card>
        </div>);
};

export default ChatQuestion;