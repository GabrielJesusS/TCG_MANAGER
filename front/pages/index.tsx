import Button from "../components/button/Button";
import {MdBattery90} from 'react-icons/md'
import Input from "../components/input/TextInput";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import ArticleList from "../components/articlesList/ArticlesList";
import DeckItem,{DeckItemProps} from "../components/deckItem/DeckItem";
import Cover from '../public/images/card-mock.png'
import SetItem, {SetItemProps} from "../components/setItem/SetItem";
import TextInput from "../components/input/TextInput";
import MainLayout from "../components/layouts/mainLayout/MainLayout";

const setItemProps: SetItemProps = {
    setId: "swsh11",
    setName: "Lost Origin",
    setImage: "https://images.pokemontcg.io/swsh11/logo.png",
    setIcon: "https://images.pokemontcg.io/swsh11/symbol.png",
    releaseDate: "2022/09/09",
    legalities: {
      unlimited: "Legal",
      standard: "Legal",
      expanded: "Legal"
    }
}

export default function Home() {
  return (
    <MainLayout>
      
    </MainLayout>
  );
}
