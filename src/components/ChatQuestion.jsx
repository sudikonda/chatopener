import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';
import { questions } from '../QuestionList';

const ChatQuestion = () => {
    const [questionIndex, setQuestionIndex] = useState(0);

    const generateRandomQuestion = () => {
        const randomIndex = Math.floor(Math.random() * questions.length);
        setQuestionIndex(randomIndex);
    };

    return (
        <div className="d-flex flex-column justify-content-center align-items-center ">

            <Card className="border-0 w-50 text-center bg-dark text-light">
                <Card.Body>
                    <h1>{questions[questionIndex]}</h1>
                </Card.Body>
            </Card>

            <Button className="mt-4" onClick={generateRandomQuestion}>
                Generate New Question
            </Button>

        </div>
    );
};

export default ChatQuestion;