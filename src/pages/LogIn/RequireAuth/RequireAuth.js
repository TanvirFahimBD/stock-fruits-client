import { Button } from 'react-bootstrap';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation()
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/'
    const [sendEmailVerification, sending] = useSendEmailVerification(auth);

    const handleVerifyEmail = async () => {
        await sendEmailVerification();
        toast('Verify email sent. Verify now to get access');
    }

    if (!user?.emailVerified) {
        return (
            <div>
                <h1>Verify Your Email First</h1>
                <p className='text-danger'> Your email not verified yet. Check Spam folder.</p>
                <Button variant='success' onClick={handleVerifyEmail}>Resend Verify Email</Button>
                <ToastContainer />
            </div>
        )
    }


    if (loading || sending) {
        return <Loading />
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAuth;