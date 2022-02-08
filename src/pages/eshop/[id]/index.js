import React from 'react';
import { useRouter } from 'next/router'

const Index = () => {
    const router = useRouter();
    console.log(router.query);
    return (
        <div>
            
        </div>
    );
}

export default Index;
