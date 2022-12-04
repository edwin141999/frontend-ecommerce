import "../css/Popular.css";

export default function Popular() {
    return (
        <div className="div-popular">
            <p className="p-popular">
                Tüm Spor Ayakkabilarinda Aradiğin Tarz Sadece Burada.
            </p>
            <div className="div-img-popular">
                <div className="img-popular izq">
                    <p className="p-img-popular">YENİ GELENLER</p>
                </div>
                <div className="img-popular der">
                    <p className="p-img-popular">ÇOK SATAN ÜRÜNLER</p>
                </div>
            </div>
        </div>
    );
}
