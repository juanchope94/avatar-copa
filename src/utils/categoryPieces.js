function importAll(r) {
    let images = [];
    r.keys().forEach((item, index) => { images = [...images,r(item)]; });
    return images
}
export const category =
{
    fondo: importAll(require.context('../assets/Fondo', true, /\.(png|jpe?g|svg)$/)),
    cuerpo: importAll(require.context('../assets/Cuerpo', false, /\.(png|jpe?g|svg)$/)),
    ojos: importAll(require.context('../assets/Ojos', false, /\.(png|jpe?g|svg)$/)),
    cejas: importAll(require.context('../assets/Cejas', false, /\.(png|jpe?g|svg)$/)),
    nariz: importAll(require.context('../assets/Nariz', false, /\.(png|jpe?g|svg)$/)),
    boca: importAll(require.context('../assets/Boca', false, /\.(png|jpe?g|svg)$/)),
    lentes: importAll(require.context('../assets/Lentes', false, /\.(png|jpe?g|svg)$/)),
    vestimenta: importAll(require.context('../assets/Vestimenta', false, /\.(png|jpe?g|svg)$/)),
    barba: importAll(require.context('../assets/Barba', false, /\.(png|jpe?g|svg)$/)),
    pelo: importAll(require.context('../assets/Pelo', false, /\.(png|jpe?g|svg)$/)),
    sombrero: importAll(require.context('../assets/Sombrero', false, /\.(png|jpe?g|svg)$/))
}