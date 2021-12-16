
import axios from 'axios';
import { showAlert } from './alerts';

const stripe=Stripe('pk_test_51K18kjSEYjzC0Zi039XRbaAuuYrgL09EpTVAd7gYLvMPgD71twz2gKyIjcS9t6wQxyiCVClgpgYFAk4LLRsVbYeQ00HyqW0XSe');

export const bookTour=async tourId=>{
    try{
    const session =await axios(
        `/api/v1/bookings/checkout-session/${tourId}`    
    );
    console.log(session.data.data.id);

    await stripe.redirectToCheckout({
        sessionId: session.data.data.id
    });
    
    }
    catch(err){
        showAlert('Error',err.response.data.message);
        console.log(err.message);
    }
}
