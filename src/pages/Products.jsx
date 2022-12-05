import "../css/Products.css";

export default function Products() {
    return (
        <div className="div-product">
            <div className="header-product">
                <p className="header-title">Yeni Gelen Ürünler</p>
                <div className="header-return">
                    <span class="material-symbols-outlined svg-arrow">
                        chevron_left
                    </span>
                    <span class="material-symbols-outlined svg-arrow">
                        chevron_right
                    </span>
                </div>
            </div>
            <div>
                <div className="product">
                    <div className="img-product"></div>
                    <div className="info-product">
                        <div className="data-product">
                            <p className="name-product">
                                Nike Blazer Young 2022
                            </p>
                            <p className="brand-product">Günlük Ayakkabi</p>
                        </div>
                        <p className="price-product">1.250₺</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
