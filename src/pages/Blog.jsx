import React from 'react';


const qna = [
    {
        id: 1,
        question: 'What is the differences between uncontrolled and controlled components?',
        answer: 'In uncontrolled components, the form data is managed by the DOM (Document Object Model) instead of the React component. This means that the values of the form elements are not controlled by React and are instead managed by the browser. To retrieve the form data, you need to use a ref to get the value of the form element from the DOM. In controlled components, the form data is managed by the React component state. This means that the value of the form element is controlled by the React component and not the browser. When the user inputs data, the React component updates the state and re-renders the component.',
    },
    {
        id: 2,
        question: 'What is the difference between nodejs and express js?',
        answer: 'Node.js and Express.js are both popular technologies in the JavaScript ecosystem that are often used together for building web applications. However, they have different roles and serve different purposes. In short, Node.js is a runtime environment for running JavaScript code outside of a web browser, while Express.js is a web application framework built on top of Node.js that provides a set of features and tools for building web applications. While it\'s possible to build web applications with Node.js alone, Express.js simplifies the process by providing additional functionality and abstractions that make it easier to create a complete web application.',
    },
    {
        id: 3,
        question: 'What is a custom hook, and why will you create a custom hook?',
        answer: "In React, a custom hook is a JavaScript function that allows developers to reuse stateful logic across multiple components. Custom hooks are created by extracting reusable logic from a component into a separate function, and then returning the state and any necessary functions from that function. Custom hooks follow a naming convention of starting with the word 'use', which signals to React that it is a hook and should be used with the 'use' keyword. For example, a custom hook that manages the state of a form input could be named 'useFormInput'. Developers create custom hooks for a variety of reasons. One common reason is to share stateful logic between multiple components. For example, if multiple components need to fetch data from an API and display it in the same way, a custom hook could be created to handle the API request and return the data in a consistent format.",
    },
    {
        id: 4,
        question: 'How to validate React props using PropTypes?',
        answer: 'In React, PropTypes is a built-in library that allows developers to validate the props passed to components. This library provides a way to define the expected data types of props, and also allows developers to set custom validation rules. Using PropTypes can help catch errors early in the development process, and ensure that components receive the correct data types.',
    }
];
const Blog = () => {
    return (
        <div>
            <div className="bg-gray-100 dark:bg-gray-900">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Blog Page</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {
                            qna?.map(item => <div key={item?.id}><div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                                <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">{item?.question}</h2>
                                <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-4">
                                    {item?.answer}
                                </p>
                            </div></div>)
                        }


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;