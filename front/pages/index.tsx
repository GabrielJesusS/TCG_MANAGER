import Button from "../components/button/Button";
import {MdBattery90} from 'react-icons/md'
import Input from "../components/input/Input";

export default function Home() {
  return (
    <>
      <Input icon={<MdBattery90/>} variant="primary" placeholder="dawdw"></Input>
    </>
  );
}
