import { useEffect, useState } from 'react';

const useUserAuthInfo = () => {
    const [userEmail, setUserEmail] = useState(null);
    const [token, setToken] = useState(null);
    const [role, setRole] = useState(null);

    useEffect(() => {
        // Retrieve user email and token from local storage
        const storedUserEmail = localStorage.getItem('userEmail');
        const storedToken = localStorage.getItem('token');
        const storedRole = localStorage.getItem('role');
        // Update state with the retrieved values
        setUserEmail(storedUserEmail);
        setToken(storedToken);
        setRole(storedRole)
    }, []); // The empty dependency array ensures this effect runs only once, similar to componentDidMount

   
    // Return the user email, token, and any update functions
    return { userEmail, token ,role};
};

export default useUserAuthInfo;
