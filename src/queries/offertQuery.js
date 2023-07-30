export const OFFERT_QUERY = `query MyQuery {
  allSells {
    nazwa
    link
    id
    cena
    zuzycie
    zdjecie {
      alt
      responsiveImage(imgixParams: { w: "200", h: "200" }) {
        alt
        src
      }
    }
  }
}`;
