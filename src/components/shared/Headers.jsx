import logo from '@/assets/logo.png'
import { format } from 'date-fns';
import Image from 'next/image';
const Headers = () => {
    return (
        <div className='text-center py-8 space-y-2'>
            <Image
            src={logo} width={300} height={200} alt='logo' className='mx-auto'
            ></Image>
            <h1>Journalism Without Fear or Favour</h1>
            <p>{format(new Date(), "EEEE, MMM dd, yyyy")}</p>
        </div>
    );
};

export default Headers;