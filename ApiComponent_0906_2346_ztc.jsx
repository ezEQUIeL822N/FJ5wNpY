// 代码生成时间: 2025-09-06 23:46:57
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

// 使用TypeScript可以替换 PropTypes
// import PropTypes from 'prop-types';
// import { FunctionComponent } from 'react';
// type Props = {
//     apiEndpoint: string;
//     method: 'GET' | 'POST' | 'PUT' | 'DELETE';
// };

const ApiComponent = ({ apiEndpoint, method }) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    // 使用useEffect来处理API调用
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const response = await axios[method](apiEndpoint);
                setData(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [apiEndpoint, method]);

    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        </div>
    );
};

// PropTypes
ApiComponent.propTypes = {
    apiEndpoint: PropTypes.string.isRequired,
    method: PropTypes.oneOf(['GET', 'POST', 'PUT', 'DELETE']).isRequired,
};

// TypeScript 类型定义
// ApiComponent.propTypes = {
//     apiEndpoint: PropTypes.string.isRequired,
//     method: PropTypes.oneOf(['GET', 'POST', 'PUT', 'DELETE']).isRequired,
// };

export default ApiComponent;