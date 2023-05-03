import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from "../provider/AuthProvider.jsx";


const Blog = () => {
    const [blog, setBlog] = useState([]);
    const { setLoading } = useContext(AuthContext);

    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:5000/artical`)
            .then(res => res.json())
            .then(data => setBlog(data.qna))
            .catch(error => {
                console.log(error.code);
            })
        setLoading(false);
    },[])
    return (
        <div>
            <div className="bg-gray-100 dark:bg-gray-900">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Blog Page</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {
                            blog?.map(item => <div key={item?.id}><div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
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