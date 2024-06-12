import img1 from '../../assets/img1.webp';
import './Slider01.css';

const Slider01 = () => {
    const action={};
    const style = {
        width: '100%',
        height: '100%',
        
    };
    return (
        <div>
            <div className='w-52 h-52 border2 bgimg'>
            {/* <img className='border2 bg-cover'  src={img1} alt=""  /> */}
                </div>   
            <div className='bg-white h-24 w-24 -mt-16 border2'>
                over                
            </div>         
        </div>
    );
};

export default Slider01;