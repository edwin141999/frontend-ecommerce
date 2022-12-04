import Left from '../assets/svg/arrowleft.svg'
import Right from '../assets/svg/arrowright.svg'
import '../css/Products.css'

export default function Products() {
    return (
        <div className='div-product'>
            <div className="header-product">
                <p className="header-title">Yeni Gelen Ürünler</p>
                <div className="header-return">
                    <img src={Left} alt="left" className='svg-arrow' />
                    <img src={Right} alt="right" className='svg-arrow' />
                </div>
            </div>
        </div>
    );
}
