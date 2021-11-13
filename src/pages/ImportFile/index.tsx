import React from 'react';
import { useHistory } from 'react-router-dom';

import Header from '~/components/Header';
import Upload from '~/components/Upload';

export default function ImportFile() {
    const history = useHistory();

    function handleUpload() {
        history.push('dashboard');
    }

    return (
        <div>
            <Header renderCards={false}/>
            <Upload 
                onUpload={handleUpload}
            />
        </div>
    )
}
