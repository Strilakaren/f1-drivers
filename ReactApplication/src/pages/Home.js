import React from "react";
import f1DriversImg from "../images/placeholder.svg";
import f1TeamsImg from "../images/placeholder.svg";
import f1races from "../images/placeholder.svg";

const Home = () => {
  return (
    <section className="flex flex-col w-full">
      <article className="flex flex-col md:flex-row mb-4 mt-4 items-center">
        <img
          className="w-full md:w-1/2 hover:scale-105 transition-transform duration-300"
          src={f1DriversImg}
          alt="f1 drivers"
        />
        <p className="w-full md:w-1/2 bg-red-600 p-4 text-xl md:text-3xl text-left">
          Bli med i den spennende verdenen av Formel 1, der de raskeste og mest
          talentfulle sjåførene konkurrerer for ære og seier! På startstreken
          finner du stjerner som Lewis Hamilton, en levende legende kjent for
          sin ferdighet og dedikasjon, og den unge sensasjonen Max Verstappen,
          som har tatt sporten med storm med sin dristige kjørestil. Vi har også
          Charles Leclerc, en rask og strategisk tenker, som stadig utfordrer
          topplasseringene. Ikke glem den erfarne og konsistente Sergio Perez,
          kjent for sin evne til å utnytte enhver mulighet på banen. Disse
          sjåførene representerer toppen av motorsport, og hver av dem bringer
          en unik blanding av talent, mot og innovasjon til hvert eneste løp.
          Følg med oss for å oppleve spenningen, dramaet og den uslåelige
          hastigheten i Formel 1-verdenen!
        </p>
      </article>
      <article className="flex flex-col md:flex-row mb-4 items-center">
        <p className="w-full md:w-1/2 bg-red-600 p-4 text-xl md:text-3xl text-left">
          I hjertet av Formel 1 ligger de ikoniske lagene, hver med sin unike
          arv og visjon for å dominere verdens raskeste motorsport. Ta for
          eksempel Mercedes-AMG Petronas, et lag kjent for sin teknologiske
          innovasjon og konsekvente prestasjoner, som har dominert sporten i det
          siste tiåret. Deretter har vi Scuderia Ferrari, det mest historiske og
          lidenskapelig støttede laget i F1, berømt for sin rike historie og
          brennende røde racere. Red Bull Racing utfordrer de etablerte normene
          med sin ungdommelige energi og en kultur som fremmer grensesprengende
          idéer. Ikke glem McLaren, et lag med en stolt arv som fortsetter å
          bygge på sin suksess med innovasjon og urokkelig streben etter seier.
          Hvert av disse lagene representerer en unik blanding av dyktighet,
          teknologi og menneskelig streben, og de kjemper utrettelig for å sikre
          sin plass på podiet. Følg med på deres fascinerende reise gjennom
          sesongen, der hver løp skriver et nytt kapittel i historien om Formel
          1.
        </p>
        <img
          className="w-full md:w-1/2 hover:scale-105 transition-transform duration-300"
          src={f1TeamsImg}
          alt="f1 teams"
        />
      </article>
      <article className="flex flex-col md:flex-row mb-4 items-center">
        <img
          className="w-full md:w-1/2 hover:scale-105 transition-transform duration-300"
          src={f1races}
          alt="f1 races"
        />
        <p className="w-full md:w-1/2 bg-red-600 p-4 text-xl md:text-3xl text-left">
          Oppdag de legendariske Formel 1-banene, hvor hvert sving og hver
          rettstrekning forteller en historie om hastighet, dyktighet og
          historie. Start reisen med den berømte Monaco Grand Prix, en juvel i
          F1-kalenderen, kjent for sine trange gater og luksuriøse
          marinaomgivelser. Denne banen krever presisjon og tapperhet fra
          sjåførene. Fortsett til Silverstone i Storbritannia, fødestedet til
          moderne Formel 1, hvor høyhastighetskurver og en rik
          motorsporthistorie gjør hvert løp uforglemmelig. Ikke glem den
          spektakulære Spa-Francorchamps i Belgia, elsket av sjåfører og fans
          for sin naturskjønne skjønnhet og utfordrende layout, inkludert den
          berømte Eau Rouge-svingen. Og deretter, opplev Monza, "Tempelet for
          fart" i Italia, kjent for sine lange rettstrekninger og høyhastighets
          action. Hver av disse banene tilbyr en unik utfordring og bidrar til å
          forme historien og spenningen som er Formel 1. Bli med oss på en tur
          rundt i verden for å oppleve hjertebankende løp på noen av
          motorsportens mest ikoniske arenaer.
        </p>
      </article>
    </section>
  );
};

export default Home;
