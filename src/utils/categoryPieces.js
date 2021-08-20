function importAllPieces(r) {
    let images = [];
    r.keys().forEach((item) => { images = [...images,r(item)]; });
    return images
}
export const category =
{
    fondo: importAllPieces(require.context('../assets/Fondo', true, /\.(png|jpe?g|svg)$/)),
    cuerpo: importAllPieces(require.context('../assets/Cuerpo', false, /\.(png|jpe?g|svg)$/)),
    ojos: importAllPieces(require.context('../assets/Ojos', false, /\.(png|jpe?g|svg)$/)),
    cejas: importAllPieces(require.context('../assets/Cejas', false, /\.(png|jpe?g|svg)$/)),
    nariz: importAllPieces(require.context('../assets/Nariz', false, /\.(png|jpe?g|svg)$/)),
    boca: importAllPieces(require.context('../assets/Boca', false, /\.(png|jpe?g|svg)$/)),
    lentes: importAllPieces(require.context('../assets/Lentes', false, /\.(png|jpe?g|svg)$/)),
    vestimenta: importAllPieces(require.context('../assets/Vestimenta', false, /\.(png|jpe?g|svg)$/)),
    barba: importAllPieces(require.context('../assets/Barba', false, /\.(png|jpe?g|svg)$/)),
    pelo: importAllPieces(require.context('../assets/Pelo', false, /\.(png|jpe?g|svg)$/)),
    sombrero: importAllPieces(require.context('../assets/Sombrero', false, /\.(png|jpe?g|svg)$/))
}