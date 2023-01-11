import Button from "../components/button/Button";
import {MdBattery90} from 'react-icons/md'
import Input from "../components/input/TextInput";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import ArticleList from "../components/articlesList/ArticlesList";

export default function Home() {
  return (
    <>
      <ArticleList topicTitle="Artigos recentes" ></ArticleList>
    </>
  );
}
