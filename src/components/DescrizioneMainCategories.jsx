// src/components/DescrizioneMainCategories.jsx

const DescrizioneMainCategories = () => {
    return (
        <section className="py-12 md:py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                
                {/* 1. L'H2 Esatto (dalla Categoria Secondaria GBP) */}
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    Ditta specializzata in pavimentazioni
                </h2>

                {/* 2. Il Testo con Menzioni Locali (come da video) */}
                <div className="max-w-3xl mx-auto text-lg text-gray-700 space-y-4">
                    <p>
    Come <strong>ditta specializzata in pavimentazioni a Piacenza</strong>, la nostra competenza non si ferma solo al legno. Per rispondere a ogni esigenza, ci siamo specializzati anche nelle soluzioni tecniche più moderne e richieste, come i pavimenti in <strong>SPC</strong>, <strong>LVT</strong> e <strong>laminato</strong>.
</p>
<p>
    Sappiamo che ogni edificio piacentino ha necessità uniche. Che si tratti di un negozio in <strong>Via XX Settembre</strong> che richiede la massima resistenza al calpestio, di un appartamento in <strong>centro storico</strong> dove è preferibile non demolire, o di una nuova costruzione nella zona della <strong>Baia del Re</strong> che cerca un look moderno e impermeabile, abbiamo il materiale e la competenza per un'installazione impeccabile.
</p>
                    <p>
                        Per questo ci siamo specializzati nelle soluzioni più innovative come 
                        i pavimenti <strong>SPC</strong> e <strong>LVT</strong>. Questi materiali sono ideali per la loro resistenza e 
                        versatilità in contesti ad alto calpestio, come un negozio o un ufficio in Via XX Settembre. 
                        Gestiamo inoltre la posa di laminato per attività commerciali e abitazioni 
                        in tutta Piacenza, garantendo una finitura impeccabile e duratura.
                    </p>
                </div>
                
            </div>
        </section>
    );
};

export default DescrizioneMainCategories;