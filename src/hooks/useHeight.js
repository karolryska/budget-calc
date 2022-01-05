import { useEffect, useState } from 'react';

const useHeight = () => {
    const [height, setHight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener('resize', () => setHight(window.innerHeight));

        return () => {
            window.removeEventListener('resize', () =>
                setHight(window.innerHeight)
            );
        };
    }, []);

    return [height];
};

export default useHeight;
