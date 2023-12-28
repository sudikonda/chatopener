import React, {useEffect, useState} from 'react';
import {Button, Card, Form, InputGroup} from 'react-bootstrap';
import questionsData from '../QuestionBank.json';

const ChatQuestion = () => {
    const [questions, setQuestions] = useState(questionsData.questions || []);
    const [categoryQuestions, setCategoryQuestions] = useState([]);
    const [category, setCategory] = useState('common');
    const [questionIndex, setQuestionIndex] = useState(0);

    const categories = questions.map(question => question.category);
    const uniqueCategories = Array.from(new Set(categories));

    useEffect(() => {
        const categoryQuestions = questions.filter(question => question.category === category);
        setCategoryQuestions(categoryQuestions);
        generateRandomQuestion();
    }, [category]);

    const generateRandomQuestion = () => {
        const randomIndex = Math.floor(Math.random() * categoryQuestions.length);
        setQuestionIndex(randomIndex);
    };

    const handleCategoryChange = (newCategory) => {
        setCategory(newCategory);
        generateRandomQuestion();
    };

    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <Form>
                <InputGroup className="d-flex flex-row flex-nowrap overflow-auto mb-3">
                    {uniqueCategories.map((cat, index) => (
                        <Button
                            key={index}
                            variant={category === cat ? "success" : "outline-secondary"}
                            disabled={category === cat}
                            onClick={() => handleCategoryChange(cat)}>
                            {cat}
                        </Button>
                    ))}
                </InputGroup>
            </Form>
            <Card className="border-0 w-50 text-center bg-dark text-light">
                <Card.Body>
                    <h1>{categoryQuestions[questionIndex]?.question}</h1>
                </Card.Body>
            </Card>

            <Button className="mt-4" onClick={generateRandomQuestion}>
                Generate New Question
            </Button>
        </div>
    );
};

export default ChatQuestion;