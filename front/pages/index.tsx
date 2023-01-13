import Button from "../components/button/Button";
import {MdBattery90} from 'react-icons/md'
import Input from "../components/input/TextInput";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import ArticleList from "../components/articlesList/ArticlesList";
import DeckItem,{DeckItemProps} from "../components/deckItem/DeckItem";
import Cover from '../public/images/card-mock.png'


const deckItemInfo:DeckItemProps = {
  deckID: 1,
  deckAuthor: "Gabriel Jesus",
  deckCover: Cover.src,
  deckDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ullam distinctio eius facilis laboriosam, maxime temporibus.",
  deckDif: 5,
  deckEffic: 5,
  deckTitle: 'Blastoise doido',
  deckWr: 100
}


export default function Home() {
  return (
    <>
     <DeckItem {...deckItemInfo}></DeckItem>
    </>
  );
}
